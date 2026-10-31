import * as THREE from 'three';
import { BOT_NAMES, BOT_PALETTES, WEAPONS, OPERATORS } from './data.js';
import { clamp, damp, dampAngle, mulberry32, makeCanvas } from './utils.js';
import { createOperator, createWeaponModel, createBotHealthBar } from './models.js';

function nameSprite(name) {
  const c = makeCanvas(256, 64);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 64);
  ctx.font = '700 27px "Arial Narrow", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = 'rgba(0,0,0,.72)';
  ctx.lineWidth = 5;
  ctx.strokeText(name, 128, 32);
  ctx.fillStyle = 'rgba(255,235,220,.92)';
  ctx.fillText(name, 128, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false }));
  sp.scale.set(1.55, 0.39, 1);
  sp.renderOrder = 10;
  return sp;
}

export class BotManager {
  constructor(scene, world, effects, audio, game) {
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.game = game;
    this.bots = [];
    this.rnd = mulberry32(0xB077);
    this.names = [...BOT_NAMES].sort(() => this.rnd() - 0.5);
    this.remoteKillTimer = 14;
    this.player = null;
    this.camera = null;
    this.aliveCount = 0;
    this._tmpMuzzle = new THREE.Vector3();
  }

  spawn(count, playerSpawn, zoneCenter = { x: 0, z: 0 }, zoneRadius = 170) {
    for (let i = 0; i < count; i++) {
      let x, z, tries = 0;
      do {
        const a = this.rnd() * Math.PI * 2;
        const rad = 22 + Math.sqrt(this.rnd()) * (zoneRadius - 45);
        x = zoneCenter.x + Math.cos(a) * rad;
        z = zoneCenter.z + Math.sin(a) * rad;
        tries++;
      } while (tries < 40 && (this.world.heightAt(x, z) < 1.4 || Math.hypot(x - playerSpawn.x, z - playerSpawn.z) < 24));
      const palette = BOT_PALETTES[i % BOT_PALETTES.length];
      const p = { ...palette, accent: palette.accent };
      const group = createOperator(p, palette.accent, true);
      group.scale.setScalar(0.97);
      const weaponIds = ['ar', 'smg', 'shotgun', 'ar', 'sniper', 'lmg', 'ar', 'smg', 'pistol'];
      const wid = weaponIds[Math.floor(this.rnd() * weaponIds.length)];
      const wpn = createWeaponModel(wid, palette.accent, 0.78);
      group.userData.weaponMount.add(wpn);
      // Bots are numerous; skip their shadow pass entirely and rely on the
      // grounded blob/health bar for readability.
      group.traverse(o => { if (o.isMesh) o.castShadow = false; });
      group.position.set(x, this.world.heightAt(x, z) + 0.05, z);
      group.rotation.y = this.rnd() * Math.PI * 2;
      this.scene.add(group);
      const bar = createBotHealthBar();
      this.scene.add(bar);
      const label = nameSprite(this.names[i % this.names.length]);
      this.scene.add(label);
      const weapon = WEAPONS[wid];
      const bot = {
        id: i, name: this.names[i % this.names.length], group, bar, label, weapon, weaponId: wid,
        health: 100, maxHealth: 100, armor: 15 + Math.floor(this.rnd() * 30),
        position: group.position, yaw: group.rotation.y, anchor: { x, z },
        alive: true, state: 'patrol', target: null, think: this.rnd() * 0.3,
        fireCd: 0.6 + this.rnd() * 1.0, deathTime: 0, walkPhase: this.rnd() * 6,
        speed: 3.5 + this.rnd() * 1.7, los: false, lastHitBy: null,
        strafe: this.rnd() > 0.5 ? 1 : -1, strafeTimer: 1 + this.rnd() * 2,
        skill: 0.36 + this.rnd() * 0.28
      };
      group.userData.bot = bot;
      this.bots.push(bot);
    }
    this.aliveCount = this.bots.length;
    return this.bots;
  }

  reset() {
    for (const b of this.bots) {
      this.scene.remove(b.group);
      this.scene.remove(b.bar);
      this.scene.remove(b.label);
    }
    this.bots = [];
    this.aliveCount = 0;
  }

  setPlayer(player, camera) {
    this.player = player;
    this.camera = camera;
  }

  think(bot, player) {
    const pos = bot.position;
    const candidates = [];
    if (player.alive) candidates.push({ kind: 'player', obj: player, pos: player.position, name: 'YOU' });
    for (const other of this.bots) {
      if (other === bot || !other.alive) continue;
      const d = pos.distanceTo(other.position);
      if (d < 50) candidates.push({ kind: 'bot', obj: other, pos: other.position, name: other.name, d });
    }
    let best = null, bestScore = Infinity;
    for (const c of candidates) {
      const d = c.d ?? pos.distanceTo(c.pos);
      if (c.kind === 'player' && d > 58) continue;
      if (d > 54) continue;
      let score = d;
      if (c.kind === 'player') score *= 0.82;
      if (score < bestScore) { bestScore = score; best = c; }
    }
    bot.target = best;
    if (best) {
      const d = bestScore;
      const to = new THREE.Vector3(best.pos.x - pos.x, (best.kind === 'player' ? 1.4 : 1.2), best.pos.z - pos.z);
      const eye = new THREE.Vector3(pos.x, pos.y + 1.55, pos.z);
      const dir = to.clone().normalize();
      const hit = this.world.raycastWorld(eye, dir, d - 0.4);
      bot.los = !hit;
      bot.aimYaw = Math.atan2(-(best.pos.x - pos.x), -(best.pos.z - pos.z));
      bot.aimPitch = Math.atan2(best.pos.y + 1.3 - (pos.y + 1.55), Math.max(0.4, d));
      bot.state = d < 3.0 ? 'retreat' : 'engage';
      bot.engageDist = d;
    } else {
      bot.los = false;
      if (this.world.heightAt(pos.x, pos.z) < 0.8) bot.state = 'patrol';
      bot.state = bot.state === 'engage' ? 'patrol' : bot.state;
    }
  }

  update(dt, t, player, camera, zone) {
    this.player = player;
    this.camera = camera;
    this.aliveCount = 0;
    const zoneDist = (x, z) => Math.hypot(x - zone.x, z - zone.z);
    for (const bot of this.bots) {
      if (!bot.alive) {
        bot.deathTime += dt;
        if (bot.deathTime < 6) {
          const u = bot.group.userData;
          u.body.rotation.z = damp(u.body.rotation.z, -1.5, 7, dt);
          u.body.position.y = damp(u.body.position.y, 0.1, 7, dt);
          u.legL.rotation.x = damp(u.legL.rotation.x, -0.4, 5, dt);
          u.legR.rotation.x = damp(u.legR.rotation.x, 0.2, 5, dt);
        } else {
          bot.group.visible = false;
          bot.bar.visible = false;
          bot.label.visible = false;
        }
        continue;
      }
      this.aliveCount++;
      bot.think -= dt;
      bot.fireCd = Math.max(0, bot.fireCd - dt);
      bot.strafeTimer -= dt;
      if (bot.strafeTimer <= 0) {
        bot.strafe *= -1;
        bot.strafeTimer = 1.2 + this.rnd() * 2.6;
      }
      if (bot.think <= 0) {
        this.think(bot, player);
        bot.think = 0.28 + this.rnd() * 0.26;
      }

      const out = zoneDist(bot.position.x, bot.position.z) > zone.radius;
      let move = new THREE.Vector3();
      let faceYaw = bot.yaw;
      const target = bot.target;
      if (out) {
        const toCenter = new THREE.Vector3(zone.x - bot.position.x, 0, zone.z - bot.position.z).normalize();
        move.copy(toCenter).multiplyScalar(1.2);
        faceYaw = Math.atan2(-move.x, -move.z);
        bot.state = 'zone';
      } else if (target && bot.los) {
        const dx = target.pos.x - bot.position.x, dz = target.pos.z - bot.position.z;
        const d = Math.hypot(dx, dz);
        const nx = dx / Math.max(0.001, d), nz = dz / Math.max(0.001, d);
        const preferred = bot.weaponId === 'shotgun' ? 8 : bot.weaponId === 'sniper' ? 29 : bot.weaponId === 'smg' ? 13 : 21;
        if (d > preferred + 4) {
          move.set(nx, 0, nz).multiplyScalar(1.0);
        } else if (d < preferred - 5) {
          move.set(-nx, 0, -nz).multiplyScalar(0.85);
        }
        const strafe = new THREE.Vector3(-nz, 0, nx).multiplyScalar(bot.strafe * 0.55);
        move.add(strafe);
        faceYaw = Math.atan2(-dx, -dz);
        this.tryShoot(bot, target, player, d, camera);
      } else {
        // patrol around anchor / drift toward zone
        const toAnchor = new THREE.Vector3(bot.anchor.x - bot.position.x, 0, bot.anchor.z - bot.position.z);
        if (toAnchor.length() > 8) {
          move.copy(toAnchor).normalize().multiplyScalar(0.42);
          faceYaw = Math.atan2(-move.x, -move.z);
        } else {
          const a = t * 0.13 + bot.id * 1.7;
          move.set(Math.cos(a) * 0.18, 0, Math.sin(a) * 0.18);
          if (Math.random() < 0.01) bot.anchor = { x: clamp(bot.position.x + (this.rnd() - 0.5) * 25, -170, 170), z: clamp(bot.position.z + (this.rnd() - 0.5) * 25, -170, 170) };
        }
      }

      // avoid water
      const ahead = this.world.heightAt(bot.position.x + move.x * 2, bot.position.z + move.z * 2);
      if (ahead < 0.7) {
        move.set(-move.z, 0, move.x).multiplyScalar(0.5);
      }
      // separation from other bots
      for (const other of this.bots) {
        if (other === bot || !other.alive) continue;
        const dx = bot.position.x - other.position.x, dz = bot.position.z - other.position.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 2.6 && d2 > 0.0001) {
          const inv = 1 / Math.sqrt(d2);
          move.x += dx * inv * 0.45;
          move.z += dz * inv * 0.45;
        }
      }
      if (move.lengthSq() > 0.001) {
        move.normalize();
        const speed = (target && bot.los ? 3.7 : 2.4) * (out ? 1.5 : 1) * (bot.weaponId === 'sniper' ? 0.88 : 1);
        bot.position.x += move.x * speed * dt;
        bot.position.z += move.z * speed * dt;
      }
      bot.position.x = clamp(bot.position.x, -200, 200);
      bot.position.z = clamp(bot.position.z, -200, 200);
      this.resolve(bot);
      const ground = this.world.heightAt(bot.position.x, bot.position.z);
      if (ground > this.world.waterLevel - 0.2) {
        bot.position.y = damp(bot.position.y, ground, 16, dt);
      } else {
        bot.position.y = damp(bot.position.y, this.world.waterLevel - 0.6, 5, dt);
      }
      bot.yaw = dampAngle(bot.yaw, faceYaw, 8, dt);
      bot.group.position.copy(bot.position);
      bot.group.rotation.y = bot.yaw;
      const moveAmt = Math.hypot(move.x, move.z);
      bot.walkPhase += dt * (5 + moveAmt * 4.5);
      this.animate(bot, moveAmt, dt);

      // health bar follow
      const camPos = camera.position;
      const dist = camPos.distanceTo(bot.position);
      const show = dist < 82;
      // Cull entire distant operators (roughly 25 meshes each). They keep
      // simulating, so combat and the zone stay consistent off-screen.
      bot.group.visible = dist < 128;
      bot.bar.visible = show;
      bot.label.visible = show && dist < 48;
      if (show) {
        bot.bar.position.set(bot.position.x, bot.position.y + 2.18, bot.position.z);
        bot.bar.quaternion.copy(camera.quaternion);
        const ratio = clamp(bot.health / bot.maxHealth, 0, 1);
        bot.bar.userData.fill.scale.x = Math.max(0.001, ratio);
        bot.bar.userData.fill.position.x = -bot.bar.userData.width * (1 - ratio) / 2;
        bot.bar.userData.fill.material.color.setHex(ratio > 0.5 ? 0x6ce9c7 : ratio > 0.25 ? 0xffb34d : 0xff5a3c);
        bot.label.position.set(bot.position.x, bot.position.y + 2.45, bot.position.z);
        bot.label.quaternion.copy(camera.quaternion);
      }

      // zone damage ticks
      if (out && Math.random() < dt * 0.75) {
        this.damage(bot, zone.damage * 1.5, 'ZONE', null, false);
      }

      // Ambient squads trade shots to keep the island alive
      if (dist > 78 && target && Math.random() < dt * 0.018) {
        this.effects.tracer(bot.position.clone().add(new THREE.Vector3(0, 1.5, 0)), target.pos.clone().add(new THREE.Vector3(0, 1.2, 0)), 0xffcf90);
        this.audio.shot(bot.weaponId, 40);
      }
    }

    // Remote combat simulation so the alive counter falls outside the player's view.
    this.remoteKillTimer -= dt;
    if (this.remoteKillTimer <= 0) {
      this.remoteKillTimer = 12 + this.rnd() * 10;
      const alive = this.bots.filter(b => b.alive && (!player || b.position.distanceTo(player.position) > 85));
      if (alive.length > 1) {
        const victim = alive[Math.floor(this.rnd() * alive.length)];
        const killerPool = alive.filter(b => b !== victim);
        const killer = killerPool[Math.floor(this.rnd() * killerPool.length)];
        this.damage(victim, 1000, killer.name, killer, true);
      }
    }
  }

  tryShoot(bot, target, player, dist, camera) {
    if (bot.fireCd > 0) return;
    const w = bot.weapon;
    const rate = w.id === 'sniper' ? 1.9 : w.id === 'shotgun' ? 1.1 : w.id === 'smg' ? 0.17 : 0.32;
    bot.fireCd = rate * (0.75 + this.rnd() * 0.7);
    if (dist > w.range * 0.72) return;
    const eye = bot.position.clone().add(new THREE.Vector3(0, 1.48, 0));
    const aim = target.pos.clone().add(new THREE.Vector3(0, target.kind === 'player' ? 1.25 : 1.18, 0));
    const dir = aim.clone().sub(eye).normalize();
    const right = new THREE.Vector3(-dir.z, 0, dir.x);
    const miss = 0.55 + dist * 0.018;
    const errX = (this.rnd() - 0.5) * miss;
    const errY = (this.rnd() - 0.5) * miss * 0.6;
    const end = aim.clone().addScaledVector(right, errX).add(new THREE.Vector3(0, errY, 0));
    const hitChance = clamp(bot.skill - dist * 0.008 - (target.kind === 'player' ? 0.06 : 0) - (player && player.aiming ? 0.04 : 0), 0.12, 0.7);
    const hit = this.rnd() < hitChance;
    const muzzle = bot.group.userData.weaponMount.getWorldPosition(new THREE.Vector3());
    muzzle.y += 0.1;
    this.effects.muzzle(muzzle, 0xffbd6a, 0.75);
    const hitPoint = hit ? aim : end;
    this.effects.tracer(muzzle, hitPoint, 0xffd49a);
    const distToCam = camera.position.distanceTo(bot.position);
    this.audio.shot(w.id, distToCam);
    if (hit) {
      const dmg = (w.damage * (0.42 + this.rnd() * 0.26)) * (target.kind === 'player' ? 0.72 : 0.55);
      if (target.kind === 'player') {
        this.game.damagePlayer(dmg, bot, false);
      } else {
        this.damage(target.obj, dmg, bot.name, bot, false);
      }
      this.effects.impact(hitPoint, null, 'flesh');
    } else {
      this.effects.impact(end, null, 'world');
    }
  }

  animate(bot, moveAmt, dt) {
    const u = bot.group.userData;
    const swing = Math.sin(bot.walkPhase) * Math.min(1, moveAmt) * 0.6;
    u.legL.rotation.x = damp(u.legL.rotation.x, swing, 12, dt);
    u.legR.rotation.x = damp(u.legR.rotation.x, -swing, 12, dt);
    u.armL.rotation.x = damp(u.armL.rotation.x, -1.24, 10, dt);
    u.armR.rotation.x = damp(u.armR.rotation.x, -1.18, 10, dt);
    u.armL.rotation.z = damp(u.armL.rotation.z, 0.18, 10, dt);
    u.armR.rotation.z = damp(u.armR.rotation.z, -0.15, 10, dt);
    u.torso.position.y = 1.3 + Math.sin(bot.walkPhase * 2) * 0.012 * moveAmt;
  }

  resolve(bot) {
    const r = 0.36;
    const p = bot.position;
    for (const c of this.world.colliders) {
      if (p.y + 1.7 < c.minY || p.y > c.maxY) continue;
      const nx = clamp(p.x, c.minX, c.maxX);
      const nz = clamp(p.z, c.minZ, c.maxZ);
      let dx = p.x - nx, dz = p.z - nz;
      const d2 = dx * dx + dz * dz;
      if (d2 > r * r) continue;
      if (d2 < 1e-8) {
        const left = p.x - c.minX, right = c.maxX - p.x, front = p.z - c.minZ, back = c.maxZ - p.z;
        const m = Math.min(left, right, front, back);
        if (m === left) p.x = c.minX - r;
        else if (m === right) p.x = c.maxX + r;
        else if (m === front) p.z = c.minZ - r;
        else p.z = c.maxZ + r;
      } else {
        const d = Math.sqrt(d2);
        p.x = nx + dx / d * r;
        p.z = nz + dz / d * r;
      }
    }
  }

  damage(bot, amount, sourceName, sourceBot, remote = false) {
    if (!bot.alive) return;
    let dmg = amount;
    if (bot.armor > 0 && amount < 500) {
      const absorbed = Math.min(bot.armor, amount * 0.4);
      bot.armor -= absorbed;
      dmg = amount - absorbed;
    }
    bot.health -= dmg;
    bot.lastHitBy = sourceName;
    if (!remote && this.player && this.player.position.distanceTo(bot.position) < 50) {
      bot.think = 0;
    }
    if (bot.health <= 0) {
      this.kill(bot, sourceName, sourceBot, remote);
    }
  }

  kill(bot, sourceName, sourceBot, remote = false) {
    if (!bot.alive) return;
    bot.alive = false;
    bot.health = 0;
    bot.deathTime = 0;
    bot.bar.visible = false;
    bot.label.visible = false;
    bot.group.userData.body.rotation.z = -0.2;
    this.game.onBotKilled(bot, sourceName, sourceBot, remote);
  }

  alertAround(pos, radius) {
    for (const b of this.bots) {
      if (b.alive && b.position.distanceTo(pos) < radius && !b.target) b.think = 0;
    }
  }

  nearestAlive(pos, max = 999) {
    let best = null, bd = max;
    for (const b of this.bots) {
      if (!b.alive) continue;
      const d = b.position.distanceTo(pos);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  }

  getAlive() { return this.bots.filter(b => b.alive); }
}

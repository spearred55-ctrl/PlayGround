import * as THREE from 'three';
import { WEAPONS, OPERATORS, MATCH } from './data.js';
import { clamp, damp, lerp, dampAngle } from './utils.js';
import { createOperator, createWeaponModel, createParachute } from './models.js';

const UP = new THREE.Vector3(0, 1, 0);

export class Player {
  constructor(scene, world, operatorId = 'raven') {
    this.scene = scene;
    this.world = world;
    this.operatorId = operatorId;
    this.palette = OPERATORS[operatorId] || OPERATORS.raven;
    this.character = createOperator(this.palette);
    this.character.visible = false;
    scene.add(this.character);
    this.position = new THREE.Vector3(0, 10, 0);
    this.velocity = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.health = MATCH.maxHealth;
    this.armor = 0;
    this.maxArmor = 50;
    this.alive = true;
    this.isSwimming = false;
    this.grounded = true;
    this.crouching = false;
    this.sprinting = false;
    this.aiming = false;
    this.moveAmount = 0;
    this.walkPhase = 0;
    this.radius = 0.38;
    this.slots = [
      { id: 'ar', mag: 30, reserve: 90, rarity: 'rare', attachments: ['HOLO'] },
      { id: 'pistol', mag: 15, reserve: 45, rarity: 'common', attachments: [] },
      { id: 'melee', mag: 1, reserve: 0, rarity: 'common', attachments: [] }
    ];
    this.currentSlot = 0;
    this.fireCooldown = 0;
    this.reloadTimer = 0;
    this.reloadTotal = 0;
    this.switchTimer = 0;
    this.medkits = 2;
    this.grenades = 1;
    this.packUsed = 3;
    this.packMax = 8;
    this.aimAmount = 0;
    this.healTimer = 0;
    this.healTotal = 0;
    this.damageDealt = 0;
    this.kills = 0;
    this.cameraShake = 0;
    this.weaponModel = null;
    this.chute = null;
    this.dropTime = 0;
    this.dropping = false;
    this.deathTime = 0;
    this.lastDamageTime = 0;
    this.footstepTimer = 0;
    this._camPos = new THREE.Vector3();
    this._camDir = new THREE.Vector3();
    this._target = new THREE.Vector3();
    this.updateWeaponModel();
  }

  setOperator(id) {
    if (!OPERATORS[id] || id === this.operatorId) return;
    this.operatorId = id;
    this.palette = OPERATORS[id];
    const parent = this.character.parent;
    parent.remove(this.character);
    this.character = createOperator(this.palette);
    parent.add(this.character);
    this.character.position.copy(this.position);
    this.character.rotation.y = this.yaw;
    this.updateWeaponModel();
  }

  get weapon() { return WEAPONS[this.slots[this.currentSlot].id]; }
  get slot() { return this.slots[this.currentSlot]; }

  updateWeaponModel() {
    if (this.weaponModel) {
      this.character.userData.weaponMount.remove(this.weaponModel);
      this.weaponModel.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
          else o.material.dispose();
        }
      });
      this.weaponModel = null;
    }
    const w = this.weapon;
    if (!w) return;
    const model = createWeaponModel(w.id, this.palette.accent, w.id === 'pistol' ? 0.9 : 0.78);
    this.character.userData.weaponMount.add(model);
    this.weaponModel = model;
  }

  spawn(point) {
    this.position.set(point.x, point.y + 0.1, point.z);
    this.yaw = point.yaw ?? 0;
    this.pitch = -0.02;
    this.health = MATCH.maxHealth;
    this.armor = 0;
    this.alive = true;
    this.character.visible = true;
    this.character.position.copy(this.position);
    this.character.rotation.y = this.yaw;
    this.velocity.set(0, 0, 0);
    this.slots[0] = { id: 'ar', mag: 30, reserve: 90, rarity: 'rare', attachments: ['HOLO'] };
    this.slots[1] = { id: 'pistol', mag: 15, reserve: 45, rarity: 'common', attachments: [] };
    this.currentSlot = 0;
    this.updateWeaponModel();
    this.medkits = 2;
    this.grenades = 1;
    this.packUsed = 3;
    this.healTimer = 0;
    this.reloadTimer = 0;
  }

  startDrop(point, height = 62) {
    this.spawn(point);
    this.position.y = point.y + height;
    this.character.position.copy(this.position);
    this.dropping = true;
    this.dropTime = 0;
    this.alive = true;
    this.health = MATCH.maxHealth;
    this.chute = createParachute(this.palette.accent);
    this.chute.position.y = 0.45;
    this.character.add(this.chute);
    this.aiming = false;
  }

  finishDrop() {
    if (this.chute) {
      this.character.remove(this.chute);
      this.chute.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (o.material.map) o.material.map.dispose();
          o.material.dispose();
        }
      });
      this.chute = null;
    }
    this.dropping = false;
    this.position.y = this.groundHeight(this.position.x, this.position.z) + 0.05;
    this.character.position.copy(this.position);
  }

  updateDrop(dt, t, targetY) {
    this.dropTime += dt;
    const t0 = Math.min(1, this.dropTime / 3.2);
    const eased = 1 - Math.pow(1 - t0, 3);
    const startY = targetY + 62;
    this.position.y = lerp(startY, targetY + 0.1, eased);
    this.position.x += Math.sin(t * 0.7) * dt * 1.3;
    this.position.z += Math.cos(t * 0.6) * dt * 0.6;
    this.chute.rotation.z = Math.sin(t * 1.4) * 0.08;
    this.chute.rotation.x = Math.cos(t * 1.1) * 0.05;
    this.character.position.copy(this.position);
    this.character.rotation.y = this.yaw;
    // Tuck legs while descending
    this.character.userData.legL.rotation.x = 0.25 + Math.sin(t * 2) * 0.05;
    this.character.userData.legR.rotation.x = 0.35 - Math.sin(t * 2) * 0.05;
    this.character.userData.armL.rotation.x = -0.4;
    this.character.userData.armR.rotation.x = -0.4;
    return t0 >= 1;
  }

  groundHeight(x, z) {
    let g = this.world.heightAt(x, z);
    for (const s of this.world.surfaces) {
      if (x > s.minX && x < s.maxX && z > s.minZ && z < s.maxZ) {
        if (this.position.y > s.y - 1.4) g = Math.max(g, s.y);
      }
    }
    return g;
  }

  update(dt, input, camera) {
    if (!this.alive || this.dropping) return;
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.switchTimer = Math.max(0, this.switchTimer - dt);
    this.cameraShake = Math.max(0, this.cameraShake - dt * 2.6);
    this.recoilPitch = damp(this.recoilPitch, 0, 9, dt);
    this.recoilYaw = damp(this.recoilYaw, 0, 8, dt);

    if (this.reloadTimer > 0) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) this.finishReload();
    }
    if (this.healTimer > 0) {
      this.healTimer -= dt;
      if (this.healTimer <= 0) {
        const heal = MATCH.medHeal;
        this.health = Math.min(MATCH.maxHealth, this.health + heal);
        this.healTimer = 0;
      }
    }

    const w = this.weapon;
    this.crouching = !!input.crouch;
    this.aiming = !!input.aim && this.reloadTimer <= 0 && this.healTimer <= 0 && !input.sprint;
    this.sprinting = !!input.sprint && !this.crouching && !this.aiming && input.moveMag > 0.1;
    const ground = this.groundHeight(this.position.x, this.position.z);
    const inWater = ground < this.world.waterLevel - 0.3 && this.position.y < 1.2;
    this.isSwimming = inWater;

    let speed = 6.4;
    if (this.crouching) speed = 3.15;
    if (this.aiming) speed = 4.1;
    if (this.sprinting) speed = 9.2;
    if (this.isSwimming) speed = 3.4;
    if (this.reloadTimer > 0 || this.healTimer > 0) speed *= 0.82;

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(-forward.z, 0, forward.x);
    const desired = new THREE.Vector3();
    if (input.moveMag > 0.02) {
      desired.addScaledVector(right, input.moveX).addScaledVector(forward, input.moveZ);
      if (desired.lengthSq() > 1) desired.normalize();
      desired.multiplyScalar(speed * Math.min(1, input.moveMag));
    }
    const accel = this.grounded ? 38 : 8;
    this.velocity.x = damp(this.velocity.x, desired.x, accel * 0.35, dt);
    this.velocity.z = damp(this.velocity.z, desired.z, accel * 0.35, dt);

    // Jump
    if (input.jump && this.grounded && !this.isSwimming && this.crouching === false) {
      this.velocity.y = 6.7;
      this.grounded = false;
      input.jump = false;
    }

    const wasGrounded = this.grounded;
    if (!this.isSwimming) {
      this.velocity.y -= 19.5 * dt;
    } else {
      this.velocity.y = 0;
    }
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    this.resolveCollisions(this.position);

    const newGround = this.groundHeight(this.position.x, this.position.z);
    if (this.isSwimming) {
      this.position.y = damp(this.position.y, this.world.waterLevel - 0.62 + Math.sin(performance.now() * 0.002) * 0.05, 6, dt);
      this.velocity.y = 0;
      this.grounded = false;
    } else if (this.position.y <= newGround) {
      this.position.y = newGround;
      if (this.velocity.y < -9) this.cameraShake = 0.35;
      this.velocity.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }
    if (this.grounded && !wasGrounded && this.velocity.y < -3) this.cameraShake = Math.min(0.4, Math.abs(this.velocity.y) * 0.025);

    // world bounds
    this.position.x = clamp(this.position.x, -218, 218);
    this.position.z = clamp(this.position.z, -218, 218);

    this.moveAmount = Math.hypot(this.velocity.x, this.velocity.z);
    const animSpeed = this.moveAmount / 6.4;
    this.walkPhase += dt * (this.isSwimming ? 3 : 5.4 + this.moveAmount * 1.2);
    this.animate(dt, animSpeed);

    this.aimAmount = damp(this.aimAmount, this.aiming ? 1 : 0, 12, dt);
    this.character.position.copy(this.position);
    this.character.rotation.y = this.yaw;
    this.updateCamera(dt, camera);

    if (this.aiming && w.id === 'sniper') this.cameraShake = Math.max(this.cameraShake, 0.02);
  }

  resolveCollisions(p) {
    const r = this.crouching ? 0.34 : this.radius;
    for (const c of this.world.colliders) {
      if (p.y + 1.65 < c.minY + 0.02 || p.y > c.maxY - 0.02) continue;
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
        p.x = nx + (dx / d) * r;
        p.z = nz + (dz / d) * r;
      }
    }
  }

  animate(dt, animSpeed) {
    const u = this.character.userData;
    const t = performance.now() * 0.001;
    const crouchTarget = this.crouching ? -0.26 : 0;
    u.body.position.y = damp(u.body.position.y, crouchTarget, 13, dt);
    const swing = Math.sin(this.walkPhase) * Math.min(1, animSpeed) * (this.isSwimming ? 0.35 : 0.65);
    if (!this.grounded) {
      u.legL.rotation.x = damp(u.legL.rotation.x, -0.45, 10, dt);
      u.legR.rotation.x = damp(u.legR.rotation.x, 0.25, 10, dt);
    } else {
      u.legL.rotation.x = damp(u.legL.rotation.x, swing, 15, dt);
      u.legR.rotation.x = damp(u.legR.rotation.x, -swing, 15, dt);
    }
    const aim = this.aimAmount;
    const bob = Math.sin(this.walkPhase * 2) * 0.012 * animSpeed;
    u.torso.position.y = 1.3 + bob;
    u.head.position.y = 1.73 + bob;
    u.armL.rotation.x = damp(u.armL.rotation.x, -1.24 - aim * 0.12, 12, dt);
    u.armL.rotation.z = damp(u.armL.rotation.z, 0.18 + aim * 0.1, 12, dt);
    u.armR.rotation.x = damp(u.armR.rotation.x, -1.16 - aim * 0.1, 12, dt);
    u.armR.rotation.z = damp(u.armR.rotation.z, -0.15, 12, dt);
    u.weaponMount.rotation.x = damp(u.weaponMount.rotation.x, this.reloadTimer > 0 ? -0.45 : 0, 10, dt);
    u.weaponMount.position.y = damp(u.weaponMount.position.y, this.aiming ? 1.43 : 1.35, 10, dt);
    u.weaponMount.position.x = damp(u.weaponMount.position.x, this.aiming ? 0.09 : 0.15, 10, dt);
    if (this.reloadTimer > 0) {
      u.armL.rotation.z = 0.4 + Math.sin(t * 17) * 0.25;
      u.armR.rotation.z = -0.35 + Math.sin(t * 17) * 0.18;
    }
  }

  updateCamera(dt, camera) {
    const w = this.weapon;
    const pitch = clamp(this.pitch + this.recoilPitch, -1.25, 1.25);
    const yaw = this.yaw + this.recoilYaw;
    const dir = new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
    const shoulder = this.aiming ? 0.62 : 0.72;
    const target = this.position.clone().add(new THREE.Vector3(0, this.crouching ? 1.22 : 1.58, 0)).addScaledVector(right, shoulder * 0.6);
    let dist = this.aiming ? 2.85 : 5.15;
    if (this.sprinting) dist = 5.45;
    if (this.isSwimming) dist = 4.2;
    const desired = target.clone().addScaledVector(dir, -dist);
    desired.y += 0.25;
    // camera collision
    const toCam = desired.clone().sub(target);
    const len = toCam.length();
    toCam.normalize();
    const hit = this.world.raycastWorld(target, toCam, len + 0.15);
    if (hit && hit.distance < len) {
      desired.copy(target).addScaledVector(toCam, Math.max(0.4, hit.distance - 0.25));
    }
    const ground = this.world.heightAt(desired.x, desired.z) + 0.55;
    if (desired.y < ground) desired.y = ground;
    if (this.cameraShake > 0) {
      desired.x += (Math.random() - 0.5) * this.cameraShake * 0.18;
      desired.y += (Math.random() - 0.5) * this.cameraShake * 0.18;
    }
    camera.position.lerp(desired, 1 - Math.exp(-16 * dt));
    const look = target.clone().addScaledVector(dir, 12);
    camera.lookAt(look);
    const targetFov = this.aiming ? (w.id === 'sniper' ? 32 : 46) : this.sprinting ? 76 : 67;
    camera.fov = damp(camera.fov, targetFov, 10, dt);
    camera.updateProjectionMatrix();
  }

  getForward() {
    const pitch = clamp(this.pitch + this.recoilPitch, -1.25, 1.25);
    const yaw = this.yaw + this.recoilYaw;
    return new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
  }

  getMuzzleWorld() {
    if (!this.weaponModel) return this.position.clone().add(new THREE.Vector3(0, 1.5, 0));
    const muzzle = this.weaponModel.userData.muzzle;
    this.character.updateMatrixWorld(true);
    const p = new THREE.Vector3();
    muzzle.getWorldPosition(p);
    return p;
  }

  getSpread() {
    const w = this.weapon;
    let spread = w.spread;
    if (this.aiming) spread = w.adsSpread;
    else if (this.moveAmount > 2) spread = w.moveSpread;
    if (this.crouching) spread *= 0.72;
    if (!this.grounded) spread *= 1.7;
    if (this.isSwimming) spread *= 1.5;
    return spread;
  }

  canFire() {
    return this.alive && !this.dropping && this.fireCooldown <= 0 && this.reloadTimer <= 0 && this.switchTimer <= 0 && this.healTimer <= 0;
  }

  fire() {
    if (!this.canFire()) return null;
    const slot = this.slot;
    const w = this.weapon;
    if (w.id !== 'melee' && slot.mag <= 0) {
      this.startReload();
      return null;
    }
    if (w.id !== 'melee') slot.mag -= 1;
    this.fireCooldown = 60 / w.rpm;
    this.recoilPitch += w.recoil * (this.aiming ? 0.64 : 1) * (this.crouching ? 0.7 : 1);
    this.recoilYaw += (Math.random() - 0.5) * w.recoil * 0.85;
    this.cameraShake = Math.min(0.65, this.cameraShake + w.recoil * 5);
    return { weapon: w, spread: this.getSpread(), pellets: w.pellets, damage: w.damage * (slot.rarity === 'legendary' ? 1.18 : slot.rarity === 'epic' ? 1.1 : slot.rarity === 'rare' ? 1.04 : 1), slot };
  }

  startReload() {
    if (this.reloadTimer > 0 || this.dropping) return false;
    const slot = this.slot;
    const w = this.weapon;
    if (w.id === 'melee' || slot.mag >= w.mag || slot.reserve <= 0) return false;
    this.reloadTimer = w.reload;
    this.reloadTotal = w.reload;
    return true;
  }

  finishReload() {
    const slot = this.slot;
    const w = this.weapon;
    const need = w.mag - slot.mag;
    const take = Math.min(need, slot.reserve);
    slot.mag += take;
    slot.reserve -= take;
    this.reloadTimer = 0;
  }

  switchWeapon(index) {
    if (index === this.currentSlot || index < 0 || index > 2 || this.switchTimer > 0 || this.dropping) return false;
    this.currentSlot = index;
    this.reloadTimer = 0;
    this.switchTimer = 0.32;
    this.updateWeaponModel();
    return true;
  }

  nextWeapon() {
    for (let i = 1; i <= 3; i++) {
      const idx = (this.currentSlot + i) % 3;
      if (this.slots[idx] && this.slots[idx].id !== 'melee') {
        this.switchWeapon(idx);
        return;
      }
    }
  }

  startHeal() {
    if (this.medkits <= 0 || this.health >= MATCH.maxHealth || this.healTimer > 0 || this.reloadTimer > 0 || this.dropping) return false;
    this.medkits -= 1;
    this.healTimer = MATCH.medUseTime;
    this.healTotal = MATCH.medUseTime;
    return true;
  }

  giveWeapon(id, rarity = 'common', attachments = []) {
    const w = WEAPONS[id];
    if (!w) return false;
    if (id === 'melee') return false;
    const slotData = { id, mag: w.mag, reserve: w.reserve, rarity, attachments };
    // Prefer empty weapon slot
    const empty = this.slots.findIndex((s, i) => i < 2 && (!s || s.id === 'melee'));
    if (empty >= 0 && this.slots[empty]?.id === 'melee') {
      this.slots[empty] = slotData;
      if (this.currentSlot === empty) this.updateWeaponModel();
      return true;
    }
    // Replace secondary first if current is primary, otherwise current
    const target = this.currentSlot < 2 ? this.currentSlot : 1;
    this.slots[target] = slotData;
    if (this.currentSlot === target) this.updateWeaponModel();
    return true;
  }

  giveAmmo(amount = 30) {
    const slot = this.slots.find(s => s && s.id !== 'melee');
    if (!slot) return false;
    const w = WEAPONS[slot.id];
    slot.reserve = Math.min(w.reserve * 2, slot.reserve + amount);
    return true;
  }

  giveArmor(amount = 25) {
    this.armor = Math.min(this.maxArmor, this.armor + amount);
  }

  giveMedkit(n = 1) {
    this.medkits = Math.min(5, this.medkits + n);
  }

  giveGrenade(n = 1) {
    this.grenades = Math.min(3, this.grenades + n);
  }

  takeDamage(amount, sourcePos = null, zone = false) {
    if (!this.alive) return 0;
    let final = amount;
    if (!zone && this.armor > 0) {
      const absorbed = Math.min(this.armor, amount * 0.55);
      this.armor -= absorbed;
      final = amount - absorbed;
    }
    this.health -= final;
    this.lastDamageTime = 0;
    this.cameraShake = Math.min(0.8, this.cameraShake + 0.24);
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
      this.deathTime = 0;
      this.character.userData.body.rotation.z = -1.35;
      this.character.userData.body.position.y = -0.2;
    }
    return final;
  }

  updateDeath(dt) {
    this.deathTime += dt;
    this.character.userData.body.rotation.z = damp(this.character.userData.body.rotation.z, -1.45, 8, dt);
    this.character.userData.body.position.y = damp(this.character.userData.body.position.y, 0.1, 8, dt);
  }
}

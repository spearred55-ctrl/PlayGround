import * as THREE from 'three'
import { World } from '../world/world.js'
import { LootManager } from './loot.js'
import { ZoneSystem } from './zone.js'
import { Effects } from './effects.js'
import { LobbyScene } from './lobby.js'
import { Player } from '../entities/player.js'
import { Bot } from '../entities/bot.js'
import { Vehicle } from '../entities/vehicle.js'
import { currentOutfit, recordMatch, saveProfile } from '../core/save.js'
import { WEAPONS, weaponById } from './weapons.js'
import { clamp, damp, dampAngle, distance2D, mulberry32, pick, randInt, ORIGINAL_NAMES, raySphere, formatTime, TAU } from '../core/utils.js'
import { PLAY_RADIUS, WATER_LEVEL, PAD_DEFS } from '../world/terrain.js'

const TEAM_COLORS = ['#54e6a5', '#ff6b6b', '#ffb347', '#b78bff', '#63dcff', '#ff7ad9', '#ffd166']
const nextFrame = () => new Promise(resolve => requestAnimationFrame(() => resolve()))
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export class Game {
  constructor({ renderer, canvas, profile, audio, input }) {
    this.renderer = renderer
    this.canvas = canvas
    this.profile = profile
    this.settings = profile.settings
    this.audio = audio
    this.input = input
    this.ui = null
    this.state = 'boot'
    this.mode = 'solo'
    this.quality = this.settings.quality || 'high'
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.08, 3200)
    this.camera.position.set(0, 6, 12)
    this.lobby = null
    this.world = null
    this.worldScene = null
    this.loot = null
    this.zone = null
    this.effects = null
    this.vehicles = []
    this.player = null
    this.bots = []
    this.grenades = []
    this.matchTime = 0
    this.matchStarted = false
    this.paused = false
    this.spectating = false
    this.spectateTarget = null
    this.spectateIndex = 0
    this.cameraShake = 0
    this.fov = 70
    this.interactTarget = null
    this.teamSize = 1
    this.placement = null
    this.resultShown = false
    this.hudTimer = 0
    this.zoneTick = 0
    this.lastHudState = null
    this.startedAt = 0
    this.stats = { kills: 0, damage: 0 }
    this._seed = 1337
  }

  async prepare() {
    const ui = this.ui
    ui?.setLoading(6, 'BOOTING RENDERER')
    await nextFrame()
    this.applySettings(false)
    this.lobby = new LobbyScene(this.renderer)
    this.lobby.setCharacter(currentOutfit(this.profile), this.profile.name, this.profile.level)
    this.lobby.resize(this.canvas.clientWidth, this.canvas.clientHeight)
    ui?.setLoading(28, 'SCULPTING ISLAND OF ASH')
    await nextFrame()
    await sleep(30)
    this.worldScene = new THREE.Scene()
    // Gameplay entities are created with `game.scene`; bind it to the world scene.
    this.scene = this.worldScene
    this.world = new World(this.worldScene, this.quality, this._seed)
    ui?.setLoading(62, 'RAISING LANDMARKS')
    await nextFrame()
    await sleep(30)
    this.effects = new Effects(this.worldScene, this.quality)
    this.loot = new LootManager(this.worldScene, this.world, this._seed)
    this.zone = new ZoneSystem(this.worldScene, this._seed)
    this.zone.onPhase = (kind, phase) => this.onZonePhase(kind, phase)
    this.vehicles = this.world.vehicleSpawns.map(spawn => new Vehicle(this, spawn))
    ui?.setLoading(84, 'PLACING SUPPLY DROPS')
    await nextFrame()
    await sleep(30)
    this.loot.spawnInitial()
    ui?.setLoading(100, 'ALL SYSTEMS READY')
    await sleep(220)
    this.showLobby()
  }

  applySettings(rebuild = false) {
    const s = this.settings
    this.quality = s.quality || 'high'
    const scale = clamp((s.renderScale || 100) / 100, 0.5, 1.5)
    const dpr = Math.min(window.devicePixelRatio || 1, this.quality === 'low' ? 1 : 2)
    this.renderer.setPixelRatio(clamp(dpr * scale, 0.5, 2))
    this.renderer.shadowMap.enabled = !!s.shadows && this.quality !== 'low'
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    if (this.world?.sky?.sun) this.world.sky.sun.castShadow = this.renderer.shadowMap.enabled
    this.audio.setVolumes(s.volume ?? 80, s.sfx ?? 100)
    this.input.applyButtonScale(s.buttonSize ?? s.buttonScale ?? 100)
    if (this.worldScene) this.worldScene.fog = new THREE.Fog(0xb8d2da, this.quality === 'low' ? 380 : 520, this.quality === 'low' ? 1100 : 1560)
    this.camera.far = this.quality === 'low' ? 1800 : 3200
    this.camera.updateProjectionMatrix()
    if (this.lobby) this.lobby.resize(this.canvas.clientWidth, this.canvas.clientHeight)
    this.resize()
  }

  showLobby() {
    this.state = 'lobby'
    this.paused = false
    this.spectating = false
    this.input.setPlaying(false)
    this.input.setBlocked(false)
    this.lobby.setCharacter(currentOutfit(this.profile), this.profile.name, this.profile.level)
    this.ui?.showMenu()
    this.ui?.refreshMenu()
    this.ui?.setOnlineState('SERVER OFFLINE · LOCAL READY')
    this.resize()
  }

  async startMatch(mode = this.mode) {
    if (this.state === 'loading') return
    this.mode = mode
    this.state = 'loading'
    this.ui?.closePanels()
    this.ui?.showLoading(12, 'DEPLOYMENT AUTHORIZED')
    this.input.setPlaying(false)
    this.audio.init()
    await nextFrame()
    this.resetMatch()
    this.ui?.setLoading(72, 'SYNCING OPERATIVES')
    await nextFrame()
    this.ui?.hideLoading()
    this.ui?.showHud()
    this.ui?.refreshMenu()
    this.state = 'match'
    this.paused = false
    this.input.setPlaying(true)
    this.input.setBlocked(false)
    this.ui?.announce('MATCH START', `${this.mode.toUpperCase()} · LAST OPERATIVE STANDING`, 2600)
    this.ui?.showBanner('DEPLOYMENT COMPLETE', 'AURORA PROTOCOL · ISLAND OF ASH')
    this.audio.setAmbient(true)
    this.ui?.toast(`DROP COMPLETE · ${this.aliveCount()} OPERATIVES`, 'good')
  }

  resetMatch() {
    this.audio.init()
    this.effects.clear()
    for (const g of this.grenades) { this.worldScene.remove(g.mesh); g.mesh.geometry.dispose(); g.mesh.material.dispose() }
    this.grenades.length = 0
    if (this.player) this.player.dispose()
    for (const bot of this.bots) bot.dispose()
    this.bots.length = 0
    this.player = null
    this.spectating = false
    this.spectateTarget = null
    this.spectateIndex = 0
    this.matchTime = 0
    this.matchStarted = false
    this.placement = null
    this.resultShown = false
    this.cameraShake = 0
    this.zoneTick = 0
    this.stats = { kills: 0, damage: 0 }
    this.zone.reset()
    this.loot.reset()
    for (const v of this.vehicles) v.reset()
    const rng = mulberry32((Date.now() & 0xffff) + 7)
    const spawn = this._pickSpawn(rng)
    const outfit = currentOutfit(this.profile)
    this.teamSize = this.mode === 'duo' ? 2 : this.mode === 'squad' ? 4 : 1
    this.player = new Player(this, { name: this.profile.name, outfit, spawn, team: 0 })
    const total = this.mode === 'practice' ? 10 : clamp(Number(this.settings.matchSize) || 25, 10, 50)
    const botCount = Math.max(3, total - 1)
    const skill = this.settings.botSkill || 'veteran'
    const spawns = this._botSpawns(botCount + 2, spawn, rng)
    for (let i = 0; i < botCount; i++) {
      const team = this.teamSize > 1 && i < this.teamSize - 1 ? 0 : Math.floor(i / this.teamSize) + 1
      const s = spawns[i % spawns.length]
      const name = ORIGINAL_NAMES[(i + 3) % ORIGINAL_NAMES.length] + '-' + String(10 + i)
      const bot = new Bot(this, { spawn: s, team, name, skill, index: i })
      this.bots.push(bot)
    }
    this.camera.position.set(spawn.x + 8, spawn.y + 7, spawn.z + 8)
    this.camera.lookAt(spawn.x, spawn.y + 1.5, spawn.z)
    this.updateCamera(1 / 60, true)
    this.lastHudState = null
    this.hudTimer = 0
    this.startedAt = performance.now()
  }

  _spawnClear(x, z, feetY, radius = 4) {
    if (this.world.isWaterAt(x, z)) return false
    if (feetY < WATER_LEVEL + 0.6) return false
    for (const c of this.world.colliders) {
      if (!c.solid) continue
      if (x + radius > c.min.x && x - radius < c.max.x &&
          z + radius > c.min.z && z - radius < c.max.z &&
          feetY + 2.2 > c.min.y && feetY < c.max.y) return false
    }
    return true
  }

  _pickSpawn(rng) {
    const pads = PAD_DEFS.filter(p => p.type !== 'mountain' && p.type !== 'lake')
    for (let attempt = 0; attempt < 320; attempt++) {
      let x, z
      if (attempt < 220) {
        const pad = pads[Math.floor(rng() * pads.length)]
        const a = rng() * TAU
        const r = pad.r * (0.72 + rng() * 0.46)
        x = pad.x + Math.cos(a) * r
        z = pad.z + Math.sin(a) * r
      } else {
        const a = rng() * TAU
        const r = 90 + rng() * 420
        x = Math.cos(a) * r
        z = Math.sin(a) * r
      }
      const y = this.world.groundHeight(x, z)
      if (!this._spawnClear(x, z, y, 6.5)) continue
      return { x, y, z, yaw: rng() * TAU }
    }
    // Guaranteed fallback on the open northern flats.
    for (const [x, z] of [[0, 120], [40, 150], [-60, 160], [0, 40]]) {
      const y = this.world.groundHeight(x, z)
      if (this._spawnClear(x, z, y, 2)) return { x, y, z, yaw: rng() * TAU }
    }
    return { x: 0, y: this.world.groundHeight(0, 92), z: 92, yaw: 0 }
  }

  _botSpawns(count, playerSpawn, rng) {
    const out = []
    const spots = this.world.lootSpots
    let guard = 0
    while (out.length < count && guard++ < count * 60) {
      const spot = spots[Math.floor(rng() * spots.length)]
      if (!spot) continue
      const x = spot.x + (rng() - 0.5) * 10
      const z = spot.z + (rng() - 0.5) * 10
      if (this.world.isWaterAt(x, z)) continue
      const y = this.world.groundHeight(x, z)
      if (!this._spawnClear(x, z, y, 2.2)) continue
      if (Math.hypot(x - playerSpawn.x, z - playerSpawn.z) < 55) continue
      if (out.some(s => Math.hypot(s.x - x, s.z - z) < 16)) continue
      out.push({ x, y, z, yaw: rng() * TAU })
    }
    while (out.length < count) {
      const a = rng() * TAU
      const r = 120 + rng() * 350
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      out.push({ x, y: this.world.groundHeight(x, z), z, yaw: rng() * TAU })
    }
    return out
  }

  teamColor(team) { return TEAM_COLORS[team % TEAM_COLORS.length] }
  teamLabel(team) { return this.player && team === this.player.team ? 'ALLY' : 'HOSTILE' }
  isEnemy(a, b) { return a && b && a.team !== b.team }

  aliveCount() {
    let n = this.player?.alive ? 1 : 0
    for (const b of this.bots) if (b.alive) n++
    return n
  }

  aliveTeams() {
    const teams = new Set()
    if (this.player?.alive) teams.add(this.player.team)
    for (const b of this.bots) if (b.alive) teams.add(b.team)
    return teams.size
  }

  update(dt) {
    dt = Math.min(dt, 0.05)
    if (this.state === 'lobby') {
      this.lobby?.update(dt, performance.now() / 1000)
      return
    }
    if (this.state !== 'match' && this.state !== 'result') return
    if (this.paused) return
    this.matchTime += dt
    this.zone.update(dt)
    this.world.update(dt, this.matchTime)
    if (this.player) {
      this.player.update(dt, this.matchTime)
      if (this.player.alive) this.world.setSunFocus(this.player.pos.x, this.player.pos.z)
      if (this.player.alive && this.zone.isOutside(this.player.pos.x, this.player.pos.z)) {
        this.zoneTick += dt
        if (this.zoneTick >= 1) {
          this.zoneTick = 0
          this.player.takeDamage(this.zone.damagePerSecond, null, false)
          if (this.player.alive) this.ui?.toast('OUTSIDE SAFE ZONE · MOVE!', 'warn')
        }
      } else {
        this.zoneTick = 0
      }
    }
    for (const bot of this.bots) {
      if (bot.alive) bot.update(dt, this.matchTime)
      else bot.update(dt, this.matchTime)
    }
    for (const v of this.vehicles) v.update(dt, this.matchTime)
    this._updateGrenades(dt)
    this.loot.update(dt)
    this.effects.update(dt)
    this.cameraShake = Math.max(0, this.cameraShake - dt * 1.8)
    this._updateInteraction()
    if (!this.spectating) this.updateCamera(dt)
    else this._updateSpectate(dt)
    this.hudTimer -= dt
    if (this.hudTimer <= 0) {
      this.hudTimer = 0.08
      this.ui?.updateHUD(this)
    }
    if (this.state === 'match' && this.player && this.player.alive && this.aliveTeams() <= 1 && this.matchTime > 3) {
      this.finishMatch(true)
    }
  }

  _updateInteraction() {
    if (!this.player || !this.player.alive || this.spectating) {
      if (this.interactTarget) { this.interactTarget = null; this.ui?.setInteract(null) }
      return
    }
    if (this.player.vehicle) {
      this.interactTarget = { type: 'exit' }
      this.ui?.setInteract('EXIT VEHICLE')
      if (this.input.wasPressed('interact')) this.player.vehicle.exit()
      return
    }
    const item = this.loot.nearest(this.player.pos.x, this.player.pos.y + 0.7, this.player.pos.z, 2.7)
    if (item) {
      this.interactTarget = { type: 'loot', item }
      this.ui?.setInteract('PICK UP · ' + this.lootLabel(item))
      if (this.input.wasPressed('interact')) this.interact()
      return
    }
    let bestVehicle = null, bestDist = 3.4
    for (const v of this.vehicles) {
      if (v.destroyed || v.occupied) continue
      const d = distance2D(v.pos.x, v.pos.z, this.player.pos.x, this.player.pos.z)
      if (d < bestDist) { bestDist = d; bestVehicle = v }
    }
    if (bestVehicle) {
      this.interactTarget = { type: 'vehicle', vehicle: bestVehicle }
      this.ui?.setInteract('DRIVE VEHICLE')
      if (this.input.wasPressed('interact')) this.interact()
      return
    }
    this.interactTarget = null
    this.ui?.setInteract(null)
  }

  lootLabel(item) {
    if (!item) return ''
    const d = item.data
    if (d.type === 'weapon') return weaponById(d.weapon).name
    if (d.type === 'ammo') return `${d.ammo.toUpperCase()} AMMO`
    if (d.type === 'armor') return `ARMOR LV${d.level}`
    if (d.type === 'helmet') return `HELMET LV${d.level}`
    if (d.type === 'backpack') return `PACK LV${d.level}`
    if (d.type === 'med') return d.item === 'medkit' ? 'MEDKIT' : 'BANDAGE'
    if (d.type === 'grenade') return 'FRAG GRENADE'
    if (d.type === 'attachment') return d.attachment.replace('_', ' ').toUpperCase()
    return 'SUPPLY'
  }

  botPickup(bot, item) {
    if (!item || !item.active || !bot?.alive) return false
    const data = item.data
    let took = false
    switch (data.type) {
      case 'weapon': {
        const def = weaponById(data.weapon)
        if (!def) break
        const order = { common: 0, rare: 1, epic: 2, legendary: 3 }
        const better = (order[def.rarity] || 0) >= (order[bot.weapon?.rarity] || 0)
        if (!better) break
        bot.weapon = def
        bot.mag = def.mag
        bot.reserve = Math.max(bot.reserve, def.mag * 3)
        bot.character.setWeapon(def, [])
        took = true
        break
      }
      case 'ammo':
        bot.reserve += data.amount
        took = true
        break
      case 'armor':
        if (data.level > bot.armorLevel) {
          bot.armorLevel = data.level
          bot.armor = { 1: 50, 2: 75, 3: 100 }[data.level]
          bot.character.setArmor(bot.armor, bot.helmet)
          took = true
        }
        break
      case 'helmet':
        if (data.level > bot.helmet) {
          bot.helmet = data.level
          bot.character.setArmor(bot.armor, bot.helmet)
          took = true
        }
        break
      case 'backpack':
        took = true
        break
      case 'med':
        if (bot.medkits < 4) { bot.medkits++; took = true }
        break
      default:
        break
    }
    if (took) {
      this.loot.remove(item)
      this.effects?.pickup(new THREE.Vector3(item.x, item.y, item.z), 0xffb347)
    }
    return took
  }

  interact() {
    if (!this.interactTarget || !this.player || !this.player.alive) return
    const t = this.interactTarget
    if (t.type === 'loot') {
      const result = this.player.pickup(t.item)
      if (result.ok) this.ui?.toast(result.message, 'loot')
      else if (result.message) this.ui?.toast(result.message, 'warn')
      this.interactTarget = null
      this.ui?.setInteract(null)
    } else if (t.type === 'vehicle') {
      t.vehicle.enter(this.player)
      this.interactTarget = null
      this.ui?.setInteract(null)
    } else if (t.type === 'exit') {
      this.player.vehicle?.exit()
      this.interactTarget = null
      this.ui?.setInteract(null)
    }
  }

  findBotTarget(bot) {
    let best = null, bestD = Infinity
    if (this.player?.alive && this.isEnemy(bot, this.player)) {
      const d = distance2D(bot.pos.x, bot.pos.z, this.player.pos.x, this.player.pos.z)
      if (d < bestD) { bestD = d; best = this.player }
    }
    for (const other of this.bots) {
      if (other === bot || !other.alive || !this.isEnemy(bot, other)) continue
      const d = distance2D(bot.pos.x, bot.pos.z, other.pos.x, other.pos.z)
      if (d < bestD) { bestD = d; best = other }
    }
    return best
  }

  playerShoot(player, origin, dir, stats) {
    let aimDir = dir
    if (this.settings.aimAssist && this.input.touchMode) {
      let best = null, bestDot = 0.992, bestDist = 120
      for (const bot of this.bots) {
        if (!bot.alive) continue
        const to = new THREE.Vector3(bot.pos.x, bot.pos.y + 1.15, bot.pos.z).sub(origin)
        const d = to.length()
        if (d > bestDist) continue
        const dot = to.normalize().dot(dir)
        if (dot > bestDot) { bestDot = dot; best = to }
      }
      if (best) aimDir = dir.clone().lerp(best, 0.42).normalize()
    }
    const result = this.resolveShot(origin, aimDir, stats.range, stats.damage, player)
    if (result.hit) {
      player.shotsHit++
      player.damageDealt += result.damage
      this.ui?.hitmarker(!!result.killed)
      this.ui?.damageIndicator(result.point)
    }
  }

  resolveShot(origin, dir, maxRange, damage, shooter, options = {}) {
    const wall = this.world.raycast(origin, dir, maxRange)
    let wallDist = wall ? wall.distance : maxRange
    let best = null
    let bestDist = wallDist
    let bestHead = false
    const candidates = []
    if (shooter !== this.player && this.player?.alive && this.isEnemy(shooter, this.player)) candidates.push(this.player)
    for (const bot of this.bots) {
      if (!bot.alive || bot === shooter) continue
      if (shooter === this.player || this.isEnemy(shooter, bot)) candidates.push(bot)
    }
    for (const target of candidates) {
      const chest = new THREE.Vector3(target.pos.x, target.pos.y + 1.12, target.pos.z)
      const head = new THREE.Vector3(target.pos.x, target.pos.y + 1.62, target.pos.z)
      const tc = raySphere(origin, dir, chest, 0.48)
      if (tc !== null && tc < bestDist) { bestDist = tc; best = target; bestHead = false }
      const th = raySphere(origin, dir, head, 0.25)
      if (th !== null && th < bestDist) { bestDist = th; best = target; bestHead = true }
    }
    const point = origin.clone().addScaledVector(dir, Math.min(bestDist, maxRange))
    const tracerColor = shooter === this.player ? 0xffe2a8 : 0xff9a6a
    this.effects.tracer(origin, point, tracerColor)
    let killed = false
    if (best) {
      const finalDamage = damage * (bestHead ? 1.85 : 1)
      if (best === this.player) {
        this.player.takeDamage(finalDamage, shooter, bestHead)
        this.ui?.damageDirection?.(best.pos || shooter?.pos)
      } else {
        const wasAlive = best.alive
        best.takeDamage(finalDamage, shooter, bestHead)
        killed = wasAlive && !best.alive
      }
      if (best === this.player) this.ui?.hitmarker(false)
      return { hit: true, headshot: bestHead, target: best, damage: finalDamage, killed, point }
    }
    if (wall) {
      this.effects.impact(wall.point, wall.normal, shooter === this.player ? 0xffd9a0 : 0xd0c0a0, 2)
    }
    return { hit: false, damage: 0, killed: false, point }
  }

  meleeAttack(attacker, damage, range) {
    const forward = new THREE.Vector3(Math.sin(attacker.yaw), 0, Math.cos(attacker.yaw))
    const targets = []
    if (attacker !== this.player && this.player?.alive && this.isEnemy(attacker, this.player)) targets.push(this.player)
    for (const bot of this.bots) {
      if (bot.alive && bot !== attacker && (attacker === this.player || this.isEnemy(attacker, bot))) targets.push(bot)
    }
    let hitAny = false
    for (const target of targets) {
      const dx = target.pos.x - attacker.pos.x
      const dz = target.pos.z - attacker.pos.z
      const d = Math.hypot(dx, dz)
      if (d > range + 0.6) continue
      if ((dx * forward.x + dz * forward.z) / (d || 1) < 0.35) continue
      if (target === this.player) this.player.takeDamage(damage, attacker, false)
      else target.takeDamage(damage, attacker, false)
      this.effects.blood(new THREE.Vector3(target.pos.x, target.pos.y + 1.2, target.pos.z))
      this.audio.hit(false)
      if (attacker === this.player) { this.ui?.hitmarker(false); this.player.damageDealt += damage }
      hitAny = true
      break
    }
    if (!hitAny) this.effects.impact(attacker.pos.clone().add(forward.multiplyScalar(range * 0.7)).setY(attacker.pos.y + 1), null, 0xd0c0a0, 1)
  }

  throwGrenade(player) {
    const origin = player.getEyePosition(new THREE.Vector3())
    const dir = player.getAimDirection(new THREE.Vector3())
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshStandardMaterial({ color: 0x3f4a34, roughness: 0.7 }))
    mesh.position.copy(origin).addScaledVector(dir, 0.6)
    mesh.castShadow = true
    this.worldScene.add(mesh)
    this.grenades.push({
      mesh, pos: mesh.position,
      vel: dir.clone().multiplyScalar(19).add(new THREE.Vector3(0, 4.2, 0)),
      timer: 2.7, source: player, trail: 0,
    })
  }

  _updateGrenades(dt) {
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i]
      g.timer -= dt
      g.vel.y -= 18 * dt
      g.pos.addScaledVector(g.vel, dt)
      const ground = this.world.groundHeight(g.pos.x, g.pos.z)
      if (g.pos.y < ground + 0.16) {
        g.pos.y = ground + 0.16
        g.vel.y *= -0.42
        g.vel.x *= 0.62
        g.vel.z *= 0.62
        if (Math.abs(g.vel.y) < 1) g.vel.y = 0
      }
      g.mesh.rotation.x += dt * 6
      g.mesh.rotation.z += dt * 4
      if (g.timer <= 0) {
        this.explode(g.pos.clone(), 6.5, 92, g.source)
        this.worldScene.remove(g.mesh)
        g.mesh.geometry.dispose()
        g.mesh.material.dispose()
        this.grenades.splice(i, 1)
      }
    }
  }

  explode(pos, radius, damage, source) {
    this.effects.explosion(pos, radius / 6)
    const distToPlayer = this.player ? distance2D(this.player.pos.x, this.player.pos.z, pos.x, pos.z) : 999
    this.audio.explosion()
    if (distToPlayer < 30) this.cameraShake = Math.max(this.cameraShake, 0.8 * (1 - distToPlayer / 30))
    const apply = (target) => {
      if (!target.alive) return
      const d = Math.hypot(target.pos.x - pos.x, target.pos.y + 1 - pos.y, target.pos.z - pos.z)
      if (d > radius) return
      const falloff = 1 - clamp(d / radius, 0, 1) * 0.7
      if (target === this.player) this.player.takeDamage(damage * falloff, source, false)
      else target.takeDamage(damage * falloff, source, false)
    }
    apply(this.player)
    for (const bot of this.bots) apply(bot)
  }

  onZonePhase(kind, phase) {
    if (this.state !== 'match') return
    if (kind === 'shrink') {
      this.ui?.announce('ZONE CLOSING', 'THE AURORA WALL IS MOVING', 2400)
      this.audio.zoneWarning()
    } else if (kind === 'wait' && phase > 0) {
      this.ui?.announce(`ZONE ${phase + 1}`, 'ROTATE TO THE MARKED CIRCLE', 2000)
      if (this.settings.zoneAudio) this.audio.zoneWarning()
    } else if (kind === 'final') {
      this.ui?.announce('FINAL ZONE', 'NO PLACE LEFT TO HIDE', 2600)
    }
  }

  onPlayerHurt(amount, source, headshot) {
    this.ui?.flashDamage(amount, source)
    this.cameraShake = Math.min(0.6, this.cameraShake + amount * 0.006)
  }

  onPlayerDeath(source) {
    if (this.state !== 'match') return
    this.placement = this.mode === 'solo' || this.mode === 'practice' ? this.aliveCount() : this.aliveTeams()
    const killerName = source?.name || 'THE ZONE'
    this.ui?.killfeed(killerName, this.player.name, source ? (source.weapon?.name || 'WEAPON') : 'ZONE', !source)
    this.ui?.announce('ELIMINATED', `PLACEMENT #${this.placement}`, 3000)
    this.audio.defeat()
    this.input.setPlaying(false)
    this.ui?.showResult(this.buildResult(false))
    this.spectateTarget = null
    this.spectateIndex = 0
  }

  onBotDeath(bot, source) {
    const killerName = source?.name || 'THE ZONE'
    const weaponName = source?.weapon?.name || (source === this.player ? this.player.weapon?.name : null) || 'ZONE'
    this.ui?.killfeed(killerName, bot.name, source ? weaponName : 'ZONE', !source)
    if (source === this.player) {
      this.player.kills++
      this.audio.kill()
      this.ui?.announce('ELIMINATED', `${bot.name} · ${this.player.kills} TOTAL`, 1500)
      this.ui?.hitmarker(true)
    } else if (source && source !== this.player) {
      source.kills = (source.kills || 0) + 1
    }
    const pos = bot.pos.clone()
    this.loot.dropAt(pos.x, pos.y, pos.z, { type: 'weapon', weapon: bot.weapon.id, rarity: bot.weapon.rarity, attachments: [] }, 0.8)
    this.loot.dropAt(pos.x, pos.y, pos.z, { type: 'ammo', ammo: bot.weapon.ammo === 'none' ? 'light' : bot.weapon.ammo, amount: randInt(Math.random, 20, 40) }, 1.4)
    if (bot.medkits > 0) this.loot.dropAt(pos.x, pos.y, pos.z, { type: 'med', item: 'medkit' }, 1.1)
    if (bot.armor > 0) this.loot.dropAt(pos.x, pos.y, pos.z, { type: 'armor', level: Math.max(1, bot.armorLevel) }, 0.9)
    if (this.spectateTarget === bot) this._nextSpectate()
    if (this.state === 'match' && this.player.alive && this.aliveTeams() <= 1) this.finishMatch(true)
  }

  finishMatch(victory) {
    if (this.state !== 'match') return
    this.state = 'result'
    this.input.setPlaying(false)
    this.placement = victory ? 1 : this.placement
    const result = this.buildResult(victory)
    this.ui?.showResult(result)
    if (victory) {
      this.audio.victory()
      this.ui?.announce('ELITE VICTORY', 'LAST OPERATIVE STANDING', 4000)
    }
    this.input.setBlocked(false)
  }

  buildResult(victory) {
    const time = Math.max(1, Math.round(this.matchTime))
    const kills = this.player?.kills || 0
    const damage = Math.round(this.player?.damageDealt || 0)
    const placement = victory ? 1 : (this.placement || this.aliveCount())
    let xp = 0, levels = 0, unlocked = []
    if (!this.resultShown) {
      this.resultShown = true
      const saved = recordMatch(this.profile, { placement, kills, damage, victory, time })
      xp = saved.xp
      levels = saved.levels
      unlocked = saved.unlocked || []
      if (levels > 0) this.audio.levelUp()
    }
    return {
      victory, placement, kills, damage, time, xp, levels, unlocked,
      alive: this.aliveCount(), mode: this.mode, matchTime: formatTime(this.matchTime),
    }
  }

  startSpectate() {
    this.spectating = true
    this.spectateIndex = 0
    this._nextSpectate()
    this.ui?.hideResult()
    this.ui?.setSpectate(this.spectateTarget?.name || null)
    this.ui?.toast('SPECTATOR MODE · TAP NEXT TO CYCLE', 'good')
  }

  _nextSpectate() {
    const alive = this.bots.filter(b => b.alive)
    if (!alive.length) {
      this.spectating = false
      this.ui?.setSpectate(null)
      this.ui?.showResult(this.buildResult(this.player?.alive === true && this.aliveTeams() <= 1))
      return
    }
    this.spectateIndex = (this.spectateIndex + 1) % alive.length
    this.spectateTarget = alive[this.spectateIndex]
    this.ui?.setSpectate(this.spectateTarget.name)
    this.camera.position.set(this.spectateTarget.pos.x + 6, this.spectateTarget.pos.y + 5, this.spectateTarget.pos.z + 6)
  }

  _updateSpectate(dt) {
    if (!this.spectateTarget || !this.spectateTarget.alive) {
      this._nextSpectate()
      if (!this.spectateTarget) return
    }
    const t = this.spectateTarget
    const dist = 6
    const desired = new THREE.Vector3(t.pos.x - Math.sin(t.yaw) * dist, t.pos.y + 3.2, t.pos.z - Math.cos(t.yaw) * dist)
    this.camera.position.lerp(desired, 1 - Math.exp(-5 * dt))
    const look = new THREE.Vector3(t.pos.x + Math.sin(t.yaw) * 5, t.pos.y + 1.2, t.pos.z + Math.cos(t.yaw) * 5)
    this.camera.lookAt(look)
  }

  exitSpectate() {
    this.spectating = false
    this.spectateTarget = null
    this.ui?.setSpectate(null)
    this.ui?.showResult(this.buildResult(false))
  }

  updateCamera(dt, instant = false) {
    if (!this.player) return
    const cam = this.camera
    let desired, lookAt, fovTarget = 70
    if (this.player.vehicle && !this.player.vehicle.destroyed) {
      const v = this.player.vehicle
      const fwd = v.forward
      desired = new THREE.Vector3(v.pos.x, v.pos.y + 3.4, v.pos.z).addScaledVector(fwd, -7.5)
      lookAt = new THREE.Vector3(v.pos.x, v.pos.y + 1.2, v.pos.z).addScaledVector(fwd, 8)
      fovTarget = 76
    } else {
      const eye = this.player.getEyePosition(new THREE.Vector3())
      const dir = this.player.getAimDirection(new THREE.Vector3())
      const aiming = this.player.aiming && this.player.alive
      const right = new THREE.Vector3(-Math.cos(this.player.yaw), 0, Math.sin(this.player.yaw))
      // Portrait phones need a little more stand-off so the operator does not
      // swallow the middle of the screen.
      const narrow = cam.aspect < 0.8
      const dist = aiming ? 2.2 : (narrow ? 5.2 : 4.4)
      desired = eye.clone().addScaledVector(dir, -dist).addScaledVector(right, aiming ? 0.52 : (narrow ? 0.92 : 0.7))
      desired.y += 0.18
      const delta = desired.clone().sub(eye)
      const len = delta.length()
      let camDist = len
      if (len > 0.01) {
        const nd = delta.clone().divideScalar(len)
        const hit = this.world.raycast(eye, nd, len)
        if (hit) {
          camDist = Math.max(0.4, hit.distance - 0.3)
          desired = eye.clone().addScaledVector(nd, camDist)
        }
      }
      // Fade the body out rather than letting the camera clip through it.
      this.player.character.group.visible = camDist > 1.05
      lookAt = eye.clone().addScaledVector(dir, 40)
      const zoom = this.player.stats?.zoom || 1
      fovTarget = aiming ? clamp(70 / Math.max(1, zoom), 18, 66) : 70
    }
    if (instant) cam.position.copy(desired)
    else cam.position.lerp(desired, 1 - Math.exp(-14 * dt))
    if (this.cameraShake > 0.002) {
      const s = this.cameraShake * 0.16
      cam.position.x += (Math.random() - 0.5) * s
      cam.position.y += (Math.random() - 0.5) * s
      lookAt.x += (Math.random() - 0.5) * s * 0.6
      lookAt.y += (Math.random() - 0.5) * s * 0.6
    }
    cam.lookAt(lookAt)
    this.fov = damp(this.fov, fovTarget, 10, dt)
    if (Math.abs(cam.fov - this.fov) > 0.05) {
      cam.fov = this.fov
      cam.updateProjectionMatrix()
    }
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth
    const h = this.canvas.clientHeight || window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / Math.max(1, h)
    this.camera.updateProjectionMatrix()
    this.lobby?.resize(w, h)
  }

  render() {
    if (this.state === 'lobby' || this.state === 'boot') {
      if (this.lobby) this.lobby.render()
      else {
        this.renderer.setClearColor(0x050a10, 1)
        this.renderer.clear()
      }
      return
    }
    this.renderer.render(this.worldScene, this.camera)
  }

  returnToLobby() {
    if (this.player) { this.player.dispose(); this.player = null }
    for (const bot of this.bots) bot.dispose()
    this.bots.length = 0
    this.effects.clear()
    this.spectating = false
    this.audio.setAmbient(false)
    this.showLobby()
    this.ui?.refreshMenu()
  }

  setPaused(paused) {
    this.paused = paused
    this.input.setPlaying(!paused && this.state === 'match')
    if (paused) this.input.setBlocked(true)
    else if (this.state === 'match') this.input.setBlocked(false)
  }

  setOnlineState(label) { this.ui?.setOnlineState(label) }

  getPlayerState() { return this.player?.getHudState() || null }
}

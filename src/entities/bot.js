import * as THREE from 'three'
import { Character } from '../entities/character.js'
import { SPAWN_WEAPONS, effectiveStats, weaponById } from '../game/weapons.js'
import { SKINS } from '../core/save.js'
import { clamp, damp, dampAngle, distance2D, mulberry32, pick, randInt, ORIGINAL_NAMES, TAU } from '../core/utils.js'
import { WATER_LEVEL } from '../world/terrain.js'

const SKILLS = {
  recruit: { accuracy: 0.5, reaction: 0.95, aggression: 0.35, damage: 0.72, sight: 62, healChance: 0.5 },
  veteran: { accuracy: 0.7, reaction: 0.55, aggression: 0.65, damage: 0.9, sight: 78, healChance: 0.72 },
  elite: { accuracy: 0.85, reaction: 0.32, aggression: 0.88, damage: 1, sight: 92, healChance: 0.88 },
}

const BOT_COLORS = [
  { primary: '#3b3f43', secondary: '#16181b', accent: '#ff5a5a' },
  { primary: '#3d5c3a', secondary: '#1c2a1b', accent: '#a9d66b' },
  { primary: '#7c2429', secondary: '#241012', accent: '#ff8a2b' },
  { primary: '#46356e', secondary: '#191226', accent: '#b78bff' },
  { primary: '#2f6f8f', secondary: '#152430', accent: '#63dcff' },
  { primary: '#9c7427', secondary: '#2b2113', accent: '#ffd166' },
  { primary: '#c7dbe3', secondary: '#3b5361', accent: '#9fdcff' },
  { primary: '#1f6f7a', secondary: '#102a33', accent: '#ff7ad9' },
]

export class Bot {
  constructor(game, { spawn, team = 1, name, skill = 'veteran', index = 0 }) {
    this.game = game
    this.team = team
    this.index = index
    this.name = name || pick(Math.random, ORIGINAL_NAMES) + '-' + String(10 + index)
    this.skillName = skill
    this.skill = SKILLS[skill] || SKILLS.veteran
    this.pos = new THREE.Vector3(spawn.x, spawn.y, spawn.z)
    this.yaw = spawn.yaw ?? Math.random() * Math.PI * 2
    this.health = 100
    this.armor = randInt(Math.random, 0, 2) === 2 ? 50 : 0
    this.armorLevel = this.armor > 0 ? 1 : 0
    this.helmet = Math.random() > 0.7 ? 1 : 0
    this.alive = true
    this.state = 'loot'
    this.target = null
    this.targetScan = 0
    this.dest = null
    this.lootTarget = null
    this.thinkTimer = Math.random() * 0.4
    this.fireTimer = 0.5 + Math.random()
    this.reactionTimer = 0.4 + Math.random() * this.skill.reaction
    this.reloading = false
    this.reloadTimer = 0
    this.healTimer = 0
    this.medkits = randInt(Math.random, 1, 2)
    this.stuckTimer = 0
    this.lastPos = this.pos.clone()
    this.deadTime = 0
    this.damageTaken = 0
    this.velocityX = 0
    this.velocityZ = 0
    this.walkPhase = Math.random() * TAU
    const palette = BOT_COLORS[index % BOT_COLORS.length]
    const skin = pick(Math.random, SKINS)
    this.outfit = {
      primary: palette.primary, secondary: palette.secondary, accent: palette.accent,
      skinColor: skin.skin, hairColor: skin.hair, hair: pick(Math.random, ['short', 'mohawk', 'bun', 'long', 'bald', 'helmet']),
    }
    this.weapon = pick(Math.random, SPAWN_WEAPONS)
    this.mag = this.weapon.mag
    this.reserve = 150
    this.character = new Character({
      scene: game.scene,
      outfit: this.outfit,
      name: this.name,
      teamColor: game.teamColor(this.team),
      isPlayer: false,
      quality: game.quality,
      simple: true,
    })
    this.character.teamLabel = game.teamLabel(this.team)
    this.character.setName(this.name, game.teamColor(this.team))
    this.character.setWeapon(this.weapon, [])
    this.character.setArmor(this.armor, this.helmet)
    this.character.setPosition(this.pos.x, this.pos.y, this.pos.z)
    this.character.setYaw(this.yaw)
    this.character.setHealth(this.health, 100, this.armor)
  }

  get stats() { return effectiveStats(this.weapon, []) }

  update(dt, time) {
    if (!this.alive) {
      this.deadTime += dt
      this.character.update(dt, time)
      return
    }
    this.fireTimer = Math.max(0, this.fireTimer - dt)
    this.reactionTimer = Math.max(0, this.reactionTimer - dt)
    this.thinkTimer -= dt
    const zone = this.game.zone
    if (zone && zone.isOutside(this.pos.x, this.pos.z)) {
      this.takeDamage(zone.damagePerSecond * dt, null, false, true)
      if (!this.alive) return
    }
    if (this.reloading) {
      this.reloadTimer -= dt
      if (this.reloadTimer <= 0) {
        this.mag = this.stats.mag
        this.reserve -= this.stats.mag
        this.reloading = false
        this.character.reloading = false
      }
    }
    if (this.healTimer > 0) {
      this.healTimer -= dt
      if (this.healTimer <= 0) {
        this.health = Math.min(100, this.health + 42)
        this.medkits--
        this.character.setHealth(this.health, 100, this.armor)
        this.character.cancelReload()
      }
    }
    if (this.thinkTimer <= 0) {
      this.think()
      this.thinkTimer = 0.28 + Math.random() * 0.25
    }
    this._move(dt)
    if (this.state === 'fight' && this.target && this.target.alive) {
      const dx = this.target.pos.x - this.pos.x
      const dz = this.target.pos.z - this.pos.z
      const dist = Math.hypot(dx, dz)
      this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 9, dt)
      this.character.aiming = true
      this.character.aimPitch = Math.atan2((this.target.pos.y + 1.2) - (this.pos.y + 1.3), dist)
      if (this.reactionTimer <= 0 && this.fireTimer <= 0 && !this.reloading && this.healTimer <= 0) {
        if (dist < this.stats.range && this.game.world.hasLineOfSight(this.pos.x, this.pos.y + 1.35, this.pos.z, this.target.pos.x, this.target.pos.y + 1.15, this.target.pos.z)) {
          this.shoot(dist)
        }
      }
    } else {
      this.character.aiming = false
    }
    this.character.setPosition(this.pos.x, this.pos.y, this.pos.z)
    this.character.setYaw(this.yaw)
    this.character.moveSpeed = Math.hypot(this.velocityX, this.velocityZ)
    this.character.update(dt, time)
  }

  think() {
    const game = this.game
    const zone = game.zone
    if (this.healTimer > 0) return
    if (!zone) return
    const zoneState = zone.getState()
    const outside = zone.isOutside(this.pos.x, this.pos.z)
    const nearEdge = zone.distanceOutside(this.pos.x, this.pos.z) > -14
    if (outside || (nearEdge && zoneState.shrinking)) {
      this.state = 'rotate'
      this.target = null
      this.dest = this._zonePoint(0.55)
      return
    }
    this.targetScan -= 0.3
    if (this.targetScan <= 0) {
      this.targetScan = 0.45 + Math.random() * 0.3
      this.target = game.findBotTarget(this)
    }
    if (this.target && this.target.alive) {
      const dist = distance2D(this.pos.x, this.pos.z, this.target.pos.x, this.target.pos.z)
      if (dist < this.skill.sight && game.world.hasLineOfSight(this.pos.x, this.pos.y + 1.4, this.pos.z, this.target.pos.x, this.target.pos.y + 1.1, this.target.pos.z)) {
        this.state = 'fight'
        return
      }
    }
    if (this.health < 52 && this.medkits > 0 && Math.random() < this.skill.healChance) {
      this.state = 'heal'
      this.healTimer = 2.6
      this.target = null
      this.dest = null
      this.character.startReload(2.6)
      return
    }
    const item = game.loot.nearest(this.pos.x, this.pos.y, this.pos.z, 34)
    if (item && (this._wantsLoot(item) || this.state !== 'loot')) {
      this.lootTarget = item
      this.state = 'loot'
      this.dest = { x: item.x, z: item.z }
      this.target = null
      return
    }
    if (!this.dest || distance2D(this.pos.x, this.pos.z, this.dest.x, this.dest.z) < 3) {
      this.dest = this._zonePoint(0.62)
    }
    this.state = 'rotate'
    this.target = null
  }

  _wantsLoot(item) {
    const data = item.data
    if (data.type === 'weapon') {
      const def = weaponById(data.weapon)
      if (!def) return false
      const order = { common: 0, rare: 1, epic: 2, legendary: 3 }
      return (order[def.rarity] || 0) > (order[this.weapon.rarity] || 0) || data.weapon === this.weapon.id
    }
    if (data.type === 'armor') return data.level > this.armorLevel
    if (data.type === 'helmet') return data.level > this.helmet
    if (data.type === 'med') return this.medkits < 3
    if (data.type === 'ammo') return true
    return false
  }

  _zonePoint(factor = 0.6) {
    const zone = this.game.zone
    const a = Math.random() * Math.PI * 2
    const r = Math.sqrt(Math.random()) * Math.max(6, zone.radius * factor)
    return { x: zone.center.x + Math.cos(a) * r, z: zone.center.y + Math.sin(a) * r }
  }

  _move(dt) {
    if (this.healTimer > 0) {
      this.velocityX = damp(this.velocityX, 0, 10, dt)
      this.velocityZ = damp(this.velocityZ, 0, 10, dt)
      this._integrate(dt)
      return
    }
    let targetX = null, targetZ = null
    if (this.state === 'fight' && this.target && this.target.alive) {
      const dist = distance2D(this.pos.x, this.pos.z, this.target.pos.x, this.target.pos.z)
      const preferred = this.weapon.category === 'shotgun' ? 7 : this.weapon.category === 'sniper' ? 42 : this.weapon.category === 'smg' ? 14 : 26
      const toX = (this.target.pos.x - this.pos.x) / (dist || 1)
      const toZ = (this.target.pos.z - this.pos.z) / (dist || 1)
      if (dist > preferred + 5) { targetX = this.pos.x + toX * 12; targetZ = this.pos.z + toZ * 12 }
      else if (dist < preferred - 5) { targetX = this.pos.x - toX * 10; targetZ = this.pos.z - toZ * 10 }
      else {
        const strafe = Math.sin(this.game.matchTime * 1.4 + this.index) * 8
        targetX = this.pos.x - toZ * strafe
        targetZ = this.pos.z + toX * strafe
      }
    } else if (this.state === 'loot' && this.lootTarget?.active) {
      targetX = this.lootTarget.x
      targetZ = this.lootTarget.z
      if (distance2D(this.pos.x, this.pos.z, targetX, targetZ) < 1.6) {
        this.game.botPickup(this, this.lootTarget)
        this.lootTarget = null
        this.dest = null
        this.state = 'rotate'
      }
    } else if (this.dest) {
      targetX = this.dest.x
      targetZ = this.dest.z
      if (distance2D(this.pos.x, this.pos.z, targetX, targetZ) < 2) {
        this.dest = null
      }
    }
    let dx = 0, dz = 0
    if (targetX !== null) {
      const ddx = targetX - this.pos.x, ddz = targetZ - this.pos.z
      const len = Math.hypot(ddx, ddz)
      if (len > 0.2) { dx = ddx / len; dz = ddz / len }
    }
    let speed = this.state === 'fight' ? 3.4 : 4.9
    if (this.state === 'rotate') speed = 6.1
    if (this.state === 'loot') speed = 5.2
    const water = this.game.world.isWaterAt(this.pos.x, this.pos.z) && this.pos.y < WATER_LEVEL + 0.2
    if (water) speed *= 0.55
    this.velocityX = damp(this.velocityX, dx * speed, 7, dt)
    this.velocityZ = damp(this.velocityZ, dz * speed, 7, dt)
    if (this.state !== 'fight' && (dx || dz)) {
      this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 5, dt)
    }
    this._integrate(dt)
    if (water) this.pos.y = damp(this.pos.y, WATER_LEVEL - 1.1, 5, dt)
  }

  _integrate(dt) {
    let nx = this.pos.x + this.velocityX * dt
    let nz = this.pos.z + this.velocityZ * dt
    const resolved = this.game.world.resolveCollision(nx, nz, 0.42, this.pos.y, 1.8)
    nx = resolved.x
    nz = resolved.z
    this.pos.x = nx
    this.pos.z = nz
    const ground = this.game.world.groundHeight(this.pos.x, this.pos.z)
    this.pos.y = ground
    const moved = distance2D(this.pos.x, this.pos.z, this.lastPos.x, this.lastPos.z)
    if (moved < 0.01) {
      this.stuckTimer += dt
      if (this.stuckTimer > 1.2) {
        this.stuckTimer = 0
        this.dest = this._zonePoint(0.7)
        this.lastPos.copy(this.pos)
      }
    } else {
      this.stuckTimer = 0
      this.lastPos.copy(this.pos)
    }
  }

  shoot(dist) {
    const stats = this.stats
    this.fireTimer = 60 / stats.rpm * (this.weapon.auto ? 1 : 1.25)
    if (this.mag <= 0) {
      this.startReload()
      return
    }
    this.mag--
    const target = this.target
    if (!target || !target.alive) return
    const origin = this.character.getMuzzlePosition(new THREE.Vector3())
    const aim = new THREE.Vector3(target.pos.x, target.pos.y + (Math.random() > 0.86 ? 1.55 : 1.15), target.pos.z)
    const dir = aim.sub(origin).normalize()
    const error = (1 - this.skill.accuracy) * clamp(0.035 + dist * 0.0009, 0.03, 0.16)
    dir.x += (Math.random() - 0.5) * error * 2
    dir.y += (Math.random() - 0.5) * error * 1.2
    dir.z += (Math.random() - 0.5) * error * 2
    dir.normalize()
    this.game.effects.muzzle(origin, 0.85)
    if (distance2D(this.game.player.pos.x, this.game.player.pos.z, this.pos.x, this.pos.z) < 70) {
      this.game.audio.gunshot(this.weapon.category, 0.55)
    }
    for (let i = 0; i < (this.weapon.pellets || 1); i++) {
      const pelletDir = dir.clone()
      if ((this.weapon.pellets || 1) > 1) {
        pelletDir.x += (Math.random() - 0.5) * 0.08
        pelletDir.y += (Math.random() - 0.5) * 0.05
        pelletDir.z += (Math.random() - 0.5) * 0.08
        pelletDir.normalize()
      }
      this.game.resolveShot(origin, pelletDir, stats.range, stats.damage * this.skill.damage, this)
    }
    if (this.mag <= 0) this.startReload()
  }

  startReload() {
    if (this.reloading) return
    this.reloading = true
    this.reloadTimer = this.stats.reload
    this.character.startReload(this.stats.reload)
  }

  takeDamage(amount, source = null, headshot = false, silent = false) {
    if (!this.alive) return
    let dmg = amount
    if (headshot && this.helmet > 0) dmg *= 0.7
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.6)
      this.armor -= absorbed
      dmg -= absorbed
      if (this.armor <= 0.01) { this.armor = 0; this.armorLevel = 0 }
    }
    this.health -= dmg
    this.damageTaken += dmg
    this.character.setHealth(this.health, 100, this.armor)
    if (!silent) {
      this.game.effects.blood(new THREE.Vector3(this.pos.x, this.pos.y + 1.2, this.pos.z))
      if (source === this.game.player) {
        this.game.effects.damageNumber(new THREE.Vector3(this.pos.x, this.pos.y + 1.5, this.pos.z), dmg, headshot ? '#ff5a5a' : '#ffe2a8')
      }
      this.game.audio.hit(headshot)
    }
    if (this.health <= 0) {
      this.health = 0
      this.die(source)
    } else if (!this.target && source) {
      this.target = source
      this.state = 'fight'
      this.reactionTimer = this.skill.reaction * 0.5
    }
  }

  die(source = null) {
    if (!this.alive) return
    this.alive = false
    this.deadTime = 0
    this.character.die()
    this.game.onBotDeath(this, source)
  }

  dispose() {
    this.character.dispose()
  }
}

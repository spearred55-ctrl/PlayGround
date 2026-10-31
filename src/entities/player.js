import * as THREE from 'three'
import { Character } from '../entities/character.js'
import { WEAPONS, effectiveStats, weaponById } from '../game/weapons.js'
import { clamp, damp, dampAngle, distance2D, TAU } from '../core/utils.js'
import { WATER_LEVEL, PLAY_RADIUS } from '../world/terrain.js'

const ARMOR_POOL = { 1: 50, 2: 75, 3: 100 }
const BACKPACK_SLOTS = { 1: 8, 2: 12, 3: 16 }
const MAX_HEALTH = 100

export class Player {
  constructor(game, { name = 'NOVA-07', outfit, spawn, team = 0 } = {}) {
    this.game = game
    this.name = name
    this.outfit = outfit
    this.team = team
    this.isPlayer = true
    this.pos = new THREE.Vector3(spawn.x, spawn.y, spawn.z)
    this.vy = 0
    this.yaw = spawn.yaw ?? 0
    this.pitch = 0
    this.radius = 0.42
    this.height = 1.8
    this.health = MAX_HEALTH
    this.maxHealth = MAX_HEALTH
    this.armor = 0
    this.armorLevel = 0
    this.helmet = 0
    this.backpack = 1
    this.alive = true
    this.kills = 0
    this.damageDealt = 0
    this.shotsFired = 0
    this.shotsHit = 0
    this.weapons = [null, null, { def: WEAPONS.melee_machete, mag: 1, attachments: [] }]
    this.currentSlot = 0
    this.ammo = { light: 0, heavy: 0, shells: 0, sniper: 0, pistol: 60 }
    this.items = { medkit: 1, bandage: 2, grenade: 1 }
    this.fireTimer = 0
    this.reloading = false
    this.reloadTimer = 0
    this.reloadTotal = 1
    this.healing = null
    this.healTimer = 0
    this.healTotal = 1
    this.aiming = false
    this.crouching = false
    this.swimming = false
    this.sprinting = false
    this.onGround = false
    this.vehicle = null
    this.walkPhase = 0
    this.stepTimer = 0
    this.grenadeCooldown = 0
    this.hurtFlash = 0
    this.lastDamageTime = -99
    this.character = new Character({
      scene: game.scene,
      outfit,
      name,
      teamColor: outfit.accent || '#ff8a2b',
      isPlayer: true,
      quality: game.quality,
      level: game.profile.level,
    })
    this.character.setPosition(this.pos.x, this.pos.y, this.pos.z)
    this.character.setYaw(this.yaw)
    this.giveWeapon('ps_sidekick', [], true)
    this.setSlot(0)
    this.character.setArmor(0, 0)
  }

  get weaponEntry() { return this.weapons[this.currentSlot] }
  get weapon() { return this.weaponEntry?.def || null }
  get stats() { return this.weaponEntry ? effectiveStats(this.weaponEntry.def, this.weaponEntry.attachments) : null }
  get eyeHeight() { return this.crouching ? 1.12 : this.swimming ? 1.2 : 1.5 }
  get maxItems() { return BACKPACK_SLOTS[this.backpack] || 8 }

  setSlot(slot) {
    if (slot < 0 || slot > 2) return
    if (slot !== 2 && !this.weapons[slot]) return
    this.currentSlot = slot
    this.reloading = false
    this.reloadTimer = 0
    const entry = this.weaponEntry
    if (entry) {
      this.character.setWeapon(entry.def, entry.attachments)
      this.character.startReload(0.01)
      this.character.reloading = false
    }
  }

  swapWeapon() {
    const a = this.weapons[0] ? 0 : -1
    const b = this.weapons[1] ? 1 : -1
    if (a === -1 && b === -1) { this.setSlot(2); return }
    if (a === -1) { this.setSlot(1); return }
    if (b === -1) { this.setSlot(0); return }
    this.setSlot(this.currentSlot === 0 ? 1 : 0)
  }

  giveWeapon(id, attachments = [], select = false) {
    const def = weaponById(id)
    if (!def) return false
    let slot = this.weapons[0] ? (this.weapons[1] ? -1 : 1) : 0
    if (slot === -1) {
      slot = this.currentSlot === 1 ? 1 : 0
      this.dropWeapon(slot)
    }
    this.weapons[slot] = { def, mag: def.mag, attachments: [...attachments] }
    if (select) this.setSlot(slot)
    return true
  }

  dropWeapon(slot) {
    const entry = this.weapons[slot]
    if (!entry || slot === 2) return
    this.weapons[slot] = null
    if (this.currentSlot === slot) {
      this.currentSlot = 2
      this.character.setWeapon(WEAPONS.melee_machete, [])
    }
    this.game.loot?.dropAt(this.pos.x, this.pos.y + 0.6, this.pos.z, {
      type: 'weapon', weapon: entry.def.id, rarity: entry.def.rarity, attachments: [...entry.attachments],
    }, 0.5)
  }

  ammoFor(entry = this.weaponEntry) {
    if (!entry) return 0
    const type = entry.def.ammo
    if (!type || type === 'none') return Infinity
    return this.ammo[type] || 0
  }

  canPickup(item) {
    const data = item.data
    if (data.type === 'med' || data.type === 'grenade') {
      return this.items.medkit + this.items.bandage + this.items.grenade < this.maxItems
    }
    return true
  }

  pickup(item) {
    if (!item || !item.active) return { ok: false }
    const data = item.data
    let message = ''
    let rarity = data.rarity || 'common'
    switch (data.type) {
      case 'weapon': {
        const def = weaponById(data.weapon)
        let slot = this.weapons[0] ? (this.weapons[1] ? -1 : 1) : 0
        if (slot === -1) {
          slot = this.currentSlot === 2 ? 0 : this.currentSlot
          this.dropWeapon(slot)
        }
        this.weapons[slot] = { def, mag: def.mag, attachments: [...(data.attachments || [])] }
        this.setSlot(slot)
        message = `PICKED UP ${def.name}`
        break
      }
      case 'ammo': {
        this.ammo[data.ammo] = (this.ammo[data.ammo] || 0) + data.amount
        message = `+${data.amount} ${data.ammo.toUpperCase()} AMMO`
        break
      }
      case 'armor': {
        if (data.level <= this.armorLevel) return { ok: false, message: 'BETTER ARMOR EQUIPPED' }
        this.armorLevel = data.level
        this.armor = ARMOR_POOL[data.level]
        this.character.setArmor(this.armor, this.helmet)
        message = `ARMOR LV${data.level} EQUIPPED`
        break
      }
      case 'helmet': {
        if (data.level <= this.helmet) return { ok: false, message: 'BETTER HELMET EQUIPPED' }
        this.helmet = data.level
        this.character.setArmor(this.armor, this.helmet)
        message = `HELMET LV${data.level} EQUIPPED`
        break
      }
      case 'backpack': {
        if (data.level <= this.backpack) return { ok: false, message: 'BETTER PACK EQUIPPED' }
        this.backpack = data.level
        this.character.setBackpack(data.level)
        message = `BACKPACK LV${data.level} EQUIPPED`
        break
      }
      case 'med': {
        if (!this.canPickup(item)) return { ok: false, message: 'PACK FULL' }
        if (data.item === 'medkit') this.items.medkit++
        else this.items.bandage++
        message = data.item === 'medkit' ? 'MEDKIT ACQUIRED' : 'BANDAGE ACQUIRED'
        break
      }
      case 'grenade': {
        if (!this.canPickup(item)) return { ok: false, message: 'PACK FULL' }
        this.items.grenade += data.amount
        message = 'FRAG GRENADE ACQUIRED'
        break
      }
      case 'attachment': {
        const entry = this.weaponEntry
        if (!entry || entry.def.category === 'melee') return { ok: false, message: 'NO WEAPON FOR ATTACHMENT' }
        if (entry.attachments.includes(data.attachment)) return { ok: false, message: 'ALREADY ATTACHED' }
        entry.attachments.push(data.attachment)
        this.character.setWeapon(entry.def, entry.attachments)
        message = `ATTACHED ${data.attachment.replace('_', ' ').toUpperCase()}`
        break
      }
      default: return { ok: false }
    }
    this.game.loot.remove(item)
    this.game.effects?.pickup(new THREE.Vector3(item.x, item.y, item.z), data.type === 'weapon' ? 0xffb347 : 0x63dcff)
    this.game.audio.pickup(rarity)
    return { ok: true, message, rarity }
  }

  startReload() {
    if (this.currentSlot === 2 || this.reloading) return
    const entry = this.weaponEntry
    if (!entry) return
    const stats = this.stats
    const missing = stats.mag - entry.mag
    if (missing <= 0) return
    if (this.ammoFor(entry) <= 0) { this.game.ui?.toast('NO RESERVE AMMO', 'warn'); return }
    this.reloading = true
    this.reloadTotal = stats.reload
    this.reloadTimer = stats.reload
    this.character.startReload(stats.reload)
    this.game.audio.reload()
  }

  finishReload() {
    const entry = this.weaponEntry
    if (!entry) return
    const stats = this.stats
    const type = entry.def.ammo
    if (type && type !== 'none') {
      const need = stats.mag - entry.mag
      const take = Math.min(need, this.ammo[type] || 0)
      entry.mag += take
      this.ammo[type] -= take
    } else {
      entry.mag = stats.mag
    }
    this.reloading = false
    this.reloadTimer = 0
    this.character.reloading = false
  }

  tryFire() {
    if (!this.alive || this.vehicle || this.reloading || this.healing) return
    if (this.fireTimer > 0) return
    const entry = this.weaponEntry
    if (!entry) return
    const weapon = entry.def
    const stats = this.stats
    if (this.currentSlot === 2 || weapon.category === 'melee') {
      this.fireTimer = 60 / weapon.rpm
      this.character.shootRecoil(1)
      this.game.audio.gunshot('melee', 0.5)
      this.game.meleeAttack(this, stats.damage, stats.range)
      return
    }
    if (entry.mag <= 0) {
      this.game.audio.dryFire()
      this.fireTimer = 0.25
      this.startReload()
      return
    }
    if (this.swimming) {
      this.game.ui?.toast('CANNOT FIRE WHILE SWIMMING', 'warn')
      this.fireTimer = 0.4
      return
    }
    entry.mag--
    this.fireTimer = 60 / weapon.rpm
    this.shotsFired++
    this.character.shootRecoil(stats.recoil)
    const muzzle = this.character.getMuzzlePosition(new THREE.Vector3())
    const baseDir = this.getAimDirection(new THREE.Vector3())
    const moving = Math.hypot(this.velocityX || 0, this.velocityZ || 0) > 1
    let spreadDeg = stats.spread * (this.aiming ? 0.32 : 1) * (this.crouching ? 0.75 : 1) * (moving ? 1.55 : 1) * (this.onGround ? 1 : 1.5)
    if (weapon.category === 'sniper' && this.aiming) spreadDeg *= 0.3
    const pellets = weapon.pellets || 1
    for (let i = 0; i < pellets; i++) {
      const dir = this._spreadDirection(baseDir, spreadDeg)
      this.game.playerShoot(this, muzzle, dir, stats)
    }
    this.game.effects.muzzle(muzzle, weapon.category === 'sniper' ? 1.4 : 1)
    this.game.audio.gunshot(weapon.category, this.aiming ? 0.7 : 1)
    this.pitch = clamp(this.pitch + stats.recoil * 0.012 * (this.aiming ? 0.7 : 1), -1.2, 1.2)
    this.game.cameraShake = Math.min(0.5, (this.game.cameraShake || 0) + stats.recoil * 0.05)
    if (entry.mag <= 0) setTimeout(() => { if (this.alive && this.weaponEntry === entry && entry.mag === 0) this.startReload() }, 220)
  }

  _spreadDirection(base, spreadDeg) {
    const dir = base.clone()
    if (spreadDeg <= 0.001) return dir
    const rad = spreadDeg * Math.PI / 180
    const r = Math.sqrt(Math.random()) * rad
    const a = Math.random() * Math.PI * 2
    const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize()
    if (right.lengthSq() < 0.001) right.set(1, 0, 0)
    const up = new THREE.Vector3().crossVectors(right, dir).normalize()
    dir.addScaledVector(right, Math.cos(a) * r).addScaledVector(up, Math.sin(a) * r).normalize()
    return dir
  }

  startHeal(preferred = null) {
    if (this.healing || !this.alive) return
    if (this.health >= this.maxHealth) { this.game.ui?.toast('HEALTH ALREADY FULL', 'warn'); return }
    let item = null, amount = 0, duration = 0
    if (preferred && this.items[preferred] > 0) {
      item = preferred
    } else if (this.items.medkit > 0) {
      item = 'medkit'
    } else if (this.items.bandage > 0) {
      item = 'bandage'
    }
    if (item === 'medkit') { amount = 65; duration = 3.4 }
    else if (item === 'bandage') { amount = 28; duration = 1.7 }
    if (!item) { this.game.ui?.toast('NO MEDICAL SUPPLIES', 'warn'); return }
    this.healing = item
    this.healTimer = duration
    this.healTotal = duration
    this.healAmount = amount
    this.game.audio.heal()
    this.character.cancelReload()
  }

  useMedical(kind) {
    this.startHeal(kind)
  }

  dropItem(kind) {
    if (!this.items[kind] || this.items[kind] <= 0) return false
    this.items[kind]--
    if (kind === 'grenade') {
      this.game.loot?.dropAt(this.pos.x, this.pos.y + 0.5, this.pos.z, { type: 'grenade', amount: 1 }, 0.5)
    } else {
      this.game.loot?.dropAt(this.pos.x, this.pos.y + 0.5, this.pos.z, { type: 'med', item: kind }, 0.5)
    }
    return true
  }

  updateHeal(dt) {
    if (!this.healing) return
    this.healTimer -= dt
    if (this.healTimer <= 0) {
      if (this.items[this.healing] > 0) this.items[this.healing]--
      this.health = Math.min(this.maxHealth, this.health + this.healAmount)
      this.healing = null
      this.healTimer = 0
      this.game.ui?.toast(`+${Math.round(this.healAmount)} HEALTH`, 'good')
    }
  }

  throwGrenade() {
    if (!this.alive || this.items.grenade <= 0 || this.grenadeCooldown > 0 || this.vehicle) return
    this.items.grenade--
    this.grenadeCooldown = 1.2
    this.game.audio.throwGrenade()
    this.game.throwGrenade(this)
  }

  getAimDirection(target = new THREE.Vector3()) {
    const cp = Math.cos(this.pitch)
    return target.set(Math.sin(this.yaw) * cp, Math.sin(this.pitch), Math.cos(this.yaw) * cp).normalize()
  }

  getEyePosition(target = new THREE.Vector3()) {
    return target.set(this.pos.x, this.pos.y + this.eyeHeight, this.pos.z)
  }

  update(dt, time) {
    this.fireTimer = Math.max(0, this.fireTimer - dt)
    this.grenadeCooldown = Math.max(0, this.grenadeCooldown - dt)
    if (!this.alive) {
      this.character.update(dt, time)
      return
    }
    const input = this.game.input
    if (!this.game.paused && this.game.state === 'match') {
      const look = input.consumeLook()
      this.yaw -= look.x
      this.pitch = clamp(this.pitch - look.y, -1.15, 1.15)
      this.aiming = input.isDown('aim') && !this.sprinting && this.currentSlot !== 2
      this.crouching = input.isDown('crouch') && !this.swimming
      if (input.wasPressed('weapon1')) this.setSlot(0)
      if (input.wasPressed('weapon2')) this.setSlot(1)
      if (input.wasPressed('weapon3')) this.setSlot(2)
      if (input.wasPressed('swap')) this.swapWeapon()
      if (input.wasPressed('reload')) this.startReload()
      if (input.wasPressed('med')) this.startHeal()
      if (input.wasPressed('grenade')) this.throwGrenade()
      const firePressed = input.wasPressed('fire')
      const fireHeld = input.isDown('fire')
      if (this.weapon && (firePressed || (fireHeld && this.weapon.auto))) this.tryFire()
      if (firePressed && this.healing) { this.healing = null; this.healTimer = 0 }
    } else {
      this.aiming = false
      this.crouching = false
    }

    this.updateHeal(dt)
    if (this.reloading) {
      this.reloadTimer -= dt
      if (this.reloadTimer <= 0) this.finishReload()
    }

    if (this.vehicle) {
      this.pos.copy(this.vehicle.pos)
      this.character.group.visible = false
      this.character.update(dt, time)
      return
    }
    this.character.group.visible = true
    this._move(dt)
    this.character.setPosition(this.pos.x, this.pos.y, this.pos.z)
    this.character.setYaw(this.yaw)
    this.character.moveSpeed = Math.hypot(this.velocityX || 0, this.velocityZ || 0)
    this.character.aiming = this.aiming
    this.character.crouch = this.crouching
    this.character.swimming = this.swimming
    this.character.aimPitch = this.pitch
    this.character.update(dt, time)
  }

  _move(dt) {
    const input = this.game.input
    let mx = 0, my = 0
    if (this.game.state === 'match' && !this.game.paused) {
      mx = input.move.x
      my = input.move.y
    }
    const moveLen = Math.hypot(mx, my)
    if (moveLen > 1) { mx /= moveLen; my /= moveLen }
    const forwardX = Math.sin(this.yaw), forwardZ = Math.cos(this.yaw)
    const rightX = -Math.cos(this.yaw), rightZ = Math.sin(this.yaw)
    let dirX = forwardX * -my + rightX * mx
    let dirZ = forwardZ * -my + rightZ * mx

    const water = this.game.world.isWaterAt(this.pos.x, this.pos.z) && this.pos.y < WATER_LEVEL + 0.2
    this.swimming = water && this.pos.y < WATER_LEVEL - 0.3
    const sprintKey = this.game.input.isDown('sprint') || this.game.settings.autoSprint
    this.sprinting = sprintKey && !this.aiming && !this.crouching && !this.swimming && my < -0.2

    let speed = this.swimming ? 2.7 : this.crouching ? 2.4 : this.aiming ? 2.9 : this.sprinting ? 7.2 : 4.6
    if (this.weapon) speed *= clamp(this.weapon.mobility || 1, 0.6, 1.3)
    if (this.healing) speed *= 0.55

    let ladder = null
    for (const l of this.game.world.ladders) {
      if (Math.hypot(this.pos.x - l.x, this.pos.z - l.z) < (l.radius || 1.8) && this.pos.y > l.bottom - 1 && this.pos.y < l.top + 1) { ladder = l; break }
    }
    if (ladder && my < -0.1) {
      this.vy = 3.6
      this.onGround = false
    } else if (!this.swimming) {
      this.vy -= 18 * dt
    }

    const targetVX = dirX * speed
    const targetVZ = dirZ * speed
    this.velocityX = damp(this.velocityX || 0, targetVX, this.swimming ? 4 : 12, dt)
    this.velocityZ = damp(this.velocityZ || 0, targetVZ, this.swimming ? 4 : 12, dt)

    let nx = this.pos.x + this.velocityX * dt
    let nz = this.pos.z + this.velocityZ * dt
    const resolved = this.game.world.resolveCollision(nx, nz, this.radius, this.pos.y, this.height)
    nx = resolved.x
    nz = resolved.z
    const dist = Math.hypot(nx, nz)
    const limit = PLAY_RADIUS - 8
    if (dist > limit) { nx = nx / dist * limit; nz = nz / dist * limit }
    this.pos.x = nx
    this.pos.z = nz

    if (this.swimming) {
      this.vy = 0
      this.pos.y = damp(this.pos.y, WATER_LEVEL - 1.05 + Math.sin(performance.now() * 0.002) * 0.06, 5, dt)
      this.onGround = false
    } else {
      this.pos.y += this.vy * dt
      const ground = this.game.world.groundHeight(this.pos.x, this.pos.z)
      if (this.pos.y <= ground) {
        this.pos.y = ground
        this.vy = 0
        this.onGround = true
      } else {
        this.onGround = false
      }
      if (this.onGround && this.game.input.wasPressed('jump')) {
        this.vy = 6.4
        this.onGround = false
        this.game.audio.footstep('grass')
      }
    }

    const hspeed = Math.hypot(this.velocityX, this.velocityZ)
    if (hspeed > 0.6 && this.onGround) {
      this.stepTimer -= dt
      if (this.stepTimer <= 0) {
        this.game.audio.footstep(this.swimming ? 'water' : 'grass')
        this.stepTimer = this.sprinting ? 0.3 : 0.45
      }
    }
  }

  takeDamage(amount, source = null, headshot = false) {
    if (!this.alive || this.game.state !== 'match') return
    let dmg = amount
    if (headshot && this.helmet > 0) dmg *= 0.68
    if (this.armor > 0) {
      const absorbed = Math.min(this.armor, dmg * 0.62)
      this.armor -= absorbed
      dmg -= absorbed
      if (this.armor <= 0.01) { this.armor = 0; this.armorLevel = 0; this.character.setArmor(0, this.helmet) }
    }
    this.health -= dmg
    this.lastDamageTime = this.game.matchTime
    this.hurtFlash = 1
    this.game.audio.damage()
    this.game.onPlayerHurt(dmg, source, headshot)
    if (this.health <= 0) {
      this.health = 0
      this.die(source)
    }
  }

  die(source = null) {
    if (!this.alive) return
    this.alive = false
    this.health = 0
    this.healing = null
    this.reloading = false
    this.character.die()
    this.game.onPlayerDeath(source)
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount)
  }

  getHudState() {
    const entry = this.weaponEntry
    const stats = entry ? this.stats : null
    return {
      health: this.health,
      armor: this.armor,
      helmet: this.helmet,
      backpack: this.backpack,
      weaponName: entry ? entry.def.name : 'UNARMED',
      category: entry ? entry.def.category : '',
      mag: entry ? entry.mag : 0,
      magSize: stats ? stats.mag : 0,
      reserve: entry ? this.ammoFor(entry) : 0,
      ammoType: entry ? entry.def.ammo : '',
      auto: entry ? entry.def.auto : false,
      reloading: this.reloading,
      reloadProgress: this.reloading ? 1 - this.reloadTimer / Math.max(0.01, this.reloadTotal) : 0,
      healing: this.healing,
      healProgress: this.healing ? 1 - this.healTimer / Math.max(0.01, this.healTotal) : 0,
      swimming: this.swimming,
      crouching: this.crouching,
      sprinting: this.sprinting,
      aiming: this.aiming,
      vehicle: !!this.vehicle,
    }
  }

  dispose() {
    this.character.dispose()
  }
}

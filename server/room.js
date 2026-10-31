import { getHeight, PLAY_RADIUS, PAD_DEFS } from '../src/world/terrain.js'
import { WEAPON_LIST, weaponById } from '../src/game/weapons.js'
import { clamp, mulberry32, TAU } from '../src/core/utils.js'

const TICK_RATE = 20
const TICK_DT = 1 / TICK_RATE
const EYE_HEIGHT = 1.5
const WALK_SPEED = 5.2
const SPRINT_SPEED = 7.4
const CROUCH_SPEED = 2.8
const PLAY_LIMIT = PLAY_RADIUS - 12
const START_DELAY = 4
const ARMOR_POOL = { 1: 50, 2: 75, 3: 100 }
const MAX_EVENTS = 160

export const PHASES = [
  { wait: 22, shrink: 24, radius: 430, dps: 2 },
  { wait: 17, shrink: 20, radius: 305, dps: 3.5 },
  { wait: 15, shrink: 17, radius: 205, dps: 5 },
  { wait: 13, shrink: 15, radius: 132, dps: 7 },
  { wait: 11, shrink: 13, radius: 78, dps: 9 },
  { wait: 9, shrink: 11, radius: 34, dps: 12 },
  { wait: 7, shrink: 9, radius: 0, dps: 16 },
]

const BOT_NAMES = [
  'VANTA-11', 'ZEPHYR-19', 'VULCAN-60', 'RONIN-10', 'SABLE-12', 'CIPHER-13',
  'ORION-04', 'MIRAGE-22', 'TALON-08', 'EMBER-31', 'NOMAD-17', 'HALO-26',
  'RIFT-05', 'KESTREL-33', 'ONYX-14', 'SOLACE-09', 'DRIFT-21', 'ARCLIGHT-02',
  'VECTOR-28', 'REAVER-07', 'NOVA-15', 'SPECTER-18', 'ATLAS-24', 'FOXGLOVE-06',
  'IRONSIDE-30', 'PALE HORSE-01', 'CINDER-23', 'WRAITH-16', 'SENTINEL-27',
  'MERCY-29', 'RAVEN-03', 'STATIC-20', 'TEMPEST-25', 'GLACIER-32', 'LONGBOW-34',
  'NIGHTJAR-35', 'QUARRY-36', 'SABLE-37', 'THORN-38', 'UMBRA-39', 'VIGIL-40',
  'WILDFIRE-41', 'YARROW-42', 'ZERO-43', 'ASH-44', 'BRIAR-45', 'COBALT-46',
  'DUSK-47', 'ECHO-48',
]

const SPAWN_WEAPONS = WEAPON_LIST.filter(w => !['melee', 'grenade'].includes(w.category))

function sanitizeName(value) {
  return String(value || '').toUpperCase().replace(/[^A-Z0-9 _-]/g, '').slice(0, 14) || 'OPERATIVE'
}

function round(n, places = 2) {
  const f = 10 ** places
  return Math.round(n * f) / f
}

function normalize(x, z) {
  const len = Math.hypot(x, z)
  if (len < 1e-6) return [0, 0]
  return [x / len, z / len]
}

function raySphere(origin, dir, center, radius) {
  const ox = origin.x - center.x
  const oy = origin.y - center.y
  const oz = origin.z - center.z
  const b = ox * dir.x + oy * dir.y + oz * dir.z
  const c = ox * ox + oy * oy + oz * oz - radius * radius
  const disc = b * b - c
  if (disc < 0) return null
  const sq = Math.sqrt(disc)
  const t1 = -b - sq
  const t2 = -b + sq
  if (t1 >= 0) return t1
  if (t2 >= 0) return t2
  return null
}

function terrainBlocked(origin, dir, maxDist) {
  // Cheap height-map occlusion. Buildings are intentionally not part of the
  // optional dedicated-server collision model; the local build owns full props.
  const steps = 14
  for (let i = 1; i <= steps; i++) {
    const t = maxDist * i / steps
    const x = origin.x + dir.x * t
    const z = origin.z + dir.z * t
    const y = origin.y + dir.y * t
    if (y < getHeight(x, z) + 0.18) return t
  }
  return maxDist
}

function chooseZoneCenter(rng, current, nextRadius) {
  const maxOffset = Math.max(0, 560 - nextRadius) * 0.82
  const angle = rng() * TAU
  const dist = Math.sqrt(rng()) * maxOffset
  let x = current.x + Math.cos(angle) * dist
  let z = current.z + Math.sin(angle) * dist
  const limit = Math.max(0, PLAY_LIMIT - nextRadius)
  const len = Math.hypot(x, z)
  if (len > limit && len > 0.001) { x = x / len * limit; z = z / len * limit }
  return { x, z }
}

export class Room {
  constructor({ id = 'room-1', mode = 'solo', matchSize = 25, seed = 1337, startDelay = START_DELAY } = {}) {
    this.id = id
    this.mode = ['solo', 'duo', 'squad', 'practice'].includes(mode) ? mode : 'solo'
    this.matchSize = clamp(Math.round(Number(matchSize) || 25), 2, 50)
    this.seed = seed
    this.startDelay = startDelay
    this.rng = mulberry32(seed)
    this.humans = new Map()
    this.bots = []
    this.events = []
    this.started = false
    this.finished = false
    this.time = 0
    this.age = 0
    this.tick = 0
    this.teamCounter = 1
    this.zoneTick = 0
    this.winner = null
    this.zone = {
      phase: 0, radius: 560, center: { x: 0, z: 0 },
      targetRadius: PHASES[0].radius,
      targetCenter: chooseZoneCenter(this.rng, { x: 0, z: 0 }, PHASES[0].radius),
      state: 'wait', timer: PHASES[0].wait, shrinkDuration: PHASES[0].shrink,
      fromRadius: 560, fromCenter: { x: 0, z: 0 }, finished: false,
    }
    this._spawned = 0
  }

  get entities() { return [...this.humans.values(), ...this.bots] }
  get humanCount() { return this.humans.size }
  get aliveCount() { return this.entities.reduce((n, e) => n + (e.alive ? 1 : 0), 0) }
  get aliveTeams() {
    const teams = new Set()
    for (const e of this.entities) if (e.alive) teams.add(e.team)
    return teams.size
  }

  _nextTeam() {
    if (this.mode === 'solo' || this.mode === 'practice') return this.teamCounter++
    return 0
  }

  _spawnPoint() {
    const pads = PAD_DEFS.filter(p => p.type !== 'mountain' && p.type !== 'lake')
    for (let attempt = 0; attempt < 160; attempt++) {
      const pad = pads[Math.floor(this.rng() * pads.length)]
      const a = this.rng() * TAU
      const r = pad.r * (0.7 + this.rng() * 0.5)
      const x = pad.x + Math.cos(a) * r
      const z = pad.z + Math.sin(a) * r
      const y = getHeight(x, z)
      if (y < 0.8 || Math.hypot(x, z) > PLAY_LIMIT) continue
      if (this.entities.some(e => Math.hypot(e.pos.x - x, e.pos.z - z) < 9)) continue
      return { x, y, z }
    }
    for (let i = 0; i < 40; i++) {
      const a = this.rng() * TAU
      const r = 80 + this.rng() * 380
      const x = Math.cos(a) * r
      const z = Math.sin(a) * r
      const y = getHeight(x, z)
      if (y > 0.8 && !this.entities.some(e => Math.hypot(e.pos.x - x, e.pos.z - z) < 6)) return { x, y, z }
    }
    return { x: 0, y: getHeight(0, 0), z: 0 }
  }

  _newWeapon() {
    const def = SPAWN_WEAPONS[Math.floor(this.rng() * SPAWN_WEAPONS.length)]
    return { weaponId: def.id, mag: def.mag, reserve: def.mag * 3, reloading: false, reloadTimer: 0 }
  }

  _newEntity({ name, isBot, team, spawn, weapon = null }) {
    const p = spawn || this._spawnPoint()
    const w = weapon || this._newWeapon()
    return {
      id: (isBot ? 'bot-' : 'player-') + (++this._spawned),
      name: sanitizeName(name),
      isBot,
      team,
      pos: { x: p.x, y: p.y, z: p.z },
      vy: 0,
      yaw: this.rng() * TAU,
      pitch: 0,
      health: 100,
      maxHealth: 100,
      armor: 0,
      armorLevel: 0,
      helmet: 0,
      backpack: 1,
      alive: true,
      kills: 0,
      deaths: 0,
      damageDealt: 0,
      weaponId: w.weaponId,
      mag: w.mag,
      reserve: w.reserve,
      reloading: false,
      reloadTimer: 0,
      fireCooldown: 0,
      lastShot: 0,
      lastDamage: -99,
      medkits: 1,
      onGround: true,
      crouch: false,
      input: { moveX: 0, moveZ: 0, sprint: false, jump: false, fire: false, crouch: false, aiming: false },
      lastSeq: -1,
    }
  }

  addHuman({ name = 'OPERATIVE' } = {}) {
    if (this.started || this.finished) return null
    if (this.humans.size >= this.matchSize) return null
    const human = this._newEntity({
      name: sanitizeName(name), isBot: false, team: this._nextTeam(),
      weapon: { weaponId: 'ps_sidekick', mag: 15, reserve: 60, reloading: false, reloadTimer: 0 },
    })
    this.humans.set(human.id, human)
    this._trimBots()
    this.events.push({ type: 'join', id: human.id, name: human.name, t: round(this.time, 2) })
    if (this.humans.size >= this.matchSize) this.startMatch()
    return human
  }

  removeHuman(id) {
    const human = this.humans.get(id)
    if (!human) return false
    this.humans.delete(id)
    this.events.push({ type: 'leave', id, name: human.name, t: round(this.time, 2) })
    if (!this.started && !this.finished) {
      this._trimBots()
      this._fillBots(this.matchSize - this.humans.size)
    }
    return true
  }

  _trimBots() {
    const overflow = this.humans.size + this.bots.length - this.matchSize
    if (overflow > 0) this.bots.splice(0, overflow)
  }

  _fillBots(count) {
    const n = Math.max(0, Math.min(count, this.matchSize - this.humans.size - this.bots.length))
    for (let i = 0; i < n; i++) {
      const name = BOT_NAMES[(this.bots.length + i) % BOT_NAMES.length] + (this.bots.length + i >= BOT_NAMES.length ? '-' + (this.bots.length + i) : '')
      this.bots.push(this._newEntity({ name, isBot: true, team: this._nextTeam() }))
    }
  }

  startMatch() {
    if (this.started || this.finished) return false
    this._fillBots(this.matchSize - this.humans.size - this.bots.length)
    this.started = true
    this.time = 0
    this.events.push({ type: 'match_start', matchSize: this.humans.size + this.bots.length, humans: this.humans.size })
    return true
  }

  setInput(id, input = {}) {
    const p = this.humans.get(id)
    if (!p || !p.alive) return false
    const num = (value, min, max, fallback = 0) => {
      const n = Number(value)
      return Number.isFinite(n) ? clamp(n, min, max) : fallback
    }
    p.input = {
      moveX: num(input.moveX, -1, 1),
      moveZ: num(input.moveZ, -1, 1),
      sprint: !!input.sprint,
      jump: !!input.jump,
      fire: !!input.fire,
      crouch: !!input.crouch,
      aiming: !!input.aiming,
    }
    if (Number.isFinite(Number(input.yaw))) p.yaw = Number(input.yaw)
    if (Number.isFinite(Number(input.pitch))) p.pitch = clamp(Number(input.pitch), -1.25, 1.25)
    if (Number.isFinite(Number(input.seq))) p.lastSeq = Number(input.seq)
    if (input.reload) this._startReload(p)
    return true
  }

  _startReload(p) {
    if (p.reloading || !p.alive) return
    const def = weaponById(p.weaponId)
    if (!def || def.ammo === 'none') return
    if (p.mag >= def.mag || p.reserve <= 0) return
    p.reloading = true
    p.reloadTimer = def.reload
  }

  _finishReload(p) {
    const def = weaponById(p.weaponId)
    if (!def) return
    const need = def.mag - p.mag
    const take = Math.min(need, p.reserve)
    p.mag += take
    p.reserve -= take
    p.reloading = false
    p.reloadTimer = 0
  }

  _moveEntity(e, input, dt) {
    let mx = input.moveX
    let mz = input.moveZ
    const len = Math.hypot(mx, mz)
    if (len > 1) { mx /= len; mz /= len }
    const speed = input.crouch ? CROUCH_SPEED : input.sprint ? SPRINT_SPEED : WALK_SPEED
    const sin = Math.sin(e.yaw)
    const cos = Math.cos(e.yaw)
    e.pos.x += (mx * cos + mz * sin) * speed * dt
    e.pos.z += (-mx * sin + mz * cos) * speed * dt
    const dist = Math.hypot(e.pos.x, e.pos.z)
    if (dist > PLAY_LIMIT) {
      const s = PLAY_LIMIT / dist
      e.pos.x *= s
      e.pos.z *= s
    }
    const ground = getHeight(e.pos.x, e.pos.z)
    if (input.jump && e.onGround) {
      e.vy = 6.2
      e.onGround = false
    }
    e.vy -= 18 * dt
    e.pos.y += e.vy * dt
    if (e.pos.y <= ground) {
      e.pos.y = ground
      e.vy = 0
      e.onGround = true
    }
    e.crouch = !!input.crouch
  }

  _rayOrigin(e) {
    return { x: e.pos.x, y: e.pos.y + (e.crouch ? 1.12 : EYE_HEIGHT), z: e.pos.z }
  }

  _aimDir(e, spreadDeg = 0) {
    const cp = Math.cos(e.pitch)
    let x = Math.sin(e.yaw) * cp
    let y = Math.sin(e.pitch)
    let z = Math.cos(e.yaw) * cp
    if (spreadDeg > 0) {
      const a = (this.rng() - 0.5) * spreadDeg * Math.PI / 180
      const b = (this.rng() - 0.5) * spreadDeg * Math.PI / 180
      const rx = Math.cos(e.yaw)
      const rz = -Math.sin(e.yaw)
      x += rx * a + Math.sin(e.yaw) * b
      z += rz * a + Math.cos(e.yaw) * b
      const l = Math.hypot(x, y, z) || 1
      x /= l; y /= l; z /= l
    }
    return { x, y, z }
  }

  _isEnemy(a, b) { return a !== b && a.team !== b.team }

  _resolveShot(shooter, def, spreadDeg = 0) {
    const origin = this._rayOrigin(shooter)
    const dir = this._aimDir(shooter, spreadDeg)
    const terrainDist = terrainBlocked(origin, dir, def.range)
    let best = null
    let bestDist = terrainDist
    let headshot = false
    for (const target of this.entities) {
      if (!target.alive || !this._isEnemy(shooter, target)) continue
      const chest = { x: target.pos.x, y: target.pos.y + 1.12, z: target.pos.z }
      const head = { x: target.pos.x, y: target.pos.y + 1.62, z: target.pos.z }
      const tc = raySphere(origin, dir, chest, 0.48)
      if (tc !== null && tc < bestDist) { bestDist = tc; best = target; headshot = false }
      const th = raySphere(origin, dir, head, 0.25)
      if (th !== null && th < bestDist) { bestDist = th; best = target; headshot = true }
    }
    const end = {
      x: origin.x + dir.x * Math.min(bestDist, def.range),
      y: origin.y + dir.y * Math.min(bestDist, def.range),
      z: origin.z + dir.z * Math.min(bestDist, def.range),
    }
    this._pushEvent({ type: 'shot', shooter: shooter.id, weapon: def.id, origin, end })
    if (!best) return { hit: false, damage: 0, killed: false }
    let damage = def.damage * (headshot ? 1.85 : 1)
    if (headshot && best.helmet > 0) damage *= 0.68
    if (best.armor > 0) {
      const absorbed = Math.min(best.armor, damage * 0.62)
      best.armor -= absorbed
      damage -= absorbed
      if (best.armor <= 0.01) { best.armor = 0; best.armorLevel = 0 }
    }
    best.health = Math.max(0, best.health - damage)
    best.lastDamage = this.time
    shooter.damageDealt += damage
    let killed = false
    if (best.health <= 0 && best.alive) {
      best.alive = false
      best.deaths++
      shooter.kills++
      killed = true
      this._pushEvent({ type: 'kill', killer: shooter.id, killerName: shooter.name, victim: best.id, victimName: best.name, weapon: def.id, headshot })
    } else {
      this._pushEvent({ type: 'hit', shooter: shooter.id, target: best.id, damage: round(damage, 1), headshot })
    }
    return { hit: true, damage, killed, target: best, headshot }
  }

  _updateCombat(e, dt, fireHeld, spreadDeg = 0) {
    const def = weaponById(e.weaponId)
    if (!def) return
    e.fireCooldown = Math.max(0, e.fireCooldown - dt)
    if (e.reloading) {
      e.reloadTimer -= dt
      if (e.reloadTimer <= 0) this._finishReload(e)
      return
    }
    if (e.mag <= 0) {
      this._startReload(e)
      return
    }
    if (!fireHeld || e.fireCooldown > 0) return
    e.fireCooldown = 60 / Math.max(30, def.rpm)
    e.mag--
    e.lastShot = this.time
    this._resolveShot(e, def, spreadDeg)
    if (e.mag <= 0) this._startReload(e)
  }

  _updateHuman(p, dt) {
    if (!p.alive) return
    const input = p.input
    this._moveEntity(p, input, dt)
    this._updateCombat(p, dt, input.fire, defSpread(p.weaponId))
    if (this.time - p.lastDamage > 6 && p.health < 55 && p.medkits > 0) {
      p.medkits--
      p.health = Math.min(100, p.health + 35)
      this._pushEvent({ type: 'heal', id: p.id, amount: 35 })
    }
  }

  _updateBot(bot, dt) {
    if (!bot.alive) return
    const target = this._nearestEnemy(bot, 120)
    const zone = this.zone
    const outside = Math.hypot(bot.pos.x - zone.center.x, bot.pos.z - zone.center.z) > zone.radius - 4
    let moveX = 0, moveZ = 0, sprint = false, fire = false
    if (outside) {
      const dx = zone.center.x - bot.pos.x
      const dz = zone.center.z - bot.pos.z
      const yaw = Math.atan2(dx, dz)
      bot.yaw = this._turnToward(bot.yaw, yaw, dt * 4)
      moveX = 0; moveZ = 1; sprint = true
    } else if (target) {
      const dx = target.pos.x - bot.pos.x
      const dz = target.pos.z - bot.pos.z
      const dist = Math.hypot(dx, dz)
      const desired = Math.atan2(dx, dz)
      bot.yaw = this._turnToward(bot.yaw, desired, dt * 5.2)
      const eye = bot.pos.y + EYE_HEIGHT
      const ty = target.pos.y + 1.1
      bot.pitch = clamp(Math.atan2(ty - eye, Math.max(1, dist)), -0.6, 0.6)
      if (dist > 26) { moveX = 0; moveZ = 1; sprint = true }
      else if (dist < 9) { moveX = 0; moveZ = -1 }
      else { moveX = Math.sin(this.time * 1.3 + bot.pos.x * 0.1) * 0.6; moveZ = 0.15 }
      fire = dist < 88
    } else {
      const wobble = Math.sin(this.time * 0.5 + bot.pos.x * 0.02)
      bot.yaw = this._turnToward(bot.yaw, bot.yaw + wobble * 0.4, dt * 2)
      moveX = 0; moveZ = 0.6; sprint = false
      if (Math.hypot(bot.pos.x, bot.pos.z) > PLAY_LIMIT - 30) {
        bot.yaw = this._turnToward(bot.yaw, Math.atan2(-bot.pos.x, -bot.pos.z), dt * 3)
      }
    }
    this._moveEntity(bot, { moveX, moveZ, sprint, jump: false, crouch: false }, dt)
    this._updateCombat(bot, dt, fire, 2.8)
    if (this.time - bot.lastDamage > 7 && bot.health < 45 && bot.medkits > 0) {
      bot.medkits--
      bot.health = Math.min(100, bot.health + 30)
    }
  }

  _turnToward(current, target, maxStep) {
    let d = ((target - current + Math.PI) % TAU + TAU) % TAU - Math.PI
    if (Math.abs(d) <= maxStep) return target
    return current + Math.sign(d) * maxStep
  }

  _nearestEnemy(e, maxDist = Infinity) {
    let best = null
    let bestD = maxDist
    for (const other of this.entities) {
      if (!other.alive || !this._isEnemy(e, other)) continue
      const d = Math.hypot(other.pos.x - e.pos.x, other.pos.z - e.pos.z)
      if (d < bestD) { bestD = d; best = other }
    }
    return best
  }

  _updateZone(dt) {
    const z = this.zone
    if (z.finished) return
    z.timer -= dt
    if (z.state === 'wait') {
      if (z.timer <= 0) {
        z.state = 'shrink'
        z.timer = z.shrinkDuration
        z.fromRadius = z.radius
        z.fromCenter = { ...z.center }
        this._pushEvent({ type: 'zone', kind: 'shrink', phase: z.phase + 1 })
      }
    } else {
      const t = clamp(1 - z.timer / z.shrinkDuration, 0, 1)
      const eased = t * t * (3 - 2 * t)
      z.radius = z.fromRadius + (z.targetRadius - z.fromRadius) * eased
      z.center.x = z.fromCenter.x + (z.targetCenter.x - z.fromCenter.x) * eased
      z.center.z = z.fromCenter.z + (z.targetCenter.z - z.fromCenter.z) * eased
      if (z.timer <= 0) {
        z.radius = z.targetRadius
        z.center = { ...z.targetCenter }
        z.phase++
        if (z.phase >= PHASES.length) {
          z.finished = true
          z.state = 'final'
          z.timer = 0
          this._pushEvent({ type: 'zone', kind: 'final', phase: z.phase })
        } else {
          const next = PHASES[z.phase]
          z.targetRadius = next.radius
          z.targetCenter = chooseZoneCenter(this.rng, z.center, next.radius)
          z.shrinkDuration = next.shrink
          z.timer = next.wait
          z.state = 'wait'
          this._pushEvent({ type: 'zone', kind: 'wait', phase: z.phase + 1 })
        }
      }
    }
    this.zoneTick += dt
    if (this.zoneTick >= 1) {
      this.zoneTick = 0
      const dps = PHASES[Math.min(z.phase, PHASES.length - 1)].dps
      for (const e of this.entities) {
        if (!e.alive) continue
        if (Math.hypot(e.pos.x - z.center.x, e.pos.z - z.center.z) > z.radius) {
          e.health = Math.max(0, e.health - dps)
          e.lastDamage = this.time
          if (e.health <= 0 && e.alive) {
            e.alive = false
            e.deaths++
            this._pushEvent({ type: 'kill', killer: null, killerName: 'THE ZONE', victim: e.id, victimName: e.name, weapon: 'ZONE' })
          }
        }
      }
    }
  }

  _pushEvent(event) {
    this.events.push({ ...event, t: round(this.time, 2) })
    if (this.events.length > MAX_EVENTS) this.events.splice(0, this.events.length - MAX_EVENTS)
  }

  _checkEnd() {
    if (this.finished || !this.started) return
    if (this.time < 2) return
    if (this.aliveTeams <= 1) {
      this.finished = true
      this.winner = this.entities.find(e => e.alive) || null
      this._pushEvent({
        type: 'match_end',
        winner: this.winner?.id || null,
        winnerName: this.winner?.name || 'NO SURVIVOR',
        humansAlive: [...this.humans.values()].filter(h => h.alive).length,
      })
    } else if (this.humans.size && ![...this.humans.values()].some(h => h.alive)) {
      this.finished = true
      this.winner = this.entities.find(e => e.alive) || null
      this._pushEvent({ type: 'match_end', winner: this.winner?.id || null, winnerName: this.winner?.name || 'NO SURVIVOR', humansAlive: 0 })
    }
  }

  update(dt = TICK_DT) {
    this.age += dt
    if (!this.started) {
      if (this.humans.size && this.age >= this.startDelay) this.startMatch()
      return
    }
    if (this.finished) return
    this.time += dt
    this.tick++
    this._updateZone(dt)
    for (const p of this.humans.values()) this._updateHuman(p, dt)
    for (const b of this.bots) this._updateBot(b, dt)
    this._checkEnd()
  }

  snapshot() {
    const events = this.events.splice(0, this.events.length)
    return {
      type: 'snapshot',
      room: this.id,
      tick: this.tick,
      time: round(this.time, 2),
      started: this.started,
      finished: this.finished,
      mode: this.mode,
      alive: this.aliveCount,
      matchSize: this.matchSize,
      zone: {
        phase: Math.min(this.zone.phase + 1, PHASES.length),
        radius: round(this.zone.radius, 1),
        center: { x: round(this.zone.center.x, 1), z: round(this.zone.center.z, 1) },
        timer: round(Math.max(0, this.zone.timer), 1),
        shrinking: this.zone.state === 'shrink',
        finished: this.zone.finished,
      },
      entities: this.entities.map(e => ({
        id: e.id, name: e.name, isBot: e.isBot, team: e.team,
        x: round(e.pos.x), y: round(e.pos.y), z: round(e.pos.z),
        yaw: round(e.yaw, 3), pitch: round(e.pitch, 3),
        health: round(e.health, 1), armor: round(e.armor, 1), alive: e.alive,
        kills: e.kills, weapon: e.weaponId, mag: e.mag, reserve: e.reserve,
      })),
      events,
    }
  }
}

function defSpread(weaponId) {
  const def = weaponById(weaponId)
  return def ? clamp(def.spread * 0.35, 0, 3.5) : 0
}

export { TICK_RATE, TICK_DT, START_DELAY, ARMOR_POOL }

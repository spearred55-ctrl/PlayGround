import * as THREE from 'three'
import {
  PAD_DEFS, WATER_LEVEL, WORLD_HALF, PLAY_RADIUS,
  getHeight, isWater, createSky, createTerrain, createWater, createLootSpots,
  makeWindowTexture, makeAsphaltTexture, makeConcreteTexture,
} from './terrain.js'
import { buildStructures } from './structures.js'
import { clamp, rayAABB, segmentBlocked } from '../core/utils.js'

const CONTAINER_COLORS = ['#3f6f78', '#6f3f3f', '#5f6f3f', '#6f5a3f', '#3f4f6f']

function makeCorrugated(color, seed) {
  const c = document.createElement('canvas')
  c.width = 128; c.height = 128
  const ctx = c.getContext('2d')
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 128, 128)
  for (let x = 0; x < 128; x += 8) {
    ctx.fillStyle = x % 16 === 0 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.16)'
    ctx.fillRect(x, 0, 3, 128)
  }
  let s = seed
  const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = `rgba(30,20,15,${0.04 + rnd() * 0.12})`
    ctx.fillRect(rnd() * 128, rnd() * 128, 2 + rnd() * 9, 1 + rnd() * 3)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

function makeDirtTexture(seed) {
  const c = document.createElement('canvas')
  c.width = 256; c.height = 256
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#887252'
  ctx.fillRect(0, 0, 256, 256)
  let s = seed
  const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
  for (let i = 0; i < 2600; i++) {
    const v = 70 + rnd() * 70
    ctx.fillStyle = `rgba(${v},${v * 0.82},${v * 0.58},${0.08 + rnd() * 0.2})`
    ctx.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 3, 1 + rnd() * 2)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

export class World {
  constructor(scene, quality = 'high', seed = 1337) {
    this.scene = scene
    this.quality = quality
    this.seed = seed
    this.colliders = []
    this.walkables = []
    this.ladders = []
    this.animated = []
    this.smokeParticles = []
    this.pois = PAD_DEFS
    this.unitBox = new THREE.BoxGeometry(1, 1, 1)
    this.unitCylinder = new THREE.CylinderGeometry(1, 1, 1, 12)
    this.windowTextures = []
    this.containerTextures = {}
    this.lootSpots = []
    this.vehicleSpawns = []
    this.sunFocus = new THREE.Vector2(0, 0)
    this._build()
  }

  _build() {
    this._materials()
    this.sky = createSky(this.scene)
    this.terrain = createTerrain(this.scene, this.seed)
    this.water = createWater(this.scene)
    buildStructures(this)
    this._vehicleSpawns()
    this.lootSpots = createLootSpots(this.seed)
      .filter(s => !isWater(s.x, s.z, this.seed))
      .filter(s => !this.insideCollider(s.x, s.z, 1.3, s.y))
      .map(s => ({ ...s, y: this.groundHeight(s.x, s.z) }))
  }

  _materials() {
    const std = (color, opts = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.86, metalness: 0.06, ...opts })
    this.asphaltTexture = makeAsphaltTexture(this.seed, '#3b4145')
    this.dirtTexture = makeDirtTexture(this.seed + 3)
    this.concreteTexture = makeConcreteTexture(this.seed + 2)
    for (let i = 0; i < 4; i++) this.windowTextures.push(makeWindowTexture(this.seed + i * 7, i % 2 === 0))
    for (const color of CONTAINER_COLORS) this.containerTextures[color] = makeCorrugated(color, this.seed + color.length)
    this.mat = {
      asphalt: std(0xffffff, { map: this.asphaltTexture, roughness: 0.94 }),
      asphaltLight: std(0x4a5055, { map: this.asphaltTexture, roughness: 0.92 }),
      concrete: std(0xffffff, { map: this.concreteTexture, roughness: 0.92 }),
      concreteDark: std(0x777c78, { map: this.concreteTexture, roughness: 0.95 }),
      sidewalk: std(0x9a9b92, { map: this.concreteTexture, roughness: 0.95 }),
      plaza: std(0x8f8d82, { map: this.concreteTexture, roughness: 0.95 }),
      metal: std(0x6a747c, { roughness: 0.5, metalness: 0.55 }),
      darkMetal: std(0x333b42, { roughness: 0.55, metalness: 0.6 }),
      rust: std(0x8a5a3c, { roughness: 0.85, metalness: 0.35 }),
      wood: std(0x8a6845, { roughness: 0.95 }),
      woodDark: std(0x4e3b29, { roughness: 0.95 }),
      brick: std(0x8f5d4a, { roughness: 0.94 }),
      sandbag: std(0xa89972, { roughness: 1 }),
      crate: std(0xffffff, { map: this._crateTexture(), roughness: 0.92 }),
      roofRed: std(0x914738, { roughness: 0.85 }),
      roofBlue: std(0x3d5563, { roughness: 0.82 }),
      roofGray: std(0x5e6366, { roughness: 0.78, metalness: 0.2 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x8bc9dd, transparent: true, opacity: 0.34, roughness: 0.12, metalness: 0.55 }),
      glassDark: new THREE.MeshStandardMaterial({ color: 0x213d4b, transparent: true, opacity: 0.72, roughness: 0.16, metalness: 0.5 }),
      windowWarm: new THREE.MeshStandardMaterial({ color: 0xd9b47a, emissive: 0xffa64d, emissiveIntensity: 0.55, roughness: 0.4 }),
      orangeGlow: new THREE.MeshBasicMaterial({ color: 0xff8a2b }),
      redGlow: new THREE.MeshBasicMaterial({ color: 0xff4b4b }),
      yellowGlow: new THREE.MeshBasicMaterial({ color: 0xffd166 }),
      whiteLine: new THREE.MeshBasicMaterial({ color: 0xe6e2d6 }),
      yellowLine: new THREE.MeshBasicMaterial({ color: 0xd8b45a }),
      dirt: std(0xffffff, { map: this.dirtTexture, roughness: 1 }),
      dirtLight: std(0x9a8664, { map: this.dirtTexture, roughness: 1 }),
      fountainWater: new THREE.MeshStandardMaterial({ color: 0x2c9ab3, roughness: 0.16, metalness: 0.35, transparent: true, opacity: 0.85 }),
      interior: std(0x30363a, { roughness: 0.95 }),
      shipHull: std(0x4f5c63, { roughness: 0.7, metalness: 0.4 }),
      shipDeck: std(0x5c666a, { roughness: 0.8, metalness: 0.3 }),
      bridge: std(0x4b5052, { map: this.concreteTexture, roughness: 0.92 }),
      rail: std(0x8a8f91, { roughness: 0.55, metalness: 0.65 }),
      flag: new THREE.MeshStandardMaterial({ color: 0xc9573a, roughness: 0.8, side: THREE.DoubleSide }),
      aircraft: std(0x7b858b, { roughness: 0.5, metalness: 0.45 }),
      radar: std(0x9aa5a8, { roughness: 0.5, metalness: 0.4, side: THREE.DoubleSide }),
      white: std(0xd9d8cf, { roughness: 0.8 }),
      hay: std(0xc0a65c, { roughness: 1 }),
      canvasRed: new THREE.MeshStandardMaterial({ color: 0xa94836, roughness: 0.9, side: THREE.DoubleSide }),
      canvasBlue: new THREE.MeshStandardMaterial({ color: 0x3e667e, roughness: 0.9, side: THREE.DoubleSide }),
      lightBeam: new THREE.MeshBasicMaterial({ color: 0xffe2a0, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }),
    }
  }

  _crateTexture() {
    const c = document.createElement('canvas')
    c.width = 128; c.height = 128
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#7d603c'
    ctx.fillRect(0, 0, 128, 128)
    ctx.strokeStyle = 'rgba(40,26,14,.5)'
    ctx.lineWidth = 4
    ctx.strokeRect(4, 4, 120, 120)
    ctx.beginPath(); ctx.moveTo(8, 8); ctx.lineTo(120, 120); ctx.moveTo(120, 8); ctx.lineTo(8, 120); ctx.stroke()
    ctx.strokeStyle = 'rgba(255,220,160,.12)'
    ctx.lineWidth = 2
    for (let y = 20; y < 128; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(128, y); ctx.stroke() }
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    return tex
  }

  _vehicleSpawns() {
    const defs = [
      { x: -22, z: 64, rot: 0.2 }, { x: 74, z: 96, rot: 1.4 }, { x: -140, z: -60, rot: 0.8 },
      { x: 225, z: -320, rot: 0.4 }, { x: 360, z: 210, rot: 1.7 }, { x: -340, z: 280, rot: 0.9 },
      { x: -250, z: -170, rot: 0.1 }, { x: 130, z: -100, rot: 2.1 },
    ]
    for (const d of defs) {
      this.vehicleSpawns.push({ ...d, y: this.groundHeight(d.x, d.z) })
    }
  }

  pad(id) { return PAD_DEFS.find(p => p.id === id) }

  addCollider(x, z, w, d, minY, maxY, solid = true) {
    this.colliders.push({
      min: { x: x - w / 2, y: minY, z: z - d / 2 },
      max: { x: x + w / 2, y: maxY, z: z + d / 2 },
      solid,
    })
  }

  addBox(x, y, z, w, h, d, material, opts = {}) {
    const { rotY = 0, collide = true, cast = true, receive = true } = opts
    const mesh = new THREE.Mesh(this.unitBox, material)
    mesh.position.set(x, y + h / 2, z)
    mesh.scale.set(w, h, d)
    mesh.rotation.y = rotY
    mesh.castShadow = cast
    mesh.receiveShadow = receive
    this.scene.add(mesh)
    if (collide) {
      const c = Math.abs(Math.cos(rotY)), s = Math.abs(Math.sin(rotY))
      this.addCollider(x, z, w * c + d * s, w * s + d * c, y, y + h)
    }
    return mesh
  }

  addCylinder(x, y, z, r, h, material, opts = {}) {
    const { collide = false, rotY = 0 } = opts
    const mesh = new THREE.Mesh(this.unitCylinder, material)
    mesh.position.set(x, y + h / 2, z)
    mesh.scale.set(r, h, r)
    mesh.rotation.y = rotY
    mesh.castShadow = true
    mesh.receiveShadow = true
    this.scene.add(mesh)
    if (collide) this.addCollider(x, z, r * 2, r * 2, y, y + h)
    return mesh
  }

  addWalkable(x, z, w, d, top, rot = 0) {
    this.walkables.push({ x, z, w, d, top, rot })
  }

  addLadder(x, z, bottom, top, rot = 0) {
    this.ladders.push({ x, z, bottom, top, rot, radius: 1.8 })
  }

  addSmoke(x, y, z, radius, height) {
    if (this.quality === 'low') return
    const canvas = document.createElement('canvas')
    canvas.width = 128; canvas.height = 128
    const ctx = canvas.getContext('2d')
    const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 62)
    g.addColorStop(0, 'rgba(220,222,218,.55)')
    g.addColorStop(0.45, 'rgba(170,175,174,.3)')
    g.addColorStop(1, 'rgba(130,136,138,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 128, 128)
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    const count = this.quality === 'high' ? 7 : 4
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.2, depthWrite: false, color: 0xb8c0c0 })
      const sprite = new THREE.Sprite(mat)
      sprite.position.set(x, y, z)
      sprite.scale.set(6, 6, 1)
      this.scene.add(sprite)
      this.smokeParticles.push({ sprite, x, y, z, radius, height, phase: i / count, speed: 0.025 + Math.random() * 0.012, size: 0.5 + Math.random() * 0.6 })
    }
  }

  insideCollider(x, z, pad = 0, y = null) {
    for (const c of this.colliders) {
      if (!c.solid) continue
      if (y !== null && (c.max.y < y + 0.4 || c.min.y > y + 2.2)) continue
      if (x > c.min.x - pad && x < c.max.x + pad && z > c.min.z - pad && z < c.max.z + pad) return true
    }
    return false
  }

  groundHeight(x, z) {
    let h = getHeight(x, z, this.seed)
    for (const w of this.walkables) {
      const dx = x - w.x, dz = z - w.z
      const c = Math.cos(w.rot), s = Math.sin(w.rot)
      const lx = dx * c + dz * s
      const lz = -dx * s + dz * c
      if (Math.abs(lx) <= w.w / 2 && Math.abs(lz) <= w.d / 2) {
        if (w.top > h) h = w.top
      }
    }
    return h
  }

  isWaterAt(x, z) {
    const h = getHeight(x, z, this.seed)
    if (h > WATER_LEVEL + 0.05) return false
    // A dock or bridge above the water is not swimming water.
    if (this.groundHeight(x, z) > WATER_LEVEL + 0.4) return false
    return true
  }

  resolveCollision(x, z, radius, feetY, height = 1.8) {
    let px = x, pz = z
    for (const c of this.colliders) {
      if (!c.solid) continue
      if (c.max.y < feetY + 0.25 || c.min.y > feetY + height - 0.05) continue
      const cx = clamp(px, c.min.x, c.max.x)
      const cz = clamp(pz, c.min.z, c.max.z)
      let dx = px - cx, dz = pz - cz
      const d2 = dx * dx + dz * dz
      if (d2 >= radius * radius) continue
      if (d2 > 1e-7) {
        const d = Math.sqrt(d2)
        px = cx + dx / d * radius
        pz = cz + dz / d * radius
      } else {
        // Center is inside the box: push out along the smallest penetration axis.
        const left = px - c.min.x, right = c.max.x - px
        const near = pz - c.min.z, far = c.max.z - pz
        const m = Math.min(left, right, near, far)
        if (m === left) px = c.min.x - radius
        else if (m === right) px = c.max.x + radius
        else if (m === near) pz = c.min.z - radius
        else pz = c.max.z + radius
      }
    }
    return { x: px, z: pz }
  }

  raycast(origin, dir, maxDist = 400) {
    let best = maxDist, hit = null
    for (const c of this.colliders) {
      const t = rayAABB(origin, dir, c, best)
      if (t !== null && t < best) { best = t; hit = c }
    }
    // Terrain march
    const step = 3
    let prevT = 0
    for (let t = 0; t <= maxDist; t += step) {
      const x = origin.x + dir.x * t, y = origin.y + dir.y * t, z = origin.z + dir.z * t
      const gh = this.groundHeight(x, z)
      if (y <= gh) {
        // Refine between prevT and t.
        let lo = prevT, hi = t
        for (let i = 0; i < 6; i++) {
          const mid = (lo + hi) / 2
          const mx = origin.x + dir.x * mid, my = origin.y + dir.y * mid, mz = origin.z + dir.z * mid
          if (my <= this.groundHeight(mx, mz)) hi = mid
          else lo = mid
        }
        if (hi < best) {
          best = hi
          const p = { x: origin.x + dir.x * hi, y: origin.y + dir.y * hi, z: origin.z + dir.z * hi }
          const hx = this.groundHeight(p.x + 1, p.z) - this.groundHeight(p.x - 1, p.z)
          const hz = this.groundHeight(p.x, p.z + 1) - this.groundHeight(p.x, p.z - 1)
          const n = new THREE.Vector3(-hx, 2, -hz).normalize()
          hit = { terrain: true, normal: n }
        }
        break
      }
      prevT = t
    }
    if (best >= maxDist) return null
    return {
      distance: best,
      point: new THREE.Vector3(origin.x + dir.x * best, origin.y + dir.y * best, origin.z + dir.z * best),
      normal: hit?.normal || new THREE.Vector3(0, 1, 0),
      collider: hit && !hit.terrain ? hit : null,
      terrain: !!hit?.terrain,
    }
  }

  hasLineOfSight(ax, ay, az, bx, by, bz) {
    if (segmentBlocked(ax, ay, az, bx, by, bz, this.colliders, 0.08)) return false
    const dx = bx - ax, dy = by - ay, dz = bz - az
    const len = Math.hypot(dx, dy, dz)
    if (len < 1) return true
    const steps = Math.min(24, Math.ceil(len / 6))
    for (let i = 1; i < steps; i++) {
      const t = i / steps
      const x = ax + dx * t, y = ay + dy * t, z = az + dz * t
      if (y < getHeight(x, z, this.seed) + 0.25) return false
    }
    return true
  }

  setSunFocus(x, z) {
    if (Math.hypot(x - this.sunFocus.x, z - this.sunFocus.y) < 25) return
    this.sunFocus.set(x, z)
    const d = this.sky.sunDir
    this.sky.sun.position.set(x + d.x * 360, d.y * 360, z + d.z * 360)
    this.sky.sun.target.position.set(x, 0, z)
    this.sky.sun.target.updateMatrixWorld()
  }

  update(dt, time) {
    if (this.water) this.water.mat.uniforms.uTime.value = time
    for (const fn of this.animated) fn(time, dt)
    for (const p of this.smokeParticles) {
      p.phase += p.speed * dt
      if (p.phase > 1) p.phase -= 1
      const t = p.phase
      p.sprite.position.set(
        p.x + Math.sin(t * 9 + p.size * 8) * (2 + t * p.radius),
        p.y + t * p.height,
        p.z + Math.cos(t * 7 + p.size * 5) * (2 + t * p.radius)
      )
      const sc = (5 + t * 18) * p.size
      p.sprite.scale.set(sc, sc, 1)
      p.sprite.material.opacity = (1 - t) * 0.22 * Math.min(1, t * 6)
    }
    if (this.sky.clouds) {
      for (const c of this.sky.clouds) {
        c.position.x += c.userData.speed * dt
        if (c.position.x > 1800) c.position.x = -1800
      }
    }
  }

  getSpawnPoints() {
    return this.lootSpots.filter(s => !s.hidden).slice(0, 60)
  }
}

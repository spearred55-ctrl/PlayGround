import * as THREE from 'three'
import { makeCanvas, clamp, randRange } from '../core/utils.js'

function glowTexture() {
  const c = makeCanvas(128, 128)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.22, 'rgba(255,230,180,.9)')
  g.addColorStop(0.55, 'rgba(255,150,60,.35)')
  g.addColorStop(1, 'rgba(255,120,20,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

function smokeTexture() {
  const c = makeCanvas(128, 128)
  const ctx = c.getContext('2d')
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62)
  g.addColorStop(0, 'rgba(255,255,255,.85)')
  g.addColorStop(0.5, 'rgba(230,230,230,.35)')
  g.addColorStop(1, 'rgba(220,220,220,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

const numberCache = new Map()
function numberTexture(value, color) {
  const key = value + color
  if (numberCache.has(key)) return numberCache.get(key)
  const c = makeCanvas(192, 96)
  const ctx = c.getContext('2d')
  ctx.font = '700 64px Rajdhani, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineWidth = 8
  ctx.strokeStyle = 'rgba(0,0,0,.65)'
  ctx.strokeText(value, 96, 50)
  ctx.fillStyle = color
  ctx.fillText(value, 96, 50)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  numberCache.set(key, t)
  return t
}

export class Effects {
  constructor(scene, quality = 'high') {
    this.scene = scene
    this.quality = quality
    this.glowTex = glowTexture()
    this.smokeTex = smokeTexture()
    this.active = []
    this.tracerGeo = new THREE.BoxGeometry(1, 1, 1)
    this.tracerMat = new THREE.MeshBasicMaterial({ color: 0xffe2a8, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })
    this.ringGeo = new THREE.RingGeometry(0.9, 1, 40)
    this.pool = { tracer: [], flash: [], puff: [], ring: [], text: [] }
  }

  _take(kind, factory) {
    const list = this.pool[kind]
    const obj = list.pop()
    if (obj) { obj.visible = true; return obj }
    return factory()
  }

  _release(kind, obj) {
    obj.visible = false
    if (obj.parent) obj.parent.remove(obj)
    if (this.pool[kind].length < 90) this.pool[kind].push(obj)
  }

  tracer(from, to, color = 0xffe2a8) {
    const len = from.distanceTo(to)
    if (len < 0.2) return
    const mesh = this._take('tracer', () => {
      const m = new THREE.Mesh(this.tracerGeo, this.tracerMat.clone())
      m.frustumCulled = false
      return m
    })
    mesh.material.color.setHex(color)
    mesh.material.opacity = 0.85
    mesh.position.copy(from).add(to).multiplyScalar(0.5)
    mesh.scale.set(0.035, 0.035, len)
    mesh.lookAt(to)
    mesh.renderOrder = 3
    this.scene.add(mesh)
    this.active.push({ kind: 'tracer', obj: mesh, life: 0.055, max: 0.055 })
  }

  muzzle(pos, scale = 1) {
    const sprite = this._take('flash', () => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }))
      return s
    })
    sprite.position.copy(pos)
    sprite.scale.setScalar(0.85 * scale)
    sprite.material.opacity = 1
    sprite.material.color.setHex(0xffd9a0)
    this.scene.add(sprite)
    this.active.push({ kind: 'flash', obj: sprite, life: 0.06, max: 0.06, scale: scale })
  }

  impact(pos, normal = null, color = 0xffcf8a, count = 3) {
    for (let i = 0; i < count; i++) {
      const sprite = this._take('puff', () => new THREE.Sprite(new THREE.SpriteMaterial({ map: this.smokeTex, transparent: true, depthWrite: false, fog: false })))
      sprite.position.copy(pos)
      if (normal) sprite.position.addScaledVector(normal, 0.06)
      sprite.material.color.setHex(color)
      sprite.material.opacity = 0.85
      const size = randRange(Math.random, 0.16, 0.36)
      sprite.scale.setScalar(size)
      this.scene.add(sprite)
      this.active.push({
        kind: 'puff', obj: sprite, life: 0.42, max: 0.42,
        vel: new THREE.Vector3((Math.random() - 0.5) * 2.4, Math.random() * 2.2, (Math.random() - 0.5) * 2.4),
        grow: 1.6, base: size,
      })
    }
  }

  blood(pos) { this.impact(pos, null, 0xff5a5a, 4) }

  explosion(pos, scale = 1) {
    const flash = this._take('flash', () => new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })))
    flash.position.copy(pos)
    flash.scale.setScalar(2.4 * scale)
    flash.material.opacity = 1
    flash.material.color.setHex(0xffb060)
    this.scene.add(flash)
    this.active.push({ kind: 'flash', obj: flash, life: 0.22, max: 0.22, scale: 2.4 * scale })

    for (let i = 0; i < (this.quality === 'low' ? 6 : 12); i++) {
      const sprite = this._take('puff', () => new THREE.Sprite(new THREE.SpriteMaterial({ map: this.smokeTex, transparent: true, depthWrite: false, fog: false })))
      sprite.position.copy(pos)
      sprite.material.color.setHex(i % 3 === 0 ? 0xff9a40 : 0x8a8580)
      sprite.material.opacity = 0.8
      const size = randRange(Math.random, 0.5, 1.2) * scale
      sprite.scale.setScalar(size)
      this.scene.add(sprite)
      this.active.push({
        kind: 'puff', obj: sprite, life: randRange(Math.random, 0.7, 1.3), max: 1.3,
        vel: new THREE.Vector3((Math.random() - 0.5) * 9, Math.random() * 7, (Math.random() - 0.5) * 9),
        grow: 4 * scale, base: size,
      })
    }
    const ring = this._take('ring', () => new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })))
    ring.position.copy(pos)
    ring.rotation.x = -Math.PI / 2
    ring.scale.setScalar(0.6)
    ring.material.opacity = 0.85
    this.scene.add(ring)
    this.active.push({ kind: 'ring', obj: ring, life: 0.5, max: 0.5, grow: 12 * scale })
  }

  damageNumber(pos, amount, color = '#ffe2a8') {
    const value = Math.max(1, Math.round(amount))
    const sprite = this._take('text', () => new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, depthTest: false, fog: false })))
    sprite.material.map = numberTexture(value, color)
    sprite.material.needsUpdate = true
    sprite.position.copy(pos)
    sprite.position.y += 0.35
    sprite.scale.set(1.1, 0.55, 1)
    sprite.material.opacity = 1
    sprite.renderOrder = 5
    this.scene.add(sprite)
    this.active.push({
      kind: 'text', obj: sprite, life: 0.75, max: 0.75,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.7, 2.1, (Math.random() - 0.5) * 0.7),
    })
  }

  pickup(pos, color = 0xffb347) {
    const ring = this._take('ring', () => new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: 0xffa050, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })))
    ring.position.copy(pos)
    ring.rotation.x = -Math.PI / 2
    ring.scale.setScalar(0.35)
    ring.material.color.setHex(color)
    ring.material.opacity = 0.9
    this.scene.add(ring)
    this.active.push({ kind: 'ring', obj: ring, life: 0.42, max: 0.42, grow: 2.6 })
  }

  update(dt) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const e = this.active[i]
      e.life -= dt
      const t = clamp(e.life / e.max, 0, 1)
      if (e.kind === 'tracer') {
        e.obj.material.opacity = t * 0.9
      } else if (e.kind === 'flash') {
        e.obj.material.opacity = t
        const s = e.scale * (0.7 + (1 - t) * 0.6)
        e.obj.scale.setScalar(s)
      } else if (e.kind === 'puff') {
        e.obj.position.addScaledVector(e.vel, dt)
        e.vel.multiplyScalar(1 - dt * 3.2)
        e.obj.material.opacity = t * 0.75
        e.obj.scale.setScalar(e.base + (1 - t) * e.grow)
      } else if (e.kind === 'ring') {
        e.obj.scale.setScalar(0.4 + (1 - t) * e.grow)
        e.obj.material.opacity = t * 0.8
      } else if (e.kind === 'text') {
        e.obj.position.addScaledVector(e.vel, dt)
        e.vel.y -= dt * 1.8
        e.obj.material.opacity = t
      }
      if (e.life <= 0) {
        this._release(e.kind, e.obj)
        this.active.splice(i, 1)
      }
    }
  }

  clear() {
    for (const e of this.active) this._release(e.kind, e.obj)
    this.active.length = 0
  }
}

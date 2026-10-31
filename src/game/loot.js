import * as THREE from 'three'
import { WEAPONS, SPAWN_WEAPONS, RARITY, weaponById, attachmentLabel } from './weapons.js'
import { mulberry32, pick, randInt, clamp } from '../core/utils.js'
import { PAD_DEFS } from '../world/terrain.js'

export const AMMO_TYPES = ['light', 'heavy', 'shells', 'sniper', 'pistol']
const AMMO_COLOR = { light: '#c8b48a', heavy: '#b9a06e', shells: '#c96b4a', sniper: '#d9c25a', pistol: '#a8b8c2' }
const TYPE_COLOR = {
  weapon: '#ffb347', ammo: '#c8b48a', armor: '#63dcff', helmet: '#8fb8ff',
  backpack: '#54e6a5', med: '#ff6b6b', grenade: '#9ad66b', attachment: '#b78bff',
}

export function lootLabel(data) {
  switch (data.type) {
    case 'weapon': {
      const w = weaponById(data.weapon)
      return w.name + (data.attachments?.length ? ' + ' + data.attachments.map(attachmentLabel).join(', ') : '')
    }
    case 'ammo': return `${data.ammo.toUpperCase()} AMMO ×${data.amount}`
    case 'armor': return `BODY ARMOR LV${data.level}`
    case 'helmet': return `HELMET LV${data.level}`
    case 'backpack': return `BACKPACK LV${data.level}`
    case 'med': return data.item === 'medkit' ? 'MEDKIT' : 'BANDAGE'
    case 'grenade': return `FRAG GRENADE ×${data.amount}`
    case 'attachment': return attachmentLabel(data.attachment)
    default: return 'SUPPLY'
  }
}

export function lootColor(data) {
  if (data.type === 'weapon') return RARITY[data.rarity || 'common'].color
  if (data.type === 'ammo') return AMMO_COLOR[data.ammo] || '#c8b48a'
  return TYPE_COLOR[data.type] || '#ffb347'
}

function rarityRoll(rng, bonus = 0) {
  const roll = rng() * 100 - bonus * 8
  if (roll < 8) return 'legendary'
  if (roll < 26) return 'epic'
  if (roll < 58) return 'rare'
  return 'common'
}

function randomAttachments(rng, rarity) {
  const pool = ['ext_mag', 'grip', 'suppressor', 'scope_2x', 'scope_4x']
  const out = []
  const n = rarity === 'legendary' ? 2 : rarity === 'epic' ? randInt(rng, 1, 2) : rarity === 'rare' ? (rng() > 0.6 ? 1 : 0) : 0
  while (out.length < n) {
    const a = pick(rng, pool)
    if (!out.includes(a)) out.push(a)
  }
  return out
}

export function makeLootData(rng, poi = 'wild') {
  const bonus = poi === 'bunker' || poi === 'base' ? 1.4 : poi === 'wild' ? 0.4 : 0
  const roll = rng() * 100
  if (roll < 36) {
    const rarity = rarityRoll(rng, bonus)
    let pool = SPAWN_WEAPONS.filter(w => w.rarity === rarity)
    if (!pool.length) pool = SPAWN_WEAPONS
    const weapon = pick(rng, pool)
    return { type: 'weapon', weapon: weapon.id, rarity: weapon.rarity, attachments: randomAttachments(rng, weapon.rarity) }
  }
  if (roll < 58) {
    const ammo = pick(rng, AMMO_TYPES)
    return { type: 'ammo', ammo, amount: ammo === 'sniper' ? randInt(rng, 5, 12) : ammo === 'shells' ? randInt(rng, 8, 20) : randInt(rng, 20, 45) }
  }
  if (roll < 69) return { type: 'armor', level: rng() > 0.82 ? 3 : rng() > 0.5 ? 2 : 1 }
  if (roll < 77) return { type: 'helmet', level: rng() > 0.85 ? 3 : rng() > 0.55 ? 2 : 1 }
  if (roll < 84) return { type: 'backpack', level: rng() > 0.85 ? 3 : rng() > 0.55 ? 2 : 1 }
  if (roll < 94) return { type: 'med', item: rng() > 0.55 ? 'medkit' : 'bandage' }
  if (roll < 98) return { type: 'grenade', amount: 1 }
  return { type: 'attachment', attachment: pick(rng, ['ext_mag', 'grip', 'suppressor', 'scope_2x', 'scope_4x']) }
}

export class LootManager {
  constructor(scene, world, seed = 1337) {
    this.scene = scene
    this.world = world
    this.seed = seed
    this.items = []
    this.capacity = 320
    this.nextId = 1
    this.time = 0
    this.dirty = true

    const boxGeo = new THREE.BoxGeometry(0.46, 0.46, 0.46)
    boxGeo.rotateY(Math.PI / 4)
    this.boxMesh = new THREE.InstancedMesh(boxGeo, new THREE.MeshStandardMaterial({
      roughness: 0.35, metalness: 0.55, emissive: 0x222222, emissiveIntensity: 0.6,
    }), this.capacity)
    this.boxMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.boxMesh.frustumCulled = false
    this.boxMesh.count = 0
    this.scene.add(this.boxMesh)

    const beamGeo = new THREE.CylinderGeometry(0.035, 0.035, 2.6, 5, 1, true)
    beamGeo.translate(0, 1.3, 0)
    this.beamMesh = new THREE.InstancedMesh(beamGeo, new THREE.MeshBasicMaterial({
      transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false,
    }), this.capacity)
    this.beamMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.beamMesh.frustumCulled = false
    this.beamMesh.count = 0
    this.scene.add(this.beamMesh)

    this.dummy = new THREE.Object3D()
    this.color = new THREE.Color()
  }

  spawnInitial() {
    const rng = mulberry32(this.seed + 991)
    const spots = this.world.lootSpots
    for (const spot of spots) {
      if (rng() > 0.72) continue
      const data = makeLootData(rng, spot.poi)
      const y = this.world.groundHeight(spot.x, spot.z) + 0.4
      this.add(data, spot.x, y, spot.z)
    }
    // Guaranteed weapon cluster around each major landmark.
    for (const pad of PAD_DEFS) {
      if (pad.type === 'mountain' || pad.type === 'lake') continue
      for (let i = 0; i < 2; i++) {
        const a = rng() * Math.PI * 2
        const r = 8 + rng() * pad.r * 0.35
        const x = pad.x + Math.cos(a) * r
        const z = pad.z + Math.sin(a) * r
        if (this.world.isWaterAt(x, z)) continue
        const weapon = pick(rng, SPAWN_WEAPONS)
        this.add({ type: 'weapon', weapon: weapon.id, rarity: weapon.rarity, attachments: randomAttachments(rng, weapon.rarity) }, x, this.world.groundHeight(x, z) + 0.4, z)
      }
    }
    this.rebuild()
  }

  reset() {
    this.items.length = 0
    this.nextId = 1
    this.spawnInitial()
  }

  add(data, x, y, z) {
    if (this.items.length >= this.capacity - 8) return null
    const item = { id: this.nextId++, data, x, y, z, active: true, phase: Math.random() * Math.PI * 2 }
    this.items.push(item)
    this.dirty = true
    return item
  }

  remove(item) {
    if (!item || !item.active) return
    item.active = false
    this.dirty = true
  }

  nearest(x, y, z, radius = 2.6) {
    let best = null, bestD = radius
    for (const item of this.items) {
      if (!item.active) continue
      const d = Math.hypot(item.x - x, item.y - y, item.z - z)
      if (d < bestD) { bestD = d; best = item }
    }
    return best
  }

  nearItems(x, y, z, radius = 3) {
    return this.items.filter(i => i.active && Math.hypot(i.x - x, i.y - y, i.z - z) < radius)
  }

  dropAt(x, y, z, data, spread = 0.6) {
    const a = Math.random() * Math.PI * 2
    const r = Math.random() * spread
    return this.add(data, x + Math.cos(a) * r, y + 0.35, z + Math.sin(a) * r)
  }

  update(dt) {
    this.time += dt
    if (this.dirty) this.rebuild()
    if (this.time % 0.05 > dt) return
    const dummy = this.dummy
    const beam = this.beamMesh
    const box = this.boxMesh
    let i = 0
    for (const item of this.items) {
      if (!item.active) continue
      const bob = Math.sin(this.time * 2 + item.phase) * 0.09
      const scale = item.data.type === 'weapon' ? 1.25 : item.data.type === 'armor' ? 1.05 : 0.8
      dummy.position.set(item.x, item.y + 0.45 + bob, item.z)
      dummy.rotation.set(0, this.time * 0.8 + item.phase, 0.35)
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      box.setMatrixAt(i, dummy.matrix)
      dummy.position.set(item.x, item.y, item.z)
      dummy.rotation.set(0, 0, 0)
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      beam.setMatrixAt(i, dummy.matrix)
      i++
      if (i >= this.capacity) break
    }
    box.count = i
    beam.count = i
    box.instanceMatrix.needsUpdate = true
    beam.instanceMatrix.needsUpdate = true
  }

  rebuild() {
    const dummy = this.dummy
    const color = this.color
    const box = this.boxMesh
    const beam = this.beamMesh
    let i = 0
    for (const item of this.items) {
      if (!item.active) continue
      color.set(lootColor(item.data))
      box.setColorAt(i, color)
      beam.setColorAt(i, color)
      dummy.position.set(item.x, item.y + 0.45, item.z)
      dummy.rotation.set(0, item.phase, 0.35)
      dummy.scale.setScalar(item.data.type === 'weapon' ? 1.25 : 0.85)
      dummy.updateMatrix()
      box.setMatrixAt(i, dummy.matrix)
      dummy.position.set(item.x, item.y, item.z)
      dummy.rotation.set(0, 0, 0)
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      beam.setMatrixAt(i, dummy.matrix)
      i++
      if (i >= this.capacity) break
    }
    box.count = i
    beam.count = i
    box.instanceMatrix.needsUpdate = true
    beam.instanceMatrix.needsUpdate = true
    if (box.instanceColor) box.instanceColor.needsUpdate = true
    if (beam.instanceColor) beam.instanceColor.needsUpdate = true
    this.dirty = false
  }

  dispose() {
    this.scene.remove(this.boxMesh, this.beamMesh)
    this.boxMesh.geometry.dispose()
    this.boxMesh.material.dispose()
    this.beamMesh.geometry.dispose()
    this.beamMesh.material.dispose()
  }
}

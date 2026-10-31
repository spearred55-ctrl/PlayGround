import * as THREE from 'three'
import {
  makeTextTexture, makeWindowTexture, makeAsphaltTexture, makeConcreteTexture,
  createRoad, getHeight, isWater, PAD_DEFS, WATER_LEVEL,
} from './terrain.js'
import { mulberry32, randRange, randInt, pick, smoothstep, clamp } from '../core/utils.js'

// ─────────────────────────────────────────────────────────────────────────────
//  Shared architectural helpers
// ─────────────────────────────────────────────────────────────────────────────

function gableGeometry(w, d, h) {
  const shape = new THREE.Shape()
  shape.moveTo(-w / 2, 0)
  shape.lineTo(w / 2, 0)
  shape.lineTo(0, h)
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false, curveSegments: 2 })
  geo.translate(0, 0, -d / 2)
  return geo
}

function archGeometry(radius, length) {
  const shape = new THREE.Shape()
  shape.moveTo(-radius, 0)
  shape.absarc(0, 0, radius, Math.PI, 0, true)
  shape.lineTo(-radius, 0)
  const geo = new THREE.ExtrudeGeometry(shape, { depth: length, bevelEnabled: false, curveSegments: 14 })
  geo.translate(0, 0, -length / 2)
  return geo
}

function makeCorrugatedTexture(base = '#59636b', seed = 2) {
  const c = document.createElement('canvas')
  c.width = 128; c.height = 128
  const ctx = c.getContext('2d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 128, 128)
  for (let x = 0; x < 128; x += 8) {
    ctx.fillStyle = x % 16 === 0 ? 'rgba(255,255,255,.09)' : 'rgba(0,0,0,.13)'
    ctx.fillRect(x, 0, 3, 128)
  }
  const rng = mulberry32(seed)
  for (let i = 0; i < 70; i++) {
    ctx.fillStyle = `rgba(30,20,15,${0.05 + rng() * 0.12})`
    ctx.fillRect(rng() * 128, rng() * 128, 2 + rng() * 9, 1 + rng() * 3)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

function makeCrateTexture(seed = 3) {
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

function addWindowTower(world, x, z, w, d, h, baseY, style = 0, opts = {}) {
  const tex = world.windowTextures[style % world.windowTextures.length].clone()
  tex.needsUpdate = true
  tex.repeat.set(Math.max(2, w / 6.5), Math.max(3, h / 7.5))
  const side = new THREE.MeshStandardMaterial({
    map: tex,
    emissiveMap: tex,
    emissive: 0xffffff,
    emissiveIntensity: 0.5,
    roughness: 0.74,
    metalness: 0.18,
  })
  const roof = world.mat.roofGray
  const mesh = new THREE.Mesh(world.unitBox, [side, side, roof, roof, side, side])
  mesh.position.set(x, baseY + h / 2, z)
  mesh.scale.set(w, h, d)
  mesh.castShadow = true
  mesh.receiveShadow = true
  world.scene.add(mesh)
  world.addCollider(x, z, w, d, baseY, baseY + h)
  // Rooftop slab and mechanical penthouse
  world.addBox(x, baseY + h, z, w + 1.2, 0.7, d + 1.2, world.mat.concreteDark, { collide: false })
  const mw = Math.min(w * 0.38, 12), md = Math.min(d * 0.38, 12)
  world.addBox(x + w * 0.12, baseY + h + 0.7, z - d * 0.1, mw, 3.4, md, world.mat.metal, { collide: false })
  world.addBox(x - w * 0.28, baseY + h + 0.7, z + d * 0.2, 2.4, 1.2, 2.4, world.mat.darkMetal, { collide: false })
  // Antenna
  if (h > 70) {
    world.addCylinder(x - w * 0.2, baseY + h + 4, z - d * 0.2, 0.12, 8, world.mat.metal, { collide: false })
    const light = world.addBox(x - w * 0.2, baseY + h + 11.8, z - d * 0.2, 0.5, 0.5, 0.5, world.mat.redGlow, { collide: false })
    light.material = world.mat.redGlow
  }
  // Facade bands and balconies
  const bandY = baseY + h * 0.55
  world.addBox(x, bandY, z, w + 0.8, 0.35, d + 0.8, world.mat.darkMetal, { collide: false })
  if (opts.neon) {
    const texSign = makeTextTexture(opts.neon, { width: 512, height: 160, bg: 'rgba(3,8,14,.9)', fg: '#eaf6ff', accent: opts.neonColor || '#ff8a2b', font: '700 54px sans-serif' })
    const signMat = new THREE.MeshBasicMaterial({ map: texSign, transparent: true, side: THREE.DoubleSide })
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.55, 4.4), signMat)
    sign.position.set(x, baseY + h * 0.72, z + d / 2 + 0.06)
    world.scene.add(sign)
  }
  // Entrance canopy
  world.addBox(x, baseY + 2.5, z + d / 2 + 1.5, 5.5, 0.4, 3.2, world.mat.darkMetal, { collide: false })
  return mesh
}

function addHouse(world, x, z, baseY, rot = 0, scale = 1, color = 0xd4c3a4) {
  const w = 11 * scale, d = 9 * scale, h = 4.2 * scale
  const wall = new THREE.MeshStandardMaterial({ color, roughness: 0.9, metalness: 0.02 })
  world.addBox(x, baseY, z, w, h, d, wall, { rotY: rot, collide: true })
  const roofGeo = gableGeometry(w + 1.2, d + 1.4, 3.6 * scale)
  const roof = new THREE.Mesh(roofGeo, world.mat.roofRed)
  roof.position.set(x, baseY + h, z)
  roof.rotation.y = rot
  roof.castShadow = true
  world.scene.add(roof)
  // Chimney
  world.addBox(x + w * 0.26, baseY + h + 2.2, z - d * 0.2, 0.8, 3.2, 0.8, world.mat.brick, { collide: false })
  // Door and windows
  const doorMat = world.mat.woodDark
  world.addBox(x + Math.sin(rot) * (d / 2 + 0.04), baseY, z + Math.cos(rot) * (d / 2 + 0.04), 1.4, 2.4, 0.12, doorMat, { rotY: rot, collide: false })
  const winMat = world.mat.windowWarm
  for (const side of [-1, 1]) {
    const wx = x + Math.cos(rot) * side * w * 0.27 + Math.sin(rot) * (d / 2 + 0.04)
    const wz = z - Math.sin(rot) * side * w * 0.27 + Math.cos(rot) * (d / 2 + 0.04)
    world.addBox(wx, baseY + 2.1, wz, 1.6, 1.3, 0.1, winMat, { rotY: rot, collide: false })
  }
  // Side windows
  for (const side of [-1, 1]) {
    const wx = x + Math.cos(rot) * (w / 2 + 0.04) * side
    const wz = z - Math.sin(rot) * (w / 2 + 0.04) * side
    world.addBox(wx, baseY + 2.2, wz, 0.1, 1.2, 1.6, winMat, { rotY: rot, collide: false })
  }
  return { x, z, w, d, h }
}

function addBarracks(world, x, z, baseY, rot = 0, w = 42, d = 13) {
  const wall = world.mat.concrete
  world.addBox(x, baseY, z, w, 5.2, d, wall, { rotY: rot, collide: true })
  world.addBox(x, baseY + 5.2, z, w + 1, 0.5, d + 1, world.mat.roofGray, { rotY: rot, collide: false })
  for (let i = -2; i <= 2; i++) {
    const wx = x + Math.cos(rot) * i * 7
    const wz = z - Math.sin(rot) * i * 7
    world.addBox(wx, baseY + 2.2, wz + Math.cos(rot) * (d / 2 + 0.04), 1.7, 1.2, 0.12, world.mat.windowWarm, { rotY: rot, collide: false })
  }
  world.addBox(x, baseY + 3.6, z + Math.cos(rot) * (d / 2 + 0.5), 3, 0.3, 1.2, world.mat.darkMetal, { rotY: rot, collide: false })
}

function addWatchtower(world, x, z, baseY, height = 9, rot = 0) {
  const legMat = world.mat.darkMetal
  const half = 2.1
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    world.addBox(x + sx * half, baseY, z + sz * half, 0.4, height, 0.4, legMat, { rotY: rot, collide: false })
  }
  world.addBox(x, baseY + height, z, 6.2, 0.45, 6.2, world.mat.metal, { rotY: rot, collide: false })
  world.addBox(x, baseY + height + 3.2, z, 7.2, 0.4, 7.2, world.mat.roofGray, { rotY: rot, collide: false })
  // Railings
  for (const s of [-1, 1]) {
    world.addBox(x + s * 3, baseY + height + 1.3, z, 0.12, 1.3, 6, world.mat.darkMetal, { rotY: rot, collide: false })
    world.addBox(x, baseY + height + 1.3, z + s * 3, 6, 1.3, 0.12, world.mat.darkMetal, { rotY: rot, collide: false })
  }
  // Ladder on the east face
  const lx = x + 3.55, lz = z
  for (const s of [-0.5, 0.5]) world.addBox(lx, baseY, lz + s, 0.1, height + 0.4, 0.1, world.mat.metal, { collide: false })
  for (let i = 0; i < height; i += 0.55) world.addBox(lx, baseY + i, lz, 0.12, 0.08, 1.05, world.mat.metal, { collide: false })
  world.addWalkable(x, z, 6.2, 6.2, baseY + height + 0.45)
  world.addLadder(lx, lz, baseY, baseY + height + 0.45)
  return { top: baseY + height }
}

function addContainer(world, x, z, baseY, color = '#3f6f78', rot = 0, stack = 1) {
  const tex = world.containerTextures[color] || world.containerTextures['#3f6f78']
  const mat = new THREE.MeshStandardMaterial({ map: tex, color: 0xffffff, roughness: 0.72, metalness: 0.35 })
  for (let i = 0; i < stack; i++) {
    world.addBox(x, baseY + i * 2.65, z, 6.1, 2.55, 2.45, mat, { rotY: rot, collide: true })
  }
}

function addCrate(world, x, z, baseY, scale = 1, rot = 0) {
  world.addBox(x, baseY, z, 1.6 * scale, 1.5 * scale, 1.6 * scale, world.mat.crate, { rotY: rot, collide: true })
}

function addSandbagWall(world, x, z, baseY, length = 6, rot = 0) {
  const n = Math.max(2, Math.floor(length / 0.9))
  for (let i = 0; i < n; i++) {
    const ox = (i - (n - 1) / 2) * 0.9
    const px = x + Math.cos(rot) * ox
    const pz = z - Math.sin(rot) * ox
    const bag = world.addBox(px, baseY + (i % 2) * 0.35, pz, 0.95, 0.42, 0.55, world.mat.sandbag, { rotY: rot, collide: false })
    bag.rotation.z = (i % 2 ? 1 : -1) * 0.04
  }
  world.addCollider(x, z, Math.abs(Math.cos(rot)) * length + Math.abs(Math.sin(rot)) * 0.6, Math.abs(Math.sin(rot)) * length + Math.abs(Math.cos(rot)) * 0.6, baseY, baseY + 1)
}

function addStreetlight(world, x, z, baseY) {
  world.addCylinder(x, baseY, z, 0.09, 5.5, world.mat.darkMetal, { collide: false })
  const lamp = world.addBox(x, baseY + 5.5, z, 1.3, 0.16, 0.34, world.mat.orangeGlow, { collide: false })
  lamp.material = world.mat.orangeGlow
  world.addBox(x, baseY + 5.62, z, 1.7, 0.1, 0.5, world.mat.darkMetal, { collide: false })
}

function addNeonBillboard(world, x, y, z, rot, text, sub, color = '#ff8a2b') {
  const tex = makeTextTexture(text, { width: 512, height: 240, bg: 'rgba(4,9,14,.92)', fg: '#eaf6ff', accent: color, font: '700 62px sans-serif', sub, subFont: '600 24px sans-serif' })
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(11, 5.2), mat)
  mesh.position.set(x, y, z)
  mesh.rotation.y = rot
  world.scene.add(mesh)
  // Frame
  const frame = world.addBox(x, y - 2.9, z, 11.6, 0.3, 0.4, world.mat.darkMetal, { rotY: rot, collide: false })
  return mesh
}

function addRadarDish(world, x, z, baseY) {
  world.addCylinder(x, baseY, z, 0.5, 4.5, world.mat.metal, { collide: false })
  const dish = new THREE.Mesh(new THREE.CircleGeometry(3.4, 24, 0, Math.PI * 2), world.mat.radar)
  dish.position.set(x, baseY + 5.2, z)
  dish.rotation.set(-0.55, 0.3, 0.1)
  dish.material.side = THREE.DoubleSide
  world.scene.add(dish)
  const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.6, 6), world.mat.metal)
  strut.position.set(x, baseY + 4.8, z)
  strut.rotation.z = 0.5
  world.scene.add(strut)
  world.animated.push((t) => { dish.rotation.y = 0.3 + Math.sin(t * 0.28) * 0.8 })
}

function addHelipad(world, x, z, baseY, r = 12) {
  const tex = makeTextTexture('H', { width: 256, height: 256, bg: 'rgba(24,29,30,1)', fg: '#e9d8a6', accent: '#e9d8a6', font: '700 150px sans-serif', border: true })
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 })
  const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 32), mat)
  disc.rotation.x = -Math.PI / 2
  disc.position.set(x, baseY + 0.12, z)
  world.scene.add(disc)
  const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.7, r, 40), world.mat.yellowGlow)
  ring.rotation.x = -Math.PI / 2
  ring.position.set(x, baseY + 0.13, z)
  world.scene.add(ring)
}

function addStaticPlane(world, x, z, baseY, rot = 0) {
  const bodyMat = world.mat.aircraft
  const body = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 1.8, 32, 12), bodyMat)
  body.rotation.z = Math.PI / 2
  body.rotation.y = rot
  body.position.set(x, baseY + 4.2, z)
  body.castShadow = true
  world.scene.add(body)
  const nose = new THREE.Mesh(new THREE.ConeGeometry(1.8, 4, 12), bodyMat)
  nose.rotation.z = -Math.PI / 2
  nose.rotation.y = rot
  nose.position.set(x + Math.cos(rot) * 17, baseY + 4.2, z - Math.sin(rot) * 17)
  world.scene.add(nose)
  world.addBox(x, baseY + 4, z, 36, 0.55, 7.5, bodyMat, { rotY: rot, collide: false })
  world.addBox(x - 12 * Math.cos(rot), baseY + 5.2, z + 12 * Math.sin(rot), 0.5, 5.5, 9, bodyMat, { rotY: rot, collide: false })
  world.addBox(x - 12 * Math.cos(rot), baseY + 7.5, z + 12 * Math.sin(rot), 0.5, 0.5, 4.5, bodyMat, { rotY: rot, collide: false })
  world.addCollider(x, z, Math.abs(Math.cos(rot)) * 34 + Math.abs(Math.sin(rot)) * 8, Math.abs(Math.sin(rot)) * 34 + Math.abs(Math.cos(rot)) * 8, baseY, baseY + 7)
}

function addHelicopter(world, x, z, baseY, rot = 0) {
  const mat = world.mat.aircraft
  const body = world.addBox(x, baseY + 1.4, z, 5.2, 2.2, 2.4, mat, { rotY: rot, collide: false })
  body.scale.set(5.2, 2.2, 2.4)
  world.addBox(x - 4.2 * Math.cos(rot), baseY + 1.9, z + 4.2 * Math.sin(rot), 6.5, 0.6, 0.7, mat, { rotY: rot, collide: false })
  world.addBox(x - 7.4 * Math.cos(rot), baseY + 3.1, z + 7.4 * Math.sin(rot), 0.4, 3, 2.6, mat, { rotY: rot, collide: false })
  world.addCylinder(x, baseY + 2.8, z, 0.22, 0.8, world.mat.darkMetal, { collide: false })
  const rotor = new THREE.Mesh(new THREE.BoxGeometry(10, 0.08, 0.35), world.mat.darkMetal)
  rotor.position.set(x, baseY + 3.35, z)
  rotor.rotation.y = rot
  world.scene.add(rotor)
  world.animated.push((t) => { rotor.rotation.y = rot + t * 18 })
  world.addBox(x + Math.cos(rot) * 1.2, baseY + 1.2, z - Math.sin(rot) * 1.2, 4.5, 0.12, 0.12, world.mat.darkMetal, { rotY: rot, collide: false })
  world.addBox(x, baseY + 0.5, z, 4.2, 0.12, 2.4, world.mat.darkMetal, { rotY: rot, collide: false })
}

// ─────────────────────────────────────────────────────────────────────────────
//  Landmarks
// ─────────────────────────────────────────────────────────────────────────────

function buildCity(world) {
  const pad = world.pad('city')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 230, 0.34, 212, world.mat.asphalt, { collide: false })
  // Street grid
  for (const sx of [-390, -330, -270, -210]) world.addBox(sx, y + 0.04, pad.z, 7, 0.05, 208, world.mat.asphaltLight, { collide: false })
  for (const sz of [-330, -270, -210, -150]) world.addBox(pad.x, y + 0.04, sz, 226, 0.05, 7, world.mat.asphaltLight, { collide: false })
  // Lane dashes
  for (const sx of [-330, -270]) for (let z = -410; z < -80; z += 14) world.addBox(sx, y + 0.09, z, 0.22, 0.02, 5, world.mat.yellowLine, { collide: false })
  // Sidewalks
  for (const sx of [-360, -300, -240]) for (const sz of [-300, -240, -180]) {
    world.addBox(sx, y + 0.06, sz, 36, 0.1, 34, world.mat.sidewalk, { collide: false })
  }

  const towers = [
    [-360, -300, 30, 28, 92, 0, 'NOVA'],
    [-300, -300, 34, 30, 66, 1, ''],
    [-240, -300, 26, 26, 112, 2, 'ELITE'],
    [-360, -240, 28, 32, 54, 0, ''],
    [-240, -240, 28, 28, 62, 1, 'ASH'],
    [-360, -180, 32, 26, 48, 2, ''],
    [-300, -180, 28, 30, 84, 0, 'ZONE 7'],
    [-240, -180, 26, 24, 58, 1, ''],
  ]
  for (const [x, z, w, d, h, style, neon] of towers) {
    addWindowTower(world, x, z, w, d, h, y, style, { neon, neonColor: style === 2 ? '#63dcff' : '#ff8a2b' })
  }
  // Plaza and fountain
  const plaza = { x: -300, z: -240 }
  world.addBox(plaza.x, y + 0.08, plaza.z, 42, 0.1, 34, world.mat.plaza, { collide: false })
  world.addCylinder(plaza.x, y + 0.1, plaza.z, 6, 1.1, world.mat.concrete, { collide: true })
  const water = new THREE.Mesh(new THREE.CircleGeometry(5.2, 32), world.mat.fountainWater)
  water.rotation.x = -Math.PI / 2
  water.position.set(plaza.x, y + 1.22, plaza.z)
  world.scene.add(water)
  world.addCylinder(plaza.x, y + 1.2, plaza.z, 1.2, 3.6, world.mat.metal, { collide: false })
  const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), world.mat.orangeGlow)
  orb.position.set(plaza.x, y + 5.1, plaza.z)
  world.scene.add(orb)
  world.animated.push((t) => { orb.rotation.y = t * 0.4; orb.position.y = y + 5.1 + Math.sin(t * 1.2) * 0.18 })
  // Benches
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2
    world.addBox(plaza.x + Math.cos(a) * 12, y + 0.2, plaza.z + Math.sin(a) * 10, 2.6, 0.35, 0.8, world.mat.wood, { rotY: -a, collide: false })
  }
  // Cars
  const carColors = [0x2b3138, 0x6a2b2b, 0x2e4d5f, 0x8a7a5a]
  const carSpots = [[-375, -260], [-255, -320], [-335, -160], [-225, -260], [-285, -135], [-375, -345]]
  carSpots.forEach(([x, z], i) => {
    world.addBox(x, y + 0.3, z, 3.6, 0.7, 1.7, new THREE.MeshStandardMaterial({ color: carColors[i % 4], metalness: 0.6, roughness: 0.4 }), { rotY: i % 2 ? Math.PI / 2 : 0, collide: true })
    world.addBox(x, y + 0.95, z, 1.9, 0.55, 1.55, world.mat.glassDark, { rotY: i % 2 ? Math.PI / 2 : 0, collide: false })
  })
  // Streetlights
  for (const sx of [-330, -270]) for (let z = -390; z <= -120; z += 54) addStreetlight(world, sx + 4, z, y)
  // Billboards
  addNeonBillboard(world, -300, y + 11, -115, 0, 'NEON CITY', 'AURORA PROTOCOL · SECTOR 04', '#63dcff')
  addNeonBillboard(world, -190, y + 14, -240, -Math.PI / 2, 'BATTLE WORLD', 'ELITE SURVIVAL', '#ff8a2b')
  // Rooftop helipad on the tallest tower
  addHelipad(world, -240, -300, y + 112.7, 9)
  // Subway / underground entrance
  world.addBox(-315, y + 0.2, -142, 8, 0.4, 10, world.mat.darkMetal, { collide: false })
  world.addBox(-315, y + 0.2, -137, 7, 2.4, 0.5, world.mat.metal, { collide: true })
  const sign = makeTextTexture('METRO', { width: 256, height: 96, bg: 'rgba(3,9,14,.9)', fg: '#63dcff', accent: '#63dcff', font: '700 42px sans-serif', border: false })
  const sm = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.5), new THREE.MeshBasicMaterial({ map: sign, transparent: true, side: THREE.DoubleSide }))
  sm.position.set(-315, y + 2.5, -134.7)
  world.scene.add(sm)
}

function buildMilitary(world) {
  const pad = world.pad('base')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 194, 0.34, 184, world.mat.concrete, { collide: false })
  // Perimeter wall with a south gate
  const wallH = 3.4
  world.addBox(pad.x, y, -378, 188, wallH, 2, world.mat.concreteDark, { collide: true })
  world.addBox(pad.x, y, -206, 188, wallH, 2, world.mat.concreteDark, { collide: true })
  for (const sx of [181, 369]) {
    world.addBox(sx, y, -330, 2, wallH, 94, world.mat.concreteDark, { collide: true })
    world.addBox(sx, y, -252, 2, wallH, 96, world.mat.concreteDark, { collide: true })
  }
  // Gate towers
  addWatchtower(world, 205, -330, y, 9)
  addWatchtower(world, 345, -330, y, 9)
  addWatchtower(world, 205, -228, y, 9)
  addWatchtower(world, 345, -228, y, 9)
  // Barracks and HQ
  addBarracks(world, 240, -350, y, 0, 46, 13)
  addBarracks(world, 310, -350, y, 0, 40, 13)
  addBarracks(world, 240, -260, y, 0, 38, 12)
  const hq = world.addBox(320, y, -252, 30, 9.5, 22, world.mat.concrete, { collide: true })
  world.addBox(320, y + 9.5, -252, 31, 0.6, 23, world.mat.roofGray, { collide: false })
  for (let i = -1; i <= 1; i++) world.addBox(320 + i * 8, y + 3, -241, 3.2, 1.5, 0.1, world.mat.windowWarm, { collide: false })
  for (let i = -1; i <= 1; i++) world.addBox(320 + i * 8, y + 6.6, -241, 3.2, 1.5, 0.1, world.mat.windowWarm, { collide: false })
  addRadarDish(world, 338, -278, y)
  // Helipad and helicopter
  addHelipad(world, 270, -292, y, 13)
  addHelicopter(world, 270, -292, y + 0.2, 0.4)
  // Fuel tanks
  for (let i = 0; i < 3; i++) {
    world.addCylinder(370, y, -225 + i * 8, 3.4, 5.2, world.mat.metal, { collide: true })
    world.addCylinder(370, y + 5.2, -225 + i * 8, 1.6, 0.7, world.mat.darkMetal, { collide: false })
  }
  // Sandbag positions
  addSandbagWall(world, 245, -300, y, 8, 0)
  addSandbagWall(world, 300, -300, y, 7, 0)
  addSandbagWall(world, 275, -320, y, 5, Math.PI / 2)
  // Crates and containers
  const rng = mulberry32(77)
  for (let i = 0; i < 14; i++) {
    addCrate(world, 215 + rng() * 140, -370 + rng() * 150, y, 0.9 + rng() * 0.5, rng() * Math.PI)
  }
  addContainer(world, 220, -300, y, '#3f6f78', 0.2, 2)
  addContainer(world, 226, -297, y, '#6f523f', 0.2, 1)
  addContainer(world, 350, -350, y, '#4f5f3f', -0.3, 2)
  // Flags
  for (const sx of [230, 320]) {
    world.addCylinder(sx, y, -320, 0.09, 9, world.mat.metal, { collide: false })
    const flag = world.addBox(sx + 1.2, y + 7.4, -320, 2.4, 1.4, 0.05, world.mat.flag, { collide: false })
    world.animated.push((t) => { flag.rotation.y = Math.sin(t * 2.4) * 0.15 })
  }
  // Barracks sign
  addNeonBillboard(world, 275, y + 9, -378, 0, 'IRONHOLD', 'RESTRICTED · SECTOR 07', '#ff8a2b')
}

function buildAirport(world) {
  const pad = world.pad('airport')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 274, 0.34, 242, world.mat.asphalt, { collide: false })
  // Runway
  world.addBox(342, y + 0.05, 238, 280, 0.08, 38, world.mat.asphaltLight, { collide: false })
  for (let x = 215; x <= 470; x += 16) world.addBox(x, y + 0.12, 238, 8, 0.02, 0.5, world.mat.whiteLine, { collide: false })
  for (let x = 215; x <= 470; x += 18) {
    world.addBox(x, y + 0.12, 222, 8, 0.02, 0.5, world.mat.whiteLine, { collide: false })
    world.addBox(x, y + 0.12, 254, 8, 0.02, 0.5, world.mat.whiteLine, { collide: false })
  }
  // Taxiway
  world.addBox(342, y + 0.05, 280, 240, 0.08, 12, world.mat.asphaltLight, { collide: false })
  // Terminal
  world.addBox(300, y, 304, 64, 11, 24, world.mat.concrete, { collide: true })
  world.addBox(300, y + 11, 304, 66, 0.7, 26, world.mat.roofGray, { collide: false })
  for (let i = -3; i <= 3; i++) {
    world.addBox(300 + i * 8, y + 2.2, 291.9, 4.6, 5.5, 0.15, world.mat.glass, { collide: false })
    world.addBox(300 + i * 8, y + 2.2, 316.1, 4.6, 5.5, 0.15, world.mat.glass, { collide: false })
  }
  addNeonBillboard(world, 300, y + 15, 291, 0, 'KESTREL', 'INTERNATIONAL AIRFIELD', '#ffd166')
  // Control tower
  world.addBox(396, y, 300, 11, 34, 11, world.mat.concrete, { collide: true })
  world.addBox(396, y + 34, 300, 15, 6, 15, world.mat.glass, { collide: true })
  world.addBox(396, y + 40, 300, 16, 0.8, 16, world.mat.roofGray, { collide: false })
  world.addCylinder(396, y + 40.8, 300, 0.12, 9, world.mat.metal, { collide: false })
  world.addBox(396, y + 49.6, 300, 0.5, 0.5, 0.5, world.mat.redGlow, { collide: false })
  // Hangars
  for (const hx of [270, 345]) {
    world.addBox(hx, y, 200, 52, 7, 30, world.mat.metal, { collide: true })
    const roof = new THREE.Mesh(archGeometry(16, 52), world.mat.roofGray)
    roof.position.set(hx, y + 7, 200)
    roof.rotation.y = Math.PI / 2
    roof.castShadow = true
    world.scene.add(roof)
    world.addBox(hx, y + 2.4, 214.9, 10, 5, 0.15, world.mat.darkMetal, { collide: false })
    world.addBox(hx, y + 2.4, 185.1, 10, 5, 0.15, world.mat.darkMetal, { collide: false })
  }
  // Static cargo plane
  addStaticPlane(world, 342, 238, y, Math.PI / 2)
  // Fuel depot
  for (let i = 0; i < 3; i++) world.addCylinder(430, y, 330 - i * 8, 3.2, 6, world.mat.metal, { collide: true })
  // Windsock
  world.addCylinder(210, y, 238, 0.12, 8, world.mat.metal, { collide: false })
  const sock = world.addBox(211.8, y + 7.3, 238, 3.2, 0.7, 0.7, world.mat.orangeGlow, { collide: false })
  world.animated.push((t) => { sock.rotation.y = Math.sin(t * 3.2) * 0.3 })
  // Fences
  for (let x = 210; x < 475; x += 14) {
    world.addBox(x, y, 350, 0.12, 2.2, 0.12, world.mat.metal, { collide: false })
    world.addBox(x + 7, y + 1.8, 350, 14, 0.08, 0.08, world.mat.metal, { collide: false })
  }
  // Vehicles / luggage
  const rng = mulberry32(88)
  for (let i = 0; i < 12; i++) addCrate(world, 250 + rng() * 180, 270 + rng() * 60, y, 0.7 + rng() * 0.5, rng() * Math.PI)
  addHelipad(world, 470, 300, y, 9)
}

function buildHarbor(world) {
  const pad = world.pad('harbor')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 176, 0.34, 160, world.mat.concrete, { collide: false })
  // Warehouse
  world.addBox(-375, y, 270, 52, 12, 26, world.mat.metal, { collide: true })
  world.addBox(-375, y + 12, 270, 54, 0.7, 28, world.mat.roofGray, { collide: false })
  for (let i = -2; i <= 2; i++) world.addBox(-375 + i * 9, y + 2.2, 256.9, 4.4, 6, 0.15, world.mat.windowWarm, { collide: false })
  addNeonBillboard(world, -375, y + 15, 257, 0, 'DOCKSIDE', 'CARGO TERMINAL 12', '#54e6a5')
  // Docks extending toward the water (south-west)
  const docks = [
    { x: -465, z: 325, w: 9, d: 58, rot: 0.55 },
    { x: -430, z: 365, w: 9, d: 46, rot: 0.2 },
    { x: -505, z: 300, w: 9, d: 42, rot: 0.9 },
  ]
  for (const d of docks) {
    world.addBox(d.x, 4.6, d.z, d.w, 0.55, d.d, world.mat.wood, { rotY: d.rot, collide: false })
    world.addWalkable(d.x, d.z, d.w, d.d, 5.15, d.rot)
    for (let i = -2; i <= 2; i++) {
      const px = d.x + Math.sin(d.rot) * i * (d.d / 5)
      const pz = d.z + Math.cos(d.rot) * i * (d.d / 5)
      for (const s of [-1, 1]) world.addCylinder(px + Math.cos(d.rot) * s * d.w * 0.45, 0, pz - Math.sin(d.rot) * s * d.w * 0.45, 0.3, 4.6, world.mat.woodDark, { collide: false })
    }
  }
  // Containers
  const colors = ['#3f6f78', '#6f3f3f', '#5f6f3f', '#6f5a3f', '#3f4f6f']
  const rng = mulberry32(99)
  for (let i = 0; i < 16; i++) {
    const x = -455 + rng() * 100
    const z = 230 + rng() * 90
    if (Math.hypot(x + 375, z - 270) < 34) continue
    addContainer(world, x, z, y, pick(rng, colors), (rng() - 0.5) * 0.5, randInt(rng, 1, 3))
  }
  // Crane
  const cx = -452, cz = 288
  world.addBox(cx, y, cz, 7, 2, 7, world.mat.darkMetal, { collide: true })
  world.addBox(cx, y + 2, cz, 3, 24, 3, world.mat.metal, { collide: true })
  world.addBox(cx + 11, y + 25, cz, 26, 1.2, 1.2, world.mat.orangeGlow, { collide: false })
  world.addBox(cx - 8, y + 25, cz, 6, 1.8, 3, world.mat.darkMetal, { collide: false })
  world.addBox(cx + 22, y + 20, cz, 0.2, 10, 0.2, world.mat.darkMetal, { collide: false })
  // Cargo ship
  const sx = -505, sz = 345
  world.addBox(sx, 0.5, sz, 78, 7, 20, world.mat.shipHull, { rotY: 0.25, collide: false })
  world.addBox(sx, 7.5, sz, 74, 0.5, 19, world.mat.shipDeck, { rotY: 0.25, collide: false })
  world.addWalkable(sx, sz, 74, 19, 8.0, 0.25)
  world.addBox(sx - 20, 8, sz, 16, 12, 16, world.mat.metal, { rotY: 0.25, collide: true })
  for (let i = 0; i < 5; i++) addContainer(world, sx - 8 + i * 10, sz, 8, pick(rng, colors), 0.25, 1)
  world.addCylinder(sx - 22, 20, sz, 1.1, 6, world.mat.darkMetal, { collide: false })
  // Lighthouse
  const lx = -458, lz = 232
  world.addCylinder(lx, y, lz, 3.2, 20, world.mat.white, { collide: true })
  world.addCylinder(lx, y + 20, lz, 2.4, 3, world.mat.redGlow, { collide: false })
  const beam = new THREE.Mesh(new THREE.ConeGeometry(2.2, 30, 16, 1, true), world.mat.lightBeam)
  beam.position.set(lx, y + 22, lz)
  beam.rotation.z = Math.PI / 2
  world.scene.add(beam)
  world.animated.push((t) => { beam.rotation.y = t * 0.5 })
  // Boats and props
  world.addBox(-425, 4.7, 332, 9, 1.1, 3.6, world.mat.white, { rotY: 0.55, collide: false })
  world.addBox(-425, 5.4, 332, 4, 1.4, 2.2, world.mat.glassDark, { rotY: 0.55, collide: false })
  for (let i = 0; i < 12; i++) addCrate(world, -450 + rng() * 90, 240 + rng() * 80, y, 0.7 + rng() * 0.6, rng() * Math.PI)
  addSandbagWall(world, -400, 325, y, 8, 0.3)
}

function buildVillage(world) {
  const pad = world.pad('village')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 172, 0.34, 160, world.mat.dirt, { collide: false })
  // Main dirt road
  world.addBox(0, y + 0.05, 92, 10, 0.06, 154, world.mat.dirtLight, { collide: false })
  world.addBox(0, y + 0.05, 92, 156, 0.06, 9, world.mat.dirtLight, { collide: false })
  const houses = [
    [-42, 48, 0, 1.05], [40, 48, Math.PI, 1.0], [-52, 116, 0.2, 0.95],
    [46, 118, Math.PI - 0.2, 1.05], [-18, 150, 0, 0.9], [54, 24, Math.PI / 2, 0.9],
    [-68, 26, -Math.PI / 2, 1.0], [24, 158, Math.PI, 0.85], [-72, 78, Math.PI / 2, 0.8],
  ]
  const wallColors = [0xd4c3a4, 0xc8b491, 0xd8cbb2, 0xb9a889]
  houses.forEach(([x, z, rot, s], i) => addHouse(world, x, z, y, rot, s, wallColors[i % 4]))
  // Barn
  world.addBox(66, y, 142, 22, 8, 15, world.mat.wood, { collide: true })
  const barnRoof = new THREE.Mesh(gableGeometry(24, 17, 6), world.mat.roofRed)
  barnRoof.position.set(66, y + 8, 142)
  world.scene.add(barnRoof)
  // Windmill
  const wx = -74, wz = 148
  world.addCylinder(wx, y, wz, 3.2, 16, world.mat.concrete, { collide: true })
  const hub = new THREE.Group()
  hub.position.set(wx, y + 17, wz)
  world.scene.add(hub)
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(1.2, 10, 0.18), world.mat.wood)
    blade.position.y = 5
    const arm = new THREE.Group()
    arm.rotation.z = i * Math.PI / 2
    arm.add(blade)
    hub.add(arm)
  }
  world.animated.push((t) => { hub.rotation.z = t * 0.55 })
  // Market stalls
  for (let i = 0; i < 4; i++) {
    const mx = -18 + i * 12, mz = 88
    world.addBox(mx, y, mz, 5, 0.8, 3, world.mat.wood, { collide: true })
    world.addBox(mx, y + 2.8, mz, 6, 0.2, 4, i % 2 ? world.mat.canvasRed : world.mat.canvasBlue, { collide: false })
    for (const s of [-1, 1]) world.addBox(mx + s * 2.6, y, mz, 0.15, 2.8, 0.15, world.mat.woodDark, { collide: false })
  }
  // Well
  world.addCylinder(12, y, 112, 2.2, 1.3, world.mat.concrete, { collide: true })
  world.addCylinder(12, y + 1.3, 112, 1.9, 0.1, world.mat.fountainWater, { collide: false })
  for (const s of [-1, 1]) world.addBox(12 + s * 2, y, 112, 0.2, 3.4, 0.2, world.mat.woodDark, { collide: false })
  world.addBox(12, y + 3.4, 112, 4.6, 0.2, 2.2, world.mat.roofRed, { collide: false })
  // Fences
  for (let i = 0; i < 20; i++) {
    const x = -80 + i * 8.5
    world.addBox(x, y, 38, 0.12, 1.2, 0.12, world.mat.woodDark, { collide: false })
    if (i < 19) world.addBox(x + 4.25, y + 0.9, 38, 8.5, 0.08, 0.08, world.mat.woodDark, { collide: false })
  }
  // Hay bales, carts
  for (let i = 0; i < 8; i++) world.addCylinder(-55 + i * 14, y, 30 + (i % 3) * 6, 1.3, 1.1, world.mat.hay, { collide: false })
  world.addBox(0, y + 0.8, 52, 3.4, 1.3, 1.8, world.mat.wood, { collide: true })
  // Village sign
  addNeonBillboard(world, 0, y + 8, 34, 0, 'OLD MILL', 'EST. 1912 · POP. 214', '#e8c79a')
}

function buildIndustrial(world) {
  const pad = world.pad('foundry')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 180, 0.34, 172, world.mat.concrete, { collide: false })
  // Factory
  world.addBox(138, y, -42, 74, 17, 44, world.mat.metal, { collide: true })
  // Sawtooth roof
  for (let i = 0; i < 5; i++) {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(14, 0.4, 44), world.mat.roofGray)
    roof.position.set(108 + i * 15, y + 18.2, -42)
    roof.rotation.z = 0.25
    roof.castShadow = true
    world.scene.add(roof)
  }
  addNeonBillboard(world, 138, y + 12, -19.5, 0, 'FOUNDRY', 'INDUSTRIAL SECTOR 03', '#ff7a1a')
  // Smokestacks with smoke
  for (let i = 0; i < 3; i++) {
    const sx = 115 + i * 22, sz = -68
    world.addCylinder(sx, y, sz, 2.2, 34, world.mat.brick, { collide: true })
    world.addCylinder(sx, y + 34, sz, 2.5, 1.2, world.mat.darkMetal, { collide: false })
    world.addSmoke(sx, y + 35, sz, 3.4, 30)
  }
  // Silos
  for (let i = 0; i < 4; i++) {
    const sx = 88 + i * 10, sz = 24
    world.addCylinder(sx, y, sz, 3.6, 20, world.mat.metal, { collide: true })
    world.addCylinder(sx, y + 20, sz, 3.9, 1.2, world.mat.darkMetal, { collide: false })
  }
  // Pipes
  for (let i = 0; i < 3; i++) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 26, 8), world.mat.rust)
    pipe.rotation.z = Math.PI / 2
    pipe.position.set(70, y + 2 + i * 2, -20 + i * 3)
    world.scene.add(pipe)
  }
  // Warehouse
  world.addBox(180, y, -80, 44, 12, 32, world.mat.metal, { collide: true })
  world.addBox(180, y + 12, -80, 46, 0.7, 34, world.mat.roofGray, { collide: false })
  // Molten vats (visual glow)
  for (let i = 0; i < 3; i++) {
    world.addCylinder(105 + i * 11, y, -95, 3, 4, world.mat.darkMetal, { collide: true })
    world.addCylinder(105 + i * 11, y + 4, -95, 2.6, 0.2, world.mat.orangeGlow, { collide: false })
  }
  // Containers / crates
  const rng = mulberry32(111)
  const colors = ['#3f6f78', '#6f3f3f', '#5f6f3f', '#6f5a3f']
  for (let i = 0; i < 14; i++) {
    const x = 70 + rng() * 120, z = -105 + rng() * 110
    if (Math.hypot(x - 138, z + 42) < 48) continue
    addContainer(world, x, z, y, pick(rng, colors), rng() * 0.8, randInt(rng, 1, 2))
  }
  for (let i = 0; i < 12; i++) addCrate(world, 60 + rng() * 140, -110 + rng() * 120, y, 0.8 + rng() * 0.6, rng() * Math.PI)
  // Catwalk
  world.addBox(100, y + 10, -42, 3, 0.3, 40, world.mat.darkMetal, { collide: false })
  for (let i = 0; i < 5; i++) world.addBox(100, y + 2 + i * 2, -62, 0.15, 2, 0.15, world.mat.darkMetal, { collide: false })
}

function buildBunker(world) {
  const pad = world.pad('bunker')
  const y = pad.h
  world.addBox(pad.x, y - 0.3, pad.z, 58, 0.34, 54, world.mat.concrete, { collide: false })
  // Entrance bunker with an open doorway
  const bx = pad.x, bz = pad.z
  const wallMat = world.mat.concreteDark
  world.addBox(bx, y, bz - 9, 26, 7, 1.2, wallMat, { collide: true })
  world.addBox(bx - 13, y, bz, 1.2, 7, 18, wallMat, { collide: true })
  world.addBox(bx + 13, y, bz, 1.2, 7, 18, wallMat, { collide: true })
  world.addBox(bx, y + 7, bz, 27, 0.8, 19, world.mat.concrete, { collide: false })
  world.addBox(bx - 7.5, y, bz + 9, 11, 7, 1.2, wallMat, { collide: true })
  world.addBox(bx + 7.5, y, bz + 9, 11, 7, 1.2, wallMat, { collide: true })
  world.addBox(bx, y + 6.2, bz + 9, 5, 0.8, 1.2, wallMat, { collide: false })
  // Interior floor + lights
  world.addBox(bx, y + 0.02, bz, 24, 0.08, 17, world.mat.interior, { collide: false })
  for (const lx of [-6, 6]) {
    const light = world.addBox(bx + lx, y + 6.3, bz - 2, 0.4, 0.4, 0.4, world.mat.redGlow, { collide: false })
    light.material = world.mat.redGlow
  }
  // Door sign
  const tex = makeTextTexture('07', { width: 256, height: 160, bg: 'rgba(3,8,12,.9)', fg: '#eaf6ff', accent: '#ff4b4b', font: '700 100px sans-serif', border: true })
  const sm = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.5), new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide }))
  sm.position.set(bx, y + 4.6, bz + 9.65)
  world.scene.add(sm)
  // Sandbags, crates, antenna
  addSandbagWall(world, bx - 18, bz + 12, y, 8, 0)
  addSandbagWall(world, bx + 18, bz + 12, y, 7, 0)
  for (let i = 0; i < 6; i++) addCrate(world, bx - 18 + i * 6, bz + 18, y, 0.8 + (i % 2) * 0.3, i * 0.5)
  world.addCylinder(bx + 20, y, bz - 12, 0.12, 16, world.mat.metal, { collide: false })
  world.addBox(bx + 20, y + 16, bz - 12, 0.4, 0.4, 0.4, world.mat.redGlow, { collide: false })
  addWatchtower(world, bx + 26, bz + 2, y, 10)
  // Concrete barricades
  for (let i = 0; i < 4; i++) world.addBox(bx - 24 + i * 12, y, bz + 26, 4, 1.4, 1.2, world.mat.concrete, { collide: true })
}

function buildRidge(world) {
  const pad = world.pad('ridge')
  const y = pad.h
  addWatchtower(world, pad.x - 18, pad.z - 4, y, 11)
  addWatchtower(world, pad.x + 18, pad.z + 8, y, 8)
  addSandbagWall(world, pad.x, pad.z + 18, y, 12, 0)
  addSandbagWall(world, pad.x - 16, pad.z + 8, y, 8, 0.8)
  for (let i = 0; i < 8; i++) addCrate(world, pad.x - 14 + i * 4, pad.z - 14, y, 0.7 + (i % 3) * 0.2, i)
  world.addCylinder(pad.x + 4, y, pad.z - 20, 0.15, 20, world.mat.metal, { collide: false })
  world.addBox(pad.x + 4, y + 20, pad.z - 20, 0.5, 0.5, 0.5, world.mat.redGlow, { collide: false })
  addNeonBillboard(world, pad.x, y + 7, pad.z + 26, Math.PI, 'RIDGE', 'OVERWATCH · ALT 212M', '#9fdcff')
}

function buildBeach(world) {
  const pad = world.pad('beach')
  const y = pad.h
  // Lifeguard tower
  const lx = pad.x - 14, lz = pad.z + 6
  for (const s of [-1, 1]) for (const t of [-1, 1]) world.addBox(lx + s * 1.8, y, lz + t * 1.8, 0.25, 4, 0.25, world.mat.wood, { collide: false })
  world.addBox(lx, y + 4, lz, 5, 0.3, 5, world.mat.wood, { collide: false })
  world.addBox(lx, y + 6.2, lz, 5.5, 0.2, 5.5, world.mat.canvasRed, { collide: false })
  world.addWalkable(lx, lz, 5, 5, y + 4.3)
  // Umbrellas
  for (let i = 0; i < 6; i++) {
    const x = pad.x - 30 + i * 12, z = pad.z + 18 + (i % 2) * 6
    world.addCylinder(x, y, z, 0.08, 3, world.mat.metal, { collide: false })
    const um = new THREE.Mesh(new THREE.ConeGeometry(3.4, 1.2, 8, 1, true), i % 2 ? world.mat.canvasRed : world.mat.canvasBlue)
    um.position.set(x, y + 3.4, z)
    world.scene.add(um)
  }
  // Pier
  world.addBox(pad.x + 28, y - 0.2, pad.z - 2, 8, 0.5, 44, world.mat.wood, { collide: false })
  world.addWalkable(pad.x + 28, pad.z - 2, 8, 44, y + 0.3)
  for (let i = 0; i < 8; i++) for (const s of [-1, 1]) world.addCylinder(pad.x + 28 + s * 3.4, 0, pad.z - 22 + i * 6, 0.25, 3.5, world.mat.woodDark, { collide: false })
  // Shipwreck
  world.addBox(pad.x + 58, 1.2, pad.z - 34, 18, 3.5, 6, world.mat.rust, { rotY: 0.6, collide: false })
  world.addBox(pad.x + 58, 4.6, pad.z - 34, 5, 2.5, 4, world.mat.rust, { rotY: 0.6, collide: false })
  // Beach props
  for (let i = 0; i < 10; i++) addCrate(world, pad.x - 40 + i * 9, pad.z + 26 + (i % 3) * 5, y, 0.5 + (i % 2) * 0.3, i)
}

function buildMountain(world) {
  const x = 18, z = 408
  const y = getHeight(x, z)
  // Aurora relay station
  world.addBox(x, y - 0.2, z, 26, 0.4, 22, world.mat.concrete, { collide: false })
  world.addBox(x - 6, y, z - 4, 8, 4, 7, world.mat.concreteDark, { collide: true })
  world.addBox(x + 6, y, z - 2, 5, 3, 5, world.mat.metal, { collide: true })
  world.addCylinder(x + 8, y, z + 5, 0.18, 22, world.mat.metal, { collide: false })
  world.addCylinder(x - 8, y, z + 6, 0.18, 16, world.mat.metal, { collide: false })
  const dish = new THREE.Mesh(new THREE.CircleGeometry(3, 20), world.mat.radar)
  dish.position.set(x - 8, y + 16, z + 6)
  dish.rotation.set(-0.6, 0.4, 0)
  world.scene.add(dish)
  addNeonBillboard(world, x, y + 6, z + 12, 0, 'AURORA', 'RELAY STATION 09', '#9fdcff')
  for (let i = 0; i < 12; i++) addCrate(world, x - 12 + (i % 4) * 6, z - 12 + Math.floor(i / 4) * 5, y, 0.6, i)
}

function buildRoads(world) {
  const roadMat = new THREE.MeshStandardMaterial({ map: world.asphaltTexture, color: 0xffffff, roughness: 0.92, metalness: 0.02 })
  const dirtMat = new THREE.MeshStandardMaterial({ map: world.dirtTexture, color: 0xffffff, roughness: 1 })
  const routes = [
    { pts: [[0, 92], [-60, 10], [-160, -90], [-235, -170], [-300, -245]], w: 8, mat: roadMat },
    { pts: [[0, 92], [80, 40], [170, -10], [275, -180], [275, -292]], w: 8, mat: roadMat },
    { pts: [[0, 92], [90, 150], [200, 200], [342, 238]], w: 8, mat: roadMat },
    { pts: [[0, 92], [-50, 160], [-100, 220], [-160, 260], [-260, 288], [-395, 300]], w: 7, mat: roadMat },
    { pts: [[0, 92], [60, 60], [110, 20], [138, -42]], w: 6, mat: dirtMat },
    { pts: [[-300, -245], [-220, -180], [-100, -140], [30, -90], [138, -42]], w: 7, mat: roadMat },
    { pts: [[275, -292], [320, -180], [360, -40], [380, 100], [342, 238]], w: 7, mat: roadMat },
    { pts: [[342, 238], [390, 300], [420, 380], [432, 450]], w: 7, mat: roadMat },
    { pts: [[275, -292], [200, -350], [100, -400], [-10, -440], [-82, -468]], w: 6, mat: roadMat },
  ]
  for (const r of routes) world.scene.add(createRoad(r.pts, r.w, r.mat, world.seed, 0.14))
  // Bridge over Mirror Lake
  const bx = -122, bz = 246
  const bridgeY = 7.2
  const rot = Math.atan2(-273, 40)
  world.addBox(bx, bridgeY - 0.55, bz, 11, 0.7, 138, world.mat.bridge, { rotY: rot, collide: false })
  world.addWalkable(bx, bz, 11, 138, bridgeY + 0.2, rot)
  for (const s of [-1, 1]) {
    world.addBox(bx + Math.cos(rot) * s * 5.2, bridgeY + 0.7, bz - Math.sin(rot) * s * 5.2, 0.3, 1.4, 138, world.mat.rail, { rotY: rot, collide: false })
  }
  for (let i = -2; i <= 2; i++) {
    world.addBox(bx + Math.sin(rot) * i * 25, bridgeY - 4, bz + Math.cos(rot) * i * 25, 2.2, 8, 2.2, world.mat.concreteDark, { rotY: rot, collide: false })
  }
  // Bridge lamps
  for (let i = -2; i <= 2; i++) {
    const px = bx + Math.sin(rot) * i * 24
    const pz = bz + Math.cos(rot) * i * 24
    addStreetlight(world, px + Math.cos(rot) * 5, pz - Math.sin(rot) * 5, bridgeY + 0.2)
  }
}

function buildForest(world) {
  const rng = mulberry32(world.seed + 500)
  const q = world.quality
  const count = q === 'low' ? 360 : q === 'medium' ? 580 : 860
  const trunkGeo = new THREE.CylinderGeometry(0.28, 0.45, 4.2, 6)
  trunkGeo.translate(0, 2.1, 0)
  const cone1 = new THREE.ConeGeometry(2.6, 5.2, 7)
  cone1.translate(0, 5.4, 0)
  const cone2 = new THREE.ConeGeometry(2.0, 4.2, 7)
  cone2.translate(0, 7.6, 0)
  const cone3 = new THREE.ConeGeometry(1.25, 3.0, 7)
  cone3.translate(0, 9.5, 0)
  const foliageGeo = mergeSimple([cone1, cone2, cone3])
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5b4630, roughness: 1 })
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x3e6b3a, roughness: 0.96 })
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count)
  const leaves = new THREE.InstancedMesh(foliageGeo, leafMat, count)
  trunks.castShadow = false
  leaves.castShadow = false
  const m = new THREE.Matrix4()
  const qn = new THREE.Quaternion()
  const s = new THREE.Vector3()
  const p = new THREE.Vector3()
  const color = new THREE.Color()
  let placed = 0
  let guard = 0
  while (placed < count && guard++ < count * 12) {
    const a = rng() * Math.PI * 2
    const r = 70 + Math.sqrt(rng()) * 520
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (isWater(x, z, world.seed)) continue
    if (Math.hypot(x, z) > 590) continue
    let blocked = false
    for (const pad of PAD_DEFS) {
      if (pad.type === 'lake' || pad.type === 'mountain') continue
      if (Math.hypot(x - pad.x, z - pad.z) < pad.r + 12) { blocked = true; break }
    }
    if (blocked) continue
    const h = getHeight(x, z, world.seed)
    if (h < 2.4 || h > 52) continue
    const scale = 0.75 + rng() * 0.9
    p.set(x, h - 0.2, z)
    qn.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI * 2)
    s.set(scale, scale * (0.85 + rng() * 0.35), scale)
    m.compose(p, qn, s)
    trunks.setMatrixAt(placed, m)
    leaves.setMatrixAt(placed, m)
    color.setHSL(0.26 + rng() * 0.06, 0.28 + rng() * 0.18, 0.24 + rng() * 0.14)
    leaves.setColorAt(placed, color)
    placed++
  }
  trunks.count = placed
  leaves.count = placed
  trunks.instanceMatrix.needsUpdate = true
  leaves.instanceMatrix.needsUpdate = true
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true
  world.scene.add(trunks, leaves)

  // Bushes
  const bushGeo = new THREE.IcosahedronGeometry(1.1, 0)
  const bushMat = new THREE.MeshStandardMaterial({ color: 0x4b6e3f, roughness: 1, flatShading: true })
  const bushCount = q === 'low' ? 90 : q === 'medium' ? 160 : 240
  const bushes = new THREE.InstancedMesh(bushGeo, bushMat, bushCount)
  for (let i = 0; i < bushCount; i++) {
    const a = rng() * Math.PI * 2
    const r = 90 + Math.sqrt(rng()) * 500
    const x = Math.cos(a) * r, z = Math.sin(a) * r
    const h = getHeight(x, z, world.seed)
    p.set(x, h + 0.4, z)
    qn.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI * 2)
    s.set(0.7 + rng() * 0.9, 0.5 + rng() * 0.6, 0.7 + rng() * 0.9)
    m.compose(p, qn, s)
    bushes.setMatrixAt(i, m)
  }
  world.scene.add(bushes)

  // Rocks
  const rockGeo = new THREE.DodecahedronGeometry(1, 0)
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x77736b, roughness: 0.98, flatShading: true })
  const rockCount = q === 'low' ? 70 : q === 'medium' ? 120 : 180
  const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCount)
  for (let i = 0; i < rockCount; i++) {
    const a = rng() * Math.PI * 2
    const r = 100 + Math.sqrt(rng()) * 500
    const x = Math.cos(a) * r, z = Math.sin(a) * r
    const h = getHeight(x, z, world.seed)
    p.set(x, h + 0.3, z)
    qn.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI * 2)
    s.set(0.8 + rng() * 2.2, 0.6 + rng() * 1.6, 0.8 + rng() * 2.2)
    m.compose(p, qn, s)
    rocks.setMatrixAt(i, m)
  }
  rocks.castShadow = false
  rocks.receiveShadow = true
  world.scene.add(rocks)

  // Palm trees at the beach and harbor
  const palmGeo = new THREE.CylinderGeometry(0.18, 0.32, 6, 6)
  palmGeo.translate(0, 3, 0)
  const palmTrunks = new THREE.InstancedMesh(palmGeo, trunkMat, 34)
  const palmCrownGeo = mergeSimple([
    new THREE.ConeGeometry(2.6, 0.8, 7).translate(0, 6.4, 0),
    new THREE.ConeGeometry(1.9, 0.6, 7).translate(0, 7.0, 0),
  ])
  const palmLeaves = new THREE.InstancedMesh(palmCrownGeo, new THREE.MeshStandardMaterial({ color: 0x4f7d3e, roughness: 0.9 }), 34)
  let palms = 0
  for (let i = 0; i < 34; i++) {
    const a = rng() * Math.PI * 2
    const r = 480 + rng() * 80
    const x = Math.cos(a) * r, z = Math.sin(a) * r
    if (isWater(x, z, world.seed)) continue
    const h = getHeight(x, z, world.seed)
    p.set(x, h, z)
    qn.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * Math.PI * 2)
    s.set(0.8 + rng() * 0.4, 0.8 + rng() * 0.5, 0.8 + rng() * 0.4)
    m.compose(p, qn, s)
    palmTrunks.setMatrixAt(palms, m)
    palmLeaves.setMatrixAt(palms, m)
    palms++
  }
  palmTrunks.count = palms
  palmLeaves.count = palms
  world.scene.add(palmTrunks, palmLeaves)
}

function mergeSimple(geos) {
  // Merge geometries without BufferGeometryUtils to keep this module lean.
  const positions = []
  const normals = []
  const uvs = []
  const indices = []
  let offset = 0
  for (const g of geos) {
    const pos = g.attributes.position
    const nor = g.attributes.normal
    const uv = g.attributes.uv
    for (let i = 0; i < pos.count; i++) {
      positions.push(pos.getX(i), pos.getY(i), pos.getZ(i))
      normals.push(nor.getX(i), nor.getY(i), nor.getZ(i))
      uvs.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0)
    }
    const idx = g.index
    if (idx) for (let i = 0; i < idx.count; i++) indices.push(idx.getX(i) + offset)
    else for (let i = 0; i < pos.count; i++) indices.push(i + offset)
    offset += pos.count
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  return geo
}

function buildProps(world) {
  const rng = mulberry32(world.seed + 700)
  // Wilderness caches and small cover props
  for (let i = 0; i < 24; i++) {
    const a = rng() * Math.PI * 2
    const r = 120 + rng() * 430
    const x = Math.cos(a) * r, z = Math.sin(a) * r
    if (isWater(x, z, world.seed)) continue
    const h = getHeight(x, z, world.seed)
    if (h < 2) continue
    if (i % 3 === 0) addCrate(world, x, z, h, 0.7 + rng() * 0.5, rng() * Math.PI)
    else if (i % 3 === 1) addSandbagWall(world, x, z, h, 4, rng() * Math.PI)
    else world.addBox(x, h, z, 2.4, 0.8, 0.6, world.mat.concrete, { rotY: rng() * Math.PI, collide: true })
  }
  // Roadside barricades
  for (let i = 0; i < 10; i++) {
    const a = rng() * Math.PI * 2
    const r = 180 + rng() * 320
    const x = Math.cos(a) * r, z = Math.sin(a) * r
    if (isWater(x, z, world.seed)) continue
    const h = getHeight(x, z, world.seed)
    world.addBox(x, h, z, 3.4, 1.1, 0.5, world.mat.concrete, { rotY: rng() * Math.PI, collide: true })
  }
}

export function buildStructures(world) {
  buildCity(world)
  buildMilitary(world)
  buildAirport(world)
  buildHarbor(world)
  buildVillage(world)
  buildIndustrial(world)
  buildBunker(world)
  buildRidge(world)
  buildBeach(world)
  buildMountain(world)
  buildRoads(world)
  buildForest(world)
  buildProps(world)
}

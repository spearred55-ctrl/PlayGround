import * as THREE from 'three'

export const RARITY = {
  common: { name: 'COMMON', color: '#b9c4cc', glow: 0x9fb4c2, weight: 40 },
  rare: { name: 'RARE', color: '#4fb7ff', glow: 0x2f9dff, weight: 30 },
  epic: { name: 'EPIC', color: '#b78bff', glow: 0x9a6bff, weight: 19 },
  legendary: { name: 'LEGENDARY', color: '#ffb347', glow: 0xff8a2b, weight: 11 },
}

export const AMMO_LABELS = {
  light: 'LIGHT',
  heavy: 'HEAVY',
  shells: 'SHELLS',
  sniper: 'SNIPER',
  pistol: 'PISTOL',
}

export const WEAPONS = {
  ar_vk47: {
    id: 'ar_vk47', name: 'VK-47', category: 'ar', ammo: 'heavy', rarity: 'rare',
    damage: 24, rpm: 640, mag: 30, reload: 2.05, range: 190, spread: 0.72, recoil: 0.85,
    auto: true, pellets: 1, zoom: 1.45, mobility: 0.9, desc: 'Hard-hitting all-rounder. Reliable at every range.',
  },
  ar_aegis: {
    id: 'ar_aegis', name: 'AEGIS-556', category: 'ar', ammo: 'light', rarity: 'epic',
    damage: 20, rpm: 720, mag: 32, reload: 1.9, range: 205, spread: 0.58, recoil: 0.7,
    auto: true, pellets: 1, zoom: 1.5, mobility: 0.95, desc: 'Low-recoil precision rifle with a fast reload.',
  },
  smg_hornet: {
    id: 'smg_hornet', name: 'HORNET-9', category: 'smg', ammo: 'light', rarity: 'common',
    damage: 15, rpm: 950, mag: 32, reload: 1.55, range: 95, spread: 1.1, recoil: 0.5,
    auto: true, pellets: 1, zoom: 1.25, mobility: 1.12, desc: 'Close-range shredder. Melts armor in tight spaces.',
  },
  smg_viper: {
    id: 'smg_viper', name: 'VIPER-45', category: 'smg', ammo: 'light', rarity: 'rare',
    damage: 19, rpm: 780, mag: 28, reload: 1.7, range: 110, spread: 0.92, recoil: 0.6,
    auto: true, pellets: 1, zoom: 1.3, mobility: 1.08, desc: 'Balanced machine pistol with controllable burst fire.',
  },
  sg_breacher: {
    id: 'sg_breacher', name: 'BREACHER-12', category: 'shotgun', ammo: 'shells', rarity: 'rare',
    damage: 13, rpm: 78, mag: 6, reload: 2.7, range: 38, spread: 4.2, recoil: 1.6,
    auto: false, pellets: 8, zoom: 1.1, mobility: 0.92, desc: 'Eight-pellet pump shotgun. Devastating inside 15 meters.',
  },
  sn_longshot: {
    id: 'sn_longshot', name: 'LONGSHOT AWM', category: 'sniper', ammo: 'sniper', rarity: 'legendary',
    damage: 96, rpm: 44, mag: 5, reload: 3.1, range: 360, spread: 0.08, recoil: 2.2,
    auto: false, pellets: 1, zoom: 3.6, mobility: 0.72, desc: 'Bolt-action anti-materiel rifle. One shot, one story.',
  },
  sn_raptor: {
    id: 'sn_raptor', name: 'RAPTOR DMR', category: 'sniper', ammo: 'heavy', rarity: 'epic',
    damage: 46, rpm: 165, mag: 10, reload: 2.4, range: 290, spread: 0.24, recoil: 1.2,
    auto: false, pellets: 1, zoom: 2.4, mobility: 0.82, desc: 'Semi-auto marksman rifle for mid-range pressure.',
  },
  ps_sidekick: {
    id: 'ps_sidekick', name: 'SIDEKICK P9', category: 'pistol', ammo: 'pistol', rarity: 'common',
    damage: 20, rpm: 380, mag: 15, reload: 1.35, range: 75, spread: 1.2, recoil: 0.4,
    auto: false, pellets: 1, zoom: 1.15, mobility: 1.2, desc: 'Dependable sidearm. Always better than empty hands.',
  },
  ps_judge: {
    id: 'ps_judge', name: 'JUDGE-357', category: 'pistol', ammo: 'pistol', rarity: 'rare',
    damage: 38, rpm: 215, mag: 6, reload: 1.8, range: 85, spread: 1.0, recoil: 1.1,
    auto: false, pellets: 1, zoom: 1.2, mobility: 1.15, desc: 'Heavy revolver. Punishing damage, unforgiving rhythm.',
  },
  lmg_vulcan: {
    id: 'lmg_vulcan', name: 'VULCAN-60', category: 'lmg', ammo: 'heavy', rarity: 'legendary',
    damage: 21, rpm: 700, mag: 60, reload: 4.2, range: 175, spread: 1.15, recoil: 1.0,
    auto: true, pellets: 1, zoom: 1.35, mobility: 0.62, desc: 'Belt-fed suppression weapon. Hold the line.',
  },
  melee_machete: {
    id: 'melee_machete', name: 'MACHETE', category: 'melee', ammo: 'none', rarity: 'common',
    damage: 48, rpm: 95, mag: 1, reload: 0, range: 2.6, spread: 0, recoil: 0,
    auto: false, pellets: 1, zoom: 1, mobility: 1.25, desc: 'Silent, fast and always loaded.',
  },
  grenade_frag: {
    id: 'grenade_frag', name: 'FRAG GRENADE', category: 'grenade', ammo: 'none', rarity: 'common',
    damage: 88, rpm: 40, mag: 1, reload: 0, range: 6.5, spread: 0, recoil: 0,
    auto: false, pellets: 1, zoom: 1, mobility: 1, desc: 'Cookable frag with a 6.5 meter blast radius.',
  },
}

export const WEAPON_LIST = Object.values(WEAPONS)
export const SPAWN_WEAPONS = WEAPON_LIST.filter(w => !['melee', 'grenade'].includes(w.category))
export const WEAPON_CATEGORY_LABELS = {
  ar: 'ASSAULT RIFLE', smg: 'SUBMACHINE GUN', shotgun: 'SHOTGUN', sniper: 'SNIPER RIFLE',
  lmg: 'LIGHT MACHINE GUN', pistol: 'PISTOL', melee: 'MELEE', grenade: 'TACTICAL',
}

export function weaponById(id) { return WEAPONS[id] || WEAPONS.ps_sidekick }

export function weaponForRarity(rng) {
  const roll = rng() * 100
  let rarity = 'common'
  if (roll < 11) rarity = 'legendary'
  else if (roll < 30) rarity = 'epic'
  else if (roll < 60) rarity = 'rare'
  const pool = SPAWN_WEAPONS.filter(w => w.rarity === rarity)
  if (!pool.length) return SPAWN_WEAPONS[Math.floor(rng() * SPAWN_WEAPONS.length)]
  return pool[Math.floor(rng() * pool.length)]
}

export function effectiveStats(weapon, attachments = []) {
  const s = { ...weapon }
  for (const a of attachments) {
    if (a === 'ext_mag') s.mag = Math.round(s.mag * 1.5)
    if (a === 'grip') { s.recoil *= 0.72; s.spread *= 0.85 }
    if (a === 'suppressor') { s.recoil *= 0.9; s.spread *= 0.94; s.suppressed = true }
    if (a === 'scope_2x') s.zoom = Math.max(s.zoom, 2.2)
    if (a === 'scope_4x') s.zoom = Math.max(s.zoom, 3.4)
  }
  return s
}

export function attachmentLabel(id) {
  return { ext_mag: 'EXTENDED MAG', grip: 'TACTICAL GRIP', suppressor: 'SUPPRESSOR', scope_2x: '2X SCOPE', scope_4x: '4X SCOPE' }[id] || id
}

const MAT = {
  body: new THREE.MeshStandardMaterial({ color: 0x2d343a, roughness: 0.5, metalness: 0.65 }),
  bodyLight: new THREE.MeshStandardMaterial({ color: 0x4a555d, roughness: 0.45, metalness: 0.6 }),
  wood: new THREE.MeshStandardMaterial({ color: 0x6d4a2f, roughness: 0.8 }),
  accent: new THREE.MeshStandardMaterial({ color: 0xff8a2b, roughness: 0.5, metalness: 0.3 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x151b1f, roughness: 0.55, metalness: 0.55 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x2a8ca8, emissive: 0x1b7a99, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.4 }),
  blade: new THREE.MeshStandardMaterial({ color: 0xb8c0c2, roughness: 0.25, metalness: 0.9 }),
}

function part(group, geo, mat, x, y, z, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(x, y, z)
  m.scale.set(sx, sy, sz)
  m.castShadow = true
  group.add(m)
  return m
}

const box = new THREE.BoxGeometry(1, 1, 1)
const cyl = new THREE.CylinderGeometry(1, 1, 1, 10)
const sphere = new THREE.SphereGeometry(1, 10, 8)

export function createWeaponMesh(weapon, attachments = []) {
  const g = new THREE.Group()
  const cat = weapon.category
  const accent = new THREE.MeshStandardMaterial({ color: RARITY[weapon.rarity].glow, roughness: 0.45, metalness: 0.5 })
  if (cat === 'melee') {
    part(g, box, MAT.dark, 0, 0, 0.18, 0.05, 0.1, 0.34)
    const blade = part(g, box, MAT.blade, 0, 0.015, 0.52, 0.018, 0.11, 0.42)
    blade.rotation.x = 0.02
    part(g, box, MAT.accent, 0, 0, 0.38, 0.06, 0.06, 0.06)
    g.userData.muzzle = new THREE.Vector3(0, 0.02, 0.72)
    g.userData.length = 0.75
    return g
  }
  if (cat === 'grenade') {
    part(g, sphere, MAT.body, 0, 0, 0.12, 0.07, 0.09, 0.07)
    part(g, box, MAT.dark, 0, 0.1, 0.12, 0.05, 0.04, 0.06)
    part(g, box, accent, 0, 0.13, 0.12, 0.03, 0.02, 0.05)
    g.userData.muzzle = new THREE.Vector3(0, 0, 0.2)
    g.userData.length = 0.25
    return g
  }
  let len = 0.82
  if (cat === 'pistol') len = 0.34
  if (cat === 'smg') len = 0.62
  if (cat === 'shotgun') len = 0.9
  if (cat === 'sniper') len = 1.08
  if (cat === 'lmg') len = 1.0
  const z0 = -0.1
  // Receiver
  part(g, box, MAT.body, 0, 0.02, z0 + len * 0.42, 0.075, 0.105, len * 0.46)
  // Upper rail
  part(g, box, MAT.bodyLight, 0, 0.085, z0 + len * 0.4, 0.052, 0.025, len * 0.44)
  // Barrel
  const barrelLen = cat === 'pistol' ? 0.14 : cat === 'shotgun' ? 0.5 : cat === 'sniper' ? 0.64 : 0.34
  part(g, cyl, MAT.dark, 0, 0.045, z0 + len * 0.72 + barrelLen * 0.35, 0.018, barrelLen, 0.018).rotation.x = Math.PI / 2
  // Stock
  if (cat !== 'pistol') {
    part(g, box, cat === 'sniper' ? MAT.body : MAT.bodyLight, 0, 0.005, z0 - 0.03, 0.06, 0.11, 0.22)
    if (cat === 'sniper') part(g, box, MAT.accent, 0, -0.02, z0 - 0.12, 0.065, 0.035, 0.06)
  }
  // Magazine
  if (cat === 'lmg') {
    part(g, cyl, MAT.dark, 0, -0.12, z0 + len * 0.38, 0.11, 0.1, 0.11).rotation.z = Math.PI / 2
    part(g, cyl, accent, 0, -0.12, z0 + len * 0.38, 0.112, 0.02, 0.112).rotation.z = Math.PI / 2
  } else {
    part(g, box, MAT.dark, 0, -0.11, z0 + len * 0.38, 0.05, 0.16, 0.1)
  }
  // Grip
  part(g, box, MAT.dark, 0, -0.08, z0 + len * 0.25, 0.045, 0.13, 0.06).rotation.x = -0.16
  // Handguard
  part(g, box, cat === 'sniper' ? MAT.body : MAT.bodyLight, 0, 0.02, z0 + len * 0.66, 0.06, 0.075, len * 0.25)
  // Accent stripe
  part(g, box, accent, 0, 0.075, z0 + len * 0.52, 0.058, 0.012, len * 0.18)
  // Sight / scope
  if (attachments.includes('scope_4x') || attachments.includes('scope_2x') || cat === 'sniper') {
    const scopeLen = attachments.includes('scope_4x') ? 0.28 : 0.2
    part(g, cyl, MAT.dark, 0, 0.13, z0 + len * 0.43, 0.034, scopeLen, 0.034).rotation.x = Math.PI / 2
    part(g, cyl, MAT.glass, 0, 0.13, z0 + len * 0.43 + scopeLen / 2 + 0.005, 0.028, 0.012, 0.028).rotation.x = Math.PI / 2
    part(g, box, MAT.dark, 0, 0.095, z0 + len * 0.4, 0.02, 0.05, 0.05)
  } else {
    part(g, box, MAT.dark, 0, 0.115, z0 + len * 0.42, 0.025, 0.03, 0.08)
    part(g, box, MAT.glass, 0, 0.132, z0 + len * 0.42, 0.018, 0.012, 0.018)
  }
  // Suppressor
  if (attachments.includes('suppressor')) {
    part(g, cyl, MAT.dark, 0, 0.045, z0 + len * 0.72 + barrelLen + 0.1, 0.034, 0.2, 0.034).rotation.x = Math.PI / 2
  }
  // Shotgun pump
  if (cat === 'shotgun') {
    part(g, box, MAT.wood, 0, -0.015, z0 + len * 0.6, 0.08, 0.07, 0.18)
  }
  // Sniper bipod
  if (cat === 'sniper') {
    part(g, box, MAT.dark, 0.06, -0.12, z0 + len * 0.78, 0.015, 0.2, 0.015).rotation.z = -0.3
    part(g, box, MAT.dark, -0.06, -0.12, z0 + len * 0.78, 0.015, 0.2, 0.015).rotation.z = 0.3
  }
  // LMG bipod
  if (cat === 'lmg') {
    part(g, box, MAT.dark, 0.08, -0.14, z0 + len * 0.8, 0.018, 0.24, 0.018).rotation.z = -0.35
    part(g, box, MAT.dark, -0.08, -0.14, z0 + len * 0.8, 0.018, 0.24, 0.018).rotation.z = 0.35
  }
  g.userData.muzzle = new THREE.Vector3(0, 0.045, z0 + len * 0.72 + barrelLen + (attachments.includes('suppressor') ? 0.22 : 0.02))
  g.userData.length = len
  g.userData.category = cat
  return g
}

export function weaponIconSvg(weapon) {
  const c = weapon.category
  const color = RARITY[weapon.rarity].color
  const stock = c === 'pistol' ? '' : '<path d="M6 13v4h5l2-4z"/>'
  const scope = (c === 'sniper' || c === 'ar') ? '<path d="M22 8h9M24 8v-2h5v2"/>' : ''
  const barrel = c === 'shotgun' ? '<path d="M33 11h8M33 14h8"/>' : '<path d="M34 12h10"/>'
  return `<svg viewBox="0 0 48 24" style="color:${color}"><path d="M9 12h22l4 3h6" stroke="currentColor" fill="none" stroke-width="1.4"/>${stock}${scope}${barrel}<path d="M20 15l-2 6h4l2-5" fill="currentColor" opacity=".8"/></svg>`
}

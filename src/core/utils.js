export const TAU = Math.PI * 2

export const clamp = (v, a, b) => v < a ? a : v > b ? b : v
export const lerp = (a, b, t) => a + (b - a) * t
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1)
export const smoothstep = (a, b, v) => {
  const t = invLerp(a, b, v)
  return t * t * (3 - 2 * t)
}
export const damp = (current, target, lambda, dt) => lerp(current, target, 1 - Math.exp(-lambda * dt))
export const dampAngle = (current, target, lambda, dt) => {
  let d = ((target - current + Math.PI) % TAU + TAU) % TAU - Math.PI
  return current + d * (1 - Math.exp(-lambda * dt))
}
export const angleDiff = (a, b) => ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI
export const distance2D = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz)
export const distance3D = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export function hash2(x, y, seed = 0) {
  let h = x * 374761393 + y * 668265263 + seed * 1442695041
  h = (h ^ (h >>> 13)) * 1274126177
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

export function valueNoise(x, y, seed = 0) {
  const xi = Math.floor(x), yi = Math.floor(y)
  const xf = x - xi, yf = y - yi
  const u = xf * xf * (3 - 2 * xf)
  const v = yf * yf * (3 - 2 * yf)
  const a = hash2(xi, yi, seed)
  const b = hash2(xi + 1, yi, seed)
  const c = hash2(xi, yi + 1, seed)
  const d = hash2(xi + 1, yi + 1, seed)
  return lerp(lerp(a, b, u), lerp(c, d, u), v)
}

export function fbm(x, y, octaves = 4, seed = 0, lacunarity = 2.03, gain = 0.5) {
  let amp = 0.5, freq = 1, sum = 0, norm = 0
  for (let i = 0; i < octaves; i++) {
    sum += valueNoise(x * freq, y * freq, seed + i * 101) * amp
    norm += amp
    amp *= gain
    freq *= lacunarity
  }
  return sum / norm
}

export function randRange(rng, min, max) { return min + (max - min) * rng() }
export function randInt(rng, min, max) { return Math.floor(min + (max - min + 1) * rng()) }
export function pick(rng, arr) { return arr[Math.floor(rng() * arr.length) % arr.length] }

export function formatTime(seconds) {
  const s = Math.max(0, Math.ceil(seconds))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

export function formatNumber(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e4) return (n / 1e3).toFixed(1) + 'K'
  return String(Math.round(n))
}

export function uid(prefix = 'id') {
  return prefix + '_' + Math.random().toString(36).slice(2, 9)
}

export function makeCanvas(width, height) {
  const c = document.createElement('canvas')
  c.width = width; c.height = height
  return c
}

export function canvasTexture(canvas, { repeat = null, srgb = true, aniso = 4 } = {}) {
  const tex = new THREE.CanvasTexture(canvas)
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace
  if (repeat) { tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(repeat[0], repeat[1]) }
  tex.anisotropy = aniso
  tex.needsUpdate = true
  return tex
}

// three is loaded globally by main for helpers that need it.
export let THREE = null
export function setThree(three) { THREE = three }

export function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0')).join('')
}
export function shade(hex, amount) {
  const { r, g, b } = hexToRgb(hex)
  const f = amount < 0 ? 1 + amount : 1
  const add = amount > 0 ? amount * 255 : 0
  return rgbToHex(r * f + add, g * f + add, b * f + add)
}

// ── geometry helpers ────────────────────────────────────────────
export function rayAABB(origin, dir, box, maxDist = Infinity) {
  let tmin = 0, tmax = maxDist
  for (const axis of ['x', 'y', 'z']) {
    const o = origin[axis], d = dir[axis]
    const mn = box.min[axis], mx = box.max[axis]
    if (Math.abs(d) < 1e-8) {
      if (o < mn || o > mx) return null
    } else {
      let t1 = (mn - o) / d, t2 = (mx - o) / d
      if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp }
      if (t1 > tmin) tmin = t1
      if (t2 < tmax) tmax = t2
      if (tmin > tmax) return null
    }
  }
  return tmin
}

export function segmentBlocked(ax, ay, az, bx, by, bz, boxes, padding = 0) {
  const dx = bx - ax, dy = by - ay, dz = bz - az
  const len = Math.hypot(dx, dy, dz)
  if (len < 1e-6) return false
  const dir = { x: dx / len, y: dy / len, z: dz / len }
  const origin = { x: ax, y: ay, z: az }
  for (const b of boxes) {
    if (!b.solid) continue
    const box = padding ? { min: { x: b.min.x - padding, y: b.min.y - padding, z: b.min.z - padding }, max: { x: b.max.x + padding, y: b.max.y + padding, z: b.max.z + padding } } : b
    const t = rayAABB(origin, dir, box, len)
    if (t !== null && t < len - 0.05) return true
  }
  return false
}

export function raySphere(origin, dir, center, radius) {
  const ox = origin.x - center.x, oy = origin.y - center.y, oz = origin.z - center.z
  const b = ox * dir.x + oy * dir.y + oz * dir.z
  const c = ox * ox + oy * oy + oz * oz - radius * radius
  const h = b * b - c
  if (h < 0) return null
  const t = -b - Math.sqrt(h)
  return t >= 0 ? t : (-b + Math.sqrt(h) >= 0 ? 0 : null)
}

export function closestPointOnSegment(px, pz, ax, az, bx, bz) {
  const abx = bx - ax, abz = bz - az
  const len2 = abx * abx + abz * abz
  if (len2 < 1e-8) return { x: ax, z: az, t: 0 }
  let t = ((px - ax) * abx + (pz - az) * abz) / len2
  t = clamp(t, 0, 1)
  return { x: ax + abx * t, z: az + abz * t, t }
}

export function inViewCone(origin, forward, target, cosLimit) {
  const dx = target.x - origin.x, dy = target.y - origin.y, dz = target.z - origin.z
  const len = Math.hypot(dx, dy, dz) || 1
  return (dx * forward.x + dy * forward.y + dz * forward.z) / len > cosLimit
}

export function safeJsonParse(str, fallback) {
  try { return JSON.parse(str) } catch { return fallback }
}

export function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

export const ORIGINAL_NAMES = [
  'NOVA-07', 'EMBER', 'KESTREL', 'RONIN', 'VANTA', 'SABLE', 'CIPHER', 'ORION',
  'HALO', 'JACKAL', 'MIRAGE', 'TALON', 'ZEPHYR', 'ONYX', 'RIFT', 'SPECTRE',
  'AURORA', 'BLAZE', 'CINDER', 'DUSK', 'ECHO', 'FLINT', 'GHOST', 'HAVOC',
  'ION', 'JINX', 'KARMA', 'LYNX', 'MACE', 'NEXUS', 'OMEN', 'PULSE',
  'QUAKE', 'RAVEN', 'STORM', 'TRACE', 'UMBRA', 'VICE', 'WRAITH', 'ZERO',
  'ATLAS', 'BOLT', 'CRIMSON', 'DELTA', 'FROST', 'GALE', 'HEX', 'INFERNO'
]

import * as THREE from 'three'
import { clamp, lerp, smoothstep, fbm, mulberry32, randRange, makeCanvas } from '../core/utils.js'

export const WATER_LEVEL = 0
export const WORLD_SIZE = 1500
export const WORLD_HALF = WORLD_SIZE / 2
export const PLAY_RADIUS = 622

export const PAD_DEFS = [
  { id: 'city', name: 'NEON CITY', x: -300, z: -245, r: 112, h: 13, type: 'city', map: '#63dcff', label: 'URBAN' },
  { id: 'base', name: 'IRONHOLD BASE', x: 275, z: -292, r: 100, h: 11, type: 'military', map: '#ff8a2b', label: 'MILITARY' },
  { id: 'airport', name: 'KESTREL AIRPORT', x: 342, z: 238, r: 128, h: 8, type: 'airport', map: '#ffd166', label: 'AIRFIELD' },
  { id: 'harbor', name: 'DOCKSIDE HARBOR', x: -395, z: 300, r: 96, h: 4.5, type: 'harbor', map: '#54e6a5', label: 'HARBOR' },
  { id: 'village', name: 'OLD MILL VILLAGE', x: 0, z: 92, r: 86, h: 16, type: 'village', map: '#e8c79a', label: 'VILLAGE' },
  { id: 'foundry', name: 'FOUNDRY WORKS', x: 138, z: -42, r: 90, h: 12, type: 'industrial', map: '#ff7a1a', label: 'INDUSTRIAL' },
  { id: 'bunker', name: 'BUNKER 7', x: -82, z: -468, r: 56, h: 27, type: 'bunker', map: '#b78bff', label: 'BUNKER' },
  { id: 'ridge', name: 'WATCHTOWER RIDGE', x: 72, z: -390, r: 42, h: 34, type: 'ridge', map: '#9fdcff', label: 'RIDGE' },
  { id: 'beach', name: 'SUNSET BEACH', x: 432, z: 450, r: 62, h: 3, type: 'beach', map: '#ffd9a0', label: 'BEACH' },
  { id: 'lake', name: 'MIRROR LAKE', x: -122, z: 246, r: 56, h: 8, type: 'lake', map: '#63dcff', label: 'LAKE' },
  { id: 'aurora', name: 'MOUNT AURORA', x: 18, z: 408, r: 86, h: 66, type: 'mountain', map: '#eaf6ff', label: 'MOUNTAIN' },
]

const PAD_MAP = new Map(PAD_DEFS.map(p => [p.id, p]))

export function padById(id) { return PAD_MAP.get(id) }

export function getHeight(x, z, seed = 1337) {
  const d = Math.hypot(x, z)
  const land = smoothstep(705, 545, d)
  const n1 = fbm(x * 0.0032 + 11.3, z * 0.0032 - 7.1, 4, seed)
  const n2 = fbm(x * 0.0125, z * 0.0125, 3, seed + 17)
  let h = (3.2 + n1 * 29 + n2 * 6.5) * land - 8.5 * (1 - land)

  // Signature highlands and the northern ridge line.
  h += 54 * Math.exp(-(((x - 18) ** 2) + ((z - 408) ** 2)) / (2 * 108 * 108))
  h += 17 * Math.exp(-(((x + 382) ** 2) + ((z + 82) ** 2)) / (2 * 104 * 104))
  h += 11 * Math.exp(-(((x + 52) ** 2) + ((z - 44) ** 2)) / (2 * 168 * 168))
  h += 9 * Math.exp(-(((x - 72) ** 2) + ((z + 390) ** 2)) / (2 * 80 * 80))

  // Mirror Lake — a shallow inland basin with a road bridge.
  const lakeD = Math.hypot(x + 122, z - 246)
  h -= 15 * smoothstep(84, 22, lakeD)

  // Flatten landmark pads so buildings, roads and loot sit cleanly.
  for (const pad of PAD_DEFS) {
    if (pad.type === 'mountain' || pad.type === 'lake') continue
    const pd = Math.hypot(x - pad.x, z - pad.z)
    if (pd < pad.r + 55) {
      const t = smoothstep(pad.r + 52, pad.r, pd)
      h = lerp(h, pad.h, t)
    }
  }
  return h
}

export function isWater(x, z, seed = 1337) {
  return getHeight(x, z, seed) < WATER_LEVEL - 0.15
}

export function createSky(scene) {
  const sunDir = new THREE.Vector3(0.44, 0.58, 0.32).normalize()
  const skyGeo = new THREE.SphereGeometry(2700, 36, 20)
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      sunDir: { value: sunDir },
      zenith: { value: new THREE.Color(0x2b6f9f) },
      horizon: { value: new THREE.Color(0xc7dbe0) },
      sunColor: { value: new THREE.Color(0xffd9a0) },
    },
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vWorld;
      uniform vec3 sunDir;
      uniform vec3 zenith;
      uniform vec3 horizon;
      uniform vec3 sunColor;
      void main() {
        vec3 dir = normalize(vWorld);
        float y = clamp(dir.y, 0.0, 1.0);
        vec3 col = mix(horizon, zenith, pow(y, 0.52));
        float sun = max(dot(dir, sunDir), 0.0);
        col += sunColor * pow(sun, 96.0) * 1.4;
        col += sunColor * pow(sun, 7.0) * 0.16;
        float haze = exp(-max(dir.y, 0.0) * 5.5);
        col = mix(col, horizon * 1.04, haze * 0.45);
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
  const sky = new THREE.Mesh(skyGeo, skyMat)
  sky.frustumCulled = false
  scene.add(sky)

  // Sun disc
  const sunCanvas = makeCanvas(256, 256)
  const sctx = sunCanvas.getContext('2d')
  const grd = sctx.createRadialGradient(128, 128, 4, 128, 128, 120)
  grd.addColorStop(0, 'rgba(255,252,235,1)')
  grd.addColorStop(0.12, 'rgba(255,228,170,.95)')
  grd.addColorStop(0.38, 'rgba(255,180,90,.28)')
  grd.addColorStop(1, 'rgba(255,150,60,0)')
  sctx.fillStyle = grd
  sctx.fillRect(0, 0, 256, 256)
  const sunTex = new THREE.CanvasTexture(sunCanvas)
  sunTex.colorSpace = THREE.SRGBColorSpace
  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }))
  sunSprite.position.copy(sunDir.clone().multiplyScalar(2200))
  sunSprite.scale.set(430, 430, 1)
  scene.add(sunSprite)

  // Soft cloud banks
  const clouds = []
  const cloudCanvas = makeCanvas(512, 256)
  const cctx = cloudCanvas.getContext('2d')
  for (let i = 0; i < 22; i++) {
    const x = 60 + Math.random() * 392
    const y = 90 + Math.random() * 90
    const r = 30 + Math.random() * 72
    const cg = cctx.createRadialGradient(x, y, 0, x, y, r)
    cg.addColorStop(0, 'rgba(255,255,255,.8)')
    cg.addColorStop(0.55, 'rgba(244,250,255,.42)')
    cg.addColorStop(1, 'rgba(230,244,255,0)')
    cctx.fillStyle = cg
    cctx.beginPath(); cctx.arc(x, y, r, 0, Math.PI * 2); cctx.fill()
  }
  const cloudTex = new THREE.CanvasTexture(cloudCanvas)
  cloudTex.colorSpace = THREE.SRGBColorSpace
  for (let i = 0; i < 9; i++) {
    const mat = new THREE.SpriteMaterial({ map: cloudTex, transparent: true, opacity: 0.5 + Math.random() * 0.22, depthWrite: false, fog: false, color: 0xe8f4ff })
    const s = new THREE.Sprite(mat)
    const a = (i / 9) * Math.PI * 2 + Math.random() * 0.5
    const r = 700 + Math.random() * 1100
    s.position.set(Math.cos(a) * r, 220 + Math.random() * 170, Math.sin(a) * r)
    s.scale.set(430 + Math.random() * 380, 150 + Math.random() * 130, 1)
    s.userData.speed = 0.7 + Math.random() * 0.9
    scene.add(s)
    clouds.push(s)
  }

  const hemi = new THREE.HemisphereLight(0xcfeaff, 0x5f5744, 1.25)
  scene.add(hemi)
  const sun = new THREE.DirectionalLight(0xffe0b6, 2.35)
  sun.position.copy(sunDir.clone().multiplyScalar(360))
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -210
  sun.shadow.camera.right = 210
  sun.shadow.camera.top = 210
  sun.shadow.camera.bottom = -210
  sun.shadow.camera.near = 10
  sun.shadow.camera.far = 800
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.04
  scene.add(sun)
  scene.add(sun.target)
  const ambient = new THREE.AmbientLight(0x8fb6ca, 0.28)
  scene.add(ambient)

  scene.fog = new THREE.Fog(0xb8d2da, 520, 1560)
  return { sky, sun, sunDir, clouds, hemi, ambient, sunSprite }
}

export function createTerrain(scene, seed = 1337) {
  const segments = 220
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, segments, segments)
  geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position
  const colors = new Float32Array(pos.count * 3)
  const c = new THREE.Color()
  const sand = new THREE.Color(0xc8b78d)
  const wetSand = new THREE.Color(0x9f9270)
  const grass = new THREE.Color(0x63834a)
  const grassDark = new THREE.Color(0x435f38)
  const rock = new THREE.Color(0x77746a)
  const rockDark = new THREE.Color(0x55544e)
  const snow = new THREE.Color(0xe4ecef)
  const rng = mulberry32(seed)
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i)
    const h = getHeight(x, z, seed)
    pos.setY(i, h)
    const hx = getHeight(x + 2.5, z, seed) - getHeight(x - 2.5, z, seed)
    const hz = getHeight(x, z + 2.5, seed) - getHeight(x, z - 2.5, seed)
    const slope = Math.min(1, Math.hypot(hx, hz) / 4.6)
    const n = fbm(x * 0.06, z * 0.06, 2, seed + 31)
    if (h < 0.6) c.copy(wetSand).lerp(sand, clamp((h + 4) / 5, 0, 1))
    else if (h < 3.6) c.copy(sand).lerp(grass, smoothstep(2.0, 3.8, h) * 0.55)
    else if (h < 34) c.copy(grass).lerp(grassDark, n * 0.55)
    else if (h < 48) c.copy(grass).lerp(rock, smoothstep(34, 48, h))
    else if (h < 62) c.copy(rock).lerp(rockDark, n * 0.5)
    else c.copy(rock).lerp(snow, smoothstep(62, 72, h))
    if (slope > 0.5) c.lerp(rock, (slope - 0.5) * 1.1)
    c.offsetHSL(0, 0, (n - 0.5) * 0.07)
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.computeVertexNormals()

  // Fine ground detail so close-up terrain never looks flat.
  const detailCanvas = makeCanvas(256, 256)
  const dctx = detailCanvas.getContext('2d')
  const img = dctx.createImageData(256, 256)
  const drng = mulberry32(seed + 99)
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 205 + drng() * 50
    img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 255
  }
  dctx.putImageData(img, 0, 0)
  const detail = new THREE.CanvasTexture(detailCanvas)
  detail.wrapS = detail.wrapT = THREE.RepeatWrapping
  detail.repeat.set(160, 160)
  detail.anisotropy = 8

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    map: detail,
    roughness: 0.97,
    metalness: 0,
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.receiveShadow = true
  mesh.castShadow = false
  scene.add(mesh)
  return { mesh, geo, detail }
}

export function createWater(scene) {
  const geo = new THREE.PlaneGeometry(4300, 4300, 170, 170)
  geo.rotateX(-Math.PI / 2)
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: true,
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: new THREE.Color(0x0c4a61) },
      uShallow: { value: new THREE.Color(0x2aa2b8) },
      uSky: { value: new THREE.Color(0xb8d2da) },
      uSun: { value: new THREE.Vector3(0.44, 0.58, 0.32).normalize() },
    },
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying vec2 vUv;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.045 + uTime * 0.9) * 0.28;
        float w2 = cos(p.z * 0.061 - uTime * 1.15) * 0.22;
        float w3 = sin((p.x + p.z) * 0.021 + uTime * 0.55) * 0.3;
        p.y += w1 + w2 + w3;
        vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
        float dx = cos(p.x * 0.045 + uTime * 0.9) * 0.045 * 0.28 + cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.021 * 0.3;
        float dz = -sin(p.z * 0.061 - uTime * 1.15) * 0.061 * 0.22 + cos((p.x + p.z) * 0.021 + uTime * 0.55) * 0.021 * 0.3;
        vNormalW = normalize(vec3(-dx, 1.0, -dz));
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormalW;
      varying vec2 vUv;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vWorld);
        vec3 n = normalize(vNormalW);
        float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 2.4);
        float ripple = sin(vWorld.x * 0.15 + uTime * 1.8) * sin(vWorld.z * 0.13 - uTime * 1.4) * 0.5 + 0.5;
        vec3 col = mix(uDeep, uShallow, 0.28 + fres * 0.55 + ripple * 0.1);
        col = mix(col, uSky, fres * 0.45);
        vec3 h = normalize(viewDir + uSun);
        float spec = pow(max(dot(n, h), 0.0), 110.0);
        col += vec3(1.0, 0.86, 0.62) * spec * 1.2;
        float glint = pow(max(dot(n, uSun), 0.0), 20.0) * 0.15;
        col += vec3(1.0, 0.8, 0.5) * glint;
        gl_FragColor = vec4(col, 0.93);
      }
    `,
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.y = WATER_LEVEL
  mesh.receiveShadow = false
  mesh.renderOrder = 1
  scene.add(mesh)
  return { mesh, mat }
}

export function makeAsphaltTexture(seed = 5, base = '#30363b') {
  const canvas = makeCanvas(256, 256)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 256, 256)
  const rng = mulberry32(seed)
  for (let i = 0; i < 2400; i++) {
    const v = Math.floor(35 + rng() * 45)
    ctx.fillStyle = `rgba(${v},${v + 2},${v + 3},${0.08 + rng() * 0.2})`
    ctx.fillRect(rng() * 256, rng() * 256, 1 + rng() * 2, 1 + rng() * 2)
  }
  for (let i = 0; i < 8; i++) {
    ctx.strokeStyle = `rgba(15,18,20,${0.1 + rng() * 0.2})`
    ctx.lineWidth = 1
    ctx.beginPath()
    let x = rng() * 256, y = rng() * 256
    ctx.moveTo(x, y)
    for (let j = 0; j < 4; j++) { x += (rng() - 0.5) * 40; y += (rng() - 0.5) * 40; ctx.lineTo(x, y) }
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

export function makeConcreteTexture(seed = 7, base = '#8a8c83') {
  const canvas = makeCanvas(256, 256)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 256, 256)
  const rng = mulberry32(seed)
  for (let i = 0; i < 1800; i++) {
    const v = Math.floor(80 + rng() * 80)
    ctx.fillStyle = `rgba(${v},${v},${v - 4},${0.06 + rng() * 0.16})`
    ctx.fillRect(rng() * 256, rng() * 256, 1 + rng() * 3, 1 + rng() * 2)
  }
  ctx.strokeStyle = 'rgba(50,52,50,.24)'
  ctx.lineWidth = 1
  for (let i = 1; i < 4; i++) {
    ctx.beginPath(); ctx.moveTo(i * 64, 0); ctx.lineTo(i * 64, 256); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, i * 64); ctx.lineTo(256, i * 64); ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

export function makeWindowTexture(seed = 1, warm = false) {
  const canvas = makeCanvas(256, 512)
  const ctx = canvas.getContext('2d')
  const rng = mulberry32(seed)
  const base = warm ? '#3c3a36' : '#293641'
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 256, 512)
  // Facade panel seams
  ctx.strokeStyle = 'rgba(0,0,0,.28)'
  ctx.lineWidth = 2
  for (let y = 0; y < 512; y += 64) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke() }
  for (let x = 0; x < 256; x += 64) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke() }
  for (let y = 10; y < 500; y += 32) {
    for (let x = 10; x < 246; x += 32) {
      const lit = rng() > (warm ? 0.62 : 0.54)
      if (lit) {
        const v = 180 + rng() * 70
        ctx.fillStyle = warm ? `rgba(255,${Math.floor(v * 0.78)},${Math.floor(v * 0.42)},${0.55 + rng() * 0.4})` : `rgba(${Math.floor(v * 0.55)},${Math.floor(v * 0.8)},${v},${0.5 + rng() * 0.45})`
      } else {
        ctx.fillStyle = `rgba(10,18,24,${0.45 + rng() * 0.35})`
      }
      ctx.fillRect(x, y, 18, 16)
      ctx.fillStyle = 'rgba(255,255,255,.05)'
      ctx.fillRect(x + 2, y + 2, 14, 3)
    }
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.anisotropy = 8
  return tex
}

export function makeTextTexture(lines, opts = {}) {
  const {
    width = 512, height = 256, bg = 'rgba(4,10,16,.86)', fg = '#eaf6ff',
    accent = '#ff8a2b', font = '700 46px sans-serif', sub = '', subFont = '600 22px sans-serif',
    border = true,
  } = opts
  const canvas = makeCanvas(width, height)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, width, height)
  if (border) {
    ctx.strokeStyle = accent
    ctx.lineWidth = 6
    ctx.strokeRect(8, 8, width - 16, height - 16)
    ctx.fillStyle = accent
    ctx.fillRect(24, height - 34, 80, 4)
  }
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = fg
  ctx.font = font
  const arr = Array.isArray(lines) ? lines : [lines]
  const lineH = height / (arr.length + (sub ? 1.4 : 0.7))
  arr.forEach((line, i) => ctx.fillText(line, width / 2, height * 0.34 + i * lineH))
  if (sub) {
    ctx.fillStyle = accent
    ctx.font = subFont
    ctx.fillText(sub, width / 2, height * 0.72)
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

export function createRoad(points, width, material, seed = 1, yOffset = 0.12) {
  const positions = []
  const uvs = []
  const indices = []
  let dist = 0
  for (let i = 0; i < points.length; i++) {
    const [x, z] = points[i]
    const prev = points[Math.max(0, i - 1)]
    const next = points[Math.min(points.length - 1, i + 1)]
    let dx = next[0] - prev[0], dz = next[1] - prev[1]
    const len = Math.hypot(dx, dz) || 1
    dx /= len; dz /= len
    const px = -dz, pz = dx
    const half = width / 2
    const lx = x + px * half, lz = z + pz * half
    const rx = x - px * half, rz = z - pz * half
    const ly = getHeight(lx, lz, seed) + yOffset
    const ry = getHeight(rx, rz, seed) + yOffset
    positions.push(lx, ly, lz, rx, ry, rz)
    if (i > 0) {
      const p = points[i - 1]
      dist += Math.hypot(x - p[0], z - p[1])
    }
    uvs.push(0, dist / 8, 1, dist / 8)
  }
  for (let i = 0; i < points.length - 1; i++) {
    const a = i * 2
    indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  const mesh = new THREE.Mesh(geo, material)
  mesh.receiveShadow = true
  return mesh
}

export function scatterPoints(rng, count, centerX, centerZ, radius, minDist = 4) {
  const out = []
  let guard = 0
  while (out.length < count && guard++ < count * 40) {
    const a = rng() * Math.PI * 2
    const r = Math.sqrt(rng()) * radius
    const x = centerX + Math.cos(a) * r
    const z = centerZ + Math.sin(a) * r
    if (out.some(p => Math.hypot(p[0] - x, p[1] - z) < minDist)) continue
    out.push([x, z])
  }
  return out
}

export function createLootSpots(seed = 1337) {
  const rng = mulberry32(seed + 404)
  const spots = []
  for (const pad of PAD_DEFS) {
    if (pad.type === 'mountain') continue
    const count = pad.type === 'lake' ? 3 : pad.type === 'beach' ? 6 : 14
    for (let i = 0; i < count; i++) {
      const a = rng() * Math.PI * 2
      const r = Math.sqrt(rng()) * pad.r * 0.78
      const x = pad.x + Math.cos(a) * r
      const z = pad.z + Math.sin(a) * r
      spots.push({ x, z, y: getHeight(x, z, seed), poi: pad.id, hidden: rng() > 0.78 })
    }
  }
  // Hidden wilderness caches and bunker-style caches.
  for (let i = 0; i < 46; i++) {
    const a = rng() * Math.PI * 2
    const r = 120 + rng() * 400
    const x = Math.cos(a) * r
    const z = Math.sin(a) * r
    if (isWater(x, z, seed)) continue
    spots.push({ x, z, y: getHeight(x, z, seed), poi: 'wild', hidden: true })
  }
  return spots
}

import * as THREE from 'three';
import { LOCATIONS, MATCH } from './data.js';
import { clamp, lerp, smoothstep, fbm, noise2, hash2, mulberry32, makeCanvas, roundRect, TAU } from './utils.js';
import { createWeaponModel, createLootIcon, makeGlowTexture } from './models.js';

export const WATER_LEVEL = 0;

const POI_FLATS = {
  city: { x: -78, z: -78, r: 58, y: 9.5 },
  base: { x: -115, z: 48, r: 52, y: 13.5 },
  airport: { x: 105, z: -90, r: 68, y: 5.4 },
  village: { x: 82, z: 70, r: 45, y: 10.2 },
  industrial: { x: 126, z: 8, r: 41, y: 7.2 },
  harbor: { x: -27, z: 143, r: 47, y: 2.9 },
  bunker: { x: -4, z: -132, r: 29, y: 12.4 },
  lake: { x: 0, z: 8, r: 29, y: -3.8 },
  mountain: { x: -128, z: 125, r: 38, y: 44 }
};

export function terrainHeight(x, z) {
  const dx = x * 0.94, dz = z * 1.03;
  const d = Math.sqrt(dx * dx + dz * dz);
  const edge = 202 + 17 * (fbm(x * 0.012 + 9, z * 0.012 - 4, 2, 7) - 0.5) * 2;
  const mask = smoothstep(edge, edge - 62, d);
  let h = -7.5 + 17 * mask;
  h += mask * 11 * (fbm(x * 0.018, z * 0.018, 4, 3) - 0.32);
  h += mask * 8 * Math.pow(Math.max(0, 1 - Math.hypot(x + 155, z + 150) / 95), 2);
  h += mask * 20 * Math.pow(Math.max(0, 1 - Math.hypot(x - 118, z + 95) / 52), 2.4);
  h += mask * 12 * Math.pow(Math.max(0, 1 - Math.hypot(x - 160, z - 100) / 65), 2);

  for (const key in POI_FLATS) {
    const f = POI_FLATS[key];
    const dist = Math.hypot(x - f.x, z - f.z);
    if (dist < f.r + 28) {
      const t = 1 - smoothstep(f.r * 0.62, f.r + 20, dist);
      h = lerp(h, f.y, t);
    }
  }
  return h;
}

function createDetailTexture() {
  const c = makeCanvas(256, 256);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = 210 + Math.random() * 45;
    img.data[i] = n;
    img.data[i + 1] = n;
    img.data[i + 2] = n;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(48, 48);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createFacadeMaterial(base, lit, renderer) {
  const c = makeCanvas(128, 256);
  const ctx = c.getContext('2d');
  const e = makeCanvas(128, 256);
  const ectx = e.getContext('2d');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 128, 256);
  ectx.fillStyle = '#000';
  ectx.fillRect(0, 0, 128, 256);
  ctx.fillStyle = 'rgba(0,0,0,.25)';
  for (let x = 0; x < 128; x += 32) ctx.fillRect(x, 0, 2, 256);
  for (let y = 6; y < 250; y += 18) {
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.fillRect(0, y + 12, 128, 1);
    for (let x = 8; x < 120; x += 20) {
      const on = Math.random() > 0.46;
      ctx.fillStyle = on ? lit : 'rgba(10,15,18,.62)';
      ctx.fillRect(x, y, 12, 9);
      if (on) {
        ectx.fillStyle = lit;
        ectx.fillRect(x, y, 12, 9);
      }
    }
  }
  // Rooftop edge
  ctx.fillStyle = 'rgba(0,0,0,.3)';
  ctx.fillRect(0, 0, 128, 4);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const emap = new THREE.CanvasTexture(e);
  emap.colorSpace = THREE.SRGBColorSpace;
  emap.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return new THREE.MeshStandardMaterial({
    map, emissiveMap: emap, emissive: 0xffffff, emissiveIntensity: 0.85,
    roughness: 0.68, metalness: 0.12
  });
}

function makeSignTexture(text, bg = '#101c22', fg = '#ffb46a') {
  const c = makeCanvas(512, 128);
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 6;
  ctx.strokeRect(6, 6, 500, 116);
  ctx.fillStyle = fg;
  ctx.font = '800 74px "Arial Narrow", Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 68);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createRunwayTexture() {
  const c = makeCanvas(1024, 256);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#252c2e';
  ctx.fillRect(0, 0, 1024, 256);
  ctx.fillStyle = '#202628';
  for (let i = 0; i < 3000; i++) {
    ctx.globalAlpha = Math.random() * 0.15;
    ctx.fillRect(Math.random() * 1024, Math.random() * 256, 2, 2);
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#d7cfae';
  ctx.fillRect(0, 10, 1024, 3);
  ctx.fillRect(0, 243, 1024, 3);
  for (let x = 20; x < 1024; x += 48) {
    ctx.fillRect(x, 124, 26, 8);
  }
  ctx.save();
  ctx.translate(52, 128);
  ctx.fillStyle = '#d7cfae';
  ctx.font = '700 82px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('27', 0, 0);
  ctx.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function roundedBoxGeometry(w, h, d, r) {
  // Simple chamfered box using scaled BoxGeometry; keeps low poly.
  return new THREE.BoxGeometry(w, h, d);
}

function mergeStaticMeshes(root) {
  root.updateMatrixWorld(true);
  const hasDynamicAncestor = (o) => {
    let p = o;
    while (p && p !== root) {
      if (p.userData && p.userData.dynamic) return true;
      p = p.parent;
    }
    return false;
  };
  const buckets = new Map();
  root.traverse(o => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || hasDynamicAncestor(o)) return;
    const m = o.material;
    if (!m || Array.isArray(m) || m.type === 'ShaderMaterial' || m.transparent) return;
    const geo = o.geometry;
    if (!geo || !geo.getAttribute('position') || !geo.getAttribute('normal') || !geo.getAttribute('uv')) return;
    if (geo.morphAttributes && Object.keys(geo.morphAttributes).length) return;
    const key = [
      m.type, m.color ? m.color.getHex() : '', m.roughness, m.metalness,
      m.emissive ? m.emissive.getHex() : '', m.emissiveIntensity,
      m.map ? m.map.uuid : '', m.normalMap ? m.normalMap.uuid : '',
      m.alphaMap ? m.alphaMap.uuid : '', m.side, m.opacity, m.depthWrite,
      m.blending, m.vertexColors ? 1 : 0, m.flatShading ? 1 : 0,
      o.castShadow ? 1 : 0, o.receiveShadow ? 1 : 0
    ].join('|');
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { material: m, items: [], cast: o.castShadow, receive: o.receiveShadow };
      buckets.set(key, bucket);
    }
    bucket.items.push(o);
  });
  for (const bucket of buckets.values()) {
    if (bucket.items.length < 2) continue;
    const parts = [];
    let total = 0;
    for (const mesh of bucket.items) {
      const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      g.applyMatrix4(mesh.matrixWorld);
      const count = g.getAttribute('position').count;
      parts.push({ g, count });
      total += count;
    }
    const position = new Float32Array(total * 3);
    const normal = new Float32Array(total * 3);
    const uv = new Float32Array(total * 2);
    let offset = 0;
    for (const { g, count } of parts) {
      position.set(g.getAttribute('position').array, offset * 3);
      normal.set(g.getAttribute('normal').array, offset * 3);
      uv.set(g.getAttribute('uv').array, offset * 2);
      offset += count;
      g.dispose();
    }
    const mergedGeo = new THREE.BufferGeometry();
    mergedGeo.setAttribute('position', new THREE.BufferAttribute(position, 3));
    mergedGeo.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
    mergedGeo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    mergedGeo.computeBoundingSphere();
    const merged = new THREE.Mesh(mergedGeo, bucket.material);
    merged.castShadow = bucket.cast;
    merged.receiveShadow = bucket.receive;
    merged.name = `merged-${bucket.material.type}`;
    for (const mesh of bucket.items) mesh.parent.remove(mesh);
    root.add(merged);
  }
}

export function createWorld(scene, renderer, quality = 'med') {
  const group = new THREE.Group();
  group.name = 'island';
  scene.add(group);
  const colliders = [];
  const surfaces = [];
  const lootSpawns = [];
  const vehicles = [];
  const roadSamples = [];
  const landmarks = LOCATIONS.map(l => ({ ...l }));
  const rnd = mulberry32(0xB4771E);
  const low = quality === 'low';

  function addCollider(x, y, z, w, h, d) {
    colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, minY: y, maxY: y + h });
  }

  function shadow(mesh, cast = true, receive = true) {
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    return mesh;
  }

  function box(w, h, d, material, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    m.position.set(x, y, z);
    return shadow(m);
  }

  // ---------- WATER ----------
  const waterUniforms = {
    uTime: { value: 0 },
    uDeep: { value: new THREE.Color(0x0a4152) },
    uShallow: { value: new THREE.Color(0x2ca7b4) },
    uSun: { value: new THREE.Color(0xffc386) },
    uFog: { value: new THREE.Color(0xb8c8c9) }
  };
  const waterGeo = new THREE.PlaneGeometry(1600, 1600, 72, 72);
  waterGeo.rotateX(-Math.PI / 2);
  const waterMat = new THREE.ShaderMaterial({
    uniforms: waterUniforms,
    transparent: true,
    depthWrite: false,
    vertexShader: `
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;
      void main(){
        vec3 p = position;
        float w = sin(p.x*0.075 + uTime*0.7)*0.22 + cos(p.z*0.062 + uTime*0.52)*0.17 + sin((p.x+p.z)*0.16 + uTime*0.9)*0.05;
        p.y += w;
        vWave = w;
        vec4 wp = modelMatrix*vec4(p,1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix*viewMatrix*wp;
      }`,
    fragmentShader: `
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSun;
      uniform vec3 uFog;
      varying vec3 vWorld;
      varying float vWave;
      void main(){
        vec3 view = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - clamp(view.y,0.0,1.0), 2.2);
        float band = sin(vWorld.x*0.08 + vWorld.z*0.055 + uTime*0.8)*0.5+0.5;
        vec3 col = mix(uDeep, uShallow, clamp(0.42 + fres*0.5 + band*0.12,0.0,1.0));
        float spec = pow(max(dot(reflect(-normalize(vec3(-0.4,0.42,-0.5)), normalize(vec3(0.0,1.0,0.0))), view),0.0), 120.0);
        col += uSun * spec * 1.7;
        col += uSun * pow(max(view.y,0.0), 9.0) * 0.08;
        float dist = length(cameraPosition - vWorld);
        col = mix(col, uFog, smoothstep(260.0, 780.0, dist));
        float alpha = mix(0.94, 0.72, fres);
        gl_FragColor = vec4(col, alpha);
      }`
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.position.y = WATER_LEVEL;
  water.renderOrder = 1;
  group.add(water);

  // ---------- SKY ----------
  const sunDir = new THREE.Vector3(-0.62, 0.24, 0.35).normalize();
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(0x1e608b) },
      mid: { value: new THREE.Color(0x9ec3cb) },
      horizon: { value: new THREE.Color(0xffc38d) },
      sunDir: { value: sunDir }
    },
    vertexShader: `varying vec3 vWorld; void main(){vWorld = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      varying vec3 vWorld;
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir;
      void main(){
        vec3 dir = normalize(vWorld);
        float h = clamp(dir.y,0.0,1.0);
        vec3 col = mix(horizon, mid, smoothstep(0.0,0.22,h));
        col = mix(col, top, smoothstep(0.14,0.8,h));
        float sun = pow(max(dot(dir, sunDir),0.0), 900.0);
        float glow = pow(max(dot(dir, sunDir),0.0), 18.0);
        col += vec3(1.0,0.72,0.42) * (sun*2.2 + glow*0.18);
        col += vec3(1.0,0.8,0.62) * pow(1.0-h, 12.0) * 0.1;
        float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233)))*43758.5453)*0.012;
        gl_FragColor = vec4(col + dither, 1.0);
      }`
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 18), skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,236,196,1)', 'rgba(255,154,61,0)', 256),
    color: 0xffd29b, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.9
  }));
  sunSprite.scale.set(180, 180, 1);
  sunSprite.position.copy(sunDir).multiplyScalar(680);
  scene.add(sunSprite);

  // ---------- LIGHTS ----------
  const hemi = new THREE.HemisphereLight(0xffe2c2, 0x263d3c, 1.35);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffc58e, 2.7);
  sun.position.set(-160, 155, 95);
  sun.castShadow = true;
  const shadowSize = low ? 1024 : 2048;
  sun.shadow.mapSize.set(shadowSize, shadowSize);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 520;
  sun.shadow.camera.left = -210;
  sun.shadow.camera.right = 210;
  sun.shadow.camera.top = 210;
  sun.shadow.camera.bottom = -210;
  sun.shadow.bias = -0.0009;
  sun.shadow.normalBias = 0.7;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(0, 0, 0);
  const fill = new THREE.DirectionalLight(0x8bc7d7, 0.55);
  fill.position.set(150, 70, -120);
  scene.add(fill);

  scene.fog = new THREE.Fog(0xb7c8ca, 250, 740);

  // ---------- TERRAIN ----------
  const segs = low ? 100 : 164;
  const terrainGeo = new THREE.PlaneGeometry(520, 520, segs, segs);
  terrainGeo.rotateX(-Math.PI / 2);
  const pos = terrainGeo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const cSand = new THREE.Color(0xc3a875);
  const cSandWet = new THREE.Color(0x8f815e);
  const cGrass = new THREE.Color(0x537544);
  const cGrassDark = new THREE.Color(0x3b5a39);
  const cGrassLight = new THREE.Color(0x6f8d4d);
  const cRock = new THREE.Color(0x7a7c6e);
  const cRockDark = new THREE.Color(0x515952);
  const cDirt = new THREE.Color(0x7e704c);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = terrainHeight(x, z);
    pos.setY(i, h);
    const slope = Math.abs(terrainHeight(x + 2, z) - h) + Math.abs(terrainHeight(x, z + 2) - h);
    const n = fbm(x * 0.06 + 4, z * 0.06 - 8, 3, 21);
    if (h < 0.15) tmp.copy(cSandWet);
    else if (h < 2.2) tmp.copy(cSand).lerp(cGrass, smoothstep(1.2, 2.2, h)).lerp(cSandWet, smoothstep(0.15, -0.2, h) * 0.5);
    else if (h > 35) tmp.copy(cRock).lerp(cRockDark, clamp((h - 35) / 24, 0, 1)).lerp(cSand, 0.08);
    else if (slope > 3.1) tmp.copy(cRock).lerp(cDirt, 0.24 + n * 0.2);
    else tmp.copy(cGrass).lerp(n > 0.5 ? cGrassLight : cGrassDark, Math.abs(n - 0.5) * 1.3).lerp(cDirt, smoothstep(23, 33, h) * 0.35);
    // dusty clearings around landmarks
    for (const l of LOCATIONS) {
      const dl = Math.hypot(x - l.x, z - l.z);
      if (dl < l.r * 0.85 && (l.type === 'village' || l.type === 'military' || l.type === 'industrial' || l.type === 'bunker')) {
        tmp.lerp(cDirt, (1 - smoothstep(l.r * 0.3, l.r * 0.85, dl)) * 0.34);
      }
    }
    const shade = 0.84 + n * 0.26;
    colors[i * 3] = tmp.r * shade;
    colors[i * 3 + 1] = tmp.g * shade;
    colors[i * 3 + 2] = tmp.b * shade;
  }
  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();
  const detail = createDetailTexture();
  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true, map: detail, roughness: 0.98, metalness: 0.0,
    color: 0xffffff
  });
  const terrain = new THREE.Mesh(terrainGeo, terrainMat);
  terrain.receiveShadow = true;
  terrain.castShadow = false;
  terrain.name = 'terrain';
  group.add(terrain);

  // ---------- DISTANT ISLANDS ----------
  const distMat = new THREE.MeshStandardMaterial({ color: 0x304c45, roughness: 1 });
  for (const [x, z, s] of [[-330, 80, 1], [380, -160, 1.4], [240, 330, 0.75], [-280, -300, 0.8]]) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(38 * s, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), distMat);
    m.scale.y = 0.4;
    m.position.set(x, -2, z);
    group.add(m);
  }

  // ---------- MATERIALS ----------
  const concrete = new THREE.MeshStandardMaterial({ color: 0x8f9288, roughness: 0.92, metalness: 0.02 });
  const concreteDark = new THREE.MeshStandardMaterial({ color: 0x5e625b, roughness: 0.95 });
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x2c3334, roughness: 0.97 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x59666a, roughness: 0.55, metalness: 0.55 });
  const rustMat = new THREE.MeshStandardMaterial({ color: 0x8b5138, roughness: 0.86, metalness: 0.18 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xd2d0c4, roughness: 0.72 });
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xe16b2d, roughness: 0.7 });
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x4d5b3d, roughness: 0.91 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x182024, roughness: 0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x5b858c, roughness: 0.18, metalness: 0.55, transparent: true, opacity: 0.7 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6f5136, roughness: 0.95 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8e4d34, roughness: 0.92 });
  const roofBlue = new THREE.MeshStandardMaterial({ color: 0x365a63, roughness: 0.88 });
  const awningMats = [
    new THREE.MeshStandardMaterial({ color: 0x9a4c34, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ color: 0x3f6d6a, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ color: 0xd0a24d, roughness: 0.9 })
  ];
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x386f49, roughness: 0.94, side: THREE.DoubleSide });
  const leafMat2 = new THREE.MeshStandardMaterial({ color: 0x4c8152, roughness: 0.94 });
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4c3a2a, roughness: 1 });

  const facadeMats = [
    createFacadeMaterial('#45555c', '#ffc886', renderer),
    createFacadeMaterial('#55524a', '#ffc06e', renderer),
    createFacadeMaterial('#3d4e57', '#a9e4e1', renderer),
    createFacadeMaterial('#5a5147', '#ffd694', renderer),
    createFacadeMaterial('#424c4f', '#ffae66', renderer)
  ];

  // ---------- BUILDING HELPERS ----------
  function addBuilding(x, z, w, d, h, facadeIndex = 0, opts = {}) {
    const base = terrainHeight(x, z) - 0.3;
    const g = new THREE.Group();
    const bodyMat = facadeMats[facadeIndex % facadeMats.length];
    const shell = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), bodyMat));
    shell.position.set(x, base + h / 2, z);
    g.add(shell);
    // solid base plinth
    const plinth = box(w + 0.35, Math.max(1.2, h * 0.035), d + 0.35, concreteDark, x, base + 0.7, z);
    g.add(plinth);
    // roof cap
    const cap = box(w + 0.5, 0.45, d + 0.5, concreteDark, x, base + h + 0.08, z);
    g.add(cap);
    const roofBox = box(Math.max(2, w * 0.26), 1.4, Math.max(2, d * 0.22), concrete, x + w * 0.16, base + h + 0.95, z - d * 0.12);
    g.add(roofBox);
    if (opts.antenna) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 7, 6), metalMat);
      mast.position.set(x - w * 0.18, base + h + 4.2, z + d * 0.1);
      g.add(mast);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff5533 }));
      beacon.position.set(x - w * 0.18, base + h + 7.8, z + d * 0.1);
      g.add(beacon);
    }
    if (opts.awning) {
      const aw = box(w * 0.86, 0.12, 1.6, awningMats[opts.awning % 3], x, base + 3.1, z - d / 2 - 0.75);
      g.add(aw);
      const lip = box(w * 0.86, 0.5, 0.08, awningMats[opts.awning % 3], x, base + 2.88, z - d / 2 - 1.5);
      g.add(lip);
    }
    if (opts.sign) {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(w * 0.75, 10), 2.2), new THREE.MeshBasicMaterial({ map: opts.sign, transparent: true }));
      sign.position.set(x, base + Math.min(h - 2, 11), z - d / 2 - 0.03);
      sign.rotation.y = Math.PI;
      g.add(sign);
    }
    group.add(g);
    addCollider(x, base, z, w, h + 1, d);
    return { group: g, base, h };
  }

  function addHouse(x, z, w = 7, d = 6, h = 3.8, color = 0, rot = 0) {
    const base = terrainHeight(x, z) - 0.15;
    const g = new THREE.Group();
    const wallMat = new THREE.MeshStandardMaterial({ color: [0xb7a37d, 0xc4b18c, 0x9e8f72, 0xb19a73, 0x8f9a87][color % 5], roughness: 0.95 });
    const body = box(w, h, d, wallMat, 0, base + h / 2, 0);
    g.add(body);
    const rh = 2.2;
    const roofL = box(w / 2 + 0.55, 0.22, d + 1, roofMat, -w / 4, base + h + rh / 2 - 0.06, 0);
    roofL.rotation.z = -0.42;
    g.add(roofL);
    const roofR = box(w / 2 + 0.55, 0.22, d + 1, roofMat, w / 4, base + h + rh / 2 - 0.06, 0);
    roofR.rotation.z = 0.42;
    g.add(roofR);
    const gable = new THREE.Mesh(new THREE.CylinderGeometry(0.01, rh, 0, 3, 1), wallMat);
    gable.visible = false;
    g.add(gable);
    // door
    const door = box(1.05, 2.1, 0.11, darkMat, 0, base + 1.05, -d / 2 - 0.02);
    g.add(door);
    // windows
    for (const sx of [-1, 1]) {
      const win = box(1.2, 1.05, 0.08, glassMat, sx * w * 0.29, base + 2.05, -d / 2 - 0.02);
      g.add(win);
      const frame = box(1.3, 0.08, 0.1, woodMat, sx * w * 0.29, base + 1.5, -d / 2 - 0.04);
      g.add(frame);
    }
    // porch
    const porch = box(w * 0.9, 0.18, 1.7, woodMat, 0, base + 0.12, -d / 2 - 0.85);
    g.add(porch);
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    group.add(g);
    // colliders are axis aligned; rotation only tiny
    addCollider(x, base, z, Math.abs(Math.cos(rot)) * w + Math.abs(Math.sin(rot)) * d, h + rh, Math.abs(Math.cos(rot)) * d + Math.abs(Math.sin(rot)) * w);
    return { base, g };
  }

  function addContainer(x, z, y, color = 0xe06430, rot = 0, w = 6.1, h = 2.6, d = 2.5) {
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.24 });
    const c = box(w, h, d, mat, x, y + h / 2, z);
    c.rotation.y = rot;
    group.add(c);
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x2c3336, roughness: 0.6, metalness: 0.4 });
    for (let i = -w / 2 + 0.8; i < w / 2; i += 1.2) {
      const rib = box(0.09, h * 0.9, d + 0.04, trimMat, x + i * Math.cos(rot), y + h / 2, z - i * Math.sin(rot));
      rib.rotation.y = rot;
      group.add(rib);
    }
    addCollider(x, y, z, Math.abs(Math.cos(rot)) * w + Math.abs(Math.sin(rot)) * d, h, Math.abs(Math.cos(rot)) * d + Math.abs(Math.sin(rot)) * w);
  }

  function addCrate(x, z, s = 1, y = null) {
    const base = y ?? terrainHeight(x, z);
    const c = box(1.15 * s, 1.1 * s, 1.15 * s, new THREE.MeshStandardMaterial({ color: 0x5c5238, roughness: 0.9 }), x, base + 0.55 * s, z);
    c.rotation.y = rnd() * 0.5;
    group.add(c);
    const band = box(1.18 * s, 0.12 * s, 1.18 * s, darkMat, x, base + 0.55 * s, z);
    band.rotation.y = c.rotation.y;
    group.add(band);
    addCollider(x, base, z, 1.15 * s, 1.1 * s, 1.15 * s);
  }

  function addWatchtower(x, z, h = 10) {
    const base = terrainHeight(x, z);
    const g = new THREE.Group();
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const leg = box(0.28, h, 0.28, woodMat, x + sx * 1.8, base + h / 2, z + sz * 1.8);
      leg.rotation.z = sx * 0.035;
      leg.rotation.x = -sz * 0.035;
      g.add(leg);
    }
    const platform = box(5.2, 0.35, 5.2, woodMat, x, base + h, z);
    g.add(platform);
    const railMat = new THREE.MeshStandardMaterial({ color: 0x806447, roughness: 0.9 });
    for (const [dx, dz, w, d] of [[0, -2.5, 5.2, 0.12], [0, 2.5, 5.2, 0.12], [-2.5, 0, 0.12, 5.2], [2.5, 0, 0.12, 5.2]]) {
      const rail = box(w, 1.15, d, railMat, x + dx, base + h + 0.72, z + dz);
      g.add(rail);
    }
    const roof = box(5.8, 0.2, 5.8, rustMat, x, base + h + 3.1, z);
    roof.rotation.z = 0.05;
    g.add(roof);
    for (const [dx, dz] of [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]]) {
      g.add(box(0.16, 2.1, 0.16, metalMat, x + dx, base + h + 1.65, z + dz));
    }
    // ladder
    for (let i = 0; i < 8; i++) g.add(box(0.6, 0.08, 0.08, metalMat, x - 2.7, base + 1 + i * 1.05, z - 1.8));
    g.add(box(0.08, h, 0.08, metalMat, x - 3, base + h / 2, z - 1.8));
    g.add(box(0.08, h, 0.08, metalMat, x - 2.4, base + h / 2, z - 1.8));
    group.add(g);
    addCollider(x, base, z, 4.4, h, 4.4);
    return { x, z, base, h };
  }

  // ============================================================
  // SUNSET CITY
  // ============================================================
  const city = POI_FLATS.city;
  const cityBuildings = [
    [-118, -108, 20, 19, 35, 0], [-91, -114, 17, 22, 55, 2], [-63, -110, 20, 17, 31, 1],
    [-40, -102, 17, 21, 47, 4], [-121, -80, 24, 17, 24, 3], [-96, -80, 17, 17, 63, 2],
    [-54, -83, 24, 21, 39, 0], [-117, -52, 20, 21, 49, 4], [-89, -53, 17, 16, 33, 1],
    [-59, -54, 23, 19, 59, 0], [-36, -68, 17, 17, 26, 3], [-76, -42, 16, 16, 35, 2],
    [-38, -46, 13, 15, 22, 1], [-99, -34, 14, 14, 27, 4]
  ];
  const citySigns = ['NOVA', 'AEGIS', 'NORTHSTAR', 'VANTA', 'SUNSET'];
  cityBuildings.forEach((b, i) => {
    const sign = i % 4 === 0 ? makeSignTexture(citySigns[i % citySigns.length], '#101a20', i % 2 ? '#ffb76e' : '#66d8cd') : null;
    addBuilding(b[0], b[1], b[2], b[3], b[4], b[5], { antenna: i === 5 || i === 7, awning: i < 6 ? i : 0, sign });
  });
  // City street furniture
  for (let i = 0; i < 14; i++) {
    const x = -128 + rnd() * 110;
    const z = -128 + rnd() * 105;
    const y = terrainHeight(x, z);
    if (colliders.some(c => x > c.minX - 1 && x < c.maxX + 1 && z > c.minZ - 1 && z < c.maxZ + 1)) continue;
    const pole = box(0.12, 5.4, 0.12, darkMat, x, y + 2.7, z);
    group.add(pole);
    const arm = box(1.4, 0.1, 0.1, darkMat, x + 0.6, y + 5.35, z);
    group.add(arm);
    const lamp = box(0.5, 0.13, 0.24, new THREE.MeshBasicMaterial({ color: 0xffd7a7 }), x + 1.2, y + 5.26, z);
    group.add(lamp);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('rgba(255,200,130,.85)', 'rgba(255,130,40,0)', 64), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(x + 1.2, y + 5.2, z);
    glow.scale.set(2.6, 2.6, 1);
    group.add(glow);
  }
  // Central plaza + monument
  {
    const px = -77, pz = -77;
    const base = terrainHeight(px, pz);
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(9, 9.4, 0.22, 24), concrete, 0, 0, 0);
    plaza.position.set(px, base + 0.02, pz);
    plaza.receiveShadow = true;
    group.add(plaza);
    const spire = box(1.2, 11, 1.2, darkMat, px, base + 5.5, pz);
    group.add(spire);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.1, 8, 24), new THREE.MeshStandardMaterial({ color: 0xff7a2b, emissive: 0xff5a00, emissiveIntensity: 1.4 }));
    ring.position.set(px, base + 9, pz);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    addCollider(px, base, pz, 1.3, 11, 1.3);
  }

  // ============================================================
  // IRON RIDGE BASE
  // ============================================================
  const basePoi = POI_FLATS.base;
  {
    const x = basePoi.x, z = basePoi.z;
    addBuilding(x - 24, z - 10, 28, 12, 5.5, 1, {});
    addBuilding(x + 13, z - 12, 16, 11, 4.6, 3, {});
    addBuilding(x + 20, z + 17, 20, 14, 8.2, 0, {});
    addBuilding(x - 20, z + 18, 13, 13, 5, 4, {});
    // perimeter walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x777863, roughness: 0.96 });
    const wallH = 2.8, halfW = 41, halfD = 34;
    const wy = terrainHeight(x, z);
    for (const [wx, wz, ww, wd] of [[x, z - halfD, halfW * 2, 1.2], [x, z + halfD, halfW * 2, 1.2], [x - halfW, z, 1.2, halfD * 2], [x + halfW, z, 1.2, halfD * 2]]) {
      const wall = box(ww, wallH, wd, wallMat, wx, terrainHeight(wx, wz) + wallH / 2, wz);
      group.add(wall);
      addCollider(wx, terrainHeight(wx, wz), wz, ww, wallH, wd);
    }
    // gate opening (remove collider sections by adding gate visually)
    const gate1 = box(9, 4.8, 1.4, concreteDark, x, terrainHeight(x, z - halfD) + 2.4, z - halfD);
    gate1.visible = false;
    group.add(gate1);
    // watchtowers
    addWatchtower(x - 36, z - 28, 9);
    addWatchtower(x + 36, z - 28, 11);
    addWatchtower(x - 36, z + 28, 10);
    addWatchtower(x + 36, z + 28, 9);
    // crates
    for (let i = 0; i < 9; i++) addCrate(x - 32 + rnd() * 60, z - 20 + rnd() * 42, 0.8 + rnd() * 0.5);
    // sandbag lines
    const sandMat = new THREE.MeshStandardMaterial({ color: 0x9b8a65, roughness: 1 });
    for (let i = 0; i < 8; i++) {
      const sx = x - 32 + rnd() * 60, sz = z - 15 + rnd() * 34;
      const bag = box(3.6, 0.55, 0.8, sandMat, sx, terrainHeight(sx, sz) + 0.3, sz);
      group.add(bag);
    }
    // bunker entrance
    const bx = x + 3, bz = z + 31;
    const by = terrainHeight(bx, bz);
    const bunker = box(8, 3.2, 6, concreteDark, bx, by + 1.6, bz);
    group.add(bunker);
    const door = box(3.2, 2.4, 0.16, darkMat, bx, by + 1.2, bz - 3.03);
    group.add(door);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.16, 0.2), new THREE.MeshBasicMaterial({ color: 0xff7044 }));
    lamp.position.set(bx, by + 2.7, bz - 3.06);
    group.add(lamp);
    addCollider(bx, by, bz, 8, 3.2, 6);
    // radar dish
    const dish = new THREE.Mesh(new THREE.SphereGeometry(2.6, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.35), metalMat);
    dish.position.set(x + 6, terrainHeight(x + 6, z + 5) + 7.5, z + 5);
    dish.rotation.x = -1.0;
    group.add(dish);
    group.add(box(0.22, 7, 0.22, metalMat, x + 6, terrainHeight(x + 6, z + 5) + 3.5, z + 5));
  }

  // ============================================================
  // PALM VILLAGE
  // ============================================================
  {
    const x = POI_FLATS.village.x, z = POI_FLATS.village.z;
    const houses = [
      [-22, -10, 0.2, 0], [-5, -15, -0.15, 1], [16, -12, 0.1, 2], [25, 7, 0.4, 0],
      [-26, 13, -0.3, 3], [-8, 20, 0.12, 1], [14, 24, -0.2, 4], [27, 23, 0.1, 2]
    ];
    houses.forEach((h, i) => addHouse(x + h[0], z + h[1], 6.4 + (i % 3), 5.6 + (i % 2), 3.6, i, h[2]));
    // market
    for (let i = 0; i < 3; i++) {
      const sx = x - 6 + i * 7, sz = z + 2;
      const sy = terrainHeight(sx, sz);
      const table = box(3.2, 0.9, 1.5, woodMat, sx, sy + 0.5, sz);
      group.add(table);
      const canopyMat = awningMats[i];
      const canopy = box(3.8, 0.15, 2.4, canopyMat, sx, sy + 2.5, sz);
      group.add(canopy);
      group.add(box(0.08, 2.5, 0.08, woodMat, sx - 1.7, sy + 1.25, sz - 1));
      group.add(box(0.08, 2.5, 0.08, woodMat, sx + 1.7, sy + 1.25, sz - 1));
    }
    // well
    const wx = x - 2, wz = z - 2, wy = terrainHeight(wx, wz);
    group.add(new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.9, 1.0, 14), concrete).translateX(wx).translateY(wy + 0.5).translateZ(wz));
    addCollider(wx, wy, wz, 3.8, 1, 3.8);
    // fences
    for (let i = 0; i < 10; i++) {
      const fx = x - 30 + rnd() * 62, fz = z - 22 + rnd() * 48;
      if (colliders.some(c => fx > c.minX - 1 && fx < c.maxX + 1 && fz > c.minZ - 1 && fz < c.maxZ + 1)) continue;
      const fy = terrainHeight(fx, fz);
      group.add(box(2.4, 0.12, 0.08, woodMat, fx, fy + 1.05, fz));
      group.add(box(0.1, 1.15, 0.08, woodMat, fx - 1.1, fy + 0.55, fz));
      group.add(box(0.1, 1.15, 0.08, woodMat, fx + 1.1, fy + 0.55, fz));
    }
  }

  // ============================================================
  // SKYLINE AIRFIELD
  // ============================================================
  {
    const x = POI_FLATS.airport.x, z = POI_FLATS.airport.z;
    const runwayTex = createRunwayTexture();
    const runway = new THREE.Mesh(new THREE.PlaneGeometry(170, 24), new THREE.MeshStandardMaterial({ map: runwayTex, roughness: 0.94 }));
    runway.rotation.x = -Math.PI / 2;
    runway.position.set(x + 2, terrainHeight(x, z) + 0.08, z - 35);
    runway.receiveShadow = true;
    group.add(runway);
    // taxiway
    const taxi = new THREE.Mesh(new THREE.PlaneGeometry(10, 46), asphalt);
    taxi.rotation.x = -Math.PI / 2;
    taxi.position.set(x + 2, terrainHeight(x, z) + 0.075, z - 9);
    group.add(taxi);
    // hangars
    for (let i = 0; i < 2; i++) {
      const hx = x - 35 + i * 34, hz = z + 17;
      const hy = terrainHeight(hx, hz);
      const body = box(26, 9, 20, new THREE.MeshStandardMaterial({ color: 0x5e696b, roughness: 0.8, metalness: 0.25 }), hx, hy + 4.5, hz);
      group.add(body);
      const roof = box(28, 0.6, 22, darkMat, hx, hy + 9.2, hz);
      group.add(roof);
      const door = box(19, 7, 0.25, darkMat, hx, hy + 3.5, hz - 10.05);
      group.add(door);
      for (let d = -8; d <= 8; d += 4) group.add(box(0.14, 7, 0.1, metalMat, hx + d, hy + 3.5, hz - 10.2));
      addCollider(hx, hy, hz, 26, 9.5, 20);
    }
    // control tower
    const tx = x + 34, tz = z + 13, ty = terrainHeight(tx, tz);
    addBuilding(tx, tz, 8, 8, 20, 2, { antenna: true });
    const cab = box(10, 4, 10, glassMat, tx, ty + 17, tz - 0.5);
    group.add(cab);
    const cabRoof = box(11.5, 0.5, 11.5, darkMat, tx, ty + 19.2, tz - 0.5);
    group.add(cabRoof);
    // plane
    const px = x + 3, pz = z - 34, py = terrainHeight(px, pz) + 1.7;
    const plane = new THREE.Group();
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 1.6, 28, 12), whiteMat);
    fuselage.rotation.z = Math.PI / 2;
    plane.add(fuselage);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(2.1, 5, 12), whiteMat);
    nose.rotation.z = -Math.PI / 2;
    nose.position.x = -16.2;
    plane.add(nose);
    const wing = box(6, 0.3, 30, whiteMat, 0, 0.4, 0);
    plane.add(wing);
    const tailWing = box(4, 0.25, 11, whiteMat, 12, 0.6, 0);
    plane.add(tailWing);
    const tail = box(0.3, 5, 6, orangeMat, 13, 2.5, 0);
    plane.add(tail);
    for (const ex of [-5.5, 5.5]) {
      const engine = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 4, 10), metalMat);
      engine.rotation.z = Math.PI / 2;
      engine.position.set(ex, 0.1, -4);
      plane.add(engine);
    }
    for (let i = 0; i < 12; i++) {
      const w = box(1.1, 0.6, 0.1, glassMat, -11 + i * 1.9, 0.7, -2.02);
      plane.add(w);
    }
    plane.position.set(px, py, pz);
    plane.rotation.y = 0.18;
    plane.scale.setScalar(0.8);
    plane.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    group.add(plane);
    addCollider(px, py - 1.8, pz, 27, 4.5, 24);
    // fuel tanks
    for (let i = 0; i < 2; i++) {
      const fx = x - 26 + i * 7, fz = z - 2;
      const fy = terrainHeight(fx, fz);
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 5.2, 16), whiteMat);
      tank.position.set(fx, fy + 2.6, fz);
      tank.castShadow = true;
      group.add(tank);
      group.add(box(0.2, 0.2, 3, metalMat, fx, fy + 5.2, fz));
      addCollider(fx, fy, fz, 6.4, 5.2, 6.4);
    }
    // windsock
    const wsx = x - 58, wsz = z - 18, wsy = terrainHeight(wsx, wsz);
    group.add(box(0.14, 6, 0.14, whiteMat, wsx, wsy + 3, wsz));
    const sock = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3.2, 8, 1, true), orangeMat);
    sock.rotation.z = -Math.PI / 2;
    sock.position.set(wsx + 1.8, wsy + 5.8, wsz);
    group.add(sock);
  }

  // ============================================================
  // FOUNDRY YARD
  // ============================================================
  {
    const x = POI_FLATS.industrial.x, z = POI_FLATS.industrial.z;
    const metal2 = new THREE.MeshStandardMaterial({ color: 0x626d70, roughness: 0.68, metalness: 0.55 });
    // warehouses
    for (const [bx, bz, w, d, h] of [[x - 18, z - 14, 22, 14, 9], [x + 16, z - 10, 18, 15, 7], [x - 4, z + 16, 26, 13, 8]]) {
      const by = terrainHeight(bx, bz);
      const body = box(w, h, d, metal2, bx, by + h / 2, bz);
      group.add(body);
      const roof = box(w + 1, 0.5, d + 1, rustMat, bx, by + h + 0.2, bz);
      group.add(roof);
      for (let i = 0; i < 6; i++) group.add(box(w * 0.85, 0.1, 0.12, darkMat, bx, by + 1.3 + i * 1.3, bz - d / 2 - 0.08));
      addCollider(bx, by, bz, w, h, d);
    }
    // silos
    for (let i = 0; i < 3; i++) {
      const sx = x + 27 + i * 7, sz = z + 11;
      const sy = terrainHeight(sx, sz);
      const silo = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.4, 14, 16), new THREE.MeshStandardMaterial({ color: 0x9aa09b, roughness: 0.55, metalness: 0.45 }));
      silo.position.set(sx, sy + 7, sz);
      silo.castShadow = true;
      group.add(silo);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(3.4, 2.4, 16), rustMat);
      cap.position.set(sx, sy + 15.1, sz);
      group.add(cap);
      addCollider(sx, sy, sz, 6.8, 14, 6.8);
    }
    // pipes
    for (let i = 0; i < 5; i++) {
      const pz = z - 25 + i * 3.2;
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 30, 8), rustMat);
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set(x - 18, terrainHeight(x, pz) + 1.6 + i * 0.7, pz);
      group.add(pipe);
    }
    // crane
    const cx = x - 28, cz = z + 8, cy = terrainHeight(cx, cz);
    const mast = box(0.8, 20, 0.8, orangeMat, cx, cy + 10, cz);
    group.add(mast);
    const boom = box(24, 0.6, 0.7, orangeMat, cx + 9, cy + 19.7, cz);
    group.add(boom);
    group.add(box(0.12, 8, 0.12, darkMat, cx + 17, cy + 15.5, cz));
    const hook = box(1.1, 0.7, 1.1, darkMat, cx + 17, cy + 11.4, cz);
    group.add(hook);
    // containers
    for (let i = 0; i < 8; i++) {
      const c = [0xd15b32, 0x347b83, 0xbfa03e, 0x6b4f8e][i % 4];
      addContainer(x - 30 + rnd() * 65, z - 24 + rnd() * 50, terrainHeight(x - 30 + rnd() * 65, z - 24 + rnd() * 50), c, rnd() * 0.2);
    }
  }

  // ============================================================
  // KESTREL HARBOR
  // ============================================================
  {
    const x = POI_FLATS.harbor.x, z = POI_FLATS.harbor.z;
    // warehouses
    const wx = x - 30, wz = z - 8;
    addBuilding(wx, wz, 20, 14, 7, 1, {});
    addBuilding(x + 24, z - 6, 14, 12, 5.2, 3, {});
    // piers
    for (let i = 0; i < 3; i++) {
      const px = x - 34 + i * 28;
      const pz = z + 30;
      const deck = box(9, 0.5, 58, woodMat, px, 1.55, pz);
      group.add(deck);
      surfaces.push({ minX: px - 4.5, maxX: px + 4.5, minZ: pz - 29, maxZ: pz + 29, y: 1.82 });
      for (let j = 0; j < 9; j++) {
        group.add(box(0.32, 3.4, 0.32, woodMat, px - 4.2, 0, pz - 27 + j * 6.8));
        group.add(box(0.32, 3.4, 0.32, woodMat, px + 4.2, 0, pz - 27 + j * 6.8));
      }
    }
    // ship
    const sx = x + 8, sz = z + 57;
    const hull = box(38, 5, 12, new THREE.MeshStandardMaterial({ color: 0x3d5157, roughness: 0.7, metalness: 0.4 }), sx, 3.4, sz);
    group.add(hull);
    const bow = new THREE.Mesh(new THREE.ConeGeometry(6, 8, 4), hull.material);
    bow.rotation.z = -Math.PI / 2;
    bow.rotation.y = Math.PI / 4;
    bow.scale.z = 1.05;
    bow.position.set(sx - 20, 3.4, sz);
    group.add(bow);
    const deck = box(36, 0.35, 11, concreteDark, sx, 6.1, sz);
    group.add(deck);
    const cabin = box(7, 7, 8, whiteMat, sx + 11, 9.8, sz);
    group.add(cabin);
    for (let i = 0; i < 5; i++) {
      addContainer(sx - 14 + i * 6.4, sz, 6.25, [0xd15b32, 0x3c7c84, 0xc7a23e][i % 3], 0, 5.8, 2.3, 2.2);
    }
    // crane
    const cx = x - 40, cz = z + 28, cy = 1.8;
    group.add(box(0.7, 23, 0.7, orangeMat, cx, cy + 11.5, cz));
    group.add(box(26, 0.6, 0.7, orangeMat, cx + 11, cy + 22.8, cz));
    group.add(box(0.1, 12, 0.1, darkMat, cx + 20, cy + 16.8, cz));
    group.add(box(2, 1.2, 2, darkMat, cx + 20, cy + 10.5, cz));
    // containers
    for (let i = 0; i < 10; i++) {
      const ax = x - 48 + rnd() * 70;
      const az = z + 5 + rnd() * 32;
      addContainer(ax, az, Math.max(terrainHeight(ax, az), 1.3), [0xd15b32, 0x347b83, 0xbfa03e, 0x6b4f8e][i % 4], 0);
    }
    // lighthouse at end of pier
    const lx = x - 34, lz = z + 58;
    const lh = box(3.2, 14, 3.2, whiteMat, lx, 8.7, lz);
    group.add(lh);
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 2.4, 12), new THREE.MeshStandardMaterial({ color: 0xffdd99, emissive: 0xffaa44, emissiveIntensity: 1.4 }));
    lamp.position.set(lx, 17, lz);
    group.add(lamp);
    const lroof = new THREE.Mesh(new THREE.ConeGeometry(3.1, 2, 12), rustMat);
    lroof.position.set(lx, 19, lz);
    group.add(lroof);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('rgba(255,220,150,.9)', 'rgba(255,130,30,0)', 64), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(lx, 18, lz);
    glow.scale.set(14, 14, 1);
    group.add(glow);
  }

  // ============================================================
  // MIRROR LAKE + BRIDGE
  // ============================================================
  {
    const lx = 0, lz = 8;
    // bridge across x
    const deck = box(66, 0.55, 6.4, concreteDark, lx, 2.2, lz);
    group.add(deck);
    surfaces.push({ minX: lx - 33, maxX: lx + 33, minZ: lz - 3.2, maxZ: lz + 3.2, y: 2.5 });
    for (const side of [-1, 1]) {
      group.add(box(66, 0.11, 0.1, metalMat, lx, 3.65, lz + side * 3.08));
      for (let i = -30; i <= 30; i += 10) group.add(box(0.18, 1.5, 0.18, metalMat, lx + i, 2.95, lz + side * 3.08));
    }
    for (const px of [-24, 0, 24]) {
      group.add(box(1.5, 6, 1.5, concreteDark, lx + px, 0, lz - 2.5));
      group.add(box(1.5, 6, 1.5, concreteDark, lx + px, 0, lz + 2.5));
    }
    // ruined fishing hut on shore
    addHouse(lx - 38, lz - 8, 5, 4.5, 3.2, 3, 0.3);
    // footpath lamps
    for (const px of [-30, -18, 18, 30]) {
      group.add(box(0.12, 3.3, 0.12, darkMat, px, 1.8, lz - 4.4));
      const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('rgba(255,210,150,.9)', 'rgba(255,140,40,0)', 64), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      gl.position.set(px, 3.5, lz - 4.4);
      gl.scale.set(2.4, 2.4, 1);
      group.add(gl);
    }
  }

  // ============================================================
  // ASHFALL PEAK / ECHO BUNKER
  // ============================================================
  {
    const x = POI_FLATS.mountain.x, z = POI_FLATS.mountain.z;
    const y = terrainHeight(x, z);
    const antenna = box(0.3, 16, 0.3, metalMat, x, y + 8, z);
    group.add(antenna);
    const dish = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.35), whiteMat);
    dish.position.set(x + 1.8, y + 12, z);
    dish.rotation.x = -1.1;
    group.add(dish);
    const shed = box(5, 3.5, 5, concreteDark, x + 13, y + 1.75, z - 5);
    group.add(shed);

    const bx = POI_FLATS.bunker.x, bz = POI_FLATS.bunker.z;
    const by = terrainHeight(bx, bz);
    const bldg = box(12, 4.5, 9, concrete, bx, by + 2.25, bz);
    group.add(bldg);
    const door = box(4.5, 3, 0.2, darkMat, bx, by + 1.5, bz - 4.56);
    group.add(door);
    const stripe = box(5.4, 0.18, 0.15, orangeMat, bx, by + 3.35, bz - 4.6);
    group.add(stripe);
    const tunnel = box(7, 2.6, 14, concreteDark, bx, by + 0.5, bz + 10);
    group.add(tunnel);
    // roof vents
    for (const dx of [-3, 3]) {
      group.add(box(1.5, 1.2, 1.5, metalMat, bx + dx, by + 5.0, bz + 1));
    }
    addCollider(bx, by, bz, 12, 5, 9);
    // crash site debris
    for (let i = 0; i < 5; i++) {
      const px = bx + 20 + rnd() * 25, pz = bz - 15 + rnd() * 30;
      const debris = box(2.2 + rnd() * 3, 0.18, 1.4 + rnd() * 2, rustMat, px, terrainHeight(px, pz) + 0.2, pz);
      debris.rotation.y = rnd() * 3;
      group.add(debris);
    }
  }

  // ============================================================
  // ROADS
  // ============================================================
  const roadPaths = [
    [[-130, -78], [-78, -78], [-30, -78], [40, -84], [103, -90]],
    [[-78, -120], [-78, -78], [-78, -20], [-78, 30], [-100, 48]],
    [[-78, -60], [-20, -30], [40, 10], [82, 70]],
    [[82, 70], [45, 100], [0, 132], [-27, 143]],
    [[126, 8], [100, 40], [82, 70]],
    [[-78, -78], [-40, -105], [-4, -132]],
    [[126, 8], [150, -40], [130, -80], [105, -90]]
  ];
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x333b3c, roughness: 0.98 });
  const roadEdgeMat = new THREE.MeshStandardMaterial({ color: 0x6d6754, roughness: 1 });
  const dashData = [];
  roadPaths.forEach(path => {
    const pts = path.map(([x, z]) => {
      const h = Math.max(terrainHeight(x, z), WATER_LEVEL + 0.1);
      return new THREE.Vector3(x, h + 0.09, z);
    });
    const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.2);
    const N = 90;
    const verts = [], idx = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const p = curve.getPoint(t);
      const tan = curve.getTangent(t).setY(0).normalize();
      const nx = -tan.z, nz = tan.x;
      const w = 4.2;
      for (const s of [-1, 1]) {
        verts.push(p.x + nx * w * s, p.y, p.z + nz * w * s);
      }
      if (i > 0) {
        const a = (i - 1) * 2;
        idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
      }
      if (i % 2 === 0) roadSamples.push({ x: p.x, z: p.z });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const road = new THREE.Mesh(geo, roadMat);
    road.receiveShadow = true;
    group.add(road);
    // dashed center line (instanced into one draw call below)
    for (let i = 2; i < N - 2; i += 5) {
      const t = i / N;
      const p = curve.getPoint(t);
      const tan = curve.getTangent(t).setY(0).normalize();
      dashData.push({ x: p.x, y: p.y + 0.03, z: p.z, yaw: Math.atan2(tan.x, tan.z) + Math.PI / 2 });
    }
  });
  if (dashData.length) {
    const dashGeo = new THREE.BoxGeometry(2.4, 0.03, 0.16);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xc9b98e });
    const dashes = new THREE.InstancedMesh(dashGeo, dashMat, dashData.length);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const scale = new THREE.Vector3(1, 1, 1);
    dashData.forEach((d, i) => {
      e.set(0, d.yaw, 0);
      q.setFromEuler(e);
      m4.compose(new THREE.Vector3(d.x, d.y, d.z), q, scale);
      dashes.setMatrixAt(i, m4);
    });
    dashes.instanceMatrix.needsUpdate = true;
    dashes.receiveShadow = true;
    dashes.frustumCulled = false;
    group.add(dashes);
  }

  // ============================================================
  // VEGETATION
  // ============================================================
  function isPOI(x, z, extra = 0) {
    for (const l of LOCATIONS) {
      if (Math.hypot(x - l.x, z - l.z) < l.r * 0.78 + extra) return true;
    }
    return false;
  }
  function roadDist(x, z) {
    let d = 1e9;
    for (const p of roadSamples) {
      const dd = (x - p.x) ** 2 + (z - p.z) ** 2;
      if (dd < d) d = dd;
    }
    return Math.sqrt(d);
  }
  function blocked(x, z, pad = 0) {
    for (const c of colliders) {
      if (x > c.minX - pad && x < c.maxX + pad && z > c.minZ - pad && z < c.maxZ + pad) return true;
    }
    return false;
  }

  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 3.2, 5);
  const crownGeo = new THREE.IcosahedronGeometry(1.8, 1);
  const broad = [];
  let attempts = 0;
  while (broad.length < (low ? 110 : 170) && attempts < 2400) {
    attempts++;
    const x = (rnd() - 0.5) * 370;
    const z = (rnd() - 0.5) * 370;
    const h = terrainHeight(x, z);
    if (h < 1.9 || h > 31) continue;
    if (isPOI(x, z, 2) || roadDist(x, z) < 6 || blocked(x, z, 1.2)) continue;
    broad.push({ x, z, h, s: 0.7 + rnd() * 0.85, c: rnd() });
    if (broad.length < 60) addCollider(x, h, z, 0.9, 4, 0.9);
  }
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, broad.length);
  const crownMesh = new THREE.InstancedMesh(crownGeo, leafMat, broad.length);
  const crownMesh2 = new THREE.InstancedMesh(crownGeo, leafMat2, broad.length);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  broad.forEach((t, i) => {
    e.set(0, t.c * 6.28, 0);
    q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + 1.6 * t.s, t.z), q, new THREE.Vector3(t.s, t.s, t.s));
    trunkMesh.setMatrixAt(i, m4);
    const cs = t.s * (0.8 + t.c * 0.5);
    m4.compose(new THREE.Vector3(t.x, t.h + 3.6 * t.s, t.z), q, new THREE.Vector3(cs * 1.3, cs, cs * 1.3));
    crownMesh.setMatrixAt(i, m4);
    m4.compose(new THREE.Vector3(t.x + 0.7 * t.s, t.h + 4.3 * t.s, t.z - 0.4 * t.s), q, new THREE.Vector3(cs * 0.8, cs * 0.7, cs * 0.8));
    crownMesh2.setMatrixAt(i, m4);
  });
  trunkMesh.castShadow = crownMesh.castShadow = true;
  trunkMesh.receiveShadow = crownMesh.receiveShadow = true;
  group.add(trunkMesh, crownMesh, crownMesh2);

  // pines on high ground
  const pineGeo = new THREE.ConeGeometry(1.5, 5.5, 7);
  const pines = [];
  attempts = 0;
  while (pines.length < (low ? 35 : 65) && attempts < 900) {
    attempts++;
    const x = (rnd() - 0.5) * 360;
    const z = (rnd() - 0.5) * 360;
    const h = terrainHeight(x, z);
    if (h < 18 || isPOI(x, z, 1) || roadDist(x, z) < 6 || blocked(x, z, 1)) continue;
    pines.push({ x, z, h, s: 0.75 + rnd() * 0.6 });
  }
  const pineMesh = new THREE.InstancedMesh(pineGeo, new THREE.MeshStandardMaterial({ color: 0x2f5541, roughness: 0.95 }), pines.length);
  const pineTrunk = new THREE.InstancedMesh(trunkGeo, trunkMat, pines.length);
  pines.forEach((t, i) => {
    e.set(0, t.s * 9, 0); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + 1.3 * t.s, t.z), q, new THREE.Vector3(t.s, t.s, t.s));
    pineTrunk.setMatrixAt(i, m4);
    m4.compose(new THREE.Vector3(t.x, t.h + 4.0 * t.s, t.z), q, new THREE.Vector3(t.s, t.s, t.s));
    pineMesh.setMatrixAt(i, m4);
  });
  pineMesh.castShadow = pineTrunk.castShadow = true;
  group.add(pineTrunk, pineMesh);

  // palms near beaches and village
  const palmSpots = [];
  attempts = 0;
  while (palmSpots.length < (low ? 22 : 38) && attempts < 1000) {
    attempts++;
    const x = (rnd() - 0.5) * 360;
    const z = (rnd() - 0.5) * 360;
    const h = terrainHeight(x, z);
    if (h < 1.4 || h > 12) continue;
    if (roadDist(x, z) < 4 || blocked(x, z, 1)) continue;
    if (Math.hypot(x - POI_FLATS.village.x, z - POI_FLATS.village.z) > 50 && Math.hypot(x - POI_FLATS.harbor.x, z - POI_FLATS.harbor.z) > 55 && rnd() > 0.35) continue;
    palmSpots.push({ x, z, h, s: 0.8 + rnd() * 0.6, rot: rnd() * 6.28 });
  }
  const palmTrunkGeo = new THREE.CylinderGeometry(0.16, 0.25, 5.4, 5);
  const palmCrownGeo = new THREE.ConeGeometry(2.2, 1.2, 8, 1, true);
  const palmTrunk = new THREE.InstancedMesh(palmTrunkGeo, trunkMat, palmSpots.length);
  const palmCrown = new THREE.InstancedMesh(palmCrownGeo, new THREE.MeshStandardMaterial({ color: 0x3f804d, roughness: 0.9, side: THREE.DoubleSide }), palmSpots.length);
  palmSpots.forEach((t, i) => {
    e.set(0, t.rot, 0); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + 2.7 * t.s, t.z), q, new THREE.Vector3(t.s, t.s, t.s));
    palmTrunk.setMatrixAt(i, m4);
    e.set(0, t.rot + 0.3, 0.12); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + 5.7 * t.s, t.z), q, new THREE.Vector3(t.s * 1.2, t.s, t.s * 1.2));
    palmCrown.setMatrixAt(i, m4);
  });
  palmTrunk.castShadow = palmCrown.castShadow = true;
  group.add(palmTrunk, palmCrown);

  // rocks
  const rockGeo = new THREE.DodecahedronGeometry(1, 0);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x63695f, roughness: 1 });
  const rocks = [];
  attempts = 0;
  while (rocks.length < (low ? 45 : 85) && attempts < 800) {
    attempts++;
    const x = (rnd() - 0.5) * 380;
    const z = (rnd() - 0.5) * 380;
    const h = terrainHeight(x, z);
    if (h < 0.5 || isPOI(x, z, 0) || roadDist(x, z) < 5 || blocked(x, z, 1)) continue;
    rocks.push({ x, z, h, s: 0.3 + rnd() * 1.7, r: rnd() * 6.28 });
  }
  const rockMesh = new THREE.InstancedMesh(rockGeo, rockMat, rocks.length);
  rocks.forEach((t, i) => {
    e.set(t.r * 0.4, t.r, t.r * 0.3); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + t.s * 0.3, t.z), q, new THREE.Vector3(t.s * 1.4, t.s, t.s));
    rockMesh.setMatrixAt(i, m4);
  });
  rockMesh.castShadow = rockMesh.receiveShadow = true;
  group.add(rockMesh);

  // bushes
  const bushGeo = new THREE.IcosahedronGeometry(0.72, 0);
  const bushes = [];
  for (let i = 0; i < (low ? 90 : 180); i++) {
    const x = (rnd() - 0.5) * 360;
    const z = (rnd() - 0.5) * 360;
    const h = terrainHeight(x, z);
    if (h < 1.6 || h > 32 || isPOI(x, z, 0) || roadDist(x, z) < 4 || blocked(x, z, 0.5)) continue;
    bushes.push({ x, z, h, s: 0.5 + rnd() * 0.9 });
  }
  const bushMesh = new THREE.InstancedMesh(bushGeo, new THREE.MeshStandardMaterial({ color: 0x426b3d, roughness: 1 }), bushes.length);
  bushes.forEach((t, i) => {
    e.set(0, t.s * 4, 0); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(t.x, t.h + 0.5 * t.s, t.z), q, new THREE.Vector3(t.s, t.s * 0.7, t.s));
    bushMesh.setMatrixAt(i, m4);
  });
  bushMesh.castShadow = true;
  group.add(bushMesh);

  // grass tufts around low ground (cheap crossed cones)
  if (!low) {
    const grassGeo = new THREE.ConeGeometry(0.12, 0.7, 3);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x718c4c, roughness: 1 });
    const tufts = [];
    for (let i = 0; i < 700; i++) {
      const x = (rnd() - 0.5) * 340;
      const z = (rnd() - 0.5) * 340;
      const h = terrainHeight(x, z);
      if (h < 2.2 || h > 26 || isPOI(x, z, 0) || roadDist(x, z) < 4) continue;
      tufts.push({ x, z, h });
    }
    const grassMesh = new THREE.InstancedMesh(grassGeo, grassMat, tufts.length);
    tufts.forEach((t, i) => {
      m4.makeScale(0.8 + rnd(), 0.7 + rnd() * 1.4, 0.8 + rnd());
      m4.setPosition(t.x, t.h + 0.35, t.z);
      grassMesh.setMatrixAt(i, m4);
    });
    group.add(grassMesh);
  }

  // ============================================================
  // CLOUDS + BIRDS
  // ============================================================
  const cloudTex = makeGlowTexture('rgba(255,246,238,.95)', 'rgba(255,246,238,0)', 128);
  const clouds = [];
  for (let i = 0; i < 16; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, color: 0xffe6d2, transparent: true, opacity: 0.2 + rnd() * 0.16, depthWrite: false, fog: true }));
    const a = rnd() * 6.28, rad = 100 + rnd() * 250;
    s.position.set(Math.cos(a) * rad, 78 + rnd() * 65, Math.sin(a) * rad);
    const sc = 55 + rnd() * 85;
    s.scale.set(sc * 1.8, sc * 0.55, 1);
    group.add(s);
    clouds.push({ s, speed: 0.25 + rnd() * 0.4, x: s.position.x, z: s.position.z });
  }
  const birds = [];
  const birdMat = new THREE.LineBasicMaterial({ color: 0x1f3438, transparent: true, opacity: 0.5 });
  for (let i = 0; i < 7; i++) {
    const g = new THREE.Group();
    for (const side of [-1, 1]) {
      const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(side * 0.45, 0.12, 0)]);
      g.add(new THREE.Line(geo, birdMat));
    }
    const a = rnd() * 6.28, rad = 40 + rnd() * 90;
    g.position.set(Math.cos(a) * rad, 22 + rnd() * 18, Math.sin(a) * rad);
    g.userData = { a, rad, speed: 0.07 + rnd() * 0.05, y: g.position.y };
    group.add(g);
    birds.push(g);
  }

  // ============================================================
  // VEHICLES
  // ============================================================
  function createATV(x, z, yaw = 0, color = 0xd86a2b) {
    const y = terrainHeight(x, z);
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.35 });
    const chassy = box(1.5, 0.5, 2.7, darkMat, 0, 0.55, 0);
    g.add(chassy);
    const hood = box(1.2, 0.55, 1.0, bodyMat, 0, 0.95, -0.7);
    g.add(hood);
    const seat = box(1.1, 0.45, 1.0, darkMat, 0, 0.95, 0.25);
    g.add(seat);
    const cageMat = new THREE.MeshStandardMaterial({ color: 0x313b3e, roughness: 0.4, metalness: 0.7 });
    for (const [cx, cz] of [[-0.55, 0.65], [0.55, 0.65], [-0.55, -0.3], [0.55, -0.3]]) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 1.5, 5), cageMat);
      bar.position.set(cx, 1.55, cz);
      bar.rotation.z = cx * 0.25;
      g.add(bar);
    }
    const top = box(1.1, 0.08, 0.16, cageMat, 0, 2.25, 0.35);
    g.add(top);
    const wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.32, 12);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x141719, roughness: 0.98 });
    for (const [wx, wz] of [[-0.82, -0.95], [0.82, -0.95], [-0.82, 0.95], [0.82, 0.95]]) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(wx, 0.45, wz);
      w.castShadow = true;
      g.add(w);
      wheels.push(w);
    }
    const light = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.15, 0.1), new THREE.MeshBasicMaterial({ color: 0xffe0a8 }));
    light.position.set(0, 1.0, -1.22);
    g.add(light);
    g.position.set(x, y, z);
    g.rotation.y = yaw;
    g.userData.dynamic = true;
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    group.add(g);
    const v = { group: g, x, z, y, yaw, wheels, radius: 1.5, name: 'RAPTOR ATV', occupied: false };
    vehicles.push(v);
    return v;
  }
  createATV(30, -60, 1.2);
  createATV(64, 44, 0.3, 0x3f7b78);
  createATV(-84, 24, 2.3, 0xb54a2b);
  createATV(92, -40, 0.9, 0x9a7b36);
  createATV(-5, 92, 1.9, 0x4b6f80);

  // ============================================================
  // LOOT SPAWNS
  // ============================================================
  const spawnPools = [
    { x: POI_FLATS.city.x, z: POI_FLATS.city.z, r: 38, n: 16 },
    { x: POI_FLATS.airport.x, z: POI_FLATS.airport.z, r: 35, n: 11 },
    { x: POI_FLATS.base.x, z: POI_FLATS.base.z, r: 31, n: 11 },
    { x: POI_FLATS.village.x, z: POI_FLATS.village.z, r: 28, n: 10 },
    { x: POI_FLATS.industrial.x, z: POI_FLATS.industrial.z, r: 27, n: 9 },
    { x: POI_FLATS.harbor.x, z: POI_FLATS.harbor.z, r: 30, n: 10 },
    { x: POI_FLATS.bunker.x, z: POI_FLATS.bunker.z, r: 22, n: 6 },
    { x: POI_FLATS.mountain.x, z: POI_FLATS.mountain.z, r: 20, n: 4 },
    { x: POI_FLATS.lake.x, z: POI_FLATS.lake.z, r: 22, n: 5 },
    { x: 0, z: -40, r: 80, n: 10 }
  ];
  const qualityTable = ['common', 'common', 'uncommon', 'uncommon', 'rare', 'rare', 'epic'];
  spawnPools.forEach((pool, pi) => {
    for (let i = 0; i < pool.n; i++) {
      let tries = 0, x, z;
      do {
        const a = rnd() * 6.28, rad = Math.sqrt(rnd()) * pool.r;
        x = pool.x + Math.cos(a) * rad;
        z = pool.z + Math.sin(a) * rad;
        tries++;
      } while (tries < 30 && (blocked(x, z, 1.2) || terrainHeight(x, z) < 0.8));
      lootSpawns.push({
        x, z, y: terrainHeight(x, z),
        quality: qualityTable[Math.min(qualityTable.length - 1, Math.floor(rnd() * qualityTable.length))],
        tier: pi < 3 ? 1.1 : 1
      });
    }
  });

  // Player spawns
  const spawnPoints = [
    { x: -25, z: -110, yaw: -2.6, name: 'SUNSET CITY' },
    { x: -80, z: 4, yaw: 1.0, name: 'IRON RIDGE BASE' },
    { x: 55, z: 52, yaw: 0.5, name: 'PALM VILLAGE' },
    { x: 58, z: -74, yaw: -0.9, name: 'SKYLINE AIRFIELD' },
    { x: 95, z: 15, yaw: 1.8, name: 'FOUNDRY YARD' },
    { x: -20, z: 100, yaw: 3.0, name: 'KESTREL HARBOR' },
    { x: -4, z: -110, yaw: 0, name: 'ECHO BUNKER' }
  ];
  // Pick a genuinely clear landing spot near the city edge. The original
  // hand-placed point could overlap bunker props, which put the drop camera
  // inside geometry on slow devices.
  (function refineCitySpawn() {
    const city = LOCATIONS.find(l => l.id === 'city');
    // Land on the open south ridge, roughly 85m from downtown, so the drop
    // camera frames the skyline instead of staring into a tower wall.
    const desired = { x: -30, z: -150 };
    let best = null, bestScore = Infinity;
    for (let a = 0; a < 72; a++) {
      const ang = (a / 72) * TAU;
      for (let rad = 62; rad <= 112; rad += 2) {
        const x = city.x + Math.cos(ang) * rad;
        const z = city.z + Math.sin(ang) * rad;
        if (blocked(x, z, 3.4)) continue;
        const h = terrainHeight(x, z);
        if (h < 1.0) continue;
        let clear = true;
        for (const [ox, oz] of [[5, 0], [-5, 0], [0, 5], [0, -5], [3.5, 3.5], [-3.5, -3.5]]) {
          if (blocked(x + ox, z + oz, 1.1)) { clear = false; break; }
        }
        if (!clear) continue;
        const score = Math.hypot(x - desired.x, z - desired.z) + Math.abs(h - 9.5) * 0.4;
        if (score < bestScore) { bestScore = score; best = { x, z }; }
      }
    }
    if (best) {
      spawnPoints[0].x = best.x;
      spawnPoints[0].z = best.z;
    }
  })();
  spawnPoints.forEach(p => { p.y = terrainHeight(p.x, p.z); });

  // Collapse hundreds of static props into a small set of per-material meshes.
  // This roughly halves draw calls in the menu and keeps mid-range phones smooth.
  mergeStaticMeshes(group);

  // Sun target follows player later via game
  const update = (dt, t) => {
    waterUniforms.uTime.value = t;
    for (const c of clouds) {
      c.s.position.x = c.x + Math.sin(t * 0.004 * c.speed + c.x) * 35;
    }
    for (const b of birds) {
      const a = b.userData.a + t * b.userData.speed;
      b.position.x = Math.cos(a) * b.userData.rad;
      b.position.z = Math.sin(a) * b.userData.rad;
      b.position.y = b.userData.y + Math.sin(t * 1.2 + b.userData.rad) * 0.8;
      b.rotation.y = -a - Math.PI / 2;
    }
    sunSprite.position.copy(sunDir).multiplyScalar(680);
  };

  function raycastWorld(origin, dir, maxDist) {
    // Ray vs terrain (coarse march), water surface and solid AABBs.
    let best = maxDist;
    let hit = null;
    const step = 1.2;
    for (let t = 0; t < maxDist; t += step) {
      const x = origin.x + dir.x * t;
      const y = origin.y + dir.y * t;
      const z = origin.z + dir.z * t;
      if (y <= terrainHeight(x, z) && y < 60) {
        best = t;
        hit = { type: 'terrain', point: new THREE.Vector3(x, y, z), distance: t };
        break;
      }
      if (y <= WATER_LEVEL) {
        best = t;
        hit = { type: 'water', point: new THREE.Vector3(x, y, z), distance: t };
        break;
      }
    }
    for (const c of colliders) {
      const t = rayAABB(origin, dir, c, best);
      if (t !== null && t < best) {
        best = t;
        hit = { type: 'structure', point: new THREE.Vector3(origin.x + dir.x * t, origin.y + dir.y * t, origin.z + dir.z * t), distance: t, collider: c };
      }
    }
    return hit;
  }

  function rayAABB(o, d, c, maxDist) {
    let tmin = 0, tmax = maxDist;
    for (const axis of ['x', 'y', 'z']) {
      const min = axis === 'x' ? c.minX : axis === 'y' ? c.minY : c.minZ;
      const max = axis === 'x' ? c.maxX : axis === 'y' ? c.maxY : c.maxZ;
      const od = axis === 'x' ? o.x : axis === 'y' ? o.y : o.z;
      const dd = axis === 'x' ? d.x : axis === 'y' ? d.y : d.z;
      if (Math.abs(dd) < 1e-8) {
        if (od < min || od > max) return null;
      } else {
        let t1 = (min - od) / dd, t2 = (max - od) / dd;
        if (t1 > t2) [t1, t2] = [t2, t1];
        tmin = Math.max(tmin, t1);
        tmax = Math.min(tmax, t2);
        if (tmin > tmax) return null;
      }
    }
    return tmin;
  }

  return {
    group, colliders, surfaces, lootSpawns, vehicles, landmarks, spawnPoints,
    heightAt: terrainHeight, waterLevel: WATER_LEVEL, sun, sunSprite, sky, update, raycastWorld, rayAABB
  };
}

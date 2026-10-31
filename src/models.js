import * as THREE from 'three';
import { makeCanvas, roundRect } from './utils.js';

const GEO = {};
const MAT = {};

function mat(key, opts) {
  if (!MAT[key]) MAT[key] = new THREE.MeshStandardMaterial(opts);
  return MAT[key];
}

function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function makeGlowTexture(inner = '#ffffff', outer = 'rgba(255,255,255,0)', size = 128) {
  const c = makeCanvas(size, size);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.25, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createWeaponModel(id, accent = 0xffa34d, scale = 1) {
  const g = new THREE.Group();
  const metal = mat('gunmetal', { color: 0x252d30, roughness: 0.42, metalness: 0.72 });
  const dark = mat('gundark', { color: 0x11171a, roughness: 0.58, metalness: 0.45 });
  const accentMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.44, metalness: 0.35, emissive: accent, emissiveIntensity: 0.12 });
  const grip = mat('grip', { color: 0x181d1e, roughness: 0.9, metalness: 0.05 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x6fe6ff, roughness: 0.1, metalness: 0.2, emissive: 0x3cd9ff, emissiveIntensity: 0.9 });

  const add = (mesh, x, y, z, rx = 0, ry = 0, rz = 0) => {
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = true;
    g.add(mesh);
    return mesh;
  };

  let muzzleZ = -0.8;
  if (id === 'ar') {
    add(box(0.11, 0.14, 0.5, metal), 0, 0, -0.13);
    add(box(0.055, 0.055, 0.55, dark), 0, 0.03, -0.58);
    add(box(0.075, 0.075, 0.17, accentMat), 0, 0.035, -0.9);
    add(box(0.09, 0.2, 0.1, grip), 0, -0.15, 0.02, 0.18);
    add(box(0.085, 0.18, 0.13, dark), 0, -0.14, -0.19, -0.25);
    add(box(0.12, 0.14, 0.26, dark), 0, -0.01, 0.28);
    add(box(0.075, 0.18, 0.1, grip), 0, -0.1, 0.39);
    add(box(0.12, 0.05, 0.22, dark), 0, 0.11, 0.18);
    add(box(0.055, 0.075, 0.18, dark), 0, 0.12, -0.08);
    add(box(0.065, 0.045, 0.055, glass), 0, 0.165, -0.08);
    add(box(0.025, 0.02, 0.09, accentMat), 0, 0.135, 0.05);
    muzzleZ = -0.99;
  } else if (id === 'smg') {
    add(box(0.1, 0.13, 0.35, metal), 0, 0, -0.04);
    add(box(0.05, 0.05, 0.3, dark), 0, 0.025, -0.36);
    add(box(0.07, 0.07, 0.12, accentMat), 0, 0.025, -0.53);
    add(box(0.09, 0.24, 0.1, dark), 0, -0.16, -0.1, 0.05);
    add(box(0.075, 0.17, 0.09, grip), 0, -0.12, 0.13, 0.28);
    add(box(0.045, 0.045, 0.24, dark), 0, 0.03, 0.28);
    add(box(0.09, 0.12, 0.06, dark), 0, 0.03, 0.4);
    add(box(0.055, 0.04, 0.13, dark), 0, 0.11, 0.05);
    add(box(0.035, 0.035, 0.04, glass), 0, 0.14, 0.05);
    muzzleZ = -0.61;
  } else if (id === 'shotgun') {
    add(box(0.11, 0.14, 0.46, metal), 0, 0, -0.05);
    add(box(0.055, 0.06, 0.62, dark), -0.035, 0.035, -0.52);
    add(box(0.045, 0.055, 0.58, dark), 0.04, 0.01, -0.5);
    add(box(0.105, 0.08, 0.22, accentMat), 0, -0.02, -0.39);
    add(box(0.1, 0.2, 0.11, grip), 0, -0.15, 0.1, 0.2);
    add(box(0.11, 0.14, 0.3, dark), 0, -0.02, 0.3);
    add(box(0.12, 0.06, 0.2, accentMat), 0, 0.1, -0.05);
    muzzleZ = -0.85;
  } else if (id === 'sniper') {
    add(box(0.09, 0.13, 0.56, metal), 0, 0, -0.08);
    add(box(0.04, 0.04, 0.72, dark), 0, 0.04, -0.72);
    add(box(0.06, 0.06, 0.2, accentMat), 0, 0.04, -1.12);
    add(box(0.06, 0.22, 0.08, grip), 0, -0.12, 0.03, 0.22);
    add(box(0.06, 0.17, 0.1, dark), 0, -0.14, -0.22);
    add(box(0.12, 0.16, 0.32, dark), 0, -0.02, 0.33);
    add(box(0.095, 0.08, 0.2, dark), 0, -0.09, 0.45);
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.38, 10), dark);
    tube.rotation.x = Math.PI / 2;
    add(tube, 0, 0.14, -0.08);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.015, 12), glass);
    lens.rotation.x = Math.PI / 2;
    add(lens, 0, 0.14, -0.28);
    add(box(0.04, 0.02, 0.16, accentMat), 0, 0.1, 0.14);
    muzzleZ = -1.24;
  } else if (id === 'lmg') {
    add(box(0.13, 0.16, 0.56, metal), 0, 0, -0.08);
    add(box(0.06, 0.06, 0.55, dark), 0, 0.035, -0.63);
    add(box(0.08, 0.08, 0.15, accentMat), 0, 0.035, -0.95);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.11, 14), dark);
    drum.rotation.z = Math.PI / 2;
    add(drum, 0, -0.14, -0.08);
    add(box(0.095, 0.18, 0.1, grip), 0, -0.14, 0.2, 0.2);
    add(box(0.13, 0.14, 0.3, dark), 0, -0.02, 0.33);
    add(box(0.1, 0.12, 0.14, dark), 0, 0.12, -0.02);
    add(box(0.025, 0.03, 0.55, accentMat), 0, -0.02, 0.58);
    muzzleZ = -1.05;
  } else if (id === 'pistol') {
    add(box(0.08, 0.09, 0.28, metal), 0, 0.02, -0.05);
    add(box(0.04, 0.04, 0.14, dark), 0, 0.035, -0.23);
    add(box(0.075, 0.18, 0.1, grip), 0, -0.1, 0.04, 0.24);
    add(box(0.06, 0.03, 0.03, glass), 0, 0.075, 0.02);
    add(box(0.04, 0.02, 0.1, accentMat), 0, 0.06, -0.08);
    muzzleZ = -0.32;
  } else if (id === 'melee') {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.02, 0.72), mat('blade', { color: 0xd7e2e4, roughness: 0.18, metalness: 0.95 }));
    add(blade, 0, 0, -0.5);
    add(box(0.05, 0.05, 0.24, dark), 0, 0, 0.06);
    add(box(0.17, 0.04, 0.05, accentMat), 0, 0, -0.12);
    muzzleZ = -0.9;
  }

  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.035, muzzleZ);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  g.scale.setScalar(scale);
  return g;
}

export function createOperator(palette, accentOverride = null, detail = true) {
  const accent = accentOverride ?? palette.accent ?? 0xff6a00;
  const skinMat = new THREE.MeshStandardMaterial({ color: palette.skin ?? 0xc99d78, roughness: 0.78, metalness: 0 });
  const suitMat = new THREE.MeshStandardMaterial({ color: palette.suit ?? 0x1a2328, roughness: 0.88, metalness: 0.08 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: palette.pants ?? 0x202c31, roughness: 0.92, metalness: 0.04 });
  const helmetMat = new THREE.MeshStandardMaterial({ color: palette.helmet ?? 0x12191d, roughness: 0.48, metalness: 0.35 });
  const accentMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.5, metalness: 0.2, emissive: accent, emissiveIntensity: 0.1 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x0d1316, roughness: 0.8, metalness: 0.15 });
  const visorMat = new THREE.MeshStandardMaterial({ color: palette.visor ?? accent, roughness: 0.12, metalness: 0.7, emissive: palette.visor ?? accent, emissiveIntensity: 1.15 });

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const hips = new THREE.Mesh(new THREE.CapsuleGeometry(0.245, 0.15, 4, 8), pantsMat);
  hips.position.y = 0.98;
  body.add(hips);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.285, 0.3, 4, 9), suitMat);
  torso.scale.set(1.12, 1, 0.78);
  torso.position.y = 1.3;
  body.add(torso);

  const chestPlate = box(0.48, 0.4, 0.1, darkMat, 0, 1.34, -0.2);
  body.add(chestPlate);
  const chestGlow = box(0.17, 0.025, 0.014, accentMat, 0.1, 1.42, -0.255);
  body.add(chestGlow);
  const belt = box(0.52, 0.09, 0.36, darkMat, 0, 1.02, 0);
  body.add(belt);
  const buckle = box(0.09, 0.06, 0.02, accentMat, 0, 1.02, -0.19);
  body.add(buckle);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.13, 8), skinMat);
  neck.position.y = 1.58;
  body.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 10), skinMat);
  head.scale.set(0.92, 1.05, 0.94);
  head.position.y = 1.73;
  body.add(head);

  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.205, 14, 9, 0, Math.PI * 2, 0, Math.PI * 0.62), helmetMat);
  helmet.scale.set(1.02, 1.02, 1.04);
  helmet.position.y = 1.77;
  body.add(helmet);
  const brim = box(0.36, 0.035, 0.19, helmetMat, 0, 1.8, -0.13);
  brim.rotation.x = -0.08;
  body.add(brim);
  const visor = box(0.24, 0.065, 0.035, visorMat, 0, 1.75, -0.176);
  body.add(visor);
  const helmetRail = box(0.05, 0.035, 0.2, darkMat, 0.17, 1.81, -0.04);
  body.add(helmetRail);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.28, 4), darkMat);
  antenna.position.set(0.18, 1.97, 0.02);
  antenna.rotation.z = -0.12;
  body.add(antenna);

  const backpack = box(0.38, 0.52, 0.21, new THREE.MeshStandardMaterial({ color: palette.backpack ?? 0x263238, roughness: 0.86, metalness: 0.1 }), 0, 1.3, 0.26);
  body.add(backpack);
  const packTrim = box(0.3, 0.05, 0.02, accentMat, 0, 1.38, 0.375);
  body.add(packTrim);

  const shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), suitMat);
  shoulderL.scale.set(1.15, 0.75, 1);
  shoulderL.position.set(-0.35, 1.47, 0);
  body.add(shoulderL);
  const shoulderR = shoulderL.clone();
  shoulderR.position.x = 0.35;
  body.add(shoulderR);

  function makeArm(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.36, 1.4, 0);
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.34, 3, 7), suitMat);
    upper.position.y = -0.23;
    upper.castShadow = true;
    pivot.add(upper);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.28, 3, 7), suitMat);
    forearm.position.set(0, -0.52, -0.1);
    forearm.rotation.x = -0.25;
    forearm.castShadow = true;
    pivot.add(forearm);
    const glove = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), darkMat);
    glove.position.set(0, -0.67, -0.18);
    pivot.add(glove);
    body.add(pivot);
    return pivot;
  }
  const armL = makeArm(-1);
  const armR = makeArm(1);

  function makeLeg(side) {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.15, 0.94, 0);
    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.34, 3, 7), pantsMat);
    thigh.position.y = -0.24;
    thigh.castShadow = true;
    pivot.add(thigh);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.36, 3, 7), pantsMat);
    shin.position.y = -0.67;
    shin.castShadow = true;
    pivot.add(shin);
    const boot = box(0.19, 0.15, 0.3, darkMat, 0, -0.87, -0.06);
    pivot.add(boot);
    const knee = box(0.14, 0.12, 0.04, darkMat, 0, -0.49, -0.105);
    pivot.add(knee);
    body.add(pivot);
    return pivot;
  }
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  const weaponMount = new THREE.Group();
  weaponMount.position.set(0.15, 1.35, -0.34);
  body.add(weaponMount);

  const collar = box(0.32, 0.055, 0.14, accentMat, 0, 1.55, -0.12);
  body.add(collar);

  root.userData = { body, head, armL, armR, legL, legR, weaponMount, torso, palette };
  root.traverse(o => {
    if (o.isMesh) {
      o.castShadow = detail;
      o.receiveShadow = false;
    }
  });
  return root;
}

export function createBotHealthBar() {
  const group = new THREE.Group();
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.07), new THREE.MeshBasicMaterial({ color: 0x071014, transparent: true, opacity: 0.72, depthWrite: false, depthTest: false }));
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.035), new THREE.MeshBasicMaterial({ color: 0x65e9c8, transparent: true, opacity: 0.95, depthWrite: false, depthTest: false }));
  fill.position.z = 0.001;
  group.add(bg, fill);
  group.position.y = 2.15;
  group.userData = { fill, width: 0.68 };
  group.renderOrder = 8;
  return group;
}

export function createParachute(color = 0xff6a00) {
  const group = new THREE.Group();
  const canvas = makeCanvas(512, 256);
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 512, 256);
  grad.addColorStop(0, '#ffb35c');
  grad.addColorStop(0.45, '#ff6a00');
  grad.addColorStop(1, '#a72900');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = 'rgba(255,255,255,.55)';
  ctx.lineWidth = 8;
  for (let i = 1; i < 6; i++) {
    ctx.beginPath(); ctx.moveTo(i * 85, 0); ctx.lineTo(i * 85, 256); ctx.stroke();
  }
  ctx.fillStyle = 'rgba(3,10,13,.88)';
  ctx.font = 'italic 900 96px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('BW', 256, 158);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.85, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.43), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, metalness: 0.02, side: THREE.DoubleSide }));
  dome.scale.set(1.3, 0.55, 1.0);
  dome.position.y = 3.3;
  group.add(dome);
  const lineMat = new THREE.LineBasicMaterial({ color: 0x1c2528, transparent: true, opacity: 0.65 });
  const anchors = [-1.4, -0.5, 0.5, 1.4];
  for (const a of anchors) {
    for (const b of [-0.8, 0.8]) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(a * 1.1, 3.3 + (a * a) * -0.15, b * 0.6), new THREE.Vector3(0, 1.5, 0)
      ]);
      group.add(new THREE.Line(geo, lineMat));
    }
  }
  group.userData.dome = dome;
  return group;
}

export function createLootIcon(text, color = '#ff9d52') {
  const c = makeCanvas(128, 128);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 128, 128);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.shadowColor = color;
  ctx.shadowBlur = 12;
  roundRect(ctx, 18, 24, 92, 80, 12);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = '700 40px "Arial Narrow", Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 64, 65);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(0.75, 0.75, 1);
  return sprite;
}

export function createChuteDome(texture) {}

import * as THREE from 'three';
import { makeGlowTexture } from './models.js';
import { makeCanvas } from './utils.js';

const glow = {};
function getGlow(color) {
  if (!glow[color]) glow[color] = makeGlowTexture(color, 'rgba(0,0,0,0)', 64);
  return glow[color];
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.items = [];
    this.tracers = [];
    this.texts = [];
    this.impactTex = makeGlowTexture('rgba(255,220,170,1)', 'rgba(255,120,30,0)', 64);
    this.bloodTex = makeGlowTexture('rgba(220,54,34,1)', 'rgba(100,5,0,0)', 64);
    this.sparkTex = makeGlowTexture('rgba(255,236,190,1)', 'rgba(255,140,30,0)', 32);
  }

  tracer(from, to, color = 0xffc86b) {
    const geo = new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.92, blending: THREE.AdditiveBlending, depthWrite: false });
    const line = new THREE.Line(geo, mat);
    line.renderOrder = 5;
    this.scene.add(line);
    this.tracers.push({ obj: line, life: 0.085, max: 0.085 });
  }

  muzzle(pos, color = 0xffb15e, scale = 1) {
    const mat = new THREE.SpriteMaterial({ map: this.sparkTex, color, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending });
    const s = new THREE.Sprite(mat);
    s.position.copy(pos);
    s.scale.setScalar(0.7 * scale);
    this.scene.add(s);
    this.items.push({ obj: s, life: 0.055, max: 0.055, grow: 2.2 });
    const light = new THREE.PointLight(color, 1.2, 6, 2);
    light.position.copy(pos);
    this.scene.add(light);
    this.items.push({ obj: light, light: true, life: 0.06, max: 0.06 });
  }

  impact(point, normal, kind = 'world') {
    const tex = kind === 'flesh' ? this.bloodTex : this.impactTex;
    const mat = new THREE.SpriteMaterial({ map: tex, color: kind === 'flesh' ? 0xffffff : 0xffc38a, transparent: true, opacity: 0.9, depthWrite: false, blending: kind === 'flesh' ? THREE.NormalBlending : THREE.AdditiveBlending });
    const s = new THREE.Sprite(mat);
    s.position.copy(point);
    s.scale.setScalar(kind === 'flesh' ? 0.5 : 0.38);
    this.scene.add(s);
    this.items.push({ obj: s, life: 0.16, max: 0.16, grow: 1.5 });
    const n = kind === 'flesh' ? 5 : 7;
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 0.025), new THREE.MeshBasicMaterial({ color: kind === 'flesh' ? 0x9b1d10 : 0xffd49a, transparent: true }));
      m.position.copy(point);
      const v = new THREE.Vector3((Math.random() - 0.5) * 2.2, Math.random() * 2.2, (Math.random() - 0.5) * 2.2);
      if (normal) v.addScaledVector(normal, 1.0);
      this.scene.add(m);
      this.items.push({ obj: m, life: 0.3 + Math.random() * 0.2, max: 0.5, vel: v, gravity: true, fade: true });
    }
  }

  damageNumber(pos, amount, crit = false) {
    const c = makeCanvas(128, 64);
    const ctx = c.getContext('2d');
    ctx.font = `700 ${crit ? 38 : 31}px "Arial Narrow", Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(0,0,0,.8)';
    ctx.lineWidth = 6;
    ctx.strokeText(String(amount), 64, 32);
    ctx.fillStyle = crit ? '#ffb44e' : '#ffffff';
    ctx.fillText(String(amount), 64, 32);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false }));
    sp.position.copy(pos);
    sp.scale.set(0.9, 0.45, 1);
    sp.renderOrder = 20;
    this.scene.add(sp);
    this.items.push({ obj: sp, life: 0.75, max: 0.75, rise: 1.0, fade: true, damageText: true });
  }

  explosion(pos, radius = 6) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.impactTex, color: 0xffb15e, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.position.copy(pos);
    s.scale.setScalar(2.5);
    this.scene.add(s);
    this.items.push({ obj: s, life: 0.45, max: 0.45, grow: 9, fade: true });
    const ringGeo = new THREE.RingGeometry(0.3, 0.55, 32);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffc07b, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    ring.position.copy(pos);
    ring.rotation.x = -Math.PI / 2;
    ring.scale.setScalar(1);
    ring.renderOrder = 6;
    this.scene.add(ring);
    this.items.push({ obj: ring, life: 0.55, max: 0.55, grow: radius * 2.2, fade: true });
    for (let i = 0; i < 22; i++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.06 + Math.random() * 0.08, 0), new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0x2b2018 : 0xffa449, transparent: true }));
      m.position.copy(pos);
      const a = Math.random() * Math.PI * 2, up = 2 + Math.random() * 7;
      this.scene.add(m);
      this.items.push({ obj: m, life: 0.6 + Math.random() * 0.6, max: 1.2, vel: new THREE.Vector3(Math.cos(a) * (2 + Math.random() * 5), up, Math.sin(a) * (2 + Math.random() * 5)), gravity: true, fade: true });
    }
    const light = new THREE.PointLight(0xff8a3d, 12, 30, 2);
    light.position.copy(pos);
    light.position.y += 1;
    this.scene.add(light);
    this.items.push({ obj: light, light: true, life: 0.25, max: 0.25, startIntensity: 12 });
  }

  update(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      t.obj.material.opacity = Math.max(0, t.life / t.max);
      if (t.life <= 0) {
        this.scene.remove(t.obj);
        t.obj.geometry.dispose();
        t.obj.material.dispose();
        this.tracers.splice(i, 1);
      }
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.life -= dt;
      const p = Math.max(0, it.life / it.max);
      if (it.life <= 0) {
        this.scene.remove(it.obj);
        if (it.obj.geometry) it.obj.geometry.dispose();
        if (it.obj.material) {
          if (it.obj.material.map && !it.obj.userData?.sharedTex) it.obj.material.map.dispose();
          it.obj.material.dispose();
        }
        this.items.splice(i, 1);
        continue;
      }
      if (it.light) {
        it.obj.intensity = (it.startIntensity ?? 1.2) * p;
      } else {
        if (it.fade && it.obj.material) it.obj.material.opacity = p;
        if (it.grow) {
          if (it.damageText) {
            it.obj.position.y += it.rise * dt;
            const sc = Math.min(1, p * 1.3);
            it.obj.scale.set(0.9 * sc, 0.45 * sc, 1);
          } else if (it.obj.isMesh && it.obj.geometry.type === 'RingGeometry') {
            it.obj.scale.setScalar(1 + (1 - p) * 12);
          } else {
            it.obj.scale.setScalar(Math.max(0.05, (1 + (1 - p) * it.grow)));
          }
        }
        if (it.vel) {
          it.obj.position.addScaledVector(it.vel, dt);
          if (it.gravity) it.vel.y -= 9.8 * dt;
          if (it.obj.material) it.obj.material.opacity = p;
        }
      }
    }
  }
}

export function spawnSmoke(scene, pos) {
  const tex = makeGlowTexture('rgba(110,110,105,.55)', 'rgba(60,60,60,0)', 64);
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.35, depthWrite: false }));
    s.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2));
    s.scale.setScalar(1 + Math.random() * 2);
    scene.add(s);
    const start = performance.now();
    const drift = new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.7 + Math.random() * 0.5, (Math.random() - 0.5) * 0.3);
    const anim = () => {
      const t = (performance.now() - start) / 1000;
      if (t > 2.4) { scene.remove(s); s.material.dispose(); return; }
      s.position.addScaledVector(drift, 1 / 60);
      s.material.opacity = 0.3 * (1 - t / 2.4);
      s.scale.setScalar(1 + t * 2);
      requestAnimationFrame(anim);
    };
    anim();
  }
}

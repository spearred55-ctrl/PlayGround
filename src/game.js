import * as THREE from 'three';
import { createWorld, WATER_LEVEL } from './world.js';
import { Player } from './player.js';
import { BotManager } from './bots.js';
import { Effects } from './effects.js';
import { AudioEngine } from './audio.js';
import { WEAPONS, LOOT_TABLE, RARITY, WEAPON_ICON, ZONE_PHASES, MATCH, OPERATORS } from './data.js';
import { clamp, damp, formatTime, mulberry32, makeCanvas, lerp, TAU } from './utils.js';
import { createWeaponModel, createLootIcon, makeGlowTexture, createOperator } from './models.js';

const QUALITY_PIXEL = { low: 1, med: 1.45, high: 2 };

export class Game {
  constructor(ui) {
    this.ui = ui;
    this.state = 'boot';
    this.clock = new THREE.Clock();
    this.time = 0;
    this.menuTime = 0;
    this.matchTime = 0;
    this.mode = 'solo';
    this.rnd = mulberry32(0xFACE);
    this.input = { moveX: 0, moveZ: 0, moveMag: 0, fire: false, aim: false, sprint: false, jump: false, crouch: false };
    this.crouchToggle = false;
    this.firedSincePress = false;
    this.keys = new Set();
    this.mouseLookActive = false;
    this.touchLook = null;
    this.joyPointer = null;
    this.vehicles = [];
    this.loot = [];
    this.grenades = [];
    this.pickup = null;
    this.spectateTarget = null;
    this.spectateTimer = 0;
    this.lastShotHeadshot = false;
    this.zoneTick = 0;
    this.renderEnabled = false;
    this.initRenderer();
    this.initInput();
    this.audio = new AudioEngine();
    this.audio.setMuted(!ui.settings.audio);
    this.ui.bind(this);
    this.setupZoneVisuals();
  }

  initRenderer() {
    const canvas = document.getElementById('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY_PIXEL[this.ui.settings.quality] || 1.45));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(67, window.innerWidth / window.innerHeight, 0.08, 1500);
    this.camera.position.set(100, 80, 100);
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) this.clock.getDelta();
    });
  }

  async initWorld() {
    const stages = [
      [12, 'FORMING ISLAND GEOMETRY'],
      [32, 'PLACING SUNSET CITY'],
      [52, 'RAISING AIRFIELD & HARBOR'],
      [70, 'GROWING FOREST CANOPY'],
      [84, 'SEEDING SUPPLY CACHES'],
      [94, 'SYNCING BATTLE SYSTEMS']
    ];
    for (const [pct, copy] of stages) {
      this.ui.setLoading(pct, copy);
      await new Promise(r => setTimeout(r, 30));
    }
    this.world = createWorld(this.scene, this.renderer, this.ui.settings.quality);
    this.effects = new Effects(this.scene);
    this.player = new Player(this.scene, this.world, this.ui.operator);
    this.bots = new BotManager(this.scene, this.world, this.effects, this.audio, this);
    this.bots.setPlayer(this.player, this.camera);
    this.createLoot();
    this.vehicles = this.world.vehicles;
    this.ui.setWorld(this.world);
    this.resetZone();
    this.player.spawn(this.world.spawnPoints[0]);
    this.player.character.visible = false;
    this.setZoneVisible(false);
    this.setMenuCamera(0);
    // The lobby uses a pre-rendered island backdrop, so the expensive scene is
    // not drawn until the player actually deploys.
    this.ui.setLoading(100, 'READY TO DEPLOY');
    await new Promise(r => setTimeout(r, 80));
    this.ui.hideLoader();
    this.ui.showLobby();
    this.state = 'menu';
    this.ui.countdown(0);
  }

  applyQuality() {
    const q = this.ui.settings.quality;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY_PIXEL[q] || 1.45));
    this.renderer.shadowMap.enabled = q !== 'low';
    this.renderer.shadowMap.needsUpdate = true;
    this.resize();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  setMenuCamera(t) {
    const a = 2.15 + t * 0.014;
    const radius = 148 + Math.sin(t * 0.08) * 6;
    this.camera.position.set(Math.cos(a) * radius, 76 + Math.sin(t * 0.17) * 3, Math.sin(a) * radius);
    this.camera.lookAt(0, 12, 0);
    this.camera.fov = 62;
    this.camera.updateProjectionMatrix();
  }

  initInput() {
    const canvas = this.renderer.domElement;
    window.addEventListener('keydown', e => {
      if (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      this.keys.add(e.code);
      if (this.state !== 'playing' && this.state !== 'dropping') return;
      if (e.repeat) return;
      switch (e.code) {
        case 'KeyR': this.reload(); break;
        case 'KeyE': this.interact(); break;
        case 'KeyF': this.toggleVehicle(); break;
        case 'KeyM': this.ui.toggleMap(); break;
        case 'KeyB': this.ui.toggleInventory(); break;
        case 'KeyH': this.useMedkit(); break;
        case 'KeyG': this.throwGrenade(); break;
        case 'Digit1': if (this.player.switchWeapon(0)) this.audio.ui(); break;
        case 'Digit2': if (this.player.switchWeapon(1)) this.audio.ui(); break;
        case 'Digit3': if (this.player.switchWeapon(2)) this.audio.ui(); break;
        case 'KeyQ': this.player.nextWeapon(); break;
        case 'Escape': this.ui.closeOverlays(); break;
        case 'KeyC': this.toggleCrouch(); break;
        case 'Space': this.input.jump = true; break;
      }
    });
    window.addEventListener('keyup', e => {
      this.keys.delete(e.code);
      if (e.code === 'Space') this.input.jump = false;
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.input.fire = false;
      this.input.aim = false;
    });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    canvas.addEventListener('mousedown', e => {
      if (this.state !== 'playing') return;
      if (document.pointerLockElement !== canvas) canvas.requestPointerLock?.();
      if (e.button === 0) {
        this.input.fire = true;
        this.firedSincePress = false;
      }
      if (e.button === 2) this.input.aim = true;
    });
    window.addEventListener('mouseup', e => {
      if (e.button === 0) this.input.fire = false;
      if (e.button === 2) this.input.aim = false;
    });
    window.addEventListener('mousemove', e => {
      if (this.state !== 'playing' || this.player?.vehicle) return;
      if (document.pointerLockElement !== canvas && !this.mouseLookActive) return;
      const sens = 0.00205 * this.ui.settings.sens;
      this.player.yaw -= e.movementX * sens;
      this.player.pitch -= e.movementY * sens * (this.ui.settings.invert ? -1 : 1);
      this.player.pitch = clamp(this.player.pitch, -1.18, 1.08);
    });
    // Drag-look fallback when pointer lock is unavailable.
    let drag = null;
    canvas.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse') {
        if (this.state === 'playing') {
          drag = { x: e.clientX, y: e.clientY };
          this.mouseLookActive = true;
          canvas.setPointerCapture?.(e.pointerId);
        }
        return;
      }
      if (this.state !== 'playing' || this.player?.vehicle) return;
      if (e.clientX > window.innerWidth * 0.36) {
        this.touchLook = { id: e.pointerId, x: e.clientX, y: e.clientY };
        canvas.setPointerCapture?.(e.pointerId);
      }
    });
    canvas.addEventListener('pointermove', e => {
      if (e.pointerType === 'mouse') {
        if (!drag || document.pointerLockElement === canvas) return;
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        drag = { x: e.clientX, y: e.clientY };
        const sens = 0.0042 * this.ui.settings.sens;
        this.player.yaw -= dx * sens;
        this.player.pitch = clamp(this.player.pitch - dy * sens * (this.ui.settings.invert ? -1 : 1), -1.18, 1.08);
      } else if (this.touchLook && e.pointerId === this.touchLook.id) {
        const dx = e.clientX - this.touchLook.x, dy = e.clientY - this.touchLook.y;
        this.touchLook.x = e.clientX;
        this.touchLook.y = e.clientY;
        const sens = 0.0041 * this.ui.settings.sens;
        this.player.yaw -= dx * sens;
        this.player.pitch = clamp(this.player.pitch - dy * sens * (this.ui.settings.invert ? -1 : 1), -1.18, 1.08);
      }
    });
    const endLook = e => {
      if (e.pointerType === 'mouse') { drag = null; this.mouseLookActive = false; }
      else if (this.touchLook && e.pointerId === this.touchLook.id) this.touchLook = null;
    };
    canvas.addEventListener('pointerup', endLook);
    canvas.addEventListener('pointercancel', endLook);
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === canvas && this.state === 'playing') this.ui.closeOverlays();
    });
    window.addEventListener('wheel', e => {
      if (this.state !== 'playing') return;
      e.preventDefault();
      this.player.nextWeapon();
    }, { passive: false });
    this.bindJoystick();
  }

  bindJoystick() {
    const joy = document.getElementById('joystick');
    const knob = document.getElementById('joyKnob');
    let center = null, id = null;
    const update = (e) => {
      if (id === null || !center) return;
      const dx = e.clientX - center.x, dy = e.clientY - center.y;
      const len = Math.hypot(dx, dy);
      const max = 40;
      const n = Math.min(1, len / max);
      const ang = Math.atan2(dy, dx);
      knob.style.transform = `translate(calc(-50% + ${Math.cos(ang) * n * max}px), calc(-50% + ${Math.sin(ang) * n * max}px))`;
      this.input.moveX = Math.cos(ang) * n;
      this.input.moveZ = -Math.sin(ang) * n;
      this.input.moveMag = n;
    };
    const reset = () => {
      id = null; center = null;
      this.joyPointer = null;
      knob.style.transform = 'translate(-50%, -50%)';
      this.input.moveX = 0; this.input.moveZ = 0; this.input.moveMag = 0;
    };
    joy.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      id = e.pointerId;
      this.joyPointer = e.pointerId;
      const r = joy.getBoundingClientRect();
      center = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      joy.setPointerCapture?.(e.pointerId);
      update(e);
    });
    joy.addEventListener('pointermove', e => { if (e.pointerId === id) { e.preventDefault(); update(e); } });
    joy.addEventListener('pointerup', e => { if (e.pointerId === id) reset(); });
    joy.addEventListener('pointercancel', reset);
  }

  setTouchInput(key, value) {
    if (key === 'fire') {
      this.input.fire = value;
      if (value) this.firedSincePress = false;
    } else if (key === 'aim') {
      this.input.aim = value;
    } else if (key === 'sprint') {
      this._touchSprint = value;
      this.input.sprint = value;
    }
  }

  triggerJump() { if (this.state === 'playing') this.input.jump = true; }
  toggleCrouch() {
    if (this.state !== 'playing') return;
    this.crouchToggle = !this.crouchToggle;
    this.ui.toast(this.crouchToggle ? '<b>STANCE</b> CROUCHED' : '<b>STANCE</b> STANDING');
  }

  updateInput() {
    let x = 0, z = 0;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z -= 1;
    if (x !== 0 || z !== 0) {
      const l = Math.hypot(x, z);
      this.input.moveX = x / l;
      this.input.moveZ = z / l;
      this.input.moveMag = 1;
    } else if (this.joyPointer === null) {
      this.input.moveX = 0;
      this.input.moveZ = 0;
      this.input.moveMag = 0;
    }
    this.input.sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this._touchSprint;
    this.input.aim = this.input.aim || this.keys.has('KeyZ');
    this.input.crouch = this.crouchToggle || this.keys.has('ControlLeft');
  }

  startMatch(mode = 'solo') {
    if (!this.world) return;
    this.mode = mode;
    this.ui.closeOverlays();
    this.audio.ensure();
    this.matchTime = 0;
    this.state = 'dropping';
    this.renderEnabled = true;
    this.dropTimer = 0;
    this.dropStartTime = performance.now();
    this.dropProgress = 0;
    this.ui.showGame();
    // Reset player
    const spawn = this.world.spawnPoints[0];
    const yaw = Math.atan2(-(-78 - spawn.x), -(-78 - spawn.z));
    this.player.spawn({ ...spawn, yaw });
    this.player.startDrop({ ...spawn, yaw }, 64);
    this.crouchToggle = false;
    this.input = { moveX: 0, moveZ: 0, moveMag: 0, fire: false, aim: false, sprint: false, jump: false, crouch: false };
    this.firedSincePress = false;
    this.player.character.visible = true;
    // Reset bots
    this.bots.reset();
    this.bots.spawn(MATCH.bots, spawn, { x: 0, z: 0 }, 172);
    this.bots.setPlayer(this.player, this.camera);
    this.resetZone();
    this.resetLoot();
    this.clearGrenades();
    this.spectateTarget = null;
    this.ui.hideSpectating();
    this.ui.setDropZone(spawn.name);
    this.ui.toast(`<b>${mode.toUpperCase()}</b> PRACTICE · ${MATCH.bots + 1} OPERATORS`);
    const mc = document.getElementById('mobileControls');
    if (mc) mc.style.opacity = '0';
    this.setMenuCamera(0);
    this.camera.position.set(spawn.x + 8, spawn.y + 72, spawn.z + 20);
    this.camera.lookAt(spawn.x, spawn.y + 10, spawn.z);
  }

  finishDrop() {
    this.player.finishDrop();
    this.state = 'playing';
    this.ui.hideDropZone();
    this.ui.toast('<b>MATCH LIVE</b> · LOOT UP. STAY IN THE ZONE.');
    this.matchTime = 0;
    const mc = document.getElementById('mobileControls');
    if (mc) mc.style.opacity = '1';
    this.bots.alertAround(this.player.position, 32);
    this.audio.zoneAlert();
  }

  setZoneVisible(v) {
    if (this.zoneWall) this.zoneWall.visible = v;
    if (this.zoneRing) this.zoneRing.visible = v;
    if (this.nextRing) this.nextRing.visible = v;
  }

  resetZone() {
    this.setZoneVisible(true);
    this.zone = {
      x: 0, z: 0, radius: MATCH.zoneRadius, phase: 0, state: 'wait',
      timer: ZONE_PHASES[0].wait, shrinkTime: 0, startX: 0, startZ: 0, startRadius: MATCH.zoneRadius,
      next: null, damage: ZONE_PHASES[0].damage, changed: false
    };
    this.pickNextZone();
    this.updateZoneVisuals();
    this.zoneTick = 0;
  }

  pickNextZone() {
    const phase = ZONE_PHASES[this.zone.phase];
    const nextPhase = ZONE_PHASES[Math.min(this.zone.phase, ZONE_PHASES.length - 1)];
    const targetRadius = nextPhase.radius;
    const maxShift = this.zone.radius * 0.34;
    const a = this.rnd() * TAU, d = this.rnd() * maxShift;
    this.zone.next = {
      x: clamp(this.zone.x + Math.cos(a) * d, -70, 70),
      z: clamp(this.zone.z + Math.sin(a) * d, -70, 70),
      radius: targetRadius,
      phase: Math.min(this.zone.phase + 1, ZONE_PHASES.length)
    };
  }

  setupZoneVisuals() {
    const wallMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x4bffe3) } },
      vertexShader: `varying vec3 vW; void main(){vW=(modelMatrix*vec4(position,1.0)).xyz; gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying vec3 vW; uniform float uTime; uniform vec3 uColor; void main(){float h=fract(vW.y*0.07-uTime*0.16); float band=smoothstep(0.0,0.12,h)*smoothstep(0.52,0.2,h); float scan=step(0.96,fract(vW.y*0.16-uTime*0.55)); float a=0.055+band*0.12+scan*0.06; gl_FragColor=vec4(uColor,a);}`
    });
    const geo = new THREE.CylinderGeometry(1, 1, 54, 128, 1, true);
    geo.translate(0, 27, 0);
    this.zoneWall = new THREE.Mesh(geo, wallMat);
    this.zoneWall.renderOrder = 3;
    this.zoneWall.frustumCulled = false;
    this.scene.add(this.zoneWall);
    const ringGeo = new THREE.RingGeometry(0.988, 1.005, 160);
    ringGeo.rotateX(-Math.PI / 2);
    this.zoneRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x4bffe3, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.zoneRing.position.y = 0.55;
    this.zoneRing.renderOrder = 4;
    this.scene.add(this.zoneRing);
    this.nextRing = new THREE.LineLoop(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({ color: 0xff8d5c, dashSize: 4, gapSize: 4, transparent: true, opacity: 0.65 }));
    this.nextRing.frustumCulled = false;
    this.scene.add(this.nextRing);
  }

  updateZoneVisuals() {
    if (!this.zoneWall) return;
    this.zoneWall.position.set(this.zone.x, 0, this.zone.z);
    this.zoneWall.scale.set(this.zone.radius, 1, this.zone.radius);
    this.zoneRing.position.set(this.zone.x, 0.6, this.zone.z);
    this.zoneRing.scale.set(this.zone.radius, 1, this.zone.radius);
    if (this.zone.next) {
      const pts = [];
      const n = 96;
      for (let i = 0; i < n; i++) {
        const a = i / n * TAU;
        pts.push(new THREE.Vector3(this.zone.next.x + Math.cos(a) * this.zone.next.radius, 1.0, this.zone.next.z + Math.sin(a) * this.zone.next.radius));
      }
      this.nextRing.geometry.dispose();
      this.nextRing.geometry = new THREE.BufferGeometry().setFromPoints(pts);
      this.nextRing.computeLineDistances();
      this.nextRing.visible = true;
    } else this.nextRing.visible = false;
  }

  updateZone(dt) {
    const z = this.zone;
    if (!z) return;
    z.timer -= dt;
    if (z.state === 'wait' && z.timer <= 0) {
      z.state = 'shrink';
      z.shrinkTime = ZONE_PHASES[z.phase].shrink;
      z.timer = z.shrinkTime;
      z.startX = z.x; z.startZ = z.z; z.startRadius = z.radius;
      if (!z.next) this.pickNextZone();
      this.ui.toast('<b>ZONE SHRINKING</b> · MOVE TO THE SAFE ZONE');
      this.audio.zoneAlert();
    } else if (z.state === 'shrink') {
      const t = 1 - Math.max(0, z.timer / z.shrinkTime);
      z.x = lerp(z.startX, z.next.x, t);
      z.z = lerp(z.startZ, z.next.z, t);
      z.radius = lerp(z.startRadius, z.next.radius, t);
      if (z.timer <= 0) {
        z.phase += 1;
        if (z.phase >= ZONE_PHASES.length) {
          z.phase = ZONE_PHASES.length - 1;
          z.radius = 8;
          z.timer = 9999;
          z.state = 'final';
          z.next = null;
        } else {
          z.state = 'wait';
          z.timer = ZONE_PHASES[z.phase].wait;
          z.damage = ZONE_PHASES[z.phase].damage;
          this.pickNextZone();
          this.ui.toast(`<b>ZONE ${['I', 'II', 'III', 'IV', 'V'][z.phase]}</b> · NEW SAFE ZONE MARKED`);
        }
      }
    } else if (z.state === 'final') {
      z.radius = Math.max(6, z.radius - dt * 0.35);
    }
    this.updateZoneVisuals();
    if (this.zoneWall) this.zoneWall.material.uniforms.uTime.value = this.time;
    // player zone damage
    if (this.player && this.player.alive && this.state === 'playing') {
      const dist = Math.hypot(this.player.position.x - z.x, this.player.position.z - z.z);
      if (dist > z.radius) {
        this.zoneTick -= dt;
        if (this.zoneTick <= 0) {
          this.zoneTick = 1;
          const dmg = z.damage * 1.35;
          this.player.takeDamage(dmg, null, true);
          this.ui.damagePulse();
          this.audio.hitTaken();
          this.ui.toast(`<b>ZONE DAMAGE</b> -${Math.round(dmg)} HP`);
          if (!this.player.alive) this.onPlayerDeath('THE ZONE');
        }
      } else this.zoneTick = 0;
    }
  }

  createLoot() {
    const positions = this.world.lootSpawns;
    const weights = LOOT_TABLE.reduce((s, l) => s + l.weight, 0);
    positions.forEach((spawn, i) => {
      let roll = this.rnd() * weights, entry = LOOT_TABLE[0];
      for (const l of LOOT_TABLE) { roll -= l.weight; if (roll <= 0) { entry = l; break; } }
      let type = entry.type, key = entry.key;
      const rarityRoll = this.rnd();
      let rarity = spawn.quality;
      if (type !== 'weapon' && type !== 'armor' && type !== 'attachment') rarity = 'common';
      if (rarity === 'epic' && rarityRoll > 0.45) rarity = 'rare';
      const weapon = WEAPONS[key];
      let title, subtitle, icon, color;
      if (type === 'weapon') {
        title = weapon.name;
        subtitle = `${RARITY[rarity].label} ${weapon.class}`;
        icon = WEAPON_ICON[key];
        color = RARITY[rarity].color;
      } else if (type === 'armor') {
        title = 'BALLISTIC PLATE';
        subtitle = 'ARMOR · +50';
        icon = 'ARM';
        color = '#5aa7ff';
      } else if (type === 'medkit') {
        title = 'FIELD MEDKIT';
        subtitle = 'HEALS 45 HP';
        icon = 'MED';
        color = '#65e9c8';
      } else if (type === 'ammo') {
        title = 'AMMO CACHE';
        subtitle = 'RESERVE AMMUNITION';
        icon = 'AMM';
        color = '#ffd06e';
      } else if (type === 'grenade') {
        title = 'FRAG GRENADE';
        subtitle = 'TACTICAL · EXPLOSIVE';
        icon = 'FRG';
        color = '#ff9b5a';
      } else {
        title = 'EXTENDED MAG';
        subtitle = 'WEAPON ATTACHMENT';
        icon = 'ATT';
        color = '#c38bff';
      }
      const group = new THREE.Group();
      group.position.set(spawn.x, spawn.y, spawn.z);
      const col = new THREE.Color(color);
      const beamMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 4.2, 10, 1, true), beamMat);
      beam.position.y = 2.2;
      group.add(beam);
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.78, 20), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.08;
      group.add(ring);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(`rgba(${(col.r * 255) | 0},${(col.g * 255) | 0},${(col.b * 255) | 0},.7)`, 'rgba(0,0,0,0)', 64), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
      glow.position.y = 1.2;
      glow.scale.set(2.2, 2.2, 1);
      group.add(glow);
      let model;
      if (type === 'weapon') {
        model = createWeaponModel(key, col.getHex(), 0.55);
        model.position.y = 1.1;
        model.rotation.z = 0.1;
      } else {
        model = createLootIcon(icon, color);
        model.position.y = 1.18;
        model.scale.set(0.9, 0.9, 1);
      }
      model.userData.baseY = model.position.y;
      group.add(model);
      this.scene.add(group);
      this.loot.push({
        id: i, type, key, rarity, x: spawn.x, y: spawn.y, z: spawn.z, group, model, glow,
        title, subtitle, icon, color, taken: false, phase: this.rnd() * TAU
      });
    });
  }

  resetLoot() {
    for (const l of this.loot) {
      l.taken = false;
      // The player is still airborne at match start. Only reveal loot once
      // it is close enough to matter, which keeps draw calls low.
      l.group.visible = false;
    }
  }

  clearGrenades() {
    for (const g of this.grenades) {
      this.scene.remove(g.mesh);
      g.mesh.geometry.dispose();
      g.mesh.material.dispose();
    }
    this.grenades = [];
  }

  updateLoot(dt, t) {
    const p = this.player;
    let best = null, bestD = 2.7;
    for (const l of this.loot) {
      if (l.taken) { l.group.visible = false; continue; }
      const d = p ? Math.hypot(p.position.x - l.x, p.position.z - l.z) : Infinity;
      const near = d < 82;
      if (l.group.visible !== near) l.group.visible = near;
      if (!near) continue;
      l.model.position.y = l.model.userData.baseY + Math.sin(t * 2 + l.phase) * 0.09;
      l.model.rotation.y += dt * 0.6;
      l.glow.material.opacity = 0.4 + Math.sin(t * 2.4 + l.phase) * 0.16;
      if (!p || !p.alive) continue;
      if (d < bestD) { bestD = d; best = l; }
    }
    // Vehicles
    let vehicle = null;
    if (p && p.alive && !p.vehicle) {
      for (const v of this.vehicles) {
        if (v.occupied) continue;
        const d = Math.hypot(p.position.x - v.x, p.position.z - v.z);
        if (d < bestD && d < 3.2) { bestD = d; best = null; vehicle = v; }
      }
    }
    this.pickup = best;
    if (best) {
      this.ui.showPickup(best);
    } else if (vehicle) {
      this.ui.showPickup({
        id: `v${this.vehicles.indexOf(vehicle)}`, title: vehicle.name,
        subtitle: 'PRESS F / TAP TO DRIVE', icon: 'ATV', color: '#ffa55a'
      });
      this.nearVehicle = vehicle;
    } else {
      this.ui.showPickup(null);
      this.nearVehicle = null;
    }
  }

  interact() {
    if (this.state !== 'playing' || !this.player.alive || this.player.vehicle) return;
    if (this.pickup) {
      this.collectPickup(this.pickup);
    } else if (this.nearVehicle) {
      this.enterVehicle(this.nearVehicle);
    }
  }

  collectPickup(loot) {
    if (loot.taken) return;
    const p = this.player;
    let msg = '';
    let good = false;
    if (loot.type === 'weapon') {
      p.giveWeapon(loot.key, loot.rarity, WEAPONS[loot.key].attachments.slice(0, 2));
      msg = `<b>${loot.title}</b> EQUIPPED · ${RARITY[loot.rarity].label}`;
      good = true;
      p.packUsed = Math.min(p.packMax, p.packUsed + 1);
    } else if (loot.type === 'armor') {
      p.giveArmor(50);
      msg = '<b>BALLISTIC PLATE</b> ARMOR +50';
      good = true;
    } else if (loot.type === 'medkit') {
      p.giveMedkit(1);
      msg = '<b>FIELD MEDKIT</b> +1';
      good = true;
    } else if (loot.type === 'ammo') {
      p.giveAmmo(45);
      msg = '<b>AMMO CACHE</b> RESERVE RESTOCKED';
      good = true;
    } else if (loot.type === 'grenade') {
      p.giveGrenade(1);
      msg = '<b>FRAG GRENADE</b> +1';
      good = true;
    } else if (loot.type === 'attachment') {
      const slot = p.slot;
      if (!slot.attachments.includes('EXT. MAG')) slot.attachments.push('EXT. MAG');
      p.slots[p.currentSlot].reserve += 30;
      msg = '<b>EXTENDED MAG</b> ATTACHED';
      good = true;
    }
    loot.taken = true;
    loot.group.visible = false;
    this.ui.showPickup(null);
    this.ui.toast(msg, good);
    this.ui.renderInventory();
    this.audio.pickup();
    this.effects.muzzle(new THREE.Vector3(loot.x, loot.y + 1.2, loot.z), new THREE.Color(loot.color).getHex(), 1.2);
    p.packUsed = clamp(p.packUsed, 2, p.packMax);
  }

  enterVehicle(v) {
    if (!v) return;
    v.occupied = true;
    this.player.vehicle = v;
    this.player.character.visible = false;
    this.player.aiming = false;
    this.player.position.set(v.x, v.y, v.z);
    this.player.yaw = v.yaw;
    this.audio.ui();
    this.ui.toast(`<b>${v.name}</b> · PRESS F TO EXIT`);
    this.ui.showPickup(null);
  }

  exitVehicle() {
    const v = this.player.vehicle;
    if (!v) return;
    v.occupied = false;
    this.player.vehicle = null;
    this.player.character.visible = true;
    const side = new THREE.Vector3(Math.cos(v.yaw), 0, -Math.sin(v.yaw));
    this.player.position.set(v.x + side.x * 2.2, v.y + 0.1, v.z + side.z * 2.2);
    this.player.position.y = this.world.heightAt(this.player.position.x, this.player.position.z) + 0.05;
    this.player.character.position.copy(this.player.position);
    this.ui.toast('<b>RAPTOR ATV</b> · DISMOUNTED');
  }

  toggleVehicle() {
    if (this.player.vehicle) this.exitVehicle();
    else if (this.nearVehicle) this.enterVehicle(this.nearVehicle);
  }

  updateVehicle(dt, t) {
    const v = this.player.vehicle;
    if (!v) return;
    const throttle = this.input.moveZ;
    const steer = this.input.moveX;
    v.speed = damp(v.speed || 0, throttle * 17, 3.2, dt);
    if (Math.abs(throttle) < 0.03) v.speed = damp(v.speed, 0, 2.5, dt);
    v.yaw -= steer * dt * (0.72 + Math.abs(v.speed) * 0.032) * (v.speed < -0.5 ? -1 : 1);
    const nx = v.x - Math.sin(v.yaw) * v.speed * dt;
    const nz = v.z - Math.cos(v.yaw) * v.speed * dt;
    if (this.world.heightAt(nx, nz) > 0.1) {
      v.x = nx; v.z = nz;
    }
    v.y = damp(v.y, this.world.heightAt(v.x, v.z), 10, dt);
    v.group.position.set(v.x, v.y, v.z);
    v.group.rotation.y = v.yaw;
    for (const w of v.wheels) w.rotation.x += v.speed * dt * 1.5;
    this.player.position.set(v.x, v.y, v.z);
    this.player.yaw = v.yaw;
    this.player.pitch = -0.08;
    const back = new THREE.Vector3(Math.sin(v.yaw), 0, Math.cos(v.yaw));
    const target = new THREE.Vector3(v.x, v.y + 1.6, v.z).addScaledVector(back, 7.4);
    target.y += 2.2;
    const ground = this.world.heightAt(target.x, target.z) + 0.8;
    if (target.y < ground) target.y = ground;
    this.camera.position.lerp(target, 1 - Math.exp(-6 * dt));
    this.camera.lookAt(v.x, v.y + 1.3, v.z);
    this.camera.fov = damp(this.camera.fov, 72, 4, dt);
    this.camera.updateProjectionMatrix();
  }

  reload() {
    if (this.player.reloadTimer <= 0 && this.player.startReload()) {
      this.audio.reload();
      this.ui.toast('<b>RELOADING</b>');
    }
  }

  useMedkit() {
    if (this.player.startHeal()) {
      this.audio.heal();
      this.ui.toast('<b>MEDKIT</b> APPLYING · HOLD POSITION');
    } else if (this.player.medkits <= 0) {
      this.ui.toast('<b>NO MEDKITS</b>');
    } else if (this.player.health >= MATCH.maxHealth) {
      this.ui.toast('<b>HEALTH FULL</b>');
    }
  }

  switchWeapon() {
    this.player.nextWeapon();
    this.audio.ui();
  }

  throwGrenade() {
    if (this.state !== 'playing' || !this.player.alive || this.player.grenades <= 0 || this.player.vehicle) {
      if (this.player.grenades <= 0) this.ui.toast('<b>NO GRENADES</b>');
      return;
    }
    this.player.grenades -= 1;
    const geo = new THREE.SphereGeometry(0.13, 8, 6);
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x39462e, roughness: 0.65, metalness: 0.3 }));
    const origin = this.player.getMuzzleWorld();
    mesh.position.copy(origin);
    this.scene.add(mesh);
    const dir = this.player.getForward();
    this.grenades.push({
      mesh, vel: dir.multiplyScalar(18).add(new THREE.Vector3(0, 4.5, 0)), fuse: 2.4, bounces: 0
    });
    this.audio.throwGrenade();
    this.ui.toast('<b>FRAG OUT</b>');
  }

  updateGrenades(dt) {
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.fuse -= dt;
      g.vel.y -= 16 * dt;
      g.mesh.position.addScaledVector(g.vel, dt);
      const ground = this.world.heightAt(g.mesh.position.x, g.mesh.position.z);
      if (g.mesh.position.y < ground + 0.13) {
        g.mesh.position.y = ground + 0.13;
        g.vel.y = Math.abs(g.vel.y) * 0.34;
        g.vel.x *= 0.7; g.vel.z *= 0.7;
        if (g.vel.length() < 0.4 && g.bounces < 20) g.vel.set(0, 0, 0);
        g.bounces++;
      }
      g.mesh.rotation.x += dt * 8;
      if (g.fuse <= 0) {
        this.explode(g.mesh.position, g);
        this.scene.remove(g.mesh);
        g.mesh.geometry.dispose();
        g.mesh.material.dispose();
        this.grenades.splice(i, 1);
      }
    }
  }

  explode(pos, g) {
    this.effects.explosion(pos, 6.5);
    this.audio.explosion(this.camera.position.distanceTo(pos));
    for (const b of this.bots.bots) {
      if (!b.alive) continue;
      const d = b.position.distanceTo(pos);
      if (d < 7.0) {
        const dmg = 95 * (1 - d / 7.5);
        this.lastShotHeadshot = false;
        this.bots.damage(b, dmg, 'YOU', null, false);
      }
    }
    const pd = this.player.position.distanceTo(pos);
    if (pd < 6.0 && this.player.alive) {
      this.damagePlayer(48 * (1 - pd / 6.5), { name: 'FRAG GRENADE' }, true);
    }
    this.bots.alertAround(pos, 35);
  }

  damagePlayer(amount, source, fromZone = false) {
    if (!this.player.alive || this.state !== 'playing') return;
    const final = this.player.takeDamage(amount, source?.position || null, fromZone);
    this.ui.damagePulse();
    this.audio.hitTaken();
    this.player.lastDamageSource = source?.name || 'UNKNOWN';
    if (!this.player.alive) this.onPlayerDeath(source?.name || 'UNKNOWN');
  }

  onBotKilled(bot, sourceName, sourceBot, remote = false) {
    const weaponName = sourceName === 'YOU' ? (this.player?.weapon?.name || 'VX-7 HAVOC') : (sourceBot?.weapon?.name || 'VX-7 HAVOC');
    this.ui.addKill(sourceName === 'YOU' ? 'YOU' : sourceName, bot.name, weaponName, this.lastShotHeadshot, sourceName === 'YOU');
    if (sourceName === 'YOU' && this.player) {
      this.player.kills += 1;
      this.ui.showElim(bot.name);
      this.ui.hitmarker(true);
      this.audio.eliminated();
      this.ui.toast(`<b>ELIMINATED</b> ${bot.name}`, true);
      this.lastShotHeadshot = false;
    }
    // Drop a small cache where the operator fell.
    const dropped = this.loot.find(l => l.taken && l.type === 'weapon');
    if (dropped) {
      dropped.taken = false;
      dropped.group.visible = true;
      dropped.x = bot.position.x; dropped.z = bot.position.z; dropped.y = this.world.heightAt(bot.position.x, bot.position.z);
      dropped.group.position.set(dropped.x, dropped.y, dropped.z);
      dropped.title = bot.weapon.name;
      dropped.subtitle = 'DROPPED WEAPON · AMMO INCLUDED';
      dropped.icon = WEAPON_ICON[bot.weaponId] || 'AR';
    }
    this.effects.impact(bot.position.clone().add(new THREE.Vector3(0, 1.1, 0)), null, 'flesh');
    if (this.player?.alive && this.bots.getAlive().length === 0 && this.state === 'playing') {
      this.winMatch();
    }
  }

  winMatch() {
    if (this.state === 'result') return;
    this.state = 'result';
    this.audio.victory();
    const xp = 480 + this.player.kills * 90;
    this.ui.showResult({
      win: true, placement: 1, total: MATCH.bots + 1, kills: this.player.kills,
      damage: this.player.damageDealt, time: formatTime(this.matchTime), xp,
      tip: 'Champion of Island 07. Your positioning and trigger discipline paid off.'
    });
  }

  onPlayerDeath(killerName) {
    if (this.state === 'result' || this.state === 'spectating') return;
    const placement = this.bots.aliveCount + 1;
    this.state = 'dying';
    this.player.character.visible = true;
    const xp = 90 + this.player.kills * 75 + Math.max(0, MATCH.bots + 1 - placement) * 12;
    this.deathPlacement = placement;
    this.deathKiller = killerName;
    this.deathXp = Math.round(xp);
    this.ui.showPickup(null);
    this.ui.addKill(killerName, 'YOU', 'ZONE' , false, false);
    this.audio.eliminated();
    const mc = document.getElementById('mobileControls');
    if (mc) mc.style.opacity = '0';
    this.deathTimer = 0;
    setTimeout(() => {
      if (this.state !== 'dying') return;
      this.state = 'result';
      this.ui.showResult({
        win: false, placement, total: MATCH.bots + 1, kills: this.player.kills,
        damage: this.player.damageDealt, time: formatTime(this.matchTime), killer: killerName, xp: this.deathXp,
        tip: 'Drop closer to cover, armor up before rotating, and keep one medkit for the final circle.'
      });
    }, 1200);
  }

  startSpectate() {
    if (!this.player) return;
    this.ui.resultOverlay.classList.add('hidden');
    this.ui.hud.classList.remove('hidden');
    this.ui.hideDropZone();
    this.state = 'spectating';
    this.spectateTarget = this.bots.nearestAlive(this.player.position) || this.bots.getAlive()[0] || null;
    if (this.spectateTarget) this.ui.setSpectating(this.spectateTarget.name);
    else this.ui.setSpectating('NO OPERATORS');
    this.ui.toast('<b>SPECTATOR MODE</b> · TAP SPECTATE TO LEAVE');
    const mc = document.getElementById('mobileControls');
    if (mc) mc.style.opacity = '0';
  }

  leaveSpectate() {
    this.ui.resultOverlay.classList.remove('hidden');
    this.ui.hideSpectating();
    this.state = 'result';
  }

  leaveMatch() {
    this.state = 'menu';
    this.ui.closeOverlays();
    this.ui.hideSpectating();
    this.ui.showLobby();
    this.player.character.visible = false;
    this.bots.reset();
    this.setZoneVisible(false);
    this.ui.countdown(0);
    const mc = document.getElementById('mobileControls');
    if (mc) mc.style.opacity = '1';
    this.setMenuCamera(this.menuTime);
    this.menuNeedsRender = true;
  }

  updateSpectate(dt) {
    if (!this.spectateTarget || !this.spectateTarget.alive) {
      this.spectateTarget = this.bots.nearestAlive(this.player.position) || null;
      if (this.spectateTarget) this.ui.setSpectating(this.spectateTarget.name);
    }
    if (!this.spectateTarget) return;
    const b = this.spectateTarget;
    const back = new THREE.Vector3(Math.sin(b.yaw), 0, Math.cos(b.yaw));
    const target = b.position.clone().add(new THREE.Vector3(0, 1.6, 0)).addScaledVector(back, 5.4);
    target.y += 1.4;
    this.camera.position.lerp(target, 1 - Math.exp(-4 * dt));
    this.camera.lookAt(b.position.x, b.position.y + 1.3, b.position.z);
    this.camera.fov = damp(this.camera.fov, 66, 3, dt);
    this.camera.updateProjectionMatrix();
  }

  updateDrop(dt) {
    // Use wall-clock time so a slow first frame cannot stretch the drop
    // sequence into slow motion.
    const wall = Math.min(3.2, (performance.now() - this.dropStartTime) / 1000);
    const step = Math.max(0, wall - this.dropProgress);
    this.dropProgress = wall;
    this.dropTimer += step;
    const targetY = this.world.heightAt(this.player.position.x, this.player.position.z);
    const done = this.player.updateDrop(step, this.time, targetY);
    const back = new THREE.Vector3(Math.sin(this.player.yaw), 0, Math.cos(this.player.yaw));
    const right = new THREE.Vector3(Math.cos(this.player.yaw), 0, -Math.sin(this.player.yaw));
    const desired = this.player.position.clone().addScaledVector(back, 8.5).addScaledVector(right, 2.2);
    desired.y += 3.1;
    this.camera.position.lerp(desired, 1 - Math.exp(-3.6 * Math.max(dt, step)));
    const look = this.player.position.clone().add(new THREE.Vector3(0, 1.1, 0));
    this.camera.lookAt(look);
    this.camera.fov = damp(this.camera.fov, 68, 4, Math.max(dt, step));
    this.camera.updateProjectionMatrix();
    if (done) this.finishDrop();
  }

  tryFire() {
    if (this.state !== 'playing' || !this.player.alive || this.player.vehicle) return;
    const w = this.player.weapon;
    if (!this.input.fire) { this.firedSincePress = false; return; }
    if (!w.auto && this.firedSincePress) return;
    if (!this.player.canFire()) {
      if (this.player.slot.mag <= 0 && this.player.reloadTimer <= 0) this.player.startReload();
      return;
    }
    const shot = this.player.fire();
    if (!shot) return;
    this.firedSincePress = true;
    this.lastShotHeadshot = false;
    const camDir = new THREE.Vector3();
    this.camera.getWorldDirection(camDir);
    const origin = this.camera.position.clone();
    const muzzle = this.player.getMuzzleWorld();
    const wData = shot.weapon;
    const spread = shot.spread;
    const range = wData.range;
    // World ray once for the central shot; pellets are tested against world center to avoid cost.
    const centerWorld = this.world.raycastWorld(origin, camDir, range);
    const centerWorldDist = centerWorld ? centerWorld.distance : range;
    let anyHit = false, anyKill = false;
    const pelletCount = wData.pellets;
    for (let i = 0; i < pelletCount; i++) {
      const dir = camDir.clone();
      if (spread > 0) {
        const right = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
        const up = new THREE.Vector3().crossVectors(right, dir).normalize();
        const rx = (Math.random() - 0.5) * 2 * spread;
        const ry = (Math.random() - 0.5) * 2 * spread;
        dir.addScaledVector(right, rx).addScaledVector(up, ry).normalize();
      }
      let bestDist = range;
      let hitBot = null, hitHead = false;
      for (const bot of this.bots.bots) {
        if (!bot.alive) continue;
        const bodyC = new THREE.Vector3(bot.position.x, bot.position.y + 1.15, bot.position.z);
        const headC = new THREE.Vector3(bot.position.x, bot.position.y + 1.74, bot.position.z);
        const tb = raySphere(origin, dir, bodyC, 0.62);
        const th = raySphere(origin, dir, headC, 0.27);
        if (tb !== null && tb > 0.5 && tb < bestDist) { bestDist = tb; hitBot = bot; hitHead = false; }
        if (th !== null && th > 0.5 && th < bestDist) { bestDist = th; hitBot = bot; hitHead = true; }
      }
      const worldDist = centerWorldDist < range ? centerWorldDist : range;
      if (hitBot && bestDist < worldDist) {
        const point = origin.clone().addScaledVector(dir, bestDist);
        const falloff = 1 - clamp(bestDist / range, 0, 1) * 0.32;
        const dmg = shot.damage * falloff * (hitHead ? wData.headMult : 1);
        this.lastShotHeadshot = hitHead;
        this.player.damageDealt += dmg;
        const botAliveBefore = hitBot.health;
        this.bots.damage(hitBot, dmg, 'YOU', null, false);
        this.effects.impact(point, null, 'flesh');
        this.effects.damageNumber(point, Math.round(dmg), hitHead);
        this.audio.hit(hitHead);
        this.ui.hitmarker(!hitBot.alive);
        anyHit = true;
        if (!hitBot.alive) anyKill = true;
        this.effects.tracer(muzzle, point, wData.tracer);
      } else {
        const end = centerWorld ? centerWorld.point.clone() : origin.clone().addScaledVector(dir, range);
        this.effects.tracer(muzzle, end, wData.tracer);
        this.effects.impact(end, null, 'world');
      }
    }
    this.effects.muzzle(muzzle, 0xffbd68, wData.id === 'sniper' ? 1.7 : wData.id === 'shotgun' ? 1.4 : 0.9);
    this.audio.shot(wData.id, 0);
    this.player.cameraShake = Math.min(0.85, this.player.cameraShake + (wData.recoil || 0.01) * 7);
    this.bots.alertAround(this.player.position, 34);
    if (this.player.slot.mag === 0) {
      this.ui.toast('<b>MAG EMPTY</b> · PRESS R TO RELOAD');
      this.player.startReload();
    }
  }

  update(dt) {
    this.time += dt;
    if (this.state === 'menu') {
      this.menuTime += dt;
      this.setMenuCamera(this.menuTime);
      if (this.world) {
        this.world.update(dt, this.time);
        this.player.position.set(0, -100, 0);
        this.player.character.visible = false;
      }
      if (this.effects) this.effects.update(dt);
      return;
    }
    if (!this.world) return;
    this.world.update(dt, this.time);
    this.effects.update(dt);
    this.updateGrenades(dt);
    if (this.state === 'dropping') {
      this.updateDrop(dt);
      return;
    }
    if (this.state === 'playing') {
      this.matchTime += dt;
      this.updateInput();
      if (this.player.vehicle) {
        this.updateVehicle(dt, this.time);
      } else {
        this.player.update(dt, this.input, this.camera);
      }
      this.tryFire();
      this.bots.update(dt, this.time, this.player, this.camera, this.zone);
      this.updateZone(dt);
      this.updateLoot(dt, this.time);
      // Auto pickup prompt; interactions via key/tap
      if (this.player.health <= 0 && this.state === 'playing') this.onPlayerDeath(this.player.lastDamageSource || 'UNKNOWN');
      if (this.player.alive && this.bots.getAlive().length === 0) this.winMatch();
      this.ui.update(this.player, this, dt, this.time * 1000);
      // solid surface for shadow camera target
      this.world.sun.target.position.set(this.player.position.x, 0, this.player.position.z);
      this.world.sun.position.set(this.player.position.x - 160, 155, this.player.position.z + 95);
    } else if (this.state === 'dying') {
      this.deathTimer += dt;
      this.player.updateDeath(dt);
      this.bots.update(dt, this.time, this.player, this.camera, this.zone);
      this.player.updateCamera(dt, this.camera);
    } else if (this.state === 'spectating') {
      this.bots.update(dt, this.time, this.player, this.camera, this.zone);
      this.updateZone(dt);
      this.updateLoot(dt, this.time);
      this.updateSpectate(dt);
      this.ui.update(this.player, this, dt, this.time * 1000);
      this.spectateTimer += dt;
    } else if (this.state === 'result') {
      // Keep the world alive behind the result overlay.
      this.bots.update(dt, this.time, this.player, this.camera, this.zone);
      this.updateZone(dt);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    const loop = () => {
      const dt = Math.min(0.05, this.clock.getDelta());
      if (this.state === 'menu' && !this.menuNeedsRender) {
        requestAnimationFrame(loop);
        return;
      }
      this.menuNeedsRender = false;
      this.update(dt);
      this.render();
      requestAnimationFrame(loop);
    };
    loop();
  }
}

function raySphere(origin, dir, center, radius) {
  const oc = origin.clone().sub(center);
  const b = oc.dot(dir);
  const c = oc.lengthSq() - radius * radius;
  const disc = b * b - c;
  if (disc < 0) return null;
  const t = -b - Math.sqrt(disc);
  if (t > 0) return t;
  const t2 = -b + Math.sqrt(disc);
  return t2 > 0 ? t2 : null;
}

import { WEAPONS, RARITY, OPERATORS, OPERATOR_ORDER, MATCH, LOCATIONS } from './data.js';
import { clamp, formatTime, makeCanvas, lerp } from './utils.js';

const $ = id => document.getElementById(id);
const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export class UI {
  constructor() {
    this.el = {
      loader: $('loader'), loadFill: $('loadFill'), loadCopy: $('loadCopy'),
      lobby: $('lobby'), hud: $('hud'), playBtn: $('playBtn'),
      aliveCount: $('aliveCount'), killCount: $('killCount'), zoneTimer: $('zoneTimer'), phaseLabel: $('phaseLabel'),
      compass: $('compass'), compassStrip: $('compassStrip'), compassHeading: $('compassHeading'), zoneCallout: $('zoneCallout'),
      minimap: $('minimap'), fullmap: $('fullmap'), mapOverlay: $('mapOverlay'),
      healthFill: $('healthFill'), healthText: $('healthText'), armorFill: $('armorFill'), armorText: $('armorText'),
      medCount: $('medCount'), nadeCount: $('nadeCount'), packCount: $('packCount'),
      slot1: $('slot1'), slot2: $('slot2'), slot3: $('slot3'),
      slot1Name: $('slot1Name'), slot2Name: $('slot2Name'),
      weaponName: $('weaponName'), weaponClass: $('weaponClass'), weaponIcon: $('weaponIcon'),
      attachRow: $('attachRow'), ammoMag: $('ammoMag'), ammoReserve: $('ammoReserve'),
      reloadBar: $('reloadBar'), reloadFill: $('reloadFill'),
      pickupPrompt: $('pickupPrompt'), pickupName: $('pickupName'), pickupIcon: $('pickupIcon'), pickupRarity: $('pickupRarity'), pickupBtn: $('pickupBtn'),
      crosshair: $('crosshair'), hitmarker: $('hitmarker'), damageFlash: $('damageFlash'),
      scopeOverlay: $('scopeOverlay'), zoneWarning: $('zoneWarning'), zoneDist: $('zoneDist'),
      killfeed: $('killfeed'), toasts: $('toasts'), dropBanner: $('dropBanner'), dropZone: $('dropZone'),
      dropLine: null, spectateBanner: $('spectateBanner'), spectateName: $('spectateName'),
      resultOverlay: $('resultOverlay'), resultKicker: $('resultKicker'), resultTitle: $('resultTitle'),
      resultSub: $('resultSub'), resultPlace: $('resultPlace'), resKills: $('resKills'), resDamage: $('resDamage'), resTime: $('resTime'), resXp: $('resXp'), resultTip: $('resultTip'),
      settingsOverlay: $('settingsOverlay'), inventoryOverlay: $('inventoryOverlay'), helpOverlay: $('helpOverlay'),
      operatorName: $('operatorName'), operatorArt: $('operatorArt'), profileLevel: $('profileLevel'),
      statMatches: $('statMatches'), statWins: $('statWins'), statKills: $('statKills'), statKD: $('statKD'),
      serverLabel: $('serverLabel'), deviceBadge: $('deviceBadge'), lobbyClock: $('lobbyClock'),
      mapCoords: $('mapCoords'), mapAlive: $('mapAlive'), gridRef: $('gridRef'),
      sensSlider: $('sensSlider'), sensVal: $('sensVal'), scaleSlider: $('scaleSlider'), scaleVal: $('scaleVal'),
      qualitySeg: $('qualitySeg'), sideSeg: $('sideSeg'), invertBtn: $('invertBtn'), audioBtn: $('audioBtn'),
      mobileControls: $('mobileControls'), joystick: $('joystick'), joyKnob: $('joyKnob'),
      gunFireBtn: $('fireBtn'), aimBtn: $('aimBtn'), jumpBtn: $('jumpBtn'), crouchBtn: $('crouchBtn'),
      reloadBtn: $('reloadBtn'), switchBtn: $('switchBtn'), sprintBtn: $('sprintBtn'),
      medBtn: $('medBtn'), nadeBtn: $('nadeBtn'), mapBtn: $('mapBtn'), mapBtn2: $('mapBtn2'),
      bagBtn: $('bagBtn'), settingsBtn: $('settingsBtn'), settingsBtn2: $('settingsBtn2'), helpBtn: $('howBtn'),
      closeMap: $('closeMap'), closeInv: $('closeInv'), closeSettings: $('closeSettings'), closeHelp: $('closeHelp'),
      invWeaponList: $('invWeaponList'), invMeds: $('invMeds'), invNades: $('invNades'), invArmor: $('invArmor'), invPack: $('invPack'),
      againBtn: $('againBtn'), spectateBtn: $('spectateBtn'), lobbyBtn: $('lobbyBtn'), spectateExit: $('spectateExit'), spectateLeave: $('spectateLeave'),
      elimConfirm: $('elimConfirm'), elimName: $('elimName'), countdown: $('countdown'), countdownText: $('countdownText'),
      lobbyMute: $('lobbyMute'), audioPanel: $('audioBtn'), playerNameHud: $('playerNameHud'),
      statKillsFooter: $('statKills'), zoneLabel: $('phaseLabel'), weaponSilhouette: $('weaponIcon')
    };
    this.mode = 'solo';
    this.operator = 'raven';
    this.game = null;
    this.settings = { sens: 1, scale: 100, quality: 'med', side: 'right', invert: false, audio: true };
    this.profile = { level: 27, xp: 12240, matches: 0, wins: 0, kills: 0, deaths: 0 };
    this.loadProfile();
    this.compassSpans = [];
    this.compassBearing = 0;
    this.lastHud = 0;
    this.lastMap = 0;
    this.mapBackgroundSmall = null;
    this.mapBackgroundLarge = null;
    this.world = null;
    this.toastTimeout = [];
    this.lastPickupId = null;
    this.zoneOutside = false;
    this.buildCompass();
    this.bindStatic();
    this.applyProfile();
    this.applySettings();
  }

  bind(game) {
    this.game = game;
    this.el.playBtn.addEventListener('click', () => {
      game.audio.ensure();
      game.audio.ui();
      game.startMatch(this.mode);
    });
    this.el.againBtn.addEventListener('click', () => {
      game.audio.ui();
      game.startMatch(this.mode);
    });
    this.el.spectateBtn?.addEventListener('click', () => {
      game.audio.ui();
      game.startSpectate();
    });
    this.el.lobbyBtn.addEventListener('click', () => { game.audio.ui(); game.returnToLobby(); });
    this.el.spectateExit.addEventListener('click', () => game.leaveSpectate());
    this.el.spectateLeave.addEventListener('click', () => game.leaveMatch());
    this.el.modePicker = [...document.querySelectorAll('.mode')];
    this.el.modePicker.forEach(b => b.addEventListener('click', () => {
      this.setMode(b.dataset.mode);
      game.audio.ui();
    }));
    document.querySelectorAll('.op-chip').forEach(b => b.addEventListener('click', () => {
      this.selectOperator(b.dataset.op);
      game.setOperator(b.dataset.op);
      game.audio.ui();
    }));
    this.el.mobileControls.querySelectorAll('button').forEach(b => {
      b.addEventListener('contextmenu', e => e.preventDefault());
    });
    // Mobile actions route through game input
    const press = (el, key, downValue = true, upValue = false) => {
      el.addEventListener('pointerdown', e => {
        e.preventDefault();
        e.stopPropagation();
        el.setPointerCapture?.(e.pointerId);
        game.setTouchInput(key, downValue);
      });
      const up = e => { e.preventDefault(); game.setTouchInput(key, upValue); };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('lostpointercapture', up);
    };
    press(this.el.gunFireBtn, 'fire');
    press(this.el.aimBtn, 'aim');
    press(this.el.sprintBtn, 'sprint');
    this.el.jumpBtn.addEventListener('pointerdown', e => { e.preventDefault(); game.triggerJump(); });
    this.el.crouchBtn.addEventListener('pointerdown', e => { e.preventDefault(); game.toggleCrouch(); });
    this.el.reloadBtn.addEventListener('pointerdown', e => { e.preventDefault(); game.reload(); });
    this.el.switchBtn.addEventListener('pointerdown', e => { e.preventDefault(); game.switchWeapon(); });
    this.el.medBtn.addEventListener('click', () => game.useMedkit());
    this.el.nadeBtn.addEventListener('click', () => game.throwGrenade());
    this.el.mapBtn.addEventListener('click', () => this.toggleMap());
    this.el.mapBtn2.addEventListener('click', () => this.toggleMap());
    this.el.bagBtn.addEventListener('click', () => this.toggleInventory());
    this.el.settingsBtn.addEventListener('click', () => this.openSettings());
    this.el.settingsBtn2.addEventListener('click', () => this.openSettings());
    this.el.helpBtn.addEventListener('click', () => this.openHelp());
    this.el.closeMap.addEventListener('click', () => this.closeOverlays());
    this.el.closeInv.addEventListener('click', () => this.closeOverlays());
    this.el.closeSettings.addEventListener('click', () => this.closeOverlays());
    this.el.closeHelp.addEventListener('click', () => this.closeOverlays());
    [this.el.mapOverlay, this.el.inventoryOverlay, this.el.settingsOverlay, this.el.helpOverlay].forEach(o => {
      o.addEventListener('pointerdown', e => { if (e.target === o) this.closeOverlays(); });
    });
    this.el.pickupBtn.addEventListener('click', () => game.interact());
    this.el.pickupPrompt.addEventListener('click', () => game.interact());

    // Settings
    this.el.sensSlider.addEventListener('input', () => {
      this.settings.sens = +this.el.sensSlider.value;
      this.el.sensVal.textContent = this.settings.sens.toFixed(1);
      this.saveSettings();
    });
    this.el.scaleSlider.addEventListener('input', () => {
      this.settings.scale = +this.el.scaleSlider.value;
      this.el.scaleVal.textContent = `${this.settings.scale}%`;
      this.applyButtonScale();
      this.saveSettings();
    });
    this.el.qualitySeg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      this.settings.quality = b.dataset.q;
      this.el.qualitySeg.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
      this.saveSettings();
      game.applyQuality();
      game.audio.ui();
    }));
    this.el.sideSeg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      this.settings.side = b.dataset.side;
      this.el.sideSeg.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
      this.applySide();
      this.saveSettings();
      game.audio.ui();
    }));
    this.el.invertBtn.addEventListener('click', () => {
      this.settings.invert = !this.settings.invert;
      this.el.invertBtn.classList.toggle('on', this.settings.invert);
      this.el.invertBtn.setAttribute('aria-checked', String(this.settings.invert));
      this.saveSettings();
    });
    this.el.audioBtn.addEventListener('click', () => this.toggleAudio());
    this.el.lobbyMute.addEventListener('click', () => this.toggleAudio());
    this.el.zoneLabel = $('phaseLabel');
    window.addEventListener('resize', () => this.buildCompass());
  }

  bindStatic() {
    const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    document.body.classList.toggle('is-touch', isTouch);
    this.el.deviceBadge.textContent = isTouch ? 'TOUCH CONTROLS' : 'KEYBOARD + MOUSE';
    const now = new Date();
    this.el.lobbyClock.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    this.applyButtonScale();
    this.applySide();
  }

  loadProfile() {
    try {
      const saved = JSON.parse(localStorage.getItem('bw-profile') || 'null');
      if (saved) this.profile = { ...this.profile, ...saved };
    } catch {}
    try {
      const s = JSON.parse(localStorage.getItem('bw-settings') || 'null');
      if (s) this.settings = { ...this.settings, ...s };
    } catch {}
  }

  saveProfile() {
    this.profile.deaths = Math.max(0, this.profile.matches - this.profile.wins);
    try { localStorage.setItem('bw-profile', JSON.stringify(this.profile)); } catch {}
  }

  saveSettings() {
    try { localStorage.setItem('bw-settings', JSON.stringify(this.settings)); } catch {}
  }

  applyProfile() {
    const p = this.profile;
    this.el.statMatches.textContent = p.matches;
    this.el.statWins.textContent = p.wins;
    this.el.statKills.textContent = p.kills;
    const kd = p.deaths > 0 ? (p.kills / p.deaths) : p.kills;
    this.el.statKD.textContent = kd.toFixed(1);
    this.el.profileLevel.textContent = p.level;
    this.el.operatorName.textContent = OPERATORS[this.operator].name;
  }

  applySettings() {
    this.el.sensSlider.value = this.settings.sens;
    this.el.sensVal.textContent = (+this.settings.sens).toFixed(1);
    this.el.scaleSlider.value = this.settings.scale;
    this.el.scaleVal.textContent = `${this.settings.scale}%`;
    this.el.qualitySeg.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.q === this.settings.quality));
    this.el.sideSeg.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.side === this.settings.side));
    this.el.invertBtn.classList.toggle('on', this.settings.invert);
    this.el.audioBtn.classList.toggle('on', this.settings.audio);
    this.el.lobbyMute?.classList.toggle('on', this.settings.audio);
    this.applyButtonScale();
    this.applySide();
  }

  applyButtonScale() {
    document.documentElement.style.setProperty('--ui-scale', String(this.settings.scale / 100));
    const tc = $('mobileControls');
    if (tc) tc.style.setProperty('--ui-scale', String(this.settings.scale / 100));
  }

  applySide() {
    document.body.classList.toggle('lefty', this.settings.side === 'left');
    this.el.sideSeg.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.side === this.settings.side));
  }

  toggleAudio() {
    this.settings.audio = !this.settings.audio;
    this.el.audioBtn.classList.toggle('on', this.settings.audio);
    this.el.lobbyMute?.classList.toggle('on', this.settings.audio);
    this.game?.audio.setMuted(!this.settings.audio);
    this.saveSettings();
  }

  setMode(mode) {
    this.mode = mode;
    this.el.modePicker.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    const counts = { solo: '1 vs 29', duo: '2 vs 28', squad: '4 vs 26' };
    const sub = this.el.modePicker.find(b => b.dataset.mode === mode)?.querySelector('span');
    if (sub) sub.textContent = counts[mode];
  }

  selectOperator(id) {
    this.operator = id;
    document.querySelectorAll('.op-chip').forEach(b => b.classList.toggle('active', b.dataset.op === id));
    const op = OPERATORS[id];
    this.el.operatorName.textContent = op.name;
    this.el.operatorArt.style.setProperty('--accent', `#${op.accent.toString(16).padStart(6, '0')}`);
    const svg = this.el.operatorArt.querySelector('svg');
    if (svg) {
      svg.querySelectorAll('[fill="#ff6a00"], [stop-color="#ff6a00"]').forEach(n => {
        n.setAttribute(n.tagName === 'stop' ? 'stop-color' : 'fill', `#${op.accent.toString(16).padStart(6, '0')}`);
      });
      svg.querySelectorAll('[fill="#ff7a15"]').forEach(n => n.setAttribute('fill', `#${op.accent.toString(16).padStart(6, '0')}`));
    }
    this.el.operatorArt.style.background = `radial-gradient(ellipse at 50% 35%,rgba(${(op.accent >> 16) & 255},${(op.accent >> 8) & 255},${op.accent & 255},.16),transparent 62%), repeating-linear-gradient(0deg,transparent 0 23px,rgba(255,255,255,.035) 23px 24px), linear-gradient(180deg,rgba(20,42,47,.3),rgba(2,7,9,.9))`;
  }

  setLoading(pct, copy) {
    this.el.loadFill.style.width = `${pct}%`;
    if (copy) this.el.loadCopy.textContent = copy;
  }

  hideLoader() {
    this.el.loader.classList.add('out');
    setTimeout(() => this.el.loader.classList.add('hidden'), 600);
    this.el.lobby.classList.remove('hidden');
  }

  showLobby() {
    this.el.lobby.classList.remove('hidden', 'out');
    this.el.hud.classList.add('hidden');
    this.el.resultOverlay.classList.add('hidden');
  }

  showGame() {
    this.el.lobby.classList.add('out');
    setTimeout(() => this.el.lobby.classList.add('hidden'), 460);
    this.el.hud.classList.remove('hidden');
    this.el.resultOverlay.classList.add('hidden');
    this.el.spectateBanner.classList.add('hidden');
    this.el.dropBanner.classList.remove('out');
  }

  setDropZone(name) {
    this.el.dropZone.textContent = name;
    this.el.dropBanner.classList.remove('hidden', 'out');
  }

  hideDropZone() {
    this.el.dropBanner.classList.add('out');
    setTimeout(() => this.el.dropBanner.classList.add('hidden'), 650);
  }

  buildCompass() {
    if (!this.el.compass) return;
    this.el.compassStrip.innerHTML = '';
    this.compassSpans = [];
    for (let deg = -360; deg <= 720; deg += 15) {
      const s = document.createElement('span');
      const norm = ((deg % 360) + 360) % 360;
      const cardinalIdx = Math.round(norm / 45) % 8;
      if (norm % 90 === 0) {
        s.textContent = CARDINALS[cardinalIdx];
        s.className = 'major';
      } else if (norm % 45 === 0) {
        s.textContent = CARDINALS[cardinalIdx];
      } else {
        s.textContent = '·';
        s.className = 'tick';
      }
      s.dataset.deg = deg;
      this.el.compassStrip.appendChild(s);
      this.compassSpans.push(s);
    }
    // Ensure labels read left-to-right correctly at boundaries.
    this.el.compassStrip.querySelectorAll('span').forEach(sp => {
      const deg = +sp.dataset.deg;
      const norm = ((deg % 360) + 360) % 360;
      if (sp.className === 'major') sp.textContent = CARDINALS[Math.round(norm / 45) % 8];
    });
  }

  updateCompass(bearing) {
    this.compassBearing = bearing;
    const step = Math.max(25, this.el.compass.clientWidth / 11.5);
    this.compassSpans.forEach(s => { s.style.width = `${step}px`; });
    const x = (bearing + 360) * (step / 15);
    this.el.compassStrip.style.transform = `translateX(${this.el.compass.clientWidth / 2 - x}px)`;
    const norm = ((bearing % 360) + 360) % 360;
    const idx = Math.round(norm / 45) % 8;
    this.el.compassHeading.textContent = `${CARDINALS[idx]} ${String(Math.round(norm)).padStart(3, '0')}`;
  }

  setWorld(world) {
    this.world = world;
    this.buildMapBackground(300);
    this.buildMapBackground(760);
  }

  buildMapBackground(size) {
    if (!this.world) return;
    const c = makeCanvas(size, size);
    const ctx = c.getContext('2d');
    const scale = size / 440;
    const tx = x => size / 2 + x * scale;
    const tz = z => size / 2 + z * scale;
    // Sea
    const sea = ctx.createRadialGradient(size / 2, size / 2, 10, size / 2, size / 2, size * 0.65);
    sea.addColorStop(0, '#164a55');
    sea.addColorStop(1, '#0b2831');
    ctx.fillStyle = sea;
    ctx.fillRect(0, 0, size, size);
    // island shape
    const shore = [];
    for (let i = 0; i < 90; i++) {
      const a = (i / 90) * Math.PI * 2;
      let lo = 90, hi = 235;
      for (let k = 0; k < 20; k++) {
        const mid = (lo + hi) / 2;
        const h = this.world.heightAt(Math.cos(a) * mid, Math.sin(a) * mid);
        if (h > 0.1) lo = mid; else hi = mid;
      }
      shore.push([Math.cos(a) * lo, Math.sin(a) * lo]);
    }
    ctx.beginPath();
    shore.forEach(([x, z], i) => i ? ctx.lineTo(tx(x), tz(z)) : ctx.moveTo(tx(x), tz(z)));
    ctx.closePath();
    const islandGrad = ctx.createRadialGradient(size * 0.45, size * 0.44, size * 0.1, size / 2, size / 2, size * 0.5);
    islandGrad.addColorStop(0, '#5a704d');
    islandGrad.addColorStop(0.7, '#4d6847');
    islandGrad.addColorStop(1, '#9b8a5e');
    ctx.fillStyle = islandGrad;
    ctx.fill();
    ctx.strokeStyle = 'rgba(230,218,170,.5)';
    ctx.lineWidth = Math.max(1, size * 0.003);
    ctx.stroke();
    // water inland lakes based on known locations
    for (const name of ['lake']) {
      const l = LOCATIONS.find(x => x.id === name);
      if (!l) continue;
      ctx.beginPath();
      ctx.ellipse(tx(l.x), tz(l.z), l.r * 0.85 * scale, l.r * 0.65 * scale, 0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#2b7381';
      ctx.fill();
      ctx.strokeStyle = 'rgba(120,215,220,.35)';
      ctx.stroke();
    }
    // roads
    const roads = [
      [[-130, -78], [-78, -78], [-30, -78], [40, -84], [103, -90]],
      [[-78, -120], [-78, -78], [-78, -20], [-78, 30], [-100, 48]],
      [[-78, -60], [-20, -30], [40, 10], [82, 70]],
      [[82, 70], [45, 100], [0, 132], [-27, 143]],
      [[126, 8], [100, 40], [82, 70]],
      [[-78, -78], [-40, -105], [-4, -132]],
      [[126, 8], [150, -40], [130, -80], [105, -90]]
    ];
    ctx.strokeStyle = 'rgba(41,50,50,.65)';
    ctx.lineWidth = Math.max(2, size * 0.008);
    ctx.lineCap = 'round';
    roads.forEach(path => {
      ctx.beginPath();
      path.forEach(([x, z], i) => i ? ctx.lineTo(tx(x), tz(z)) : ctx.moveTo(tx(x), tz(z)));
      ctx.stroke();
    });
    // POIs
    for (const l of LOCATIONS) {
      const x = tx(l.x), z = tz(l.z);
      ctx.save();
      ctx.translate(x, z);
      if (l.type === 'urban') {
        for (let i = 0; i < 6; i++) {
          ctx.fillStyle = i % 2 ? 'rgba(210,215,205,.42)' : 'rgba(67,78,79,.72)';
          ctx.fillRect(-10 + (i % 3) * 7, -9 + Math.floor(i / 3) * 8, 5.5, 6);
        }
      } else if (l.type === 'airport') {
        ctx.strokeStyle = 'rgba(220,224,216,.7)';
        ctx.lineWidth = Math.max(1, size * 0.005);
        ctx.beginPath(); ctx.moveTo(-13, 5); ctx.lineTo(14, -5); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.35)';
        ctx.beginPath(); ctx.moveTo(-13, 9); ctx.lineTo(14, -1); ctx.stroke();
      } else if (l.type === 'military') {
        ctx.strokeStyle = 'rgba(214,205,145,.65)';
        ctx.lineWidth = Math.max(1, size * 0.005);
        ctx.strokeRect(-9, -7, 18, 14);
      } else if (l.type === 'harbor') {
        ctx.fillStyle = 'rgba(180,130,85,.8)';
        for (let i = 0; i < 3; i++) ctx.fillRect(-10 + i * 8, -2, 3, 12);
      } else if (l.type === 'village') {
        ctx.fillStyle = 'rgba(224,171,108,.7)';
        for (let i = 0; i < 5; i++) ctx.fillRect(-9 + i * 4, -5 + (i % 2) * 6, 4, 4);
      } else if (l.type === 'industrial') {
        ctx.fillStyle = 'rgba(207,158,97,.7)';
        ctx.fillRect(-8, -6, 16, 12);
      } else if (l.type === 'mountain') {
        ctx.fillStyle = 'rgba(148,152,142,.8)';
        ctx.beginPath(); ctx.moveTo(-12, 7); ctx.lineTo(0, -10); ctx.lineTo(12, 7); ctx.closePath(); ctx.fill();
      } else if (l.type === 'bunker') {
        ctx.strokeStyle = 'rgba(200,194,150,.7)';
        ctx.lineWidth = Math.max(1, size * 0.004);
        ctx.beginPath(); ctx.arc(0, 0, 7, 0.25, Math.PI * 1.8); ctx.stroke();
      }
      ctx.restore();
      if (size > 500) {
        ctx.font = `600 ${Math.max(10, size * 0.017)}px "Arial Narrow", Arial`;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(238,246,244,.9)';
        ctx.shadowColor = 'rgba(0,0,0,.9)';
        ctx.shadowBlur = 4;
        ctx.fillText(l.name, x, z + 24 * scale);
        ctx.shadowBlur = 0;
      }
    }
    // grid
    if (size > 500) {
      ctx.strokeStyle = 'rgba(255,255,255,.07)';
      ctx.lineWidth = 1;
      for (let i = 1; i < 8; i++) {
        const p = (size / 8) * i;
        ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,255,255,.24)';
      ctx.font = `600 ${size * 0.014}px monospace`;
      for (let i = 0; i < 8; i++) {
        const p = (size / 8) * i + size / 16;
        ctx.fillText(String.fromCharCode(65 + i), p, size - 6);
        ctx.fillText(String(i + 1), 6, p + 4);
      }
    }
    if (size > 500) this.mapBackgroundLarge = c;
    else this.mapBackgroundSmall = c;
  }

  drawMap(canvas, size, full) {
    if (!this.world || !this.game) return;
    const ctx = canvas.getContext('2d');
    const bg = full ? this.mapBackgroundLarge : this.mapBackgroundSmall;
    if (bg) ctx.drawImage(bg, 0, 0, size, size);
    else { ctx.fillStyle = '#0b2831'; ctx.fillRect(0, 0, size, size); }
    const scale = size / 440;
    const tx = x => size / 2 + x * scale;
    const tz = z => size / 2 + z * scale;
    const zone = this.game.zone;
    const player = this.game.player;
    if (!zone) return;
    // next zone
    if (zone.next) {
      ctx.beginPath();
      ctx.arc(tx(zone.next.x), tz(zone.next.z), zone.next.radius * scale, 0, Math.PI * 2);
      ctx.setLineDash([4 * scale, 4 * scale]);
      ctx.strokeStyle = 'rgba(255,123,77,.8)';
      ctx.lineWidth = Math.max(1.4, size * 0.004);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    // current zone
    ctx.beginPath();
    ctx.arc(tx(zone.x), tz(zone.z), zone.radius * scale, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(63,235,217,.95)';
    ctx.lineWidth = Math.max(1.5, size * 0.0045);
    ctx.shadowColor = 'rgba(63,235,217,.7)';
    ctx.shadowBlur = 5;
    ctx.stroke();
    ctx.shadowBlur = 0;
    // loot nearby
    if (this.game.loot) {
      ctx.fillStyle = 'rgba(255,206,98,.8)';
      for (const l of this.game.loot) {
        if (l.taken) continue;
        if (!player) continue;
        if (!full && Math.hypot(l.x - player.position.x, l.z - player.position.z) > 55) continue;
        ctx.fillRect(tx(l.x) - 1.2, tz(l.z) - 1.2, 2.4, 2.4);
      }
    }
    // bots
    if (this.game.bots) {
      for (const b of this.game.bots.bots) {
        if (!b.alive) continue;
        const d = player ? Math.hypot(b.position.x - player.position.x, b.position.z - player.position.z) : 999;
        if (!full && d > 70) continue;
        ctx.beginPath();
        ctx.arc(tx(b.position.x), tz(b.position.z), Math.max(1.7, size * 0.005), 0, Math.PI * 2);
        ctx.fillStyle = d < 25 ? '#ff553c' : 'rgba(255,95,60,.62)';
        ctx.fill();
      }
    }
    // player
    if (player && player.alive) {
      ctx.save();
      ctx.translate(tx(player.position.x), tz(player.position.z));
      ctx.rotate(-player.yaw);
      ctx.beginPath();
      ctx.moveTo(0, -6.2);
      ctx.lineTo(4.4, 4.6);
      ctx.lineTo(0, 2.8);
      ctx.lineTo(-4.4, 4.6);
      ctx.closePath();
      ctx.fillStyle = '#ff7a1a';
      ctx.shadowColor = 'rgba(255,110,20,.9)';
      ctx.shadowBlur = 7;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,.8)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
    // loot only on full map and labels for zone
    if (full) {
      ctx.font = '600 13px "Arial Narrow", Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(73,241,222,.95)';
      ctx.fillText(`SAFE ZONE · ${zone.radius.toFixed(0)}M`, tx(zone.x), tz(zone.z) + 5);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'rgba(255,174,120,.9)';
      ctx.font = '600 11px Arial';
      ctx.fillText('N', size - 18, 24);
      ctx.beginPath(); ctx.moveTo(size - 22, 32); ctx.lineTo(size - 18, 42); ctx.lineTo(size - 14, 32); ctx.strokeStyle = 'rgba(255,174,120,.9)'; ctx.stroke();
    }
    if (full && this.world) {
      for (const l of LOCATIONS) {
        const x = tx(l.x), z = tz(l.z);
        ctx.beginPath(); ctx.arc(x, z, 3.4, 0, Math.PI * 2);
        ctx.fillStyle = l.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.stroke();
      }
    }
  }

  update(player, game, dt, now) {
    if (!game || game.state === 'menu') return;
    const botsAlive = game.bots ? game.bots.aliveCount : 0;
    const alive = botsAlive + (player.alive ? 1 : 0);
    if (now - this.lastHud > 70) {
      this.lastHud = now;
      this.el.aliveCount.textContent = alive;
      this.el.killCount.textContent = player.kills;
      this.el.zoneTimer.textContent = formatTime(Math.max(0, game.zone.timer));
      this.el.phaseLabel.textContent = `ZONE ${['I', 'II', 'III', 'IV', 'V', 'FINAL'][Math.min(5, game.zone.phase)]}`;
      this.el.phaseLabel.parentElement.classList.toggle('low', game.zone.timer < 10 && game.zone.state === 'wait');
      this.el.healthFill.style.width = `${clamp(player.health, 0, 100)}%`;
      this.el.healthText.textContent = Math.ceil(player.health);
      this.el.healthFill.parentElement.classList.toggle('low', player.health < 33);
      this.el.armorFill.style.width = `${clamp((player.armor / player.maxArmor) * 100, 0, 100)}%`;
      this.el.armorText.textContent = Math.ceil(player.armor);
      this.el.medCount.textContent = player.medkits;
      this.el.nadeCount.textContent = player.grenades;
      this.el.packCount.textContent = `${player.packUsed}/${player.packMax}`;
      this.el.playerNameHud.textContent = OPERATORS[player.operatorId]?.name || 'OPERATOR';
      this.updateWeaponPanel(player);
      const bearing = ((-player.yaw * 180 / Math.PI) % 360 + 360) % 360;
      this.updateCompass(bearing);
      const camBearing = ((-player.yaw * 180 / Math.PI) % 360 + 360) % 360;
      const zoneDist = Math.hypot(player.position.x - game.zone.x, player.position.z - game.zone.z);
      const outside = zoneDist > game.zone.radius;
      this.el.zoneWarning.classList.toggle('hidden', !outside);
      if (outside) {
        this.el.zoneDist.textContent = `${Math.round(zoneDist - game.zone.radius)}M`;
        this.el.zoneCallout.textContent = 'MOVE TO SAFE ZONE';
        this.el.zoneCallout.classList.add('danger');
      } else {
        this.el.zoneCallout.textContent = `SAFE ZONE ${Math.max(0, Math.round(game.zone.radius - zoneDist))}M`;
        this.el.zoneCallout.classList.remove('danger');
      }
      this.el.crosshair.classList.toggle('aiming', player.aiming);
      this.el.scopeOverlay.classList.toggle('hidden', !(player.aiming && player.weapon?.id === 'sniper'));
      this.el.crosshair.classList.toggle('hidden', player.aiming && player.weapon?.id === 'sniper');
      if (player.reloadTimer > 0) {
        this.el.reloadBar.classList.remove('hidden');
        this.el.reloadFill.style.width = `${clamp((1 - player.reloadTimer / player.reloadTotal) * 100, 0, 100)}%`;
        this.el.reloadBar.querySelector('span').textContent = 'RELOADING';
      } else if (player.healTimer > 0) {
        this.el.reloadBar.classList.remove('hidden');
        this.el.reloadFill.style.width = `${clamp((1 - player.healTimer / player.healTotal) * 100, 0, 100)}%`;
        this.el.reloadBar.querySelector('span').textContent = 'APPLYING MEDKIT';
      } else {
        this.el.reloadBar.classList.add('hidden');
      }
      const grid = this.gridName(player.position.x, player.position.z);
      this.el.gridRef.textContent = grid;
      this.el.mapCoords.textContent = `GRID ${grid} · ALT ${Math.round(player.position.y)}M`;
      this.el.mapAlive.textContent = `${alive} ALIVE`;
    }
    if (now - this.lastMap > 120) {
      this.lastMap = now;
      this.drawMap(this.el.minimap, 300, false);
      if (!this.el.mapOverlay.classList.contains('hidden')) this.drawMap(this.el.fullmap, 760, true);
    }
  }

  gridName(x, z) {
    const col = clamp(Math.floor((x + 210) / 52.5), 0, 7);
    const row = clamp(Math.floor((z + 210) / 52.5), 0, 7);
    return `${String.fromCharCode(65 + col)}${row + 1}`;
  }

  updateWeaponPanel(player) {
    const slot = player.slot;
    const w = player.weapon;
    if (!slot || !w) return;
    this.el.weaponName.textContent = w.name;
    this.el.weaponClass.textContent = w.class;
    this.el.weaponIcon.className = `weapon-silhouette ${w.iconClass}`;
    this.el.ammoMag.textContent = slot.id === 'melee' ? '—' : slot.mag;
    this.el.ammoReserve.textContent = slot.id === 'melee' ? '—' : slot.reserve;
    this.el.attachRow.innerHTML = (slot.attachments || []).map(a => `<em>${a}</em>`).join('');
    const names = player.slots.map(s => s && s.id !== 'melee' ? WEAPONS[s.id].name.split(' ')[0] : '—');
    this.el.slot1Name.textContent = names[0];
    this.el.slot2Name.textContent = names[1];
    this.el.slot1.classList.toggle('active', player.currentSlot === 0);
    this.el.slot2.classList.toggle('active', player.currentSlot === 1);
    this.el.slot3.classList.toggle('active', player.currentSlot === 2);
  }

  showPickup(pickup) {
    if (!pickup) {
      if (this.lastPickupId !== null) {
        this.el.pickupPrompt.classList.add('hidden');
        this.lastPickupId = null;
      }
      return;
    }
    if (this.lastPickupId === pickup.id) return;
    this.lastPickupId = pickup.id;
    this.el.pickupPrompt.classList.remove('hidden');
    this.el.pickupName.textContent = pickup.title;
    this.el.pickupIcon.textContent = pickup.icon;
    this.el.pickupRarity.textContent = pickup.subtitle;
    this.el.pickupRarity.style.color = pickup.color || '#f39a5e';
    this.el.pickupIcon.style.color = pickup.color || '#ffae74';
    this.el.pickupBtn.textContent = matchMedia('(pointer: coarse)').matches ? 'TAP' : 'E';
  }

  addKill(killer, victim, weapon = 'VX-7 HAVOC', headshot = false, you = false) {
    const item = document.createElement('div');
    item.className = 'kill-item';
    item.innerHTML = `<b>${killer}</b><em>${headshot ? 'HEADSHOT' : weapon}</em><b>${victim}</b>`;
    if (you) item.style.borderRightColor = '#35e5cf';
    this.el.killfeed.appendChild(item);
    while (this.el.killfeed.children.length > 5) this.el.killfeed.firstChild.remove();
    setTimeout(() => { item.classList.add('out'); setTimeout(() => item.remove(), 600); }, 4200);
  }

  toast(html, good = false) {
    const el = document.createElement('div');
    el.className = `toast${good ? ' good' : ''}`;
    el.innerHTML = html;
    this.el.toasts.appendChild(el);
    while (this.el.toasts.children.length > 3) this.el.toasts.firstChild.remove();
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .4s'; setTimeout(() => el.remove(), 450); }, 2100);
  }

  hitmarker(kill = false) {
    this.el.hitmarker.classList.add('show');
    this.el.hitmarker.classList.toggle('kill', kill);
    clearTimeout(this._hitTimer);
    this._hitTimer = setTimeout(() => this.el.hitmarker.classList.remove('show'), 120);
  }

  damagePulse() {
    this.el.damageFlash.classList.add('show');
    clearTimeout(this._dmgTimer);
    this._dmgTimer = setTimeout(() => this.el.damageFlash.classList.remove('show'), 130);
  }

  showElim(name) {
    this.el.elimName.textContent = name;
    this.el.elimConfirm.classList.remove('hidden');
    clearTimeout(this._elimTimer);
    this._elimTimer = setTimeout(() => this.el.elimConfirm.classList.add('hidden'), 1500);
  }

  setSpectating(name) {
    this.el.spectateName.textContent = name;
    this.el.spectateBanner.classList.remove('hidden');
  }

  hideSpectating() {
    this.el.spectateBanner.classList.add('hidden');
  }

  showResult(data) {
    this.el.resultOverlay.classList.remove('hidden');
    this.el.resultKicker.textContent = data.win ? 'VICTORY · LAST OPERATOR STANDING' : 'MATCH COMPLETE · ELIMINATED';
    this.el.resultKicker.classList.toggle('win', data.win);
    this.el.resultTitle.textContent = data.win ? 'WIN' : `#${data.placement}`;
    this.el.resultTitle.classList.toggle('win', data.win);
    this.el.resultSub.textContent = data.win ? `SURVIVED ${data.time} · ${data.kills} ELIMINATIONS` : `SURVIVED ${data.time} · ELIMINATED BY ${data.killer || 'THE ZONE'}`;
    this.el.resultPlace.textContent = `#${data.placement} / ${data.total}`;
    this.el.resKills.textContent = data.kills;
    this.el.resDamage.textContent = Math.round(data.damage);
    this.el.resTime.textContent = data.time;
    this.el.resXp.textContent = `+${data.xp}`;
    this.el.resultTip.textContent = data.tip;
    this.el.spectateBtn.classList.toggle('hidden', data.win);
    this.updateProfile(data);
  }

  updateProfile(data) {
    this.profile.matches += 1;
    if (data.win) this.profile.wins += 1;
    this.profile.kills += data.kills;
    this.profile.xp += data.xp;
    while (this.profile.xp >= this.profile.level * 500) {
      this.profile.xp -= this.profile.level * 500;
      this.profile.level += 1;
    }
    this.saveProfile();
    this.applyProfile();
  }

  openSettings() {
    this.closeOverlays();
    this.el.settingsOverlay.classList.remove('hidden');
  }

  openHelp() {
    this.closeOverlays();
    this.el.helpOverlay.classList.remove('hidden');
  }

  toggleMap() {
    const visible = !this.el.mapOverlay.classList.contains('hidden');
    this.closeOverlays();
    if (!visible) {
      this.el.mapOverlay.classList.remove('hidden');
      this.drawMap(this.el.fullmap, 760, true);
    }
  }

  toggleInventory() {
    const visible = !this.el.inventoryOverlay.classList.contains('hidden');
    this.closeOverlays();
    if (!visible) {
      this.el.inventoryOverlay.classList.remove('hidden');
      this.renderInventory();
    }
  }

  renderInventory() {
    const p = this.game?.player;
    if (!p) return;
    this.el.invWeaponList.innerHTML = p.slots.map((s, i) => {
      if (!s || s.id === 'melee') return `<div class="inv-weapon"><span class="inv-num">${i + 1}</span><div class="inv-meta"><b>RANGER BLADE</b><span>MELEE · SILENT</span></div><span class="inv-ammo">—</span></div>`;
      const w = WEAPONS[s.id];
      return `<div class="inv-weapon ${p.currentSlot === i ? 'active' : ''}"><span class="inv-num">${i + 1}</span><div class="inv-meta"><b>${w.name}</b><span>${w.class} · ${RARITY[s.rarity]?.label || 'COMMON'}</span></div><span class="inv-ammo">${s.mag}/${s.reserve}</span></div>`;
    }).join('');
    this.el.invMeds.textContent = p.medkits;
    this.el.invNades.textContent = p.grenades;
    this.el.invArmor.textContent = Math.ceil(p.armor);
    this.el.invPack.textContent = `FIELD ${p.packUsed}/${p.packMax}`;
  }

  closeOverlays() {
    this.el.mapOverlay.classList.add('hidden');
    this.el.inventoryOverlay.classList.add('hidden');
    this.el.settingsOverlay.classList.add('hidden');
    this.el.helpOverlay.classList.add('hidden');
  }

  countdown(n) {
    if (n <= 0) {
      this.el.countdown.classList.add('hidden');
      return;
    }
    this.el.countdown.classList.remove('hidden');
    this.el.countdownText.textContent = n;
    this.el.countdownText.style.animation = 'none';
    void this.el.countdownText.offsetWidth;
    this.el.countdownText.style.animation = '';
  }
}

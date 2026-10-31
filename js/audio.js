/* Tiny WebAudio synth for game feedback — no assets, no dependencies. */

export class Sound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    try {
      const saved = localStorage.getItem('mini-clash-muted');
      if (saved === '1') this.enabled = false;
    } catch { /* storage can be unavailable */ }
  }

  init() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    return this.ctx;
  }

  toggle() {
    this.enabled = !this.enabled;
    try { localStorage.setItem('mini-clash-muted', this.enabled ? '0' : '1'); } catch { /* ignore */ }
    if (this.enabled) this.play('select');
    return this.enabled;
  }

  tone(freq, dur, type = 'sine', vol = 0.16, slideTo = null, delay = 0) {
    const c = this.init();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  noise(dur, vol = 0.12, cutoff = 1200, delay = 0) {
    const c = this.init();
    if (!c) return;
    const t0 = c.currentTime + delay;
    const length = Math.max(1, Math.floor(c.sampleRate * dur));
    const buffer = c.createBuffer(1, length, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const src = c.createBufferSource();
    src.buffer = buffer;
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoff, t0);
    filter.frequency.exponentialRampToValueAtTime(Math.max(80, cutoff * 0.25), t0 + dur);
    const gain = c.createGain();
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter).connect(gain).connect(c.destination);
    src.start(t0);
  }

  play(name) {
    if (!this.enabled) return;
    switch (name) {
      case 'select':
        this.tone(560, 0.055, 'triangle', 0.09, 720);
        break;
      case 'deny':
        this.tone(150, 0.12, 'square', 0.07, 110);
        break;
      case 'deploy':
        this.tone(210, 0.2, 'sine', 0.12, 95);
        this.noise(0.14, 0.06, 900);
        break;
      case 'enemyDeploy':
        this.tone(170, 0.18, 'sine', 0.07, 85);
        break;
      case 'hit':
        this.tone(110, 0.035, 'square', 0.035, 80);
        break;
      case 'arrow':
        this.noise(0.05, 0.035, 3600);
        break;
      case 'shot':
        this.tone(250, 0.05, 'square', 0.04, 130);
        this.noise(0.04, 0.04, 2600);
        break;
      case 'towerShot':
        this.tone(330, 0.07, 'triangle', 0.05, 180);
        break;
      case 'towerHit':
        this.tone(85, 0.13, 'sine', 0.1, 55);
        this.noise(0.08, 0.05, 500);
        break;
      case 'towerDown':
        this.noise(0.55, 0.28, 1600);
        this.tone(70, 0.6, 'sine', 0.2, 30);
        this.tone(160, 0.3, 'sawtooth', 0.06, 55, 0.03);
        break;
      case 'fireball':
        this.tone(320, 0.22, 'sawtooth', 0.07, 90);
        this.noise(0.25, 0.14, 1800);
        break;
      case 'arrows':
        this.noise(0.32, 0.1, 4200);
        this.tone(700, 0.12, 'triangle', 0.04, 300, 0.05);
        break;
      case 'boom':
        this.noise(0.4, 0.22, 1500);
        this.tone(72, 0.4, 'sine', 0.16, 34);
        break;
      case 'crown':
        [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.22, 'triangle', 0.1, null, i * 0.09));
        break;
      case 'win':
        [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, 0.32, 'triangle', 0.11, null, i * 0.12));
        this.noise(0.4, 0.05, 2400, 0.2);
        break;
      case 'lose':
        [392, 330, 262, 196].forEach((f, i) => this.tone(f, 0.34, 'sawtooth', 0.055, null, i * 0.14));
        break;
      case 'draw':
        [392, 392, 494].forEach((f, i) => this.tone(f, 0.28, 'triangle', 0.07, null, i * 0.15));
        break;
      case 'count':
        this.tone(440, 0.1, 'triangle', 0.08, null);
        break;
      case 'clash':
        this.tone(880, 0.22, 'triangle', 0.1, 1320);
        this.tone(440, 0.3, 'sine', 0.08, 660);
        break;
      default:
        break;
    }
  }
}

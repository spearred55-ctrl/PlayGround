export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.ambience = null;
    this.lastUi = 0;
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.65;
    this.master.connect(this.ctx.destination);
    this.noise = this.makeNoise(1.4);
    this.startAmbience();
    return this.ctx;
  }

  makeNoise(seconds) {
    const ctx = this.ctx;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  startAmbience() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    filter.Q.value = 0.4;
    const gain = ctx.createGain();
    gain.gain.value = 0.035;
    src.connect(filter).connect(gain).connect(this.master);
    src.start();
    this.ambience = { src, gain };
    // Warm menu pad
    const padGain = ctx.createGain();
    padGain.gain.value = 0.012;
    padGain.connect(this.master);
    [55, 82.5, 110, 164.8].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 ? 'sine' : 'triangle';
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = i === 0 ? 0.6 : 0.22;
      o.connect(g).connect(padGain);
      o.start();
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.03 + i * 0.017;
      const lg = ctx.createGain();
      lg.gain.value = 0.003;
      lfo.connect(lg).connect(padGain.gain);
      lfo.start();
    });
    this.padGain = padGain;
  }

  setMuted(m) {
    this.muted = m;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(m ? 0 : 0.65, this.ctx.currentTime, 0.04);
    }
  }

  noiseBurst(duration, freq, gain, type = 'lowpass', q = 0.7, when = 0) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(60, freq * 0.22), t + duration);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + duration + 0.03);
  }

  tone(freq, duration, gain, type = 'sine', when = 0, endFreq = null) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t + duration);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + duration + 0.03);
  }

  shot(kind = 'ar', dist = 0) {
    if (!this.ctx || this.muted) return;
    const vol = Math.max(0.03, 0.42 / (1 + dist * 0.035));
    if (kind === 'sniper') {
      this.noiseBurst(0.36, 2600, vol * 1.4, 'bandpass', 0.8);
      this.tone(98, 0.24, vol * 0.7, 'sawtooth', 0, 34);
      this.noiseBurst(0.9, 280, vol * 0.35, 'lowpass', 0.5, 0.05);
    } else if (kind === 'shotgun') {
      this.noiseBurst(0.3, 1600, vol * 1.5, 'lowpass', 0.7);
      this.tone(72, 0.28, vol * 0.85, 'sawtooth', 0, 28);
    } else if (kind === 'smg') {
      this.noiseBurst(0.1, 3400, vol * 0.9, 'bandpass', 1.1);
      this.tone(145, 0.08, vol * 0.35, 'square', 0, 50);
    } else if (kind === 'pistol') {
      this.noiseBurst(0.15, 2300, vol * 1.0, 'bandpass', 0.9);
      this.tone(120, 0.1, vol * 0.45, 'square', 0, 45);
    } else if (kind === 'melee') {
      this.noiseBurst(0.12, 1200, vol * 0.5, 'highpass', 0.5);
    } else {
      this.noiseBurst(0.13, 2800, vol * 1.05, 'bandpass', 1.0);
      this.tone(116, 0.09, vol * 0.38, 'square', 0, 44);
    }
  }

  reload() {
    this.noiseBurst(0.05, 3000, 0.11, 'highpass', 1, 0.02);
    this.tone(420, 0.03, 0.035, 'square', 0.15);
    this.noiseBurst(0.06, 2200, 0.12, 'highpass', 1, 0.6);
    this.tone(610, 0.04, 0.03, 'square', 0.65);
  }

  hit(crit = false) {
    this.tone(crit ? 980 : 720, 0.055, 0.1, 'sine');
    this.tone(crit ? 1420 : 1100, 0.05, 0.07, 'sine', 0.015);
  }

  hitTaken() {
    this.noiseBurst(0.12, 600, 0.14, 'lowpass');
    this.tone(74, 0.14, 0.09, 'sine', 0, 45);
  }

  pickup() {
    this.tone(520, 0.09, 0.06, 'triangle');
    this.tone(780, 0.12, 0.05, 'triangle', 0.07);
    this.tone(1040, 0.16, 0.04, 'sine', 0.14);
  }

  ui() {
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this.lastUi < 45) return;
    this.lastUi = now;
    this.tone(840, 0.03, 0.035, 'square');
  }

  zoneAlert() {
    this.tone(240, 0.28, 0.07, 'sawtooth', 0, 180);
    this.tone(240, 0.28, 0.07, 'sawtooth', 0.38, 180);
  }

  eliminated() {
    this.tone(620, 0.15, 0.1, 'sine');
    this.tone(440, 0.18, 0.1, 'sine', 0.12);
    this.tone(260, 0.45, 0.12, 'sine', 0.28);
  }

  victory() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.45, 0.09, 'triangle', i * 0.12));
  }

  explosion(dist = 0) {
    const vol = Math.max(0.05, 0.65 / (1 + dist * 0.02));
    this.noiseBurst(0.75, 1000, vol, 'lowpass', 0.6);
    this.tone(52, 0.8, vol * 0.9, 'sawtooth', 0, 24);
  }

  throwGrenade() {
    this.noiseBurst(0.15, 900, 0.06, 'highpass');
  }

  heal() {
    this.tone(330, 0.2, 0.04, 'sine');
    this.tone(440, 0.25, 0.04, 'sine', 0.16);
    this.tone(660, 0.4, 0.03, 'sine', 0.34);
  }
}

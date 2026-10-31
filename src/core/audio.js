import { clamp } from './utils.js'

export class AudioEngine {
  constructor(profile) {
    this.profile = profile
    this.ctx = null
    this.master = null
    this.sfx = null
    this.ambient = null
    this.ambientGain = null
    this.stepTimer = 0
    this.lastShot = 0
    this.enabled = true
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.sfx = this.ctx.createGain()
    this.master.gain.value = clamp((this.profile?.settings?.volume ?? 80) / 100, 0, 1)
    this.sfx.gain.value = clamp((this.profile?.settings?.sfx ?? 100) / 100, 0, 1)
    this.sfx.connect(this.master)
    this.master.connect(this.ctx.destination)
    this.noise = this._makeNoise(2)
    this._startAmbient()
    if (this.ctx.state === 'suspended') this.ctx.resume()
  }

  setVolumes(volume, sfx) {
    if (this.master) this.master.gain.value = clamp(volume / 100, 0, 1)
    if (this.sfx) this.sfx.gain.value = clamp(sfx / 100, 0, 1)
  }

  _makeNoise(seconds = 1) {
    const len = Math.floor(this.ctx.sampleRate * seconds)
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    return buffer
  }

  _startAmbient() {
    if (!this.ctx || this.ambient) return
    const src = this.ctx.createBufferSource()
    src.buffer = this.noise
    src.loop = true
    const filter = this.ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 380
    filter.Q.value = 0.6
    const gain = this.ctx.createGain()
    gain.gain.value = 0.018
    src.connect(filter).connect(gain).connect(this.master)
    src.start()
    this.ambient = src
    this.ambientGain = gain
  }

  setAmbient(active) {
    if (!this.ambientGain) return
    const t = this.ctx.currentTime
    this.ambientGain.gain.cancelScheduledValues(t)
    this.ambientGain.gain.linearRampToValueAtTime(active ? 0.018 : 0.004, t + 0.6)
  }

  _noiseBurst({ duration = 0.15, gain = 0.2, freq = 1200, q = 1, type = 'lowpass', delay = 0, rate = 1 }) {
    if (!this.ctx) return
    const t = this.ctx.currentTime + delay
    const src = this.ctx.createBufferSource()
    src.buffer = this.noise
    src.playbackRate.value = rate
    const filter = this.ctx.createBiquadFilter()
    filter.type = type
    filter.frequency.setValueAtTime(freq, t)
    filter.frequency.exponentialRampToValueAtTime(Math.max(80, freq * 0.3), t + duration)
    filter.Q.value = q
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0008, t + duration)
    src.connect(filter).connect(g).connect(this.sfx)
    src.start(t, Math.random() * 1.5)
    src.stop(t + duration + 0.02)
  }

  _tone({ freq = 440, end = 80, duration = 0.2, gain = 0.15, type = 'sine', delay = 0 }) {
    if (!this.ctx) return
    const t = this.ctx.currentTime + delay
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, end), t + duration)
    g.gain.setValueAtTime(gain, t)
    g.gain.exponentialRampToValueAtTime(0.0008, t + duration)
    osc.connect(g).connect(this.sfx)
    osc.start(t)
    osc.stop(t + duration + 0.02)
  }

  ui() { this._tone({ freq: 620, end: 900, duration: 0.05, gain: 0.05, type: 'square' }) }

  gunshot(category = 'ar', volume = 1) {
    if (!this.ctx) return
    const now = performance.now()
    if (now - this.lastShot < 24) return
    this.lastShot = now
    const v = clamp(volume, 0.08, 1)
    if (category === 'sniper') {
      this._noiseBurst({ duration: 0.45, gain: 0.42 * v, freq: 2600, q: 0.7 })
      this._tone({ freq: 140, end: 38, duration: 0.38, gain: 0.35 * v, type: 'sine' })
      this._noiseBurst({ duration: 0.7, gain: 0.08 * v, freq: 700, q: 0.4, delay: 0.05 })
    } else if (category === 'shotgun') {
      this._noiseBurst({ duration: 0.34, gain: 0.38 * v, freq: 1500, q: 0.5 })
      this._tone({ freq: 110, end: 34, duration: 0.3, gain: 0.28 * v })
    } else if (category === 'smg') {
      this._noiseBurst({ duration: 0.1, gain: 0.16 * v, freq: 2200, q: 0.8 })
      this._tone({ freq: 190, end: 70, duration: 0.07, gain: 0.1 * v, type: 'square' })
    } else if (category === 'pistol') {
      this._noiseBurst({ duration: 0.14, gain: 0.2 * v, freq: 1900, q: 0.8 })
      this._tone({ freq: 210, end: 60, duration: 0.1, gain: 0.13 * v })
    } else if (category === 'lmg') {
      this._noiseBurst({ duration: 0.16, gain: 0.24 * v, freq: 1500, q: 0.6 })
      this._tone({ freq: 120, end: 45, duration: 0.14, gain: 0.18 * v })
    } else {
      this._noiseBurst({ duration: 0.18, gain: 0.26 * v, freq: 1900, q: 0.7 })
      this._tone({ freq: 150, end: 48, duration: 0.13, gain: 0.15 * v })
    }
  }

  dryFire() { this._tone({ freq: 300, end: 120, duration: 0.04, gain: 0.07, type: 'square' }) }

  reload() {
    this._tone({ freq: 420, end: 260, duration: 0.05, gain: 0.07, type: 'square' })
    this._tone({ freq: 240, end: 180, duration: 0.05, gain: 0.06, type: 'square', delay: 0.16 })
    this._tone({ freq: 520, end: 300, duration: 0.06, gain: 0.08, type: 'square', delay: 0.42 })
  }

  hit(headshot = false) {
    if (headshot) {
      this._tone({ freq: 1500, end: 900, duration: 0.12, gain: 0.14, type: 'triangle' })
      this._tone({ freq: 2200, end: 1400, duration: 0.1, gain: 0.08, type: 'sine', delay: 0.03 })
    } else {
      this._tone({ freq: 780, end: 500, duration: 0.07, gain: 0.1, type: 'triangle' })
    }
  }

  kill() {
    this._tone({ freq: 880, end: 1320, duration: 0.12, gain: 0.12, type: 'triangle' })
    this._tone({ freq: 1320, end: 1760, duration: 0.14, gain: 0.1, type: 'triangle', delay: 0.09 })
  }

  damage() {
    this._noiseBurst({ duration: 0.22, gain: 0.18, freq: 500, q: 0.4 })
    this._tone({ freq: 90, end: 45, duration: 0.25, gain: 0.2 })
  }

  explosion() {
    this._noiseBurst({ duration: 0.9, gain: 0.5, freq: 900, q: 0.3 })
    this._tone({ freq: 75, end: 24, duration: 0.7, gain: 0.45 })
    this._noiseBurst({ duration: 1.2, gain: 0.12, freq: 300, q: 0.4, delay: 0.08 })
  }

  pickup(rarity = 'common') {
    const base = rarity === 'legendary' ? 660 : rarity === 'epic' ? 560 : rarity === 'rare' ? 500 : 430
    this._tone({ freq: base, end: base * 1.35, duration: 0.07, gain: 0.08, type: 'triangle' })
    this._tone({ freq: base * 1.35, end: base * 1.7, duration: 0.09, gain: 0.06, type: 'triangle', delay: 0.05 })
  }

  heal() {
    this._tone({ freq: 300, end: 700, duration: 0.35, gain: 0.07, type: 'sine' })
    this._tone({ freq: 450, end: 900, duration: 0.4, gain: 0.05, type: 'sine', delay: 0.12 })
  }

  footstep(surface = 'grass') {
    const now = performance.now()
    if (now - this.stepTimer < 260) return
    this.stepTimer = now
    const freq = surface === 'metal' ? 900 : surface === 'water' ? 500 : 320
    this._noiseBurst({ duration: 0.055, gain: 0.035, freq, q: 0.8 })
  }

  throwGrenade() {
    this._noiseBurst({ duration: 0.12, gain: 0.08, freq: 700, q: 0.6 })
  }

  zoneWarning() {
    this._tone({ freq: 420, end: 420, duration: 0.18, gain: 0.07, type: 'square' })
    this._tone({ freq: 520, end: 520, duration: 0.18, gain: 0.06, type: 'square', delay: 0.24 })
  }

  victory() {
    const notes = [523, 659, 784, 1046, 1318]
    notes.forEach((f, i) => this._tone({ freq: f, end: f * 1.01, duration: 0.5, gain: 0.11, type: 'triangle', delay: i * 0.12 }))
  }

  defeat() {
    const notes = [392, 330, 262, 196]
    notes.forEach((f, i) => this._tone({ freq: f, end: f * 0.98, duration: 0.55, gain: 0.09, type: 'sine', delay: i * 0.16 }))
  }

  levelUp() {
    const notes = [660, 880, 1100, 1320]
    notes.forEach((f, i) => this._tone({ freq: f, end: f, duration: 0.22, gain: 0.09, type: 'triangle', delay: i * 0.09 }))
  }
}

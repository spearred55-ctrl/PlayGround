import { clamp } from './utils.js'

const KEY_MAP = {
  KeyW: 'forward', ArrowUp: 'forward',
  KeyS: 'back', ArrowDown: 'back',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  ShiftLeft: 'sprint', ShiftRight: 'sprint',
}

const PRESS_MAP = {
  Space: 'jump',
  KeyC: 'crouch',
  ControlLeft: 'crouch',
  KeyR: 'reload',
  KeyE: 'interact',
  KeyF: 'interact',
  KeyQ: 'swap',
  Digit1: 'weapon1',
  Digit2: 'weapon2',
  Digit3: 'weapon3',
  KeyG: 'grenade',
  KeyH: 'med',
  Tab: 'inventory',
  KeyM: 'map',
  Escape: 'pause',
  KeyV: 'vehicle',
}

export class InputManager {
  constructor(canvas, profile) {
    this.canvas = canvas
    this.profile = profile
    this.keys = new Set()
    this.down = new Set()
    this.pressed = new Set()
    this.released = new Set()
    this.look = { x: 0, y: 0 }
    this.move = { x: 0, y: 0 }
    this.joystick = { x: 0, y: 0 }
    this.joystickPointer = null
    this.lookPointer = null
    this.lastLook = { x: 0, y: 0 }
    this.touchMode = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 900
    this.blocked = false
    this.playing = false
    this.pointerLocked = false
    this.enabled = true
    this._bind()
    this.applyLayout(profile?.settings?.touchLayout || {})
  }

  get sensitivity() { return clamp((this.profile?.settings?.sensitivity ?? 100) / 100, 0.2, 2) }

  _bind() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Tab' || e.code === 'Space') e.preventDefault()
      if (this.blocked && e.code !== 'Escape') return
      const move = KEY_MAP[e.code]
      if (move) { this.keys.add(move); this._updateMove(); return }
      const press = PRESS_MAP[e.code]
      if (press) {
        if (e.repeat) return
        this.press(press)
        if (press === 'pause') e.preventDefault()
      }
      if (e.code === 'KeyP') this.press('pause')
    }, { passive: false })
    window.addEventListener('keyup', e => {
      const move = KEY_MAP[e.code]
      if (move) { this.keys.delete(move); this._updateMove() }
      const press = PRESS_MAP[e.code]
      if (press) this.release(press)
    })
    window.addEventListener('blur', () => { this.keys.clear(); this.down.clear(); this._updateMove(); this._resetJoystick() })

    // Desktop pointer lock + mouse look.
    this.canvas.addEventListener('mousedown', e => {
      if (this.touchMode || !this.playing || this.blocked) return
      if (e.button === 0) this.press('fire')
      if (e.button === 2) this.press('aim')
      if (document.pointerLockElement !== this.canvas) this.canvas.requestPointerLock?.()
    })
    window.addEventListener('mouseup', e => {
      if (e.button === 0) this.release('fire')
      if (e.button === 2) this.release('aim')
    })
    document.addEventListener('mousemove', e => {
      if (document.pointerLockElement === this.canvas && this.playing && !this.blocked) {
        this.look.x += e.movementX * 0.0024 * this.sensitivity
        this.look.y += e.movementY * 0.0024 * this.sensitivity
      }
    })
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas
    })
    this.canvas.addEventListener('contextmenu', e => e.preventDefault())
    this.canvas.addEventListener('wheel', e => {
      if (!this.playing || this.blocked) return
      this.press('swap')
      e.preventDefault()
    }, { passive: false })

    // Touch look anywhere on the canvas (controls capture their own pointers).
    this.canvas.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && !this.touchMode) return
      if (!this.playing || this.blocked) return
      if (this.lookPointer !== null) return
      this.lookPointer = e.pointerId
      this.lastLook.x = e.clientX
      this.lastLook.y = e.clientY
      this.canvas.setPointerCapture?.(e.pointerId)
    })
    this.canvas.addEventListener('pointermove', e => {
      if (e.pointerId !== this.lookPointer) return
      const dx = e.clientX - this.lastLook.x
      const dy = e.clientY - this.lastLook.y
      this.lastLook.x = e.clientX
      this.lastLook.y = e.clientY
      this.look.x += dx * 0.0042 * this.sensitivity
      this.look.y += dy * 0.0042 * this.sensitivity
    })
    const endLook = e => {
      if (e.pointerId === this.lookPointer) {
        this.lookPointer = null
        try { this.canvas.releasePointerCapture?.(e.pointerId) } catch { /* ignore */ }
      }
    }
    this.canvas.addEventListener('pointerup', endLook)
    this.canvas.addEventListener('pointercancel', endLook)
    this.canvas.addEventListener('lostpointercapture', endLook)

    this._bindJoystick()
    this._bindTouchButtons()
  }

  _bindJoystick() {
    this.joystickEl = document.getElementById('joystick')
    this.joystickKnob = document.getElementById('joystick-knob')
    if (!this.joystickEl) return
    const update = (e) => {
      if (e.pointerId !== this.joystickPointer) return
      const rect = this.joystickEl.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const max = rect.width * 0.34
      let dx = e.clientX - cx
      let dy = e.clientY - cy
      const len = Math.hypot(dx, dy)
      if (len > max) { dx = dx / len * max; dy = dy / len * max }
      const nx = dx / max, ny = dy / max
      const dead = 0.12
      const mag = Math.hypot(nx, ny)
      if (mag < dead) { this.joystick.x = 0; this.joystick.y = 0 }
      else {
        const scale = (mag - dead) / (1 - dead) / mag
        this.joystick.x = nx * scale
        this.joystick.y = ny * scale
      }
      if (this.joystickKnob) this.joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`
      this._updateMove()
    }
    this.joystickEl.addEventListener('pointerdown', e => {
      if (!this.playing || this.blocked) return
      this.joystickPointer = e.pointerId
      this.joystickEl.setPointerCapture?.(e.pointerId)
      update(e)
      e.preventDefault()
    })
    const end = e => {
      if (e.pointerId !== this.joystickPointer) return
      this._resetJoystick()
    }
    this.joystickEl.addEventListener('pointermove', update)
    this.joystickEl.addEventListener('pointerup', end)
    this.joystickEl.addEventListener('pointercancel', end)
    this.joystickEl.addEventListener('lostpointercapture', end)
  }

  _resetJoystick() {
    this.joystickPointer = null
    this.joystick.x = 0
    this.joystick.y = 0
    if (this.joystickKnob) this.joystickKnob.style.transform = 'translate(-50%, -50%)'
    this._updateMove()
  }

  _bindTouchButtons() {
    this.buttons = [...document.querySelectorAll('#touch-controls [data-action]')].filter(el => el.dataset.action !== 'joystick')
    for (const el of this.buttons) {
      const action = el.dataset.action
      el.addEventListener('pointerdown', e => {
        if (!this.playing || this.blocked) return
        el.setPointerCapture?.(e.pointerId)
        el.classList.add('active')
        this.press(action)
        e.preventDefault()
        e.stopPropagation()
      })
      const up = e => {
        el.classList.remove('active')
        this.release(action)
        try { el.releasePointerCapture?.(e.pointerId) } catch { /* ignore */ }
      }
      el.addEventListener('pointerup', up)
      el.addEventListener('pointercancel', up)
      el.addEventListener('lostpointercapture', up)
    }
  }

  _updateMove() {
    let x = 0, y = 0
    if (this.keys.has('right')) x += 1
    if (this.keys.has('left')) x -= 1
    if (this.keys.has('back')) y += 1
    if (this.keys.has('forward')) y -= 1
    const kLen = Math.hypot(x, y)
    if (kLen > 1) { x /= kLen; y /= kLen }
    const jx = this.joystick.x, jy = this.joystick.y
    x = clamp(x + jx, -1, 1)
    y = clamp(y + jy, -1, 1)
    const len = Math.hypot(x, y)
    if (len > 1) { x /= len; y /= len }
    this.move.x = x
    this.move.y = y
  }

  press(action) {
    if (!action) return
    if (!this.down.has(action)) this.pressed.add(action)
    this.down.add(action)
  }

  release(action) {
    if (!action) return
    this.down.delete(action)
    this.released.add(action)
  }

  isDown(action) { return this.down.has(action) || this.keys.has(action) }
  wasPressed(action) { return this.pressed.has(action) }
  wasReleased(action) { return this.released.has(action) }

  consumeLook() {
    const out = { x: this.look.x, y: this.look.y }
    this.look.x = 0
    this.look.y = 0
    return out
  }

  setBlocked(blocked) {
    this.blocked = blocked
    if (blocked) {
      this.down.clear()
      this.keys.clear()
      this._updateMove()
      if (document.pointerLockElement) document.exitPointerLock?.()
    }
  }

  setPlaying(playing) {
    this.playing = playing
    if (!playing) {
      this.down.clear()
      this.keys.clear()
      this._resetJoystick()
      if (document.pointerLockElement) document.exitPointerLock?.()
    }
  }

  endFrame() {
    this.pressed.clear()
    this.released.clear()
  }

  // ── touch layout ─────────────────────────────────────────────
  getButtonElements() {
    const els = [...document.querySelectorAll('#touch-controls [data-action]')]
    return els.map(el => ({ el, action: el.dataset.action }))
  }

  captureLayout() {
    const out = {}
    const w = window.innerWidth, h = window.innerHeight
    for (const { el, action } of this.getButtonElements()) {
      const r = el.getBoundingClientRect()
      if (!r.width) continue
      out[action] = { x: +((r.left + r.width / 2) / w * 100).toFixed(2), y: +((r.top + r.height / 2) / h * 100).toFixed(2) }
    }
    return out
  }

  applyLayout(layout) {
    if (!layout) return
    for (const { el, action } of this.getButtonElements()) {
      const pos = layout[action]
      if (!pos) { el.style.left = ''; el.style.top = ''; el.style.right = ''; el.style.bottom = ''; continue }
      el.style.left = pos.x + '%'
      el.style.top = pos.y + '%'
      el.style.right = 'auto'
      el.style.bottom = 'auto'
      el.style.transform = 'translate(-50%, -50%)'
    }
  }

  applyButtonScale(scale) {
    const s = clamp(scale / 100, 0.6, 1.5)
    document.documentElement.style.setProperty('--btn-scale', s)
    const layer = document.getElementById('touch-controls')
    if (layer) layer.style.zoom = s === 1 ? '' : String(s)
  }
}

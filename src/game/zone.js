import * as THREE from 'three'
import { clamp, lerp, mulberry32, formatTime } from '../core/utils.js'
import { PLAY_RADIUS, getHeight } from '../world/terrain.js'

const PHASES = [
  { wait: 22, shrink: 24, radius: 430, dps: 2 },
  { wait: 17, shrink: 20, radius: 305, dps: 3.5 },
  { wait: 15, shrink: 17, radius: 205, dps: 5 },
  { wait: 13, shrink: 15, radius: 132, dps: 7 },
  { wait: 11, shrink: 13, radius: 78, dps: 9 },
  { wait: 9, shrink: 11, radius: 34, dps: 12 },
  { wait: 7, shrink: 9, radius: 0, dps: 16 },
]

export class ZoneSystem {
  constructor(scene, seed = 1337) {
    this.scene = scene
    this.seed = seed
    this.rng = mulberry32(seed + 4242)
    this.phases = PHASES
    this.phase = 0
    this.radius = 560
    this.center = new THREE.Vector2(0, 0)
    this.targetRadius = PHASES[0].radius
    this.targetCenter = this._chooseCenter(this.radius, this.targetRadius)
    this.state = 'wait'
    this.timer = PHASES[0].wait
    this.shrinkDuration = PHASES[0].shrink
    this.fromRadius = this.radius
    this.fromCenter = this.center.clone()
    this.finished = false
    this.time = 0
    this.onPhase = null
    this._build()
  }

  _chooseCenter(currentRadius, nextRadius) {
    const maxOffset = Math.max(0, currentRadius - nextRadius) * 0.86
    const angle = this.rng() * Math.PI * 2
    const dist = Math.sqrt(this.rng()) * maxOffset
    let x = this.center.x + Math.cos(angle) * dist
    let z = this.center.y + Math.sin(angle) * dist
    const limit = Math.max(0, PLAY_RADIUS - 60 - nextRadius)
    const len = Math.hypot(x, z)
    if (len > limit && len > 0.001) { x = x / len * limit; z = z / len * limit }
    return new THREE.Vector2(x, z)
  }

  _build() {
    const wallGeo = new THREE.CylinderGeometry(1, 1, 1, 128, 1, true)
    wallGeo.translate(0, 0.5, 0)
    this.wallMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x63dcff) },
        uOpacity: { value: 0.34 },
        uHeight: { value: 1 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vWorld;
        varying vec3 vNormal;
        void main() {
          float bands = sin(vUv.y * 90.0 - uTime * 2.6) * 0.5 + 0.5;
          float bands2 = sin(vUv.y * 24.0 + uTime * 0.7) * 0.5 + 0.5;
          float vertical = smoothstep(0.0, 0.14, vUv.y) * (1.0 - smoothstep(0.72, 1.0, vUv.y));
          float pulse = 0.55 + 0.45 * sin(uTime * 1.6);
          float alpha = uOpacity * (0.45 + bands * 0.3 + bands2 * 0.18) * vertical * pulse;
          vec3 col = uColor * (0.85 + bands * 0.35);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    })
    this.wall = new THREE.Mesh(wallGeo, this.wallMat)
    this.wall.frustumCulled = false
    this.wall.renderOrder = 2
    this.scene.add(this.wall)

    const ringGeo = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true)
    ringGeo.translate(0, 0.5, 0)
    this.nextMat = new THREE.MeshBasicMaterial({
      color: 0xffc857, transparent: true, opacity: 0.22, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
    })
    this.nextRing = new THREE.Mesh(ringGeo, this.nextMat)
    this.nextRing.frustumCulled = false
    this.scene.add(this.nextRing)
    this.nextRing.visible = false

    this._apply()
  }

  _apply() {
    this.wall.scale.set(this.radius, 170, this.radius)
    this.wall.position.set(this.center.x, -6, this.center.y)
    if (this.targetRadius > 1 && this.phase < this.phases.length) {
      this.nextRing.visible = true
      this.nextRing.scale.set(this.targetRadius, 7, this.targetRadius)
      this.nextRing.position.set(this.targetCenter.x, 1, this.targetCenter.y)
    } else {
      this.nextRing.visible = false
    }
  }

  update(dt) {
    this.time += dt
    this.wallMat.uniforms.uTime.value = this.time
    if (!this.finished) {
      this.timer -= dt
      if (this.state === 'wait') {
        if (this.timer <= 0) {
          this.state = 'shrink'
          this.timer = this.shrinkDuration
          this.fromRadius = this.radius
          this.fromCenter.copy(this.center)
          if (this.onPhase) this.onPhase('shrink', this.phase)
        }
      } else if (this.state === 'shrink') {
        const t = clamp(1 - this.timer / this.shrinkDuration, 0, 1)
        const eased = t * t * (3 - 2 * t)
        this.radius = lerp(this.fromRadius, this.targetRadius, eased)
        this.center.set(lerp(this.fromCenter.x, this.targetCenter.x, eased), lerp(this.fromCenter.y, this.targetCenter.y, eased))
        if (this.timer <= 0) {
          this.radius = this.targetRadius
          this.center.copy(this.targetCenter)
          this.phase++
          if (this.phase >= this.phases.length) {
            this.finished = true
            this.state = 'final'
            this.timer = 0
            if (this.onPhase) this.onPhase('final', this.phase)
          } else {
            const next = this.phases[this.phase]
            this.targetRadius = next.radius
            this.targetCenter = this._chooseCenter(this.radius, next.radius)
            this.shrinkDuration = next.shrink
            this.timer = next.wait
            this.state = 'wait'
            if (this.onPhase) this.onPhase('wait', this.phase)
          }
        }
      }
    }
    this._apply()
    const outside = this.phase < this.phases.length && this.distanceOutside(this.center.x, this.center.y) > 0
    this.wallMat.uniforms.uOpacity.value = outside ? 0.42 : 0.3
    if (this.nextRing.visible) this.nextMat.opacity = 0.14 + Math.sin(this.time * 2.2) * 0.06
  }

  distanceOutside(x, z) {
    return Math.hypot(x - this.center.x, z - this.center.y) - this.radius
  }

  isOutside(x, z) { return this.distanceOutside(x, z) > 0 }

  get damagePerSecond() {
    const p = this.phases[Math.min(this.phase, this.phases.length - 1)]
    return p ? p.dps : 16
  }

  getState() {
    return {
      phase: Math.min(this.phase + 1, this.phases.length),
      totalPhases: this.phases.length,
      timer: Math.max(0, this.timer),
      shrinking: this.state === 'shrink',
      finished: this.finished,
      center: this.center,
      radius: this.radius,
      nextCenter: this.targetCenter,
      nextRadius: this.targetRadius,
      dps: this.damagePerSecond,
      timerText: this.finished ? 'FINAL' : formatTime(this.timer),
    }
  }

  reset() {
    this.rng = mulberry32(this.seed + 4242)
    this.phase = 0
    this.radius = 560
    this.center.set(0, 0)
    this.targetRadius = PHASES[0].radius
    this.targetCenter = this._chooseCenter(this.radius, this.targetRadius)
    this.state = 'wait'
    this.timer = PHASES[0].wait
    this.shrinkDuration = PHASES[0].shrink
    this.fromRadius = this.radius
    this.fromCenter.copy(this.center)
    this.finished = false
    this._apply()
  }

  dispose() {
    this.scene.remove(this.wall, this.nextRing)
    this.wall.geometry.dispose()
    this.wallMat.dispose()
    this.nextRing.geometry.dispose()
    this.nextMat.dispose()
  }
}

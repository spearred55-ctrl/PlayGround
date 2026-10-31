import * as THREE from 'three'
import { clamp, damp, dampAngle, distance2D } from '../core/utils.js'
import { WATER_LEVEL } from '../world/terrain.js'

const bodyMat = new THREE.MeshStandardMaterial({ color: 0x6c5a3a, roughness: 0.62, metalness: 0.35 })
const trimMat = new THREE.MeshStandardMaterial({ color: 0x2a2f33, roughness: 0.5, metalness: 0.6 })
const seatMat = new THREE.MeshStandardMaterial({ color: 0x22282c, roughness: 0.9 })
const glowMat = new THREE.MeshBasicMaterial({ color: 0xffd28a })
const wheelMat = new THREE.MeshStandardMaterial({ color: 0x15181a, roughness: 0.95 })

function box(parent, mat, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

export class Vehicle {
  constructor(game, spawn) {
    this.game = game
    this.pos = new THREE.Vector3(spawn.x, spawn.y, spawn.z)
    this.spawn = { ...spawn }
    this.yaw = spawn.rot || 0
    this.speed = 0
    this.health = 320
    this.maxHealth = 320
    this.occupied = false
    this.driver = null
    this.wheelSpin = 0
    this.roll = 0
    this.runoverCooldown = 0
    this.destroyed = false
    this.group = new THREE.Group()
    this._build()
    this.group.position.copy(this.pos)
    this.group.rotation.y = this.yaw
    game.scene.add(this.group)
  }

  _build() {
    const g = this.group
    box(g, bodyMat, 0, 0.62, 0, 1.7, 0.42, 2.9)
    box(g, bodyMat, 0, 0.9, -0.35, 1.5, 0.28, 1.5)
    box(g, trimMat, 0, 1.05, -0.9, 1.5, 0.34, 0.5)
    box(g, trimMat, 0, 1.22, -0.4, 0.12, 0.5, 0.12)
    box(g, trimMat, 0.62, 1.22, -0.4, 0.12, 0.5, 0.12)
    box(g, trimMat, -0.62, 1.22, -0.4, 0.12, 0.5, 0.12)
    box(g, trimMat, 0, 1.46, -0.4, 1.5, 0.12, 0.14)
    box(g, seatMat, 0, 0.9, 0.15, 1.3, 0.32, 0.7)
    box(g, trimMat, 0, 0.95, 1.42, 1.7, 0.3, 0.3)
    const lightL = box(g, glowMat, -0.55, 0.78, 1.5, 0.34, 0.2, 0.08)
    const lightR = box(g, glowMat, 0.55, 0.78, 1.5, 0.34, 0.2, 0.08)
    lightL.material = glowMat
    lightR.material = glowMat
    this.wheels = []
    const wheelGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.34, 12)
    wheelGeo.rotateZ(Math.PI / 2)
    for (const x of [-0.92, 0.92]) {
      for (const z of [-1.0, 1.05]) {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat)
        wheel.position.set(x, 0.46, z)
        wheel.castShadow = true
        g.add(wheel)
        this.wheels.push(wheel)
      }
    }
    // Exhaust + antenna
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.5, 6), trimMat)
    pipe.position.set(-0.5, 0.85, -1.5)
    pipe.rotation.x = Math.PI / 2
    g.add(pipe)
  }

  get forward() { return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)) }

  enter(player) {
    if (this.occupied || this.destroyed) return false
    this.occupied = true
    this.driver = player
    player.vehicle = this
    player.character.group.visible = false
    this.game.ui?.toast('VEHICLE ACQUIRED · DRIVE', 'good')
    this.game.audio.pickup('rare')
    return true
  }

  exit() {
    if (!this.occupied) return
    const player = this.driver
    const side = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
    const x = this.pos.x + side.x * 2.2
    const z = this.pos.z + side.z * 2.2
    player.pos.set(x, this.game.world.groundHeight(x, z), z)
    player.vehicle = null
    player.character.group.visible = true
    player.vy = 0
    this.occupied = false
    this.driver = null
    this.speed = 0
  }

  takeDamage(amount) {
    this.health -= amount
    if (this.health <= 0 && !this.destroyed) this.explode()
  }

  explode() {
    this.destroyed = true
    this.game.effects.explosion(this.pos.clone().add(new THREE.Vector3(0, 1, 0)), 1.4)
    this.game.audio.explosion()
    if (this.driver) {
      const driver = this.driver
      this.exit()
      driver.takeDamage(55, null)
    }
    this.game.explode(this.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), 6, 65, null)
    this.group.visible = false
  }

  reset() {
    this.pos.set(this.spawn.x, this.spawn.y, this.spawn.z)
    this.yaw = this.spawn.rot || 0
    this.speed = 0
    this.health = this.maxHealth
    this.destroyed = false
    this.group.visible = true
    this.occupied = false
    this.driver = null
    this.group.position.copy(this.pos)
    this.group.rotation.y = this.yaw
  }

  update(dt, time) {
    if (this.destroyed) return
    this.runoverCooldown = Math.max(0, this.runoverCooldown - dt)
    if (this.occupied && this.driver) {
      const input = this.game.input
      const throttle = this.game.state === 'match' && !this.game.paused ? -input.move.y : 0
      const steer = this.game.state === 'match' && !this.game.paused ? input.move.x : 0
      const maxSpeed = 17
      const target = throttle > 0 ? maxSpeed : throttle < 0 ? -6.5 : 0
      this.speed = damp(this.speed, target, throttle !== 0 ? 1.7 : 2.4, dt)
      if (Math.abs(this.speed) > 0.4) {
        this.yaw -= steer * dt * 1.5 * clamp(Math.abs(this.speed) / 8, 0.25, 1.4)
      }
      const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw)
      let nx = this.pos.x + fx * this.speed * dt
      let nz = this.pos.z + fz * this.speed * dt
      const resolved = this.game.world.resolveCollision(nx, nz, 1.5, this.pos.y + 0.4, 2.2)
      const blocked = Math.abs(resolved.x - nx) + Math.abs(resolved.z - nz) > 0.05
      this.pos.x = resolved.x
      this.pos.z = resolved.z
      if (blocked) {
        if (Math.abs(this.speed) > 7) {
          this.takeDamage(Math.abs(this.speed) * 1.8)
          this.game.audio.footstep('metal')
        }
        this.speed *= 0.35
      }
      const ground = this.game.world.groundHeight(this.pos.x, this.pos.z)
      this.pos.y = damp(this.pos.y, ground, 12, dt)
      if (this.game.world.isWaterAt(this.pos.x, this.pos.z)) this.speed = damp(this.speed, 0, 4, dt)
      this.driver.pos.copy(this.pos)
      this.wheelSpin += this.speed * dt * 1.6
      this.roll = damp(this.roll, -steer * clamp(this.speed / maxSpeed, -1, 1) * 0.09, 6, dt)
      this.group.rotation.set(0, this.yaw, 0)
      this.group.rotation.z = this.roll
      for (const w of this.wheels) w.rotation.x = this.wheelSpin
      // Run over enemies
      if (Math.abs(this.speed) > 5 && this.runoverCooldown <= 0) {
        for (const bot of this.game.bots) {
          if (!bot.alive) continue
          if (this.game.isEnemy(this.driver, bot) && distance2D(bot.pos.x, bot.pos.z, this.pos.x, this.pos.z) < 2.1) {
            bot.takeDamage(42 + Math.abs(this.speed) * 2.5, this.driver)
            this.runoverCooldown = 0.5
            this.game.cameraShake = 0.3
            break
          }
        }
      }
    } else {
      this.speed = damp(this.speed, 0, 3, dt)
    }
    this.group.position.copy(this.pos)
    this.group.position.y += Math.sin(time * 8 + this.pos.x) * 0.008
  }
}

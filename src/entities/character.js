import * as THREE from 'three'
import { clamp, damp, lerp, makeCanvas } from '../core/utils.js'
import { createWeaponMesh } from '../game/weapons.js'

const G = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(1, 14, 10),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 10),
  cone: new THREE.ConeGeometry(1, 1, 8),
  ring: new THREE.RingGeometry(0.46, 0.6, 24),
}

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.05, ...opts })
}

function box(parent, material, x, y, z, w, h, d) {
  const m = new THREE.Mesh(G.box, material)
  m.position.set(x, y, z)
  m.scale.set(w, h, d)
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function makeNameTexture(name, teamColor, subtitle) {
  const canvas = makeCanvas(512, 128)
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 512, 128)
  ctx.fillStyle = 'rgba(4,10,15,.72)'
  ctx.beginPath()
  ctx.roundRect(8, 14, 496, 94, 10)
  ctx.fill()
  ctx.fillStyle = teamColor
  ctx.fillRect(8, 14, 8, 94)
  ctx.font = '700 40px Rajdhani, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#eaf6ff'
  ctx.fillText(name.slice(0, 14), 30, 52)
  ctx.font = '600 22px Rajdhani, sans-serif'
  ctx.fillStyle = teamColor
  ctx.fillText(subtitle || 'OPERATIVE', 30, 86)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

export class Character {
  constructor({ scene, outfit, name = 'OPERATIVE', teamColor = '#ff8a2b', isPlayer = false, quality = 'high', level = 1, simple = false }) {
    this.scene = scene
    this.outfit = outfit
    this.name = name
    this.teamColor = teamColor
    this.isPlayer = isPlayer
    this.quality = quality
    this.level = level
    this.simple = simple
    this.group = new THREE.Group()
    this.group.name = 'character_' + name
    this.body = new THREE.Group()
    this.group.add(this.body)
    this.walkPhase = 0
    this.recoil = 0
    this.reloadProgress = 0
    this.reloading = false
    this.aiming = false
    this.crouch = false
    this.swimming = false
    this.dead = false
    this.deathTime = 0
    this.moveSpeed = 0
    this.aimPitch = 0
    this.shooting = false
    this.weaponMesh = null
    this.weaponDef = null
    this.attachments = []
    this.armorValue = 0
    this.helmetLevel = 0
    this.backpackLevel = 1
    this._build()
    this.setName(name, teamColor)
    scene.add(this.group)
  }

  _build() {
    const o = this.outfit
    this.mats = {
      primary: mat(o.primary || '#2f6f8f'),
      secondary: mat(o.secondary || '#152430'),
      accent: mat(o.accent || '#ff8a2b', { metalness: 0.25 }),
      skin: mat(o.skinColor || o.skin || '#c98f6a', { roughness: 0.9 }),
      hair: mat(o.hairColor || o.hair || '#22201f', { roughness: 0.95 }),
      dark: mat(0x161d22, { roughness: 0.7, metalness: 0.2 }),
      metal: mat(0x46545c, { roughness: 0.5, metalness: 0.6 }),
      boot: mat(0x22282b, { roughness: 0.85 }),
      vest: mat(0x2b343a, { roughness: 0.8, metalness: 0.1 }),
      glow: new THREE.MeshBasicMaterial({ color: o.accent || '#ff8a2b' }),
    }
    // Torso / vest
    this.torso = new THREE.Group()
    this.torso.position.y = 0.92
    this.body.add(this.torso)
    box(this.torso, this.mats.primary, 0, 0.32, 0, 0.5, 0.62, 0.29)
    if (!this.simple) {
      box(this.torso, this.mats.vest, 0, 0.34, 0.04, 0.44, 0.42, 0.3)
      box(this.torso, this.mats.accent, 0, 0.38, 0.2, 0.26, 0.06, 0.02)
      box(this.torso, this.mats.secondary, 0, 0.03, 0, 0.46, 0.1, 0.28)
      // Shoulder pads
      box(this.torso, this.mats.secondary, -0.31, 0.54, 0, 0.16, 0.18, 0.24)
      box(this.torso, this.mats.secondary, 0.31, 0.54, 0, 0.16, 0.18, 0.24)
    }
    // Backpack
    this.backpack = new THREE.Group()
    this.backpack.position.set(0, 0.34, -0.22)
    this.torso.add(this.backpack)
    box(this.backpack, this.mats.secondary, 0, 0, -0.05, 0.38, 0.44, 0.18)
    if (!this.simple) box(this.backpack, this.mats.accent, 0, 0.16, -0.15, 0.12, 0.05, 0.02)
    this.backpack.scale.set(1, 1, 1)

    // Head
    this.headPivot = new THREE.Group()
    this.headPivot.position.set(0, 0.66, 0)
    this.torso.add(this.headPivot)
    const head = new THREE.Mesh(G.sphere, this.mats.skin)
    head.scale.set(0.17, 0.2, 0.17)
    head.position.y = 0.1
    head.castShadow = true
    this.headPivot.add(head)
    // Tactical visor / mask
    box(this.headPivot, this.mats.dark, 0, 0.11, 0.15, 0.26, 0.07, 0.05)
    if (!this.simple) box(this.headPivot, this.mats.glow, 0, 0.11, 0.178, 0.18, 0.022, 0.012)
    // Hair / helmet
    this.hairGroup = new THREE.Group()
    this.headPivot.add(this.hairGroup)
    if (!this.simple) this._buildHair(o.hair || 'short')
    // Helmet (hidden until equipped)
    this.helmetMesh = new THREE.Group()
    if (!this.simple) {
      const helmet = new THREE.Mesh(G.sphere, this.mats.metal)
      helmet.scale.set(0.19, 0.18, 0.19)
      helmet.position.y = 0.14
      this.helmetMesh.add(helmet)
      box(this.helmetMesh, this.mats.dark, 0, 0.11, 0.16, 0.28, 0.055, 0.04)
    }
    this.helmetMesh.visible = false
    this.headPivot.add(this.helmetMesh)
    // Armor plates (hidden until armor picked up)
    this.armorMesh = new THREE.Group()
    if (!this.simple) {
      box(this.armorMesh, this.mats.metal, 0, 0.33, 0.17, 0.38, 0.34, 0.06)
      box(this.armorMesh, this.mats.accent, 0, 0.44, 0.205, 0.16, 0.03, 0.01)
    }
    this.armorMesh.visible = false
    this.torso.add(this.armorMesh)

    // Arms
    this.armL = this._makeArm(-1)
    this.armR = this._makeArm(1)
    // Legs
    this.legL = this._makeLeg(-1)
    this.legR = this._makeLeg(1)
    // Weapon mount
    this.weaponMount = new THREE.Group()
    this.weaponMount.position.set(0.16, 0.3, 0.3)
    this.weaponMount.rotation.x = -0.35
    this.torso.add(this.weaponMount)
    // Team ring
    if (!this.isPlayer) {
      const ring = new THREE.Mesh(G.ring, new THREE.MeshBasicMaterial({ color: this.teamColor, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }))
      ring.rotation.x = -Math.PI / 2
      ring.position.y = 0.03
      this.group.add(ring)
      this.ring = ring
    }
  }

  _buildHair(style) {
    this.hairGroup.clear()
    if (style === 'bald') return
    if (style === 'helmet') {
      const h = new THREE.Mesh(G.sphere, this.mats.metal)
      h.scale.set(0.185, 0.15, 0.185)
      h.position.y = 0.17
      this.hairGroup.add(h)
      return
    }
    if (style === 'mohawk') {
      box(this.hairGroup, this.mats.hair, 0, 0.25, 0, 0.06, 0.13, 0.24)
      return
    }
    if (style === 'bun') {
      const h = new THREE.Mesh(G.sphere, this.mats.hair)
      h.scale.set(0.175, 0.12, 0.175)
      h.position.y = 0.2
      this.hairGroup.add(h)
      const bun = new THREE.Mesh(G.sphere, this.mats.hair)
      bun.scale.set(0.075, 0.075, 0.075)
      bun.position.set(0, 0.18, -0.16)
      this.hairGroup.add(bun)
      return
    }
    if (style === 'long') {
      const h = new THREE.Mesh(G.sphere, this.mats.hair)
      h.scale.set(0.18, 0.14, 0.18)
      h.position.y = 0.19
      this.hairGroup.add(h)
      box(this.hairGroup, this.mats.hair, 0, 0.0, -0.13, 0.24, 0.35, 0.08)
      return
    }
    const h = new THREE.Mesh(G.sphere, this.mats.hair)
    h.scale.set(0.178, 0.11, 0.178)
    h.position.y = 0.2
    this.hairGroup.add(h)
  }

  _makeArm(side) {
    const shoulder = new THREE.Group()
    shoulder.position.set(side * 0.34, 0.54, 0)
    this.torso.add(shoulder)
    const elbow = new THREE.Group()
    elbow.position.y = -0.28
    shoulder.add(elbow)
    if (this.simple) {
      box(shoulder, this.mats.primary, 0, -0.24, 0, 0.15, 0.46, 0.16)
    } else {
      box(shoulder, this.mats.primary, 0, -0.14, 0, 0.15, 0.28, 0.16)
      box(elbow, this.mats.primary, 0, -0.14, 0, 0.13, 0.28, 0.14)
      box(elbow, this.mats.dark, 0, -0.29, 0.02, 0.14, 0.09, 0.16)
      // shoulder armor
      box(shoulder, this.mats.secondary, 0, -0.01, 0, 0.19, 0.12, 0.22)
    }
    return { shoulder, elbow }
  }

  _makeLeg(side) {
    const hip = new THREE.Group()
    hip.position.set(side * 0.16, 0.92, 0)
    this.body.add(hip)
    const knee = new THREE.Group()
    knee.position.y = -0.46
    hip.add(knee)
    if (this.simple) {
      box(hip, this.mats.secondary, 0, -0.24, 0, 0.17, 0.48, 0.19)
      box(hip, this.mats.boot, 0, -0.46, 0.04, 0.17, 0.1, 0.26)
    } else {
      box(hip, this.mats.secondary, 0, -0.23, 0, 0.17, 0.46, 0.19)
      box(knee, this.mats.primary, 0, -0.21, 0, 0.15, 0.42, 0.17)
      box(knee, this.mats.boot, 0, -0.45, 0.04, 0.17, 0.12, 0.26)
    }
    return { hip, knee }
  }

  setName(name, teamColor = this.teamColor) {
    this.name = name
    this.teamColor = teamColor
    if (this.isPlayer) return
    if (this.nameplate) {
      this.group.remove(this.nameplate)
      this.nameplate.material.map?.dispose()
      this.nameplate.material.dispose()
    }
    const tex = makeNameTexture(name, teamColor, this.teamLabel || 'HOSTILE')
    const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: true, sizeAttenuation: true })
    const sprite = new THREE.Sprite(spriteMat)
    sprite.position.y = 2.28
    sprite.scale.set(2.0, 0.5, 1)
    this.group.add(sprite)
    this.nameplate = sprite
    if (!this.healthBar) this._buildHealthBar()
  }

  _buildHealthBar() {
    const bgMat = new THREE.SpriteMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false })
    const bg = new THREE.Sprite(bgMat)
    bg.scale.set(1.5, 0.1, 1)
    bg.position.y = 2.03
    this.group.add(bg)
    const fillMat = new THREE.SpriteMaterial({ color: 0x54e6a5, transparent: true, opacity: 0.95, depthWrite: false })
    const fill = new THREE.Sprite(fillMat)
    fill.center.set(0, 0.5)
    fill.scale.set(1.44, 0.065, 1)
    fill.position.set(-0.72, 2.03, 0)
    this.group.add(fill)
    this.healthBar = { bg, fill }
  }

  setHealth(health, max = 100, armor = 0) {
    if (!this.healthBar) this._buildHealthBar()
    const ratio = clamp(health / max, 0, 1)
    this.healthBar.fill.scale.x = 1.44 * ratio
    this.healthBar.fill.material.color.set(ratio > 0.5 ? 0x54e6a5 : ratio > 0.25 ? 0xffc857 : 0xff4b4b)
    this.healthBar.fill.visible = !this.dead
    this.healthBar.bg.visible = !this.dead
  }

  setWeapon(weapon, attachments = []) {
    this.weaponDef = weapon
    this.attachments = attachments
    if (this.weaponMesh) {
      // Weapon materials are shared across all instances; only detach the model.
      this.weaponMount.remove(this.weaponMesh)
    }
    if (!weapon) { this.weaponMesh = null; return }
    let mesh
    if (this.simple) {
      mesh = new THREE.Group()
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2d343a, roughness: 0.5, metalness: 0.6 })
      const accentMat = new THREE.MeshStandardMaterial({ color: 0xff8a2b, roughness: 0.5, metalness: 0.4 })
      const gun = new THREE.Mesh(G.box, bodyMat)
      gun.scale.set(0.08, 0.11, weapon.category === 'pistol' ? 0.32 : 0.72)
      gun.position.z = 0.18
      mesh.add(gun)
      const tip = new THREE.Mesh(G.box, accentMat)
      tip.scale.set(0.06, 0.05, 0.12)
      tip.position.set(0, 0.08, 0.34)
      mesh.add(tip)
      mesh.userData.muzzle = new THREE.Vector3(0, 0.05, 0.55)
      mesh.userData.length = 0.6
      mesh.userData.category = weapon.category
    } else {
      mesh = createWeaponMesh(weapon, attachments)
      mesh.scale.setScalar(0.92)
    }
    this.weaponMount.add(mesh)
    this.weaponMesh = mesh
  }

  setArmor(armorValue, helmetLevel) {
    this.armorValue = armorValue
    this.helmetLevel = helmetLevel
    if (this.armorMesh) this.armorMesh.visible = armorValue > 0
    if (this.helmetMesh) this.helmetMesh.visible = helmetLevel > 0
  }

  setBackpack(level) {
    this.backpackLevel = level
    if (this.backpack) {
      const s = level >= 3 ? 1.3 : level >= 2 ? 1.15 : 1
      this.backpack.scale.set(s, s, s)
    }
  }

  setOutfit(outfit) {
    this.outfit = outfit
    this.mats.primary.color.set(outfit.primary)
    this.mats.secondary.color.set(outfit.secondary)
    this.mats.accent.color.set(outfit.accent)
    this.mats.skin.color.set(outfit.skinColor || outfit.skin || '#c98f6a')
    this.mats.hair.color.set(outfit.hairColor || outfit.hair || '#22201f')
    this._buildHair(outfit.hair || 'short')
  }

  setPosition(x, y, z) { this.group.position.set(x, y, z) }
  setYaw(yaw) { this.group.rotation.y = yaw }

  getPosition() { return this.group.position }

  getChestPosition(target = new THREE.Vector3()) {
    return target.set(this.group.position.x, this.group.position.y + 1.28, this.group.position.z)
  }

  getHeadPosition(target = new THREE.Vector3()) {
    return target.set(this.group.position.x, this.group.position.y + 1.68, this.group.position.z)
  }

  getMuzzlePosition(target = new THREE.Vector3()) {
    if (!this.weaponMesh) return this.getChestPosition(target)
    this.weaponMesh.updateWorldMatrix(true, false)
    target.copy(this.weaponMesh.userData.muzzle)
    this.weaponMesh.localToWorld(target)
    return target
  }

  getAimDirection(target = new THREE.Vector3()) {
    this.weaponMesh?.updateWorldMatrix(true, false)
    if (!this.weaponMesh) return target.set(0, 0, 1)
    const muzzle = new THREE.Vector3().copy(this.weaponMesh.userData.muzzle)
    const far = new THREE.Vector3(0, 0, this.weaponMesh.userData.muzzle.z + 2)
    this.weaponMesh.localToWorld(muzzle)
    this.weaponMesh.localToWorld(far)
    return target.copy(far).sub(muzzle).normalize()
  }

  shootRecoil(amount = 1) {
    this.recoil = Math.min(1.8, this.recoil + amount)
    this.shooting = true
    this.shootTimer = 0.08
  }

  startReload(duration) {
    this.reloading = true
    this.reloadDuration = duration
    this.reloadProgress = 0
  }

  cancelReload() { this.reloading = false; this.reloadProgress = 0 }

  die() {
    this.dead = true
    this.deathTime = 0
    this.reloading = false
    if (this.nameplate) this.nameplate.visible = false
    if (this.healthBar) { this.healthBar.bg.visible = false; this.healthBar.fill.visible = false }
    if (this.ring) this.ring.visible = false
  }

  revive() {
    this.dead = false
    this.deathTime = 0
    this.body.rotation.set(0, 0, 0)
    this.body.position.y = 0
    this.group.rotation.set(0, this.group.rotation.y, 0)
    if (this.nameplate) this.nameplate.visible = true
    if (this.healthBar) { this.healthBar.bg.visible = true; this.healthBar.fill.visible = true }
    if (this.ring) this.ring.visible = true
  }

  update(dt, time) {
    if (this.dead) {
      this.deathTime += dt
      const t = Math.min(1, this.deathTime * 2.4)
      this.body.rotation.z = t * Math.PI / 2
      this.body.position.y = -t * 0.38
      this.body.rotation.x = t * 0.2
      return
    }
    if (this.shootTimer > 0) {
      this.shootTimer -= dt
      if (this.shootTimer <= 0) this.shooting = false
    }
    this.recoil = damp(this.recoil, 0, 12, dt)
    if (this.reloading) {
      this.reloadProgress = Math.min(1, this.reloadProgress + dt / Math.max(0.1, this.reloadDuration))
      if (this.reloadProgress >= 1) this.reloading = false
    }
    const speed = this.moveSpeed
    const speedFactor = clamp(speed / 7.5, 0, 1)
    this.walkPhase += dt * (1.4 + speed * 1.55)
    const swing = Math.sin(this.walkPhase) * speedFactor * 0.72
    const idle = Math.sin(time * 1.7) * 0.012
    const crouchT = this.crouch ? 1 : 0
    const swimT = this.swimming ? 1 : 0
    this.body.position.y = damp(this.body.position.y, crouchT * -0.3 + swimT * -0.15, 12, dt)
    this.torso.position.y = 0.92 + idle - crouchT * 0.02
    this.torso.rotation.x = damp(this.torso.rotation.x, this.aiming ? clamp(-this.aimPitch, -0.35, 0.35) * 0.5 : (swimT ? -0.4 : 0), 10, dt)
    this.headPivot.rotation.x = damp(this.headPivot.rotation.x, this.aiming ? clamp(-this.aimPitch, -0.5, 0.5) * 0.55 : 0, 10, dt)

    // Legs
    const legSwing = swimT ? Math.sin(this.walkPhase * 1.8) * 0.5 : swing
    this.legL.hip.rotation.x = legSwing + crouchT * 0.55
    this.legR.hip.rotation.x = -legSwing + crouchT * 0.55
    this.legL.knee.rotation.x = Math.max(0, -legSwing) * 0.7 + crouchT * 0.9
    this.legR.knee.rotation.x = Math.max(0, legSwing) * 0.7 + crouchT * 0.9
    if (swimT) {
      this.legL.hip.rotation.x = Math.sin(this.walkPhase * 1.8) * 0.7 + 0.25
      this.legR.hip.rotation.x = -Math.sin(this.walkPhase * 1.8) * 0.7 + 0.25
      this.legL.knee.rotation.x = 0.3
      this.legR.knee.rotation.x = 0.3
    }

    // Arms
    const aimArm = this.aiming ? 1 : 0
    const reloadArm = this.reloading ? Math.sin(this.reloadProgress * Math.PI) : 0
    this.armL.shoulder.rotation.x = damp(this.armL.shoulder.rotation.x, this.aiming ? -1.18 : -swing * 0.5, 12, dt)
    this.armL.shoulder.rotation.z = damp(this.armL.shoulder.rotation.z, this.aiming ? -0.28 : -0.06, 12, dt)
    this.armL.elbow.rotation.x = damp(this.armL.elbow.rotation.x, this.aiming ? -0.5 : -0.1, 12, dt)
    this.armR.shoulder.rotation.x = damp(this.armR.shoulder.rotation.x, this.aiming ? -1.28 : swing * 0.5, 12, dt)
    this.armR.shoulder.rotation.z = damp(this.armR.shoulder.rotation.z, this.aiming ? 0.2 : 0.06, 12, dt)
    this.armR.elbow.rotation.x = damp(this.armR.elbow.rotation.x, this.aiming ? -0.42 : -0.12, 12, dt)
    if (reloadArm > 0.05) {
      this.armL.shoulder.rotation.x = -1.0 - reloadArm * 0.6
      this.armL.shoulder.rotation.z = -0.5
      this.armL.elbow.rotation.x = -0.8
    }

    // Weapon pose
    const wm = this.weaponMount
    const targetX = this.aiming ? 0.07 : 0.18
    const targetY = this.aiming ? 0.36 : 0.18
    const targetZ = this.aiming ? 0.34 : 0.25
    wm.position.x = damp(wm.position.x, targetX, 12, dt)
    wm.position.y = damp(wm.position.y, targetY - crouchT * 0.08, 12, dt)
    wm.position.z = damp(wm.position.z, targetZ, 12, dt)
    wm.rotation.x = damp(wm.rotation.x, this.aiming ? clamp(-this.aimPitch, -0.5, 0.5) : -0.38, 12, dt)
    wm.rotation.z = damp(wm.rotation.z, this.reloading ? Math.sin(this.reloadProgress * Math.PI) * 0.55 : 0, 12, dt)
    wm.rotation.y = damp(wm.rotation.y, this.reloading ? 0.25 : 0, 12, dt)
    if (this.recoil > 0.01) {
      wm.position.z -= this.recoil * 0.05
      wm.rotation.x += this.recoil * 0.06
    }
    if (this.ring) {
      this.ring.material.opacity = 0.35 + Math.sin(time * 2.4) * 0.1
    }
  }

  dispose() {
    this.scene.remove(this.group)
    this.nameplate?.material?.map?.dispose()
    this.nameplate?.material?.dispose?.()
    this.healthBar?.bg.material?.dispose?.()
    this.healthBar?.fill.material?.dispose?.()
    for (const m of Object.values(this.mats || {})) m.dispose?.()
  }
}

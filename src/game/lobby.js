import * as THREE from 'three'
import { createSky, createWater } from '../world/terrain.js'
import { Character } from '../entities/character.js'
import { makeTextTexture } from '../world/terrain.js'
import { makeCanvas } from '../core/utils.js'

function box(parent, material, x, y, z, w, h, d, rotY = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material)
  m.position.set(x, y, z)
  m.rotation.y = rotY
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

export class LobbyScene {
  constructor(renderer) {
    this.renderer = renderer
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 4000)
    this.orbit = 0.35
    this.character = null
    this._build()
  }

  _build() {
    const scene = this.scene
    this.sky = createSky(scene)
    scene.fog = new THREE.Fog(0xa9c9d4, 70, 1050)
    this.water = createWater(scene)
    this.water.mesh.position.y = -0.05

    // Distant island ring — a silhouette that sells the open world.
    const ridgeMat = new THREE.MeshStandardMaterial({ color: 0x3e5b52, roughness: 1, flatShading: true })
    const ridgeMat2 = new THREE.MeshStandardMaterial({ color: 0x2f4a48, roughness: 1, flatShading: true })
    const ridgeMat3 = new THREE.MeshStandardMaterial({ color: 0x6b7f75, roughness: 1, flatShading: true })
    for (let i = 0; i < 26; i++) {
      const a = (i / 26) * Math.PI * 2 + 0.12
      const r = 700 + (i % 4) * 55
      const h = 55 + ((i * 37) % 160)
      const w = 120 + ((i * 53) % 140)
      const geo = new THREE.ConeGeometry(w, h, 5 + (i % 3))
      const m = new THREE.Mesh(geo, i % 5 === 0 ? ridgeMat3 : i % 3 === 0 ? ridgeMat2 : ridgeMat)
      m.position.set(Math.cos(a) * r, h * 0.5 - 14, Math.sin(a) * r)
      m.rotation.y = i * 0.7
      m.scale.z = 0.5 + (i % 3) * 0.2
      scene.add(m)
    }
    // Distant city blocks on the horizon
    const cityMat = new THREE.MeshStandardMaterial({ color: 0x435a64, roughness: 0.9 })
    for (let i = 0; i < 18; i++) {
      const a = -0.9 + i * 0.025
      const r = 520 + (i % 4) * 18
      const h = 20 + ((i * 19) % 55)
      const m = new THREE.Mesh(new THREE.BoxGeometry(10 + (i % 3) * 5, h, 10), cityMat)
      m.position.set(Math.cos(a) * r, h / 2 - 2, Math.sin(a) * r)
      scene.add(m)
    }

    // Platform
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x2a353c, roughness: 0.45, metalness: 0.7 })
    const platform = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.8, 0.7, 8), platformMat)
    platform.position.y = 0.2
    platform.receiveShadow = true
    platform.castShadow = true
    scene.add(platform)
    const topMat = new THREE.MeshStandardMaterial({ color: 0x18242b, roughness: 0.5, metalness: 0.5 })
    const top = new THREE.Mesh(new THREE.CylinderGeometry(5.05, 5.05, 0.08, 8), topMat)
    top.position.y = 0.58
    scene.add(top)
    const rim = new THREE.Mesh(new THREE.RingGeometry(4.55, 4.72, 8), new THREE.MeshBasicMaterial({ color: 0xff8a2b, transparent: true, opacity: 0.85, side: THREE.DoubleSide }))
    rim.rotation.x = -Math.PI / 2
    rim.rotation.z = Math.PI / 8
    rim.position.y = 0.63
    scene.add(rim)
    const rim2 = new THREE.Mesh(new THREE.RingGeometry(3.9, 3.94, 64), new THREE.MeshBasicMaterial({ color: 0x63dcff, transparent: true, opacity: 0.6, side: THREE.DoubleSide }))
    rim2.rotation.x = -Math.PI / 2
    rim2.position.y = 0.64
    scene.add(rim2)
    // Holographic floor emblem
    const logo = makeTextTexture('BATTLE WORLD', { width: 512, height: 128, bg: 'rgba(0,0,0,0)', fg: 'rgba(234,246,255,.55)', accent: '#ff8a2b', font: '700 54px sans-serif', border: false })
    const logoMat = new THREE.MeshBasicMaterial({ map: logo, transparent: true, opacity: 0.35, depthWrite: false })
    const logoPlane = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), logoMat)
    logoPlane.rotation.x = -Math.PI / 2
    logoPlane.position.set(0, 0.65, 2.2)
    scene.add(logoPlane)

    // Light rig
    const key = new THREE.SpotLight(0xffe0b0, 380, 40, 0.55, 0.5, 1.2)
    key.position.set(7, 12, 6)
    key.target.position.set(0, 1, 0)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    scene.add(key, key.target)
    const rimLight = new THREE.SpotLight(0x63dcff, 300, 35, 0.5, 0.6, 1.4)
    rimLight.position.set(-6, 6, -7)
    rimLight.target.position.set(0, 1.2, 0)
    scene.add(rimLight, rimLight.target)
    const fill = new THREE.PointLight(0xff8a2b, 90, 18, 2)
    fill.position.set(3, 2.5, 4)
    scene.add(fill)
    const under = new THREE.PointLight(0x63dcff, 55, 12, 2)
    under.position.set(0, 0.2, 0)
    scene.add(under)

    // Floating embers / dust
    const count = 120
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = Math.random() * 9
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const dust = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffb86a, size: 0.055, transparent: true, opacity: 0.65, depthWrite: false, blending: THREE.AdditiveBlending }))
    scene.add(dust)
    this.dust = dust

    // Weapon crate + banners for a lived-in staging area
    const crateMat = new THREE.MeshStandardMaterial({ color: 0x263239, roughness: 0.6, metalness: 0.5 })
    box(scene, crateMat, -3.3, 1.1, -0.7, 1.7, 1.1, 0.9, 0.4)
    box(scene, new THREE.MeshStandardMaterial({ color: 0xff8a2b, roughness: 0.5, metalness: 0.4 }), -3.3, 1.68, -0.7, 1.75, 0.06, 0.95, 0.4)
    const bannerTex = makeTextTexture('ELITE', { width: 256, height: 512, bg: 'rgba(4,10,16,.82)', fg: '#eaf6ff', accent: '#ff8a2b', font: '700 84px sans-serif', sub: 'SURVIVAL', subFont: '600 32px sans-serif' })
    const bannerMat = new THREE.MeshBasicMaterial({ map: bannerTex, transparent: true, side: THREE.DoubleSide })
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 4.4), bannerMat)
    banner.position.set(-4.6, 3.4, -1.6)
    banner.rotation.y = 0.5
    scene.add(banner)

    // Dropship crossing the horizon
    this.dropship = new THREE.Group()
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x4e5a60, roughness: 0.6, metalness: 0.5 })
    box(this.dropship, hullMat, 0, 0, 0, 7, 1.4, 1.6)
    box(this.dropship, hullMat, -2.5, 0.7, 0, 2.2, 1.1, 1.3)
    box(this.dropship, hullMat, 3.5, -0.2, 0, 3.2, 0.3, 5.2)
    box(this.dropship, new THREE.MeshBasicMaterial({ color: 0xff8a2b }), -3.5, 0.2, 0, 0.25, 0.25, 0.25)
    this.dropship.position.set(-120, 64, -240)
    this.dropship.rotation.y = -0.2
    scene.add(this.dropship)

    this.resize(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight)
  }

  setCharacter(outfit, name, level = 1) {
    if (this.character) {
      this.character.setOutfit(outfit)
      this.character.setName(name, outfit.accent)
      return
    }
    this.character = new Character({
      scene: this.scene,
      outfit,
      name,
      teamColor: outfit.accent,
      isPlayer: true,
      quality: 'high',
      level,
    })
    this.character.setPosition(0.7, 0.66, 0)
    this.character.setWeapon({ id: 'ar_vk47', name: 'VK-47', category: 'ar', rarity: 'rare', damage: 24, rpm: 640, mag: 30, reload: 2, range: 190, spread: 0.7, recoil: 0.8, auto: true, pellets: 1, zoom: 1.4, mobility: 0.9 }, ['scope_2x', 'ext_mag'])
    this.character.aiming = false
  }

  resize(w, h) {
    this.camera.aspect = w / Math.max(1, h)
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h, false)
  }

  update(dt, time) {
    if (!this.character) return
    this.orbit += dt * 0.075
    const a = 0.4 + Math.sin(this.orbit * 0.55) * 0.55
    const radius = 6.4
    const target = new THREE.Vector3(0.55, 1.25, 0)
    this.camera.position.set(target.x + Math.sin(a) * radius, 2.45 + Math.sin(time * 0.32) * 0.1, target.z + Math.cos(a) * radius)
    this.camera.lookAt(target.x, 1.3, target.z)
    // Face the camera so the selected outfit always reads clearly.
    const yaw = Math.atan2(this.camera.position.x - this.character.group.position.x, this.camera.position.z - this.character.group.position.z)
    this.character.setYaw(yaw)
    this.character.moveSpeed = 0
    this.character.update(dt, time)
    this.character.group.position.y = 0.66 + Math.sin(time * 1.4) * 0.012
    this.water.mat.uniforms.uTime.value = time
    this.dust.rotation.y = time * 0.012
    this.dropship.position.x += dt * 2.2
    this.dropship.position.y = 64 + Math.sin(time * 0.3) * 2
    if (this.dropship.position.x > 260) this.dropship.position.x = -260
    if (this.sky.clouds) for (const c of this.sky.clouds) { c.position.x += c.userData.speed * dt; if (c.position.x > 1800) c.position.x = -1800 }
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }
}

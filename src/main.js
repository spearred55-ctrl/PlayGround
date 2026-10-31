import * as THREE from 'three'
import { setThree } from './core/utils.js'
import { loadProfile } from './core/save.js'
import { AudioEngine } from './core/audio.js'
import { InputManager } from './core/input.js'
import { Game } from './game/game.js'
import { UI } from './ui/ui.js'

setThree(THREE)

const canvas = document.getElementById('game-canvas')

function showFatal(message) {
  const fatal = document.getElementById('fatal-error')
  const text = document.getElementById('fatal-message')
  if (text) text.textContent = message
  if (fatal) fatal.classList.remove('hidden')
  for (const id of ['loading-screen', 'menu-screen', 'hud', 'touch-controls']) {
    document.getElementById(id)?.classList.add('hidden')
  }
}

async function boot() {
  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    })
  } catch (error) {
    showFatal('This device could not start WebGL. Try enabling hardware acceleration or a different browser.')
    console.error(error)
    return
  }

  renderer.setClearColor(0x050a10, 1)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.02
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const profile = loadProfile()
  const audio = new AudioEngine(profile)
  const input = new InputManager(canvas, profile)
  const game = new Game({ renderer, canvas, profile, audio, input })
  const ui = new UI(game)
  game.ui = ui
  document.body.classList.toggle('touch-mode', input.touchMode)
  document.body.classList.toggle('desktop-mode', !input.touchMode)

  game.resize()
  window.addEventListener('resize', () => game.resize())
  window.addEventListener('orientationchange', () => setTimeout(() => game.resize(), 120))

  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault()
    showFatal('The graphics context was lost. Reload the page to redeploy.')
  })

  window.addEventListener('error', e => {
    console.error('[BATTLE WORLD]', e.error || e.message)
  })
  window.addEventListener('unhandledrejection', e => {
    console.error('[BATTLE WORLD] promise', e.reason)
  })

  window.__BATTLE_WORLD__ = {
    version: '1.0.0',
    game,
    ui,
    profile,
    startMatch: mode => game.startMatch(mode),
    returnToLobby: () => game.returnToLobby(),
    state: () => ({ state: game.state, alive: game.aliveCount(), kills: game.player?.kills || 0, time: game.matchTime }),
  }

  try {
    await game.prepare()
  } catch (error) {
    console.error(error)
    showFatal('The island failed to load: ' + (error?.message || error))
    return
  }

  let last = performance.now()
  function frame(now) {
    const dt = Math.min(0.1, (now - last) / 1000)
    last = now
    try {
      game.update(dt)
      ui.update(dt)
      game.render()
    } catch (error) {
      console.error('[BATTLE WORLD] frame error', error)
    }
    input.endFrame()
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}

boot()

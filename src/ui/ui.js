import {
  PAD_DEFS, getHeight, WORLD_HALF, WORLD_SIZE, PLAY_RADIUS,
} from '../world/terrain.js'
import {
  SKINS, HAIR_STYLES, OUTFIT_COLORS, rankFor, xpForNext,
  currentOutfit, saveProfile, resetProfile, skinById,
} from '../core/save.js'
import {
  WEAPON_LIST, WEAPON_CATEGORY_LABELS, RARITY, weaponIconSvg, attachmentLabel,
} from '../game/weapons.js'
import { clamp } from '../core/utils.js'

const $ = id => document.getElementById(id)
const MODE_LABEL = { solo: 'SOLO', duo: 'DUO', squad: 'SQUAD', practice: 'PRACTICE' }

const ICONS = {
  medkit: '<svg viewBox="0 0 24 24"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/></svg>',
  bandage: '<svg viewBox="0 0 24 24"><path d="M4 14 14 4l6 6-10 10zM9 9l6 6"/></svg>',
  grenade: '<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="6"/><path d="M9 8h6M12 8V4M15 5l3-2"/></svg>',
  armor: '<svg viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 5 3 7.5 7 9 4-1.5 7-4 7-9V6z"/></svg>',
  helmet: '<svg viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0v4H4zM8 18v3M16 18v3"/></svg>',
  backpack: '<svg viewBox="0 0 24 24"><path d="M6 8h12v13H6zM9 8V5h6v3M9 12h6"/></svg>',
  ammo: '<svg viewBox="0 0 24 24"><path d="M8 21V7l4-4 4 4v14zM8 12h8"/></svg>',
  attachment: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',
  weapon: '<svg viewBox="0 0 24 24"><path d="M3 12h12l3 3h3M6 15l-1 5h3l2-4"/></svg>',
}

function safeName(value) {
  return String(value || '').replace(/[<>&"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]))
}

export class UI {
  constructor(game) {
    this.game = game
    this.profile = game.profile
    this.currentPanel = null
    this.layoutEditing = false
    this._drag = null
    this._announceTimer = 0
    this._bannerTimer = 0
    this._hitTimer = 0
    this._damageTimer = 0
    this._toasts = []
    this._fpsAcc = 0
    this._fpsFrames = 0
    this._fps = 60
    this._mapCanvas = null
    this._mapSize = 448
    this._arsenalCat = 'all'
    this._mmTimers = []
    this._invTimer = 0
    this._lastHud = {}

    this.el = {
      loading: $('loading-screen'), loadFill: $('load-fill'), loadStatus: $('load-status'), loadPercent: $('load-percent'),
      menu: $('menu-screen'), hud: $('hud'), touch: $('touch-controls'), overlay: $('overlay-root'), backdrop: $('overlay-backdrop'),
      play: $('btn-play'), playSub: $('play-sub'), online: $('btn-online'), onlineState: $('online-state'),
      serverLabel: $('server-label'), menuMatchSize: $('menu-match-size'), menuFps: $('menu-fps'),
      menuName: $('menu-name'), menuLevel: $('menu-level'), menuXp: $('menu-xp'), menuXpLabel: $('menu-xp-label'), menuRank: $('menu-rank'),
      menuAvatar: $('menu-avatar'), profileChip: $('profile-chip'), menuSkins: $('menu-skins'),
      opName: $('op-name'), opRole: $('op-role'),
      hudAlive: $('hud-alive'), hudKills: $('hud-kills'), hudMode: $('hud-mode'),
      zonePhase: $('zone-phase'), zoneTimer: $('zone-timer'), zoneState: $('zone-state'), miniZone: $('mini-zone'), miniTimer: $('mini-timer'),
      compass: $('compass'), compassTrack: $('compass-track'), killfeed: $('killfeed'), announce: $('announce'), banner: $('match-banner'),
      hitmarker: $('hitmarker'), damageIndicator: $('damage-indicator'), damageVignette: $('damage-vignette'),
      interact: $('interact-prompt'), interactLabel: $('interact-label'),
      healthFill: $('health-fill'), healthText: $('health-text'), armorFill: $('armor-fill'), armorText: $('armor-text'),
      hudPlayerName: $('hud-player-name'), hudTeam: $('hud-team'), hudHelmet: $('hud-helmet'), hudBackpack: $('hud-backpack'), hudStatus: $('hud-status'),
      healProgress: $('heal-progress'), ammoMag: $('ammo-mag'), ammoReserve: $('ammo-reserve'), weaponName: $('weapon-name'), fireMode: $('fire-mode'), reloadBar: $('reload-bar'),
      minimap: $('minimap'), fullMap: $('full-map'), menuMap: $('menu-map'), mapCoords: $('map-coords'), mapZoneInfo: $('map-zone-info'),
      spectate: $('spectate-banner'), spectateName: $('spectate-name'),
      resultPanel: document.querySelector('[data-panel-id="result"]'),
      resultTitle: $('result-title'), resultKicker: $('result-kicker'), resultSub: $('result-sub'),
      resPlace: $('res-place'), resKills: $('res-kills'), resDamage: $('res-damage'), resXp: $('res-xp'),
      btnSpectateResult: $('btn-result-spectate'),
      toastRoot: $('toast-root'),
      invWeapons: $('inv-weapons'), invAmmo: $('inv-ammo'), invItems: $('inv-items'), invGround: $('inv-ground'),
      invCap: $('inv-cap'), invCapMax: $('inv-cap-max'), invBackpack: $('inv-backpack'),
      profileName: $('profile-name'), profileRank: $('profile-rank'), profileXp: $('profile-xp'), profileXpLabel: $('profile-xp-label'),
      profileBadge: $('profile-badge'), profileSkinList: $('profile-skin-list'),
      statMatches: $('stat-matches'), statWins: $('stat-wins'), statKills: $('stat-kills'), statKd: $('stat-kd'),
      statDamage: $('stat-damage'), statBest: $('stat-best'), statTime: $('stat-time'), statLevel: $('stat-level'),
      charName: $('char-name'), charColors: $('char-colors'), charHair: $('char-hair'), charSkins: $('char-skins'),
      charPreview: document.querySelector('.char-preview'),
      arsenalList: $('arsenal-list'), arsenalTabs: $('arsenal-tabs'),
      layoutBanner: $('layout-edit-banner'),
      mmCount: $('mm-count'), mmStatus: $('mm-status'), mmFill: $('mm-fill'),
      pauseStats: $('pause-stats'),
      fatal: $('fatal-error'), fatalMessage: $('fatal-message'),
    }

    this._buildCompass()
    this._bind()
    this._loadSettings()
    this._renderCharacter()
    this._renderArsenal()
    this.refreshMenu()
    this._renderProfile()

    // Deferred map bake keeps the loading screen responsive.
    setTimeout(() => {
      this._ensureMap()
      this._drawMenuMap()
    }, 60)
  }

  // ── helpers ───────────────────────────────────────────────────
  _on(el, event, fn, opts) { if (el) el.addEventListener(event, fn, opts) }

  _setHidden(el, hidden) { if (el) el.classList.toggle('hidden', !!hidden) }

  _setPanel(name) {
    for (const panel of document.querySelectorAll('[data-panel-id]')) {
      panel.classList.toggle('open', panel.dataset.panelId === name)
    }
    this.el.overlay?.classList.toggle('open', !!name)
    this.currentPanel = name || null
    if (name === 'inventory') this._renderInventory()
    if (name === 'map') this._drawFullMap()
    if (name === 'profile') this._renderProfile()
    if (name === 'character') this._renderCharacter()
    if (name === 'loadout') this._renderArsenal()
    if (name === 'pause') this._refreshPause()
    if (name === 'matchmaking') this._startMatchmaking()
  }

  _loadSettings() {
    const s = this.profile.settings
    const bind = (id, value, outId, suffix = '') => {
      const el = $(id)
      if (!el) return
      if (el.type === 'checkbox') el.checked = !!value
      else el.value = value
      if (outId) {
        const out = $(outId)
        if (out) out.textContent = value + suffix
      }
    }
    bind('set-quality', s.quality)
    bind('set-scale', s.renderScale, 'set-scale-out', '%')
    bind('set-shadows', s.shadows)
    bind('set-motion', s.motionBlur)
    bind('set-sens', s.sensitivity, 'set-sens-out')
    bind('set-btnsize', s.buttonScale, 'set-btnsize-out', '%')
    bind('set-autosprint', s.autoSprint)
    bind('set-aimassist', s.aimAssist)
    bind('set-volume', s.volume, 'set-volume-out', '%')
    bind('set-sfx', s.sfx, 'set-sfx-out', '%')
    bind('set-zoneaudio', s.zoneAudio)
    bind('set-matchsize', s.matchSize)
    bind('set-botskill', s.botSkill)
    bind('set-fps', s.showFps)
  }

  _saveSettings() {
    saveProfile(this.profile)
    this.game.applySettings()
    this.refreshMenu()
  }

  // ── construction ─────────────────────────────────────────────
  _buildCompass() {
    if (!this.el.compassTrack) return
    this.el.compassTrack.innerHTML = ''
    this._compassMarks = []
    const cardinals = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' }
    for (let b = 0; b < 360; b += 15) {
      const span = document.createElement('span')
      if (cardinals[b]) {
        span.className = 'cardinal'
        span.textContent = cardinals[b]
      } else {
        span.className = 'tick'
      }
      span.dataset.bearing = String(b)
      this.el.compassTrack.appendChild(span)
      this._compassMarks.push(span)
    }
  }

  _bind() {
    // Menu mode cards.
    for (const card of document.querySelectorAll('#mode-grid [data-mode]')) {
      this._on(card, 'click', () => {
        this.game.mode = card.dataset.mode
        for (const c of document.querySelectorAll('#mode-grid [data-mode]')) c.classList.toggle('active', c === card)
        this.refreshMenu()
        this.game.audio?.ui()
      })
    }

    this._on(this.el.play, 'click', () => this.game.startMatch(this.game.mode))
    this._on(this.el.online, 'click', () => this.openPanel('matchmaking'))
    this._on(this.el.profileChip, 'click', () => this.openPanel('profile'))
    this._on($('btn-settings-top'), 'click', e => { e.stopPropagation(); this.openPanel('settings') })

    // Every element that opens a panel.
    for (const el of document.querySelectorAll('[data-panel]')) {
      if (el.closest('[data-panel-id]') && el.tagName === 'BUTTON') {
        // pause panel shortcut buttons still work
      }
      this._on(el, 'click', e => {
        e.preventDefault()
        this.openPanel(el.dataset.panel)
      })
    }
    for (const el of document.querySelectorAll('[data-close]')) {
      this._on(el, 'click', e => { e.preventDefault(); this.closePanels() })
    }
    this._on(this.el.backdrop, 'click', () => this.closePanels())
    this._on($('btn-map'), 'click', () => this.openPanel('map'))
    this._on($('interact-btn'), 'click', () => this.game.interact())
    this._on($('btn-spectate-next'), 'click', () => this.game._nextSpectate())
    this._on($('btn-spectate-exit'), 'click', () => this.game.exitSpectate())
    this._on($('btn-play-again'), 'click', () => { this.closePanels(true); this.game.startMatch(this.game.mode) })
    this._on($('btn-result-lobby'), 'click', () => { this.closePanels(true); this.game.returnToLobby() })
    this._on(this.el.btnSpectateResult, 'click', () => { this.closePanels(true); this.game.startSpectate() })
    this._on($('btn-leave-match'), 'click', () => { this.closePanels(true); this.game.returnToLobby() })
    this._on($('btn-mm-local'), 'click', () => { this.closePanels(true); this.game.startMatch(this.game.mode) })
    this._on($('btn-reset-save'), 'click', () => {
      if (!window.confirm('Reset your profile, unlocks and settings?')) return
      resetProfile()
      location.reload()
    })

    // HUD quick actions.
    for (const btn of document.querySelectorAll('.quick-btn[data-action]')) {
      this._on(btn, 'click', () => {
        const action = btn.dataset.action
        if (action === 'inventory') this.openPanel('inventory')
        else if (action === 'map') this.openPanel('map')
        else if (action === 'pause') this.openPanel('pause')
        else if (action === 'med') this.game.player?.startHeal()
        else if (action === 'grenade') this.game.player?.throwGrenade()
      })
    }

    // Pause resume.
    for (const btn of document.querySelectorAll('[data-resume]')) {
      this._on(btn, 'click', () => this.closePanels(true))
    }

    // Settings controls.
    const settingMap = [
      ['set-quality', 'quality', 'string'],
      ['set-scale', 'renderScale', 'number', 'set-scale-out', '%'],
      ['set-shadows', 'shadows', 'bool'],
      ['set-motion', 'motionBlur', 'bool'],
      ['set-sens', 'sensitivity', 'number', 'set-sens-out'],
      ['set-btnsize', 'buttonScale', 'number', 'set-btnsize-out', '%'],
      ['set-autosprint', 'autoSprint', 'bool'],
      ['set-aimassist', 'aimAssist', 'bool'],
      ['set-volume', 'volume', 'number', 'set-volume-out', '%'],
      ['set-sfx', 'sfx', 'number', 'set-sfx-out', '%'],
      ['set-zoneaudio', 'zoneAudio', 'bool'],
      ['set-matchsize', 'matchSize', 'number'],
      ['set-botskill', 'botSkill', 'string'],
      ['set-fps', 'showFps', 'bool'],
    ]
    for (const [id, key, kind, outId, suffix] of settingMap) {
      const el = $(id)
      if (!el) continue
      const handler = () => {
        let value
        if (kind === 'bool') value = el.checked
        else if (kind === 'number') value = Number(el.value)
        else value = el.value
        this.profile.settings[key] = value
        if (outId) { const out = $(outId); if (out) out.textContent = value + (suffix || '') }
        this._saveSettings()
      }
      this._on(el, 'input', handler)
      this._on(el, 'change', handler)
    }

    // Character customization.
    this._on(this.el.charName, 'input', () => {
      const name = (this.el.charName.value || '').toUpperCase().replace(/[^A-Z0-9 _-]/g, '').slice(0, 14) || 'NOVA-07'
      this.profile.name = name
      saveProfile(this.profile)
      this._syncIdentity()
      this._syncLobbyCharacter()
    })
    this._buildCharacterSwatches()

    // Arsenal tabs.
    if (this.el.arsenalTabs) {
      for (const tab of this.el.arsenalTabs.querySelectorAll('[data-cat]')) {
        this._on(tab, 'click', () => {
          this._arsenalCat = tab.dataset.cat
          for (const t of this.el.arsenalTabs.querySelectorAll('[data-cat]')) t.classList.toggle('active', t === tab)
          this._renderArsenal()
        })
      }
    }

    // Touch layout editor.
    this._on($('btn-edit-layout'), 'click', () => this.startLayoutEdit())
    this._on($('btn-layout-save'), 'click', () => this.finishLayoutEdit(true))
    this._on($('btn-layout-cancel'), 'click', () => this.finishLayoutEdit(false))
    this._on($('btn-layout-done'), 'click', () => this.startLayoutEdit())
    this._on($('btn-layout-reset'), 'click', () => {
      this.profile.settings.touchLayout = {}
      saveProfile(this.profile)
      this.game.input.applyLayout({})
      this.toast('TOUCH LAYOUT RESET', 'good')
    })
    this._bindLayoutDrag()

    // Keyboard shortcuts for menu / pause.
    window.addEventListener('keydown', e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA')) return
      if (e.code === 'Enter' && this.game.state === 'lobby' && !this.currentPanel) {
        e.preventDefault()
        this.game.startMatch(this.game.mode)
      } else if (e.code === 'Escape') {
        if (this.currentPanel) { e.preventDefault(); this.closePanels() }
        else if (this.game.state === 'match') { e.preventDefault(); this.openPanel('pause') }
      }
    })

    // Audio unlock on the first user gesture. Pointer lock is handled by the
    // input manager on the canvas itself so HUD buttons stay clickable.
    window.addEventListener('pointerdown', () => {
      this.game.audio?.init()
    }, { passive: true })
  }

  _bindLayoutDrag() {
    for (const el of document.querySelectorAll('#touch-controls [data-action]')) {
      el.addEventListener('pointerdown', e => {
        if (!this.layoutEditing) return
        e.preventDefault()
        e.stopPropagation()
        this._drag = { el, pointerId: e.pointerId }
        el.setPointerCapture?.(e.pointerId)
      }, { capture: true })
    }
    window.addEventListener('pointermove', e => {
      if (!this.layoutEditing || !this._drag || e.pointerId !== this._drag.pointerId) return
      const x = clamp(e.clientX / window.innerWidth * 100, 4, 96)
      const y = clamp(e.clientY / window.innerHeight * 100, 6, 94)
      const el = this._drag.el
      el.style.left = x + '%'
      el.style.top = y + '%'
      el.style.right = 'auto'
      el.style.bottom = 'auto'
      el.style.transform = 'translate(-50%, -50%)'
    })
    window.addEventListener('pointerup', e => {
      if (!this._drag || e.pointerId !== this._drag.pointerId) return
      this._drag = null
    })
  }

  _buildCharacterSwatches() {
    if (this.el.charColors) {
      this.el.charColors.innerHTML = ''
      for (const color of OUTFIT_COLORS) {
        const b = document.createElement('button')
        b.style.background = color
        b.dataset.color = color
        b.title = color
        b.addEventListener('click', () => {
          this.profile.outfit.primary = color
          saveProfile(this.profile)
          this._renderCharacter()
          this._syncLobbyCharacter()
          this._renderMenuSkins()
        })
        this.el.charColors.appendChild(b)
      }
    }
    if (this.el.charHair) {
      this.el.charHair.innerHTML = ''
      for (const hair of HAIR_STYLES) {
        const b = document.createElement('button')
        b.textContent = hair.name.slice(0, 1)
        b.dataset.hair = hair.id
        b.title = hair.name
        b.addEventListener('click', () => {
          this.profile.outfit.hair = hair.id
          saveProfile(this.profile)
          this._renderCharacter()
          this._syncLobbyCharacter()
        })
        this.el.charHair.appendChild(b)
      }
    }
  }

  // ── menu / screens ───────────────────────────────────────────
  showMenu() {
    this.closePanels(true)
    this._setHidden(this.el.loading, true)
    this._setHidden(this.el.hud, true)
    this._setHidden(this.el.touch, true)
    this._setHidden(this.el.menu, false)
    this.el.menu?.classList.remove('out')
    this._setHidden(this.el.spectate, true)
    this.refreshMenu()
    this._drawMenuMap()
  }

  showLoading(percent = 0, status = 'PREPARING') {
    this.setLoading(percent, status)
    this._setHidden(this.el.loading, false)
    this._setHidden(this.el.menu, true)
    this._setHidden(this.el.hud, true)
    this._setHidden(this.el.touch, true)
    this.closePanels(true)
  }

  setLoading(percent, status) {
    const p = clamp(Math.round(percent), 0, 100)
    if (this.el.loadFill) this.el.loadFill.style.width = p + '%'
    if (this.el.loadPercent) this.el.loadPercent.textContent = p + '%'
    if (this.el.loadStatus && status) this.el.loadStatus.textContent = status
  }

  hideLoading() { this._setHidden(this.el.loading, true) }

  showHud() {
    this._setHidden(this.el.loading, true)
    this._setHidden(this.el.menu, true)
    this._setHidden(this.el.hud, false)
    this._setHidden(this.el.touch, !this.game.input.touchMode)
    this.el.menu?.classList.remove('out')
    this._setHidden(this.el.spectate, true)
    this._lastHud = {}
  }

  fatal(message) {
    this._setHidden(this.el.loading, true)
    this._setHidden(this.el.menu, true)
    this._setHidden(this.el.hud, true)
    this._setHidden(this.el.touch, true)
    if (this.el.fatalMessage) this.el.fatalMessage.textContent = message || 'This device could not start WebGL.'
    this._setHidden(this.el.fatal, false)
  }

  refreshMenu() {
    const p = this.profile
    const mode = this.game.mode || 'solo'
    const size = mode === 'practice' ? 10 : (Number(p.settings.matchSize) || 25)
    if (this.el.menuName) this.el.menuName.textContent = p.name
    if (this.el.menuLevel) this.el.menuLevel.textContent = 'LV ' + p.level
    if (this.el.menuXp) this.el.menuXp.style.width = clamp(p.xp / xpForNext(p.level) * 100, 0, 100) + '%'
    if (this.el.menuXpLabel) this.el.menuXpLabel.textContent = `${Math.round(p.xp)} / ${xpForNext(p.level)} XP`
    if (this.el.menuRank) this.el.menuRank.textContent = rankFor(p.level)
    if (this.el.opName) this.el.opName.textContent = p.name
    if (this.el.opRole) this.el.opRole.textContent = rankFor(p.level)
    if (this.el.playSub) this.el.playSub.textContent = `${MODE_LABEL[mode] || 'SOLO'} • ${size} OPERATIVES`
    if (this.el.menuMatchSize) this.el.menuMatchSize.textContent = String(size)
    if (this.el.hudPlayerName) this.el.hudPlayerName.textContent = p.name
    if (this.el.menuFps) this.el.menuFps.style.display = p.settings.showFps ? '' : 'none'
    for (const c of document.querySelectorAll('#mode-grid [data-mode]')) c.classList.toggle('active', c.dataset.mode === mode)
    this._syncIdentity()
    this._renderMenuSkins()
  }

  _syncIdentity() {
    const p = this.profile
    const initial = (p.name || 'N').slice(0, 1).toUpperCase()
    const outfit = currentOutfit(p)
    if (this.el.menuAvatar) {
      this.el.menuAvatar.innerHTML = `<span>${safeName(initial)}</span>`
      this.el.menuAvatar.style.background = `radial-gradient(circle at 35% 25%, ${outfit.accent}, ${outfit.primary} 55%, ${outfit.secondary})`
    }
    if (this.el.profileBadge) {
      this.el.profileBadge.textContent = initial
      this.el.profileBadge.style.background = `linear-gradient(140deg, ${outfit.accent}, ${outfit.primary})`
    }
    if (this.el.hudPlayerName) this.el.hudPlayerName.textContent = p.name
    if (this.el.profileChip) this.el.profileChip.setAttribute('aria-label', `Open profile for ${p.name}`)
  }

  _syncLobbyCharacter() {
    if (!this.game.lobby) return
    this.game.lobby.setCharacter(currentOutfit(this.profile), this.profile.name, this.profile.level)
    if (this.el.charPreview) {
      const o = currentOutfit(this.profile)
      this.el.charPreview.style.background = `radial-gradient(ellipse at 50% 78%, ${o.accent}33, transparent 62%), linear-gradient(180deg, ${o.secondary}, #050d14)`
    }
  }

  _renderMenuSkins() {
    if (!this.el.menuSkins) return
    const p = this.profile
    const unlocked = SKINS.filter(s => p.unlockedSkins.includes(s.id))
    this.el.menuSkins.innerHTML = ''
    for (const skin of unlocked.slice(-6)) {
      const b = document.createElement('button')
      b.style.background = `linear-gradient(135deg, ${skin.accent}, ${skin.primary} 55%, ${skin.secondary})`
      b.title = skin.name
      b.classList.toggle('active', p.outfit.skin === skin.id)
      b.addEventListener('click', () => this._selectSkin(skin))
      this.el.menuSkins.appendChild(b)
    }
  }

  _selectSkin(skin) {
    if (!this.profile.unlockedSkins.includes(skin.id)) {
      this.toast(`UNLOCKS AT LEVEL ${skin.level}`, 'warn')
      return
    }
    this.profile.outfit.skin = skin.id
    this.profile.outfit.primary = skin.primary
    this.profile.outfit.hairColor = skin.hair
    saveProfile(this.profile)
    this._syncIdentity()
    this._syncLobbyCharacter()
    this._renderMenuSkins()
    this._renderCharacter()
    this._renderProfile()
    this.toast(`${skin.name} EQUIPPED`, 'good')
  }

  // ── panels ───────────────────────────────────────────────────
  openPanel(name, force = false) {
    if (!name) return
    if (name === 'layout') { this.startLayoutEdit(); return }
    if (this.game.state === 'match' && !force) this.game.setPaused(true)
    this._setPanel(name)
    this.game.audio?.ui()
  }

  closePanels(force = false) {
    this._setPanel(null)
    if (this.game.state === 'match' && this.game.paused) this.game.setPaused(false)
  }

  setOnlineState(label) {
    const text = label || 'SERVER OFFLINE · LOCAL READY'
    if (this.el.onlineState) this.el.onlineState.textContent = text
    if (this.el.serverLabel) this.el.serverLabel.textContent = /offline/i.test(text) ? 'LOCAL PRACTICE' : text
  }

  _refreshPause() {
    const g = this.game
    if (this.el.pauseStats) {
      this.el.pauseStats.textContent = `ALIVE ${g.aliveCount()} · KILLS ${g.player?.kills || 0}`
    }
  }

  // ── matchmaking ──────────────────────────────────────────────
  _startMatchmaking() {
    this._clearMatchmaking()
    let n = 0
    if (this.el.mmCount) this.el.mmCount.textContent = '0'
    if (this.el.mmFill) this.el.mmFill.style.width = '0%'
    if (this.el.mmStatus) this.el.mmStatus.textContent = 'SCANNING FOR DEDICATED SERVERS…'
    const tick = () => {
      n++
      if (this.el.mmFill) this.el.mmFill.style.width = Math.min(100, n * 14) + '%'
      if (this.el.mmStatus) {
        if (n === 2) this.el.mmStatus.textContent = 'PROBING REGION RELAYS…'
        else if (n === 4) this.el.mmStatus.textContent = 'NO SERVER HANDSHAKE RECEIVED'
      }
      if (n < 7) this._mmTimers.push(setTimeout(tick, 280))
      else {
        if (this.el.mmCount) this.el.mmCount.textContent = '0'
        if (this.el.mmStatus) this.el.mmStatus.textContent = 'NO DEDICATED SERVER ON THIS BUILD · LOCAL SIM READY'
      }
    }
    this._mmTimers.push(setTimeout(tick, 280))
  }

  _clearMatchmaking() {
    for (const t of this._mmTimers) clearTimeout(t)
    this._mmTimers.length = 0
  }

  // ── settings / profile / character / arsenal ────────────────
  _renderProfile() {
    const p = this.profile
    const rank = rankFor(p.level)
    if (this.el.profileName) this.el.profileName.textContent = p.name
    if (this.el.profileRank) this.el.profileRank.textContent = `${rank} · LEVEL ${p.level}`
    if (this.el.profileXp) this.el.profileXp.style.width = clamp(p.xp / xpForNext(p.level) * 100, 0, 100) + '%'
    if (this.el.profileXpLabel) this.el.profileXpLabel.textContent = `${Math.round(p.xp)} / ${xpForNext(p.level)} XP TO NEXT LEVEL`
    const set = (el, value) => { if (el) el.textContent = value }
    set(this.el.statMatches, p.matches)
    set(this.el.statWins, p.wins)
    set(this.el.statKills, p.kills)
    set(this.el.statKd, (p.kills / Math.max(1, p.deaths)).toFixed(2))
    set(this.el.statDamage, Math.round(p.damage))
    set(this.el.statBest, p.bestPlace ? '#' + p.bestPlace : '—')
    set(this.el.statTime, Math.round(p.timePlayed / 60) + 'm')
    set(this.el.statLevel, p.level)
    this._syncIdentity()
    if (this.el.profileSkinList) {
      this.el.profileSkinList.innerHTML = ''
      for (const skin of SKINS) {
        const unlocked = p.unlockedSkins.includes(skin.id)
        const card = document.createElement('button')
        card.className = 'skin-card' + (p.outfit.skin === skin.id ? ' active' : '') + (unlocked ? '' : ' locked')
        card.dataset.level = skin.level
        card.innerHTML = `<div class="skin-swatch" style="background:linear-gradient(135deg,${skin.accent},${skin.primary} 55%,${skin.secondary})"></div><b>${skin.name}</b><span>${unlocked ? skin.rarity : 'LEVEL ' + skin.level}</span>`
        card.addEventListener('click', () => this._selectSkin(skin))
        this.el.profileSkinList.appendChild(card)
      }
    }
  }

  _renderCharacter() {
    const p = this.profile
    if (this.el.charName) this.el.charName.value = p.name
    if (this.el.charColors) {
      for (const b of this.el.charColors.querySelectorAll('button')) {
        b.classList.toggle('active', b.dataset.color === p.outfit.primary)
      }
    }
    if (this.el.charHair) {
      for (const b of this.el.charHair.querySelectorAll('button')) {
        b.classList.toggle('active', b.dataset.hair === p.outfit.hair)
      }
    }
    if (this.el.charSkins) {
      this.el.charSkins.innerHTML = ''
      for (const skin of SKINS) {
        const unlocked = p.unlockedSkins.includes(skin.id)
        const card = document.createElement('button')
        card.className = 'skin-card' + (p.outfit.skin === skin.id ? ' active' : '') + (unlocked ? '' : ' locked')
        card.dataset.level = skin.level
        card.innerHTML = `<div class="skin-swatch" style="background:linear-gradient(135deg,${skin.accent},${skin.primary} 55%,${skin.secondary})"></div><b>${skin.name}</b><span>${unlocked ? skin.rarity : 'LEVEL ' + skin.level}</span>`
        card.addEventListener('click', () => this._selectSkin(skin))
        this.el.charSkins.appendChild(card)
      }
    }
    this._syncLobbyCharacter()
  }

  _renderArsenal() {
    if (!this.el.arsenalList) return
    const cat = this._arsenalCat
    const list = WEAPON_LIST.filter(w => cat === 'all' || w.category === cat)
    this.el.arsenalList.innerHTML = ''
    for (const w of list) {
      const card = document.createElement('div')
      card.className = 'arsenal-card'
      const rarity = RARITY[w.rarity] || RARITY.common
      card.style.borderColor = rarity.color + '55'
      const stat = (label, value) => `<div><span>${label}</span><i><b style="width:${clamp(value, 4, 100)}%"></b></i></div>`
      card.innerHTML = `
        <div class="arsenal-art" style="color:${rarity.color}">${weaponIconSvg(w)}</div>
        <div class="arsenal-info">
          <span class="cat" style="color:${rarity.color}">${rarity.name} · ${WEAPON_CATEGORY_LABELS[w.category] || w.category}</span>
          <b>${w.name}</b>
          <div class="arsenal-bars">
            ${stat('DMG', w.damage / 1.1)}
            ${stat('RATE', w.rpm / 10)}
            ${stat('RANGE', w.range / 3.8)}
            ${stat('MOB', w.mobility * 74)}
          </div>
        </div>
        <div class="arsenal-desc">${w.desc}</div>`
      this.el.arsenalList.appendChild(card)
    }
  }

  // ── inventory ────────────────────────────────────────────────
  _renderInventory() {
    const g = this.game
    const p = g.player
    if (!p) return
    if (this.el.invWeapons) {
      this.el.invWeapons.innerHTML = ''
      p.weapons.forEach((entry, slot) => {
        const div = document.createElement('div')
        div.className = 'inv-weapon' + (p.currentSlot === slot ? ' active' : '')
        if (!entry) {
          div.innerHTML = `<div class="wicon">${ICONS.weapon}</div><div class="wmeta"><b>EMPTY SLOT ${slot + 1}</b><span>NO WEAPON</span></div>`
        } else {
          const reserve = entry.def.ammo === 'none' ? '∞' : (p.ammo[entry.def.ammo] || 0)
          div.innerHTML = `<div class="wicon">${weaponIconSvg(entry.def)}</div>
            <div class="wmeta"><b>${entry.def.name}</b><span>${(WEAPON_CATEGORY_LABELS[entry.def.category] || '')} · ${entry.attachments.map(attachmentLabel).join(' · ') || 'NO ATTACHMENTS'}</span></div>
            <div class="wammo">${entry.mag}<small>/${reserve}</small></div>
            <button class="wbtn" data-act="equip">EQUIP</button>
            <button class="wbtn" data-act="drop">DROP</button>`
          div.querySelector('[data-act="equip"]').addEventListener('click', () => { p.setSlot(slot); this._renderInventory() })
          div.querySelector('[data-act="drop"]').addEventListener('click', () => { p.dropWeapon(slot); this._renderInventory() })
        }
        this.el.invWeapons.appendChild(div)
      })
    }
    if (this.el.invAmmo) {
      this.el.invAmmo.innerHTML = ''
      for (const type of ['light', 'heavy', 'shells', 'sniper', 'pistol']) {
        const div = document.createElement('div')
        div.className = 'ammo-item'
        div.innerHTML = `<span>${type.toUpperCase()}</span><b>${p.ammo[type] || 0}</b>`
        this.el.invAmmo.appendChild(div)
      }
    }
    if (this.el.invItems) {
      this.el.invItems.innerHTML = ''
      const items = [
        { key: 'medkit', name: 'MEDKIT', qty: p.items.medkit, icon: 'medkit', desc: 'RESTORE 65' },
        { key: 'bandage', name: 'BANDAGE', qty: p.items.bandage, icon: 'bandage', desc: 'RESTORE 28' },
        { key: 'grenade', name: 'FRAG', qty: p.items.grenade, icon: 'grenade', desc: 'THROW' },
      ]
      for (const item of items) {
        const btn = document.createElement('button')
        btn.className = 'inv-item'
        btn.innerHTML = `<div class="item-icon">${ICONS[item.icon]}</div><b>${item.name}</b><span>${item.desc}</span><i class="qty">${item.qty}</i>`
        btn.addEventListener('click', () => {
          if (item.qty <= 0) { this.toast('NONE LEFT', 'warn'); return }
          if (item.key === 'grenade') p.throwGrenade()
          else p.useMedical(item.key)
          this._renderInventory()
        })
        this.el.invItems.appendChild(btn)
      }
    }
    if (this.el.invGround) {
      this.el.invGround.innerHTML = ''
      const near = g.loot ? g.loot.nearItems(p.pos.x, p.pos.y, p.pos.z, 7) : []
      if (!near.length) {
        this.el.invGround.innerHTML = '<div class="inv-empty">NO SUPPLIES WITHIN REACH</div>'
      } else {
        for (const item of near.slice(0, 12)) {
          const row = document.createElement('div')
          row.className = 'ground-item'
          row.innerHTML = `<span>${safeName(g.lootLabel(item))}</span><button>PICK UP</button>`
          row.querySelector('button').addEventListener('click', () => {
            const result = p.pickup(item)
            if (result.ok) this.toast(result.message, 'loot')
            else if (result.message) this.toast(result.message, 'warn')
            this._renderInventory()
          })
          this.el.invGround.appendChild(row)
        }
      }
    }
    if (this.el.invCap) this.el.invCap.textContent = p.items.medkit + p.items.bandage + p.items.grenade
    if (this.el.invCapMax) this.el.invCapMax.textContent = p.maxItems
    if (this.el.invBackpack) this.el.invBackpack.textContent = 'L' + p.backpack
  }

  // ── layout editor ───────────────────────────────────────────
  startLayoutEdit() {
    this.closePanels(true)
    this.layoutEditing = true
    document.body.classList.add('layout-editing')
    this._setHidden(this.el.touch, false)
    this._setHidden(this.el.layoutBanner, false)
    this.game.input.setPlaying(false)
    this.game.input.setBlocked(true)
    this.toast('DRAG CONTROLS TO REPOSITION', 'good')
  }

  finishLayoutEdit(save) {
    if (!this.layoutEditing) return
    if (save) {
      this.profile.settings.touchLayout = this.game.input.captureLayout()
      saveProfile(this.profile)
    }
    this.layoutEditing = false
    document.body.classList.remove('layout-editing')
    this._setHidden(this.el.layoutBanner, true)
    this.game.input.applyLayout(this.profile.settings.touchLayout || {})
    this.game.input.applyButtonScale(this.profile.settings.buttonScale)
    this.game.input.setBlocked(false)
    if (this.game.state === 'match') {
      this.game.setPaused(false)
      this._setHidden(this.el.touch, false)
    } else {
      this._setHidden(this.el.touch, true)
      this.game.input.setPlaying(false)
    }
    this.toast(save ? 'TOUCH LAYOUT SAVED' : 'LAYOUT EDIT CANCELLED', save ? 'good' : 'warn')
  }

  // ── HUD ─────────────────────────────────────────────────────
  updateHUD(game) {
    const p = game.player
    if (!p) return
    const s = p.getHudState()
    const setText = (el, value) => { if (el && el.textContent !== String(value)) el.textContent = value }
    const setWidth = (el, value) => { if (el) el.style.width = clamp(value, 0, 100) + '%' }
    setWidth(this.el.healthFill, s.health)
    setText(this.el.healthText, Math.ceil(s.health))
    setWidth(this.el.armorFill, s.armor)
    setText(this.el.armorText, Math.ceil(s.armor))
    setText(this.el.hudAlive, game.aliveCount())
    setText(this.el.hudKills, p.kills)
    setText(this.el.hudMode, (MODE_LABEL[game.mode] || 'SOLO'))
    setText(this.el.hudPlayerName, p.name)
    setText(this.el.hudTeam, game.teamSize > 1 ? `TEAM ${p.team + 1}` : 'SOLO')
    setText(this.el.hudHelmet, s.helmet > 0 ? `HELMET L${s.helmet}` : 'NO HELMET')
    setText(this.el.hudBackpack, `PACK L${s.backpack}`)
    const status = s.healing ? 'HEALING' : s.vehicle ? 'DRIVING' : s.swimming ? 'SWIMMING' : s.crouching ? 'CROUCHED' : s.sprinting ? 'SPRINTING' : s.aiming ? 'ADS' : 'READY'
    setText(this.el.hudStatus, status)
    this.el.touch?.classList.toggle('vehicle-active', !!s.vehicle)

    if (this.el.healProgress) {
      this.el.healProgress.classList.toggle('hidden', !s.healing)
      const bar = this.el.healProgress.querySelector('i')
      if (bar) bar.style.width = (s.healProgress * 100) + '%'
      const label = this.el.healProgress.querySelector('span')
      if (label) label.textContent = s.healing === 'medkit' ? 'USING MEDKIT' : 'USING BANDAGE'
    }
    if (this.el.reloadBar) {
      this.el.reloadBar.classList.toggle('hidden', !s.reloading)
      const bar = this.el.reloadBar.querySelector('i')
      if (bar) bar.style.width = (s.reloadProgress * 100) + '%'
    }
    setText(this.el.ammoMag, s.magSize ? s.mag : '—')
    setText(this.el.ammoReserve, s.ammoType === 'none' ? '∞' : (Number.isFinite(s.reserve) ? s.reserve : '—'))
    setText(this.el.weaponName, s.weaponName)
    setText(this.el.fireMode, s.category === 'melee' ? 'MELEE' : s.auto ? 'AUTO' : 'SEMI')

    for (const slot of document.querySelectorAll('.wslot')) {
      const idx = Number(slot.dataset.slot)
      const entry = p.weapons[idx]
      slot.classList.toggle('active', p.currentSlot === idx)
      const nameEl = slot.querySelector('span')
      const typeEl = slot.querySelector('em')
      if (nameEl) nameEl.textContent = entry ? entry.def.name : '—'
      if (typeEl) typeEl.textContent = entry ? (WEAPON_CATEGORY_LABELS[entry.def.category] || entry.def.category).split(' ')[0] : 'EMPTY'
    }

    const z = game.zone.getState()
    setText(this.el.zonePhase, `ZONE ${z.phase}`)
    setText(this.el.zoneTimer, z.timerText)
    setText(this.el.zoneState, z.shrinking ? 'CLOSING NOW' : z.finished ? 'FINAL ZONE' : 'SHRINKING IN')
    setText(this.el.miniZone, `ZONE ${z.phase}`)
    setText(this.el.miniTimer, z.timerText)
    setText(this.el.mapZoneInfo, `ZONE ${z.phase} · ${z.timerText}`)
    this._updateCompass(p.yaw)
    this._drawMinimap(game)
    if (this.currentPanel === 'map') this._drawFullMap()
    if (this.currentPanel === 'inventory') {
      this._invTimer += 0.08
      if (this._invTimer > 0.6) { this._invTimer = 0; this._renderInventory() }
    }
    if (this.el.mapCoords) {
      const col = Math.floor((p.pos.x + WORLD_HALF) / 150) + 1
      const row = Math.floor((p.pos.z + WORLD_HALF) / 150) + 1
      this.el.mapCoords.textContent = `GRID ${col}-${row} · ALT ${Math.round(p.pos.y)}M`
    }
  }

  _updateCompass(yaw) {
    if (!this._compassMarks) return
    const bearing = ((yaw * 180 / Math.PI) + 180 + 360) % 360
    for (const span of this._compassMarks) {
      const b = Number(span.dataset.bearing)
      let d = ((b - bearing + 540) % 360) - 180
      const limit = span.classList.contains('cardinal') ? 78 : 62
      if (Math.abs(d) > limit) { span.style.display = 'none'; continue }
      span.style.display = ''
      span.style.left = (50 + d / 160 * 100) + '%'
    }
  }

  setInteract(label) {
    if (!this.el.interact) return
    this._setHidden(this.el.interact, !label)
    if (label && this.el.interactLabel) this.el.interactLabel.textContent = label
  }

  hitmarker(kill = false) {
    if (!this.el.hitmarker) return
    this.el.hitmarker.classList.remove('show')
    this.el.hitmarker.classList.toggle('kill', !!kill)
    void this.el.hitmarker.offsetWidth
    this.el.hitmarker.classList.add('show')
    clearTimeout(this._hitTimer)
    this._hitTimer = setTimeout(() => this.el.hitmarker?.classList.remove('show'), 220)
  }

  flashDamage(amount, source) {
    if (this.el.damageVignette) {
      this.el.damageVignette.classList.add('show')
      clearTimeout(this._damageTimer)
      this._damageTimer = setTimeout(() => this.el.damageVignette?.classList.remove('show'), 220)
    }
    if (source?.pos) this.damageDirection(source.pos)
  }

  damageDirection(pos) {
    if (!this.el.damageIndicator || !pos || !this.game.player) return
    const p = this.game.player
    const dx = pos.x - p.pos.x
    const dz = pos.z - p.pos.z
    if (Math.hypot(dx, dz) < 0.1) return
    const f = dx * Math.sin(p.yaw) + dz * Math.cos(p.yaw)
    const r = dx * -Math.cos(p.yaw) + dz * Math.sin(p.yaw)
    const deg = Math.atan2(r, f) * 180 / Math.PI
    let arrow = this.el.damageIndicator.querySelector('.dmg-arrow')
    if (!arrow) {
      arrow = document.createElement('i')
      arrow.className = 'dmg-arrow'
      arrow.style.cssText = 'position:absolute;left:50%;top:50%;width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-bottom:16px solid rgba(255,60,60,.9);filter:drop-shadow(0 0 5px rgba(255,50,50,.8));'
      this.el.damageIndicator.appendChild(arrow)
    }
    arrow.style.transform = `translate(-50%,-50%) rotate(${deg}deg) translateY(-86px)`
    this.el.damageIndicator.classList.add('show')
    clearTimeout(this._dirTimer)
    this._dirTimer = setTimeout(() => this.el.damageIndicator?.classList.remove('show'), 650)
  }

  damageIndicator() { /* hit confirmation is handled by the hitmarker */ }

  announce(title, sub = '', duration = 2200) {
    if (!this.el.announce) return
    this.el.announce.innerHTML = `<b>${safeName(title)}</b>${sub ? `<span>${safeName(sub)}</span>` : ''}`
    this.el.announce.classList.add('show')
    clearTimeout(this._announceTimer)
    this._announceTimer = setTimeout(() => this.el.announce?.classList.remove('show'), duration)
  }

  showBanner(title, sub = '') {
    if (!this.el.banner) return
    this.el.banner.innerHTML = `<b>${safeName(title)}</b><span>${safeName(sub)}</span>`
    this._setHidden(this.el.banner, false)
    clearTimeout(this._bannerTimer)
    this._bannerTimer = setTimeout(() => this._setHidden(this.el.banner, true), 3000)
  }

  killfeed(killer, victim, weapon = 'WEAPON', zoneKill = false) {
    if (!this.el.killfeed) return
    const item = document.createElement('div')
    item.className = 'killfeed-item'
    item.innerHTML = `<span class="killer">${safeName(killer)}</span><svg viewBox="0 0 24 24"><path d="M5 19 19 5M5 5l14 14"/></svg><span class="victim">${safeName(victim)}</span><em class="${zoneKill ? 'zone-kill' : ''}">${safeName(zoneKill ? 'ZONE' : weapon)}</em>`
    this.el.killfeed.appendChild(item)
    while (this.el.killfeed.children.length > 5) this.el.killfeed.firstChild.remove()
    setTimeout(() => item.remove(), 5200)
  }

  toast(message, type = '') {
    if (!this.el.toastRoot) return
    const div = document.createElement('div')
    div.className = 'toast' + (type ? ' ' + type : '')
    div.textContent = message
    this.el.toastRoot.appendChild(div)
    this._toasts.push(div)
    while (this._toasts.length > 4) this._toasts.shift()?.remove()
    setTimeout(() => { div.remove(); const i = this._toasts.indexOf(div); if (i >= 0) this._toasts.splice(i, 1) }, 2400)
  }

  setSpectate(name) {
    if (!this.el.spectate) return
    this._setHidden(this.el.spectate, !name)
    if (name && this.el.spectateName) this.el.spectateName.textContent = name
  }

  // ── result ──────────────────────────────────────────────────
  showResult(result) {
    const r = result || {}
    this._setHidden(this.el.touch, true)
    this._setHidden(this.el.spectate, true)
    if (this.el.resultPanel) {
      this.el.resultPanel.classList.toggle('defeat', !r.victory)
      this.el.resultPanel.classList.add('open')
    }
    this.el.overlay?.classList.add('open')
    this.currentPanel = 'result'
    if (this.el.resultKicker) this.el.resultKicker.textContent = r.victory ? 'MATCH COMPLETE · AURORA PROTOCOL' : 'SERVICE RECORD UPDATED'
    if (this.el.resultTitle) this.el.resultTitle.textContent = r.victory ? 'ELITE VICTORY' : 'ELIMINATED'
    if (this.el.resultSub) {
      this.el.resultSub.textContent = r.victory
        ? `Last operative standing on the Island of Ash · ${r.matchTime || ''}`
        : `Placed #${r.placement} of ${r.alive + Math.max(0, (r.placement || 1) - 1)} · The island keeps its secrets.`
    }
    if (this.el.resPlace) this.el.resPlace.textContent = '#' + (r.placement || '—')
    if (this.el.resKills) this.el.resKills.textContent = r.kills ?? 0
    if (this.el.resDamage) this.el.resDamage.textContent = r.damage ?? 0
    if (this.el.resXp) this.el.resXp.textContent = '+' + (r.xp ?? 0)
    if (this.el.btnSpectateResult) {
      this.el.btnSpectateResult.style.display = (!r.victory && this.game.bots.some(b => b.alive)) ? '' : 'none'
    }
    if (r.levels > 0) this.toast(`LEVEL UP · LEVEL ${this.profile.level}`, 'good')
    if (r.unlocked?.length) this.toast(`${r.unlocked[0].name} UNLOCKED`, 'good')
    this.refreshMenu()
    this._renderProfile()
  }

  hideResult() {
    this.el.resultPanel?.classList.remove('open')
    if (this.currentPanel === 'result') {
      this.currentPanel = null
      this.el.overlay?.classList.remove('open')
    }
  }

  // ── maps ────────────────────────────────────────────────────
  _ensureMap() {
    if (this._mapCanvas) return
    const size = this._mapSize
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const img = ctx.createImageData(size, size)
    const heights = new Float32Array(size * size)
    const step = WORLD_SIZE / size
    for (let y = 0; y < size; y++) {
      const wz = -WORLD_HALF + (y + 0.5) * step
      for (let x = 0; x < size; x++) {
        const wx = -WORLD_HALF + (x + 0.5) * step
        heights[y * size + x] = getHeight(wx, wz)
      }
    }
    const color = [0, 0, 0]
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = y * size + x
        const h = heights[i]
        let r, g, b
        if (h < -7) { r = 8; g = 30; b = 46 }
        else if (h < -1.5) { r = 13; g = 51; b = 68 }
        else if (h < 0.4) { r = 30; g = 87; b = 100 }
        else if (h < 2.6) { r = 170; g = 155; b = 112 }
        else if (h < 16) { r = 70; g = 92; b = 55 }
        else if (h < 30) { r = 88; g = 99; b = 62 }
        else if (h < 46) { r = 109; g = 108; b = 78 }
        else if (h < 58) { r = 128; g = 126; b = 116 }
        else { r = 210; g = 224; b = 226 }
        // Cheap directional shading from the local height gradient.
        const hx = x > 0 && x < size - 1 ? heights[i + 1] - heights[i - 1] : 0
        const hz = y > 0 && y < size - 1 ? heights[i + size] - heights[i - size] : 0
        const shade = clamp(1 - hx * 0.012 - hz * 0.012, 0.66, 1.28)
        color[0] = clamp(r * shade, 0, 255)
        color[1] = clamp(g * shade, 0, 255)
        color[2] = clamp(b * shade, 0, 255)
        const p = i * 4
        img.data[p] = color[0]
        img.data[p + 1] = color[1]
        img.data[p + 2] = color[2]
        img.data[p + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)

    // Stylised road network between landmarks.
    const links = [
      ['city', 'village'], ['village', 'foundry'], ['foundry', 'base'], ['base', 'ridge'],
      ['ridge', 'bunker'], ['village', 'lake'], ['lake', 'harbor'], ['harbor', 'city'],
      ['foundry', 'airport'], ['airport', 'beach'], ['beach', 'aurora'], ['village', 'aurora'],
    ]
    const toPx = (x, z) => [((x + WORLD_HALF) / WORLD_SIZE) * size, ((z + WORLD_HALF) / WORLD_SIZE) * size]
    ctx.lineCap = 'round'
    for (const [aId, bId] of links) {
      const a = PAD_DEFS.find(p => p.id === aId)
      const b = PAD_DEFS.find(p => p.id === bId)
      if (!a || !b) continue
      const [ax, ay] = toPx(a.x, a.z)
      const [bx, by] = toPx(b.x, b.z)
      ctx.strokeStyle = 'rgba(20,26,26,.5)'
      ctx.lineWidth = 4.4
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
      ctx.strokeStyle = 'rgba(196,186,160,.34)'
      ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
    }
    // Airport runway.
    const airport = PAD_DEFS.find(p => p.id === 'airport')
    if (airport) {
      const [ax, ay] = toPx(airport.x - 70, airport.z - 40)
      const [bx, by] = toPx(airport.x + 70, airport.z + 40)
      ctx.strokeStyle = 'rgba(40,46,48,.8)'
      ctx.lineWidth = 10
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
      ctx.strokeStyle = 'rgba(230,230,220,.5)'
      ctx.lineWidth = 1
      ctx.setLineDash([6, 7])
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
      ctx.setLineDash([])
    }
    this._mapCanvas = canvas
  }

  _worldToMap(x, z, size) {
    return [((x + WORLD_HALF) / WORLD_SIZE) * size, ((z + WORLD_HALF) / WORLD_SIZE) * size]
  }

  _drawMenuMap() {
    const canvas = this.el.menuMap
    if (!canvas) return
    this._ensureMap()
    const ctx = canvas.getContext('2d')
    const w = canvas.width, h = canvas.height
    ctx.clearRect(0, 0, w, h)
    ctx.drawImage(this._mapCanvas, 0, 0, w, h)
    ctx.fillStyle = 'rgba(3,10,15,.28)'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(120,190,210,.09)'
    ctx.lineWidth = 1
    for (let i = 1; i < 6; i++) {
      ctx.beginPath(); ctx.moveTo(i * w / 6, 0); ctx.lineTo(i * w / 6, h); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i * h / 6); ctx.lineTo(w, i * h / 6); ctx.stroke()
    }
    for (const pad of PAD_DEFS) {
      const [x, y] = this._worldToMap(pad.x, pad.z, w)
      ctx.beginPath()
      ctx.fillStyle = pad.map
      ctx.arc(x, y, 2.4, 0, Math.PI * 2)
      ctx.fill()
      ctx.font = '700 7px Rajdhani, sans-serif'
      ctx.fillStyle = 'rgba(235,245,250,.8)'
      ctx.textAlign = 'center'
      ctx.fillText(pad.name.split(' ')[0], x, y - 5)
    }
  }

  _drawMinimap(game) {
    const canvas = this.el.minimap
    if (!canvas || !game.player) return
    this._ensureMap()
    const ctx = canvas.getContext('2d')
    const size = canvas.width
    const p = game.player
    const view = 300
    const base = this._mapCanvas
    const bw = base.width
    const sw = view / WORLD_SIZE * bw
    const sx = (p.pos.x + WORLD_HALF) / WORLD_SIZE * bw - sw / 2
    const sy = (p.pos.z + WORLD_HALF) / WORLD_SIZE * bw - sw / 2
    ctx.clearRect(0, 0, size, size)
    ctx.fillStyle = '#0a1c27'
    ctx.fillRect(0, 0, size, size)
    ctx.drawImage(base, sx, sy, sw, sw, 0, 0, size, size)
    ctx.fillStyle = 'rgba(4,12,18,.16)'
    ctx.fillRect(0, 0, size, size)

    const worldToMini = (x, z) => [size / 2 + (x - p.pos.x) / view * size, size / 2 + (z - p.pos.z) / view * size]
    const z = game.zone.getState()
    const [zx, zy] = worldToMini(z.center.x, z.center.y)
    ctx.strokeStyle = 'rgba(120,232,255,.85)'
    ctx.lineWidth = 1.6
    ctx.beginPath(); ctx.arc(zx, zy, Math.max(1, z.radius / view * size), 0, Math.PI * 2); ctx.stroke()
    if (!z.finished) {
      const [nx, ny] = worldToMini(z.nextCenter.x, z.nextCenter.y)
      ctx.strokeStyle = 'rgba(255,200,87,.75)'
      ctx.setLineDash([4, 4])
      ctx.lineWidth = 1.2
      ctx.beginPath(); ctx.arc(nx, ny, Math.max(1, z.nextRadius / view * size), 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([])
    }
    for (const pad of PAD_DEFS) {
      const [x, y] = worldToMini(pad.x, pad.z)
      if (x < -8 || y < -8 || x > size + 8 || y > size + 8) continue
      ctx.fillStyle = pad.map
      ctx.globalAlpha = 0.8
      ctx.beginPath(); ctx.arc(x, y, 1.7, 0, Math.PI * 2); ctx.fill()
      ctx.globalAlpha = 1
    }
    for (const bot of game.bots) {
      if (!bot.alive || bot.team !== p.team) continue
      const [x, y] = worldToMini(bot.pos.x, bot.pos.z)
      if (x < 0 || y < 0 || x > size || y > size) continue
      ctx.fillStyle = '#63dcff'
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill()
    }
    // Player arrow.
    const bearing = Math.atan2(Math.sin(p.yaw), Math.cos(p.yaw))
    ctx.save()
    ctx.translate(size / 2, size / 2)
    ctx.rotate(-bearing)
    ctx.fillStyle = '#ffb347'
    ctx.shadowColor = 'rgba(255,138,43,.9)'
    ctx.shadowBlur = 7
    ctx.beginPath()
    ctx.moveTo(0, -7)
    ctx.lineTo(5.2, 5)
    ctx.lineTo(0, 2.4)
    ctx.lineTo(-5.2, 5)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }

  _drawFullMap() {
    const canvas = this.el.fullMap
    const game = this.game
    if (!canvas || !game.player) return
    this._ensureMap()
    const ctx = canvas.getContext('2d')
    const size = canvas.width
    ctx.clearRect(0, 0, size, size)
    ctx.drawImage(this._mapCanvas, 0, 0, size, size)
    ctx.fillStyle = 'rgba(3,10,15,.2)'
    ctx.fillRect(0, 0, size, size)

    // Grid.
    ctx.strokeStyle = 'rgba(150,210,230,.12)'
    ctx.lineWidth = 1
    ctx.font = '600 11px Rajdhani, sans-serif'
    ctx.fillStyle = 'rgba(180,220,235,.35)'
    ctx.textAlign = 'left'
    for (let i = 1; i < 10; i++) {
      const q = i * size / 10
      ctx.beginPath(); ctx.moveTo(q, 0); ctx.lineTo(q, size); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, q); ctx.lineTo(size, q); ctx.stroke()
      ctx.fillText(String(i), q + 3, 13)
      ctx.fillText(String.fromCharCode(64 + i), 4, q - 4)
    }

    for (const pad of PAD_DEFS) {
      const [x, y] = this._worldToMap(pad.x, pad.z, size)
      ctx.beginPath()
      ctx.fillStyle = pad.map
      ctx.globalAlpha = 0.22
      ctx.arc(x, y, 13, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.beginPath()
      ctx.fillStyle = pad.map
      ctx.arc(x, y, 3.6, 0, Math.PI * 2)
      ctx.fill()
      ctx.font = '700 13px Rajdhani, sans-serif'
      ctx.fillStyle = 'rgba(235,246,250,.92)'
      ctx.textAlign = 'left'
      ctx.shadowColor = 'rgba(0,0,0,.9)'
      ctx.shadowBlur = 4
      ctx.fillText(pad.name, x + 8, y - 6)
      ctx.shadowBlur = 0
    }

    const z = game.zone.getState()
    const [zx, zy] = this._worldToMap(z.center.x, z.center.y, size)
    const zr = z.radius / WORLD_SIZE * size
    ctx.beginPath()
    ctx.fillStyle = 'rgba(99,220,255,.07)'
    ctx.arc(zx, zy, zr, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = 'rgba(120,232,255,.9)'
    ctx.lineWidth = 2.4
    ctx.stroke()
    if (!z.finished) {
      const [nx, ny] = this._worldToMap(z.nextCenter.x, z.nextCenter.y, size)
      const nr = z.nextRadius / WORLD_SIZE * size
      ctx.setLineDash([9, 7])
      ctx.strokeStyle = 'rgba(255,200,87,.9)'
      ctx.lineWidth = 2
      ctx.beginPath(); ctx.arc(nx, ny, nr, 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = 'rgba(255,200,87,.9)'
      ctx.beginPath(); ctx.arc(nx, ny, 3, 0, Math.PI * 2); ctx.fill()
    }

    for (const bot of game.bots) {
      if (!bot.alive || bot.team !== game.player.team) continue
      const [x, y] = this._worldToMap(bot.pos.x, bot.pos.z, size)
      ctx.fillStyle = '#63dcff'
      ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill()
    }

    const p = game.player
    const [px, py] = this._worldToMap(p.pos.x, p.pos.z, size)
    const bearing = Math.atan2(Math.sin(p.yaw), Math.cos(p.yaw))
    ctx.save()
    ctx.translate(px, py)
    ctx.rotate(-bearing)
    ctx.fillStyle = '#ffb347'
    ctx.shadowColor = 'rgba(255,138,43,.95)'
    ctx.shadowBlur = 10
    ctx.beginPath()
    ctx.moveTo(0, -11)
    ctx.lineTo(8, 8)
    ctx.lineTo(0, 4)
    ctx.lineTo(-8, 8)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    if (this.el.mapCoords) {
      const col = Math.floor((p.pos.x + WORLD_HALF) / 150) + 1
      const row = Math.floor((p.pos.z + WORLD_HALF) / 150) + 1
      this.el.mapCoords.textContent = `GRID ${col}-${row} · ALT ${Math.round(p.pos.y)}M`
    }
  }

  // ── per-frame ───────────────────────────────────────────────
  update(dt) {
    this._fpsAcc += dt
    this._fpsFrames++
    if (this._fpsAcc >= 0.5) {
      this._fps = Math.round(this._fpsFrames / this._fpsAcc)
      this._fpsAcc = 0
      this._fpsFrames = 0
      if (this.el.menuFps) this.el.menuFps.textContent = this._fps + ' FPS'
    }
    if (this.game.state === 'lobby' && this.game.input?.wasPressed?.('pause')) {
      // Escape in the lobby has no panel to close; ignore.
    }
  }
}

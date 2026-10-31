const KEY = 'battle-world-elite-survival-v1'

export const SKINS = [
  { id: 'standard', name: 'STANDARD ISSUE', level: 1, primary: '#2f6f8f', secondary: '#152430', accent: '#ff8a2b', hair: '#22201f', skin: '#c98f6a', rarity: 'STANDARD' },
  { id: 'ash', name: 'ASH RUNNER', level: 2, primary: '#3b3f43', secondary: '#16181b', accent: '#ff7a1a', hair: '#151515', skin: '#b57d5b', rarity: 'COMMON' },
  { id: 'verdant', name: 'VERDANT GHOST', level: 4, primary: '#3d5c3a', secondary: '#1c2a1b', accent: '#a9d66b', hair: '#3b2b1d', skin: '#d0a078', rarity: 'RARE' },
  { id: 'arctic', name: 'ARCTIC SIGNAL', level: 6, primary: '#c7dbe3', secondary: '#3b5361', accent: '#63dcff', hair: '#d9d4c7', skin: '#d8ac89', rarity: 'RARE' },
  { id: 'crimson', name: 'CRIMSON VECTOR', level: 9, primary: '#7c2429', secondary: '#241012', accent: '#ff5a5a', hair: '#1b1111', skin: '#b97f5e', rarity: 'EPIC' },
  { id: 'gilded', name: 'GILDED WARDEN', level: 12, primary: '#9c7427', secondary: '#2b2113', accent: '#ffd166', hair: '#201b14', skin: '#c58f69', rarity: 'EPIC' },
  { id: 'void', name: 'VOID PROTOCOL', level: 16, primary: '#46356e', secondary: '#191226', accent: '#b78bff', hair: '#e4e0f5', skin: '#a8795f', rarity: 'LEGENDARY' },
  { id: 'aurora', name: 'AURORA ELITE', level: 20, primary: '#1f6f7a', secondary: '#102a33', accent: '#ff7ad9', hair: '#5de0ff', skin: '#d3a17e', rarity: 'MYTHIC' },
]

export const HAIR_STYLES = [
  { id: 'short', name: 'SHORT' },
  { id: 'mohawk', name: 'MOHAWK' },
  { id: 'bun', name: 'BUN' },
  { id: 'long', name: 'LONG' },
  { id: 'bald', name: 'SHAVED' },
  { id: 'helmet', name: 'HELMET' },
]

export const OUTFIT_COLORS = ['#2f6f8f', '#3b3f43', '#3d5c3a', '#c7dbe3', '#7c2429', '#9c7427', '#46356e', '#1f6f7a', '#d7d2c4', '#b5452d']

export const RANKS = [
  { min: 1, name: 'ROOKIE' },
  { min: 3, name: 'SCOUT' },
  { min: 6, name: 'OPERATIVE' },
  { min: 10, name: 'VETERAN' },
  { min: 15, name: 'ELITE' },
  { min: 21, name: 'COMMANDER' },
  { min: 30, name: 'LEGEND' },
]

export function rankFor(level) {
  let r = RANKS[0]
  for (const rank of RANKS) if (level >= rank.min) r = rank
  return r.name
}

export function xpForNext(level) {
  return 100 + (level - 1) * 80
}

const defaultSettings = {
  quality: 'high',
  renderScale: 100,
  shadows: true,
  motionBlur: false,
  sensitivity: 100,
  buttonScale: 100,
  autoSprint: false,
  aimAssist: true,
  volume: 80,
  sfx: 100,
  zoneAudio: true,
  matchSize: 25,
  botSkill: 'veteran',
  showFps: true,
  touchLayout: {},
}

export function defaultProfile() {
  return {
    version: 1,
    name: 'NOVA-07',
    level: 1,
    xp: 0,
    xpTotal: 0,
    matches: 0,
    wins: 0,
    kills: 0,
    deaths: 0,
    damage: 0,
    bestPlace: null,
    timePlayed: 0,
    outfit: { skin: 'standard', primary: '#2f6f8f', hair: 'short', hairColor: '#22201f' },
    unlockedSkins: ['standard'],
    settings: { ...defaultSettings },
    createdAt: Date.now(),
  }
}

export function loadProfile() {
  let raw = null
  try { raw = JSON.parse(localStorage.getItem(KEY) || 'null') } catch { raw = null }
  const base = defaultProfile()
  if (!raw || typeof raw !== 'object') return base
  const p = {
    ...base, ...raw,
    outfit: { ...base.outfit, ...(raw.outfit || {}) },
    settings: { ...base.settings, ...(raw.settings || {}) },
    unlockedSkins: Array.isArray(raw.unlockedSkins) ? raw.unlockedSkins : base.unlockedSkins,
  }
  // Cosmetic unlocks are always re-derived from level so old saves stay valid.
  for (const skin of SKINS) if (p.level >= skin.level && !p.unlockedSkins.includes(skin.id)) p.unlockedSkins.push(skin.id)
  return p
}

export function saveProfile(profile) {
  try { localStorage.setItem(KEY, JSON.stringify(profile)) } catch { /* private mode */ }
}

export function resetProfile() {
  try { localStorage.removeItem(KEY) } catch { /* ignore */ }
  return defaultProfile()
}

export function addXP(profile, amount) {
  profile.xp += amount
  profile.xpTotal += amount
  const unlocked = []
  let levels = 0
  while (profile.xp >= xpForNext(profile.level)) {
    profile.xp -= xpForNext(profile.level)
    profile.level++
    levels++
    for (const skin of SKINS) {
      if (profile.level >= skin.level && !profile.unlockedSkins.includes(skin.id)) {
        profile.unlockedSkins.push(skin.id)
        unlocked.push(skin)
      }
    }
  }
  return { levels, unlocked }
}

export function recordMatch(profile, { placement, kills, damage, victory, time }) {
  profile.matches++
  profile.kills += kills
  profile.damage += damage
  profile.deaths += victory ? 0 : 1
  profile.timePlayed += time
  if (victory) profile.wins++
  if (!profile.bestPlace || placement < profile.bestPlace) profile.bestPlace = placement
  const placementBonus = victory ? 0 : Math.max(0, 30 - placement) * 8
  const xp = Math.round(70 + kills * 45 + damage * 0.32 + (victory ? 520 : 0) + placementBonus)
  const levelResult = addXP(profile, xp)
  saveProfile(profile)
  return { xp, ...levelResult }
}

export function skinById(id) {
  return SKINS.find(s => s.id === id) || SKINS[0]
}

export function currentOutfit(profile) {
  const skin = skinById(profile.outfit.skin)
  return {
    ...skin,
    primary: profile.outfit.primary || skin.primary,
    hair: profile.outfit.hair || 'short',
    hairColor: profile.outfit.hairColor || skin.hair,
    skinColor: skin.skin,
  }
}

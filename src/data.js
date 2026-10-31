export const OPERATORS = {
  raven: {
    id: 'raven', name: 'RAVEN', role: 'RECON', level: 27,
    skin: 0xc99d78, suit: 0x1a2328, accent: 0xff6a00, pants: 0x202c31,
    helmet: 0x12191d, visor: 0xff7a21, backpack: 0x263238,
    bio: 'Expedition scout. Reads terrain like a map and turns ambushes into openings.'
  },
  kira: {
    id: 'kira', name: 'KIRA', role: 'MEDIC', level: 31,
    skin: 0xd3a47f, suit: 0x173137, accent: 0x2ee0c8, pants: 0x1c2e33,
    helmet: 0x112126, visor: 0x59f3dd, backpack: 0x284348,
    bio: 'Field medic with a calm trigger. Keeps the squad breathing and the zone in view.'
  },
  vex: {
    id: 'vex', name: 'VEX', role: 'BREACHER', level: 24,
    skin: 0x8f6248, suit: 0x2a2335, accent: 0xb694ff, pants: 0x211d2b,
    helmet: 0x17131f, visor: 0xd1b6ff, backpack: 0x373045,
    bio: 'Urban specialist. Prefers doors that are no longer attached to their hinges.'
  },
  sable: {
    id: 'sable', name: 'SABLE', role: 'MARKSMAN', level: 29,
    skin: 0xb18160, suit: 0x322d25, accent: 0xf2c452, pants: 0x28251f,
    helmet: 0x1b1814, visor: 0xffdb82, backpack: 0x3a352b,
    bio: 'Patient, precise, impossible to spot at range. One breath, one shot.'
  }
};

export const OPERATOR_ORDER = ['raven', 'kira', 'vex', 'sable'];

export const WEAPONS = {
  ar: {
    id: 'ar', name: 'VX-7 HAVOC', class: 'ASSAULT RIFLE', iconClass: 'ar',
    damage: 26, headMult: 1.75, rpm: 640, mag: 30, reserve: 120, reload: 2.15,
    spread: 0.011, adsSpread: 0.0028, moveSpread: 0.016, recoil: 0.0068,
    range: 145, auto: true, pellets: 1, tracer: 0xffc86b,
    rarity: 'rare', attachments: ['HOLO', 'EXT. MAG']
  },
  smg: {
    id: 'smg', name: 'KESTREL-9', class: 'SUBMACHINE GUN', iconClass: 'smg',
    damage: 17, headMult: 1.55, rpm: 900, mag: 35, reserve: 140, reload: 1.65,
    spread: 0.018, adsSpread: 0.006, moveSpread: 0.025, recoil: 0.0048,
    range: 72, auto: true, pellets: 1, tracer: 0xffd27b,
    rarity: 'uncommon', attachments: ['FAST MAG']
  },
  shotgun: {
    id: 'shotgun', name: 'MAKO-12', class: 'SHOTGUN', iconClass: 'shotgun',
    damage: 11, headMult: 1.35, rpm: 82, mag: 6, reserve: 36, reload: 2.7,
    spread: 0.075, adsSpread: 0.048, moveSpread: 0.09, recoil: 0.021,
    range: 34, auto: false, pellets: 8, tracer: 0xffd9a3,
    rarity: 'uncommon', attachments: ['WIDE CHOKE']
  },
  sniper: {
    id: 'sniper', name: 'LONGSHOT M82', class: 'SNIPER RIFLE', iconClass: 'sniper',
    damage: 88, headMult: 2.0, rpm: 44, mag: 5, reserve: 25, reload: 3.25,
    spread: 0.013, adsSpread: 0.0005, moveSpread: 0.05, recoil: 0.038,
    range: 320, auto: false, pellets: 1, tracer: 0x9fe8ff,
    rarity: 'epic', attachments: ['6X SCOPE', 'BOLT']
  },
  pistol: {
    id: 'pistol', name: 'P9 SIDEWINDER', class: 'PISTOL', iconClass: 'pistol',
    damage: 29, headMult: 1.7, rpm: 300, mag: 15, reserve: 60, reload: 1.45,
    spread: 0.012, adsSpread: 0.0045, moveSpread: 0.02, recoil: 0.009,
    range: 55, auto: false, pellets: 1, tracer: 0xffc06b,
    rarity: 'common', attachments: ['IRON SIGHT']
  },
  lmg: {
    id: 'lmg', name: 'BASTION 60', class: 'LIGHT MACHINE GUN', iconClass: 'lmg',
    damage: 23, headMult: 1.6, rpm: 720, mag: 60, reserve: 180, reload: 4.0,
    spread: 0.022, adsSpread: 0.0075, moveSpread: 0.03, recoil: 0.0072,
    range: 160, auto: true, pellets: 1, tracer: 0xffb05e,
    rarity: 'epic', attachments: ['DRUM MAG', 'BIPOD']
  },
  melee: {
    id: 'melee', name: 'RANGER BLADE', class: 'MELEE', iconClass: 'melee',
    damage: 58, headMult: 1.2, rpm: 110, mag: 1, reserve: 0, reload: 0.5,
    spread: 0, adsSpread: 0, moveSpread: 0, recoil: 0,
    range: 2.6, auto: false, pellets: 1, tracer: 0xffffff,
    rarity: 'common', attachments: []
  }
};

export const LOOT_TABLE = [
  { type: 'weapon', key: 'ar', weight: 18 },
  { type: 'weapon', key: 'smg', weight: 17 },
  { type: 'weapon', key: 'shotgun', weight: 14 },
  { type: 'weapon', key: 'pistol', weight: 12 },
  { type: 'weapon', key: 'sniper', weight: 6 },
  { type: 'weapon', key: 'lmg', weight: 4 },
  { type: 'armor', key: 'armor', weight: 15 },
  { type: 'medkit', key: 'medkit', weight: 16 },
  { type: 'ammo', key: 'ammo', weight: 22 },
  { type: 'grenade', key: 'grenade', weight: 8 },
  { type: 'attachment', key: 'extmag', weight: 8 }
];

export const RARITY = {
  common: { label: 'COMMON', color: '#d8e2e2' },
  uncommon: { label: 'UNCOMMON', color: '#6be08c' },
  rare: { label: 'RARE', color: '#5aa7ff' },
  epic: { label: 'EPIC', color: '#c38bff' },
  legendary: { label: 'LEGENDARY', color: '#ffb23e' }
};

export const LOCATIONS = [
  { id: 'city', name: 'SUNSET CITY', x: -78, z: -78, r: 48, color: '#f0a35c', type: 'urban' },
  { id: 'base', name: 'IRON RIDGE BASE', x: -115, z: 48, r: 44, color: '#b2c36b', type: 'military' },
  { id: 'village', name: 'PALM VILLAGE', x: 82, z: 70, r: 36, color: '#f1c47a', type: 'village' },
  { id: 'airport', name: 'SKYLINE AIRFIELD', x: 105, z: -90, r: 54, color: '#a9bcc1', type: 'airport' },
  { id: 'industrial', name: 'FOUNDRY YARD', x: 126, z: 8, r: 34, color: '#d39d64', type: 'industrial' },
  { id: 'harbor', name: 'KESTREL HARBOR', x: -27, z: 143, r: 40, color: '#6fc8d6', type: 'harbor' },
  { id: 'lake', name: 'MIRROR LAKE', x: 0, z: 8, r: 26, color: '#49b4d6', type: 'lake' },
  { id: 'mountain', name: 'ASHFALL PEAK', x: -128, z: 125, r: 34, color: '#8c9a92', type: 'mountain' },
  { id: 'bunker', name: 'ECHO BUNKER', x: -4, z: -132, r: 24, color: '#9d9a80', type: 'bunker' }
];

export const BOT_NAMES = [
  'NOVA', 'RIFT', 'CINDER', 'ATLAS', 'HALO', 'VANTA', 'ORION', 'ECHO',
  'SABLE', 'DRIFT', 'KODA', 'LYNX', 'ONYX', 'ROOK', 'TALON', 'VEGA',
  'WRAITH', 'ZERO', 'BRUTE', 'CIPHER', 'DELTA', 'EMBER', 'FROST', 'GHOST',
  'HAVOC', 'ION', 'JACKAL', 'KRAIT', 'MIRAGE', 'NOMAD', 'PULSE', 'QUASAR',
  'RAZOR', 'SHADE', 'TEMPEST', 'UMBRA', 'VOLT', 'WOLF', 'XENON', 'YETI'
];

export const BOT_PALETTES = [
  { suit: 0x29353b, accent: 0xd9582e, helmet: 0x151d21, pants: 0x222c31, skin: 0xb88763 },
  { suit: 0x25352f, accent: 0x7bbc6c, helmet: 0x131d1a, pants: 0x1e2b27, skin: 0x9d6f50 },
  { suit: 0x352c2a, accent: 0xd9a244, helmet: 0x211a18, pants: 0x2a2220, skin: 0xc5946f },
  { suit: 0x2b2b3a, accent: 0x8e7dcd, helmet: 0x181822, pants: 0x232331, skin: 0x7f5741 },
  { suit: 0x20323c, accent: 0x4ba9c9, helmet: 0x121e25, pants: 0x1b2a32, skin: 0xd0a27d },
  { suit: 0x3a3026, accent: 0xc3603d, helmet: 0x211a15, pants: 0x2d261e, skin: 0x8a5e45 }
];

export const ZONE_PHASES = [
  { wait: 52, shrink: 32, radius: 132, damage: 1.1 },
  { wait: 42, shrink: 28, radius: 88, damage: 2.0 },
  { wait: 34, shrink: 24, radius: 55, damage: 3.2 },
  { wait: 28, shrink: 20, radius: 30, damage: 4.8 },
  { wait: 20, shrink: 18, radius: 12, damage: 7.0 }
];

export const MATCH = {
  bots: 29,
  zoneRadius: 182,
  zoneCenter: { x: 0, z: 0 },
  maxHealth: 100,
  medHeal: 45,
  medUseTime: 3.4,
  armorPlate: 50
};

export const WEAPON_ICON = {
  ar: 'AR', smg: 'SMG', shotgun: 'SG', sniper: 'SR', pistol: 'PST', lmg: 'LMG', melee: 'BLD', armor: 'ARM', medkit: 'MED', ammo: 'AMM', grenade: 'FRG', attachment: 'ATT'
};

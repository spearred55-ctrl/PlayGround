/* Mini Clash — shared constants and card data. */

export const W = 720;
export const H = 1280;

export const ARENA = { x: 22, y: 94, w: 676, h: 924, r: 18 };
ARENA.right = ARENA.x + ARENA.w;
ARENA.bottom = ARENA.y + ARENA.h;

export const RIVER = { top: 530, bottom: 578, cy: 554, half: 24 };
export const LANES = [190, 530];
export const BRIDGE = { half: 37, pad: 16 };

export const HAND = { x: 22, y: 1060, cardW: 146, cardH: 196, gap: 10 };
export const NEXT = { x: 648, y: 1074, w: 50, h: 64 };
export const ELIXIR = { x: 22, y: 1020, w: 618, h: 26, max: 10 };
export const HUD = { h: 94 };

export const DIFFICULTY = {
  casual: { label: 'Casual', think: [2.0, 3.4], defend: 0.55, spell: 0.5, push: 6 },
  classic: { label: 'Classic', think: [1.15, 2.15], defend: 0.82, spell: 0.82, push: 6 },
  ruthless: { label: 'Ruthless', think: [0.6, 1.2], defend: 0.96, spell: 1, push: 5 },
};

export const TEAM = {
  blue: { key: 'blue', main: '#4aa7ff', dark: '#1450a3', light: '#b9dcff', glow: 'rgba(74,167,255,.55)' },
  red: { key: 'red', main: '#ff6070', dark: '#a81d33', light: '#ffc1c8', glow: 'rgba(255,96,112,.55)' },
};

export const ROLE_STYLE = {
  tank: { a: '#835321', b: '#2b1a09', accent: '#ffc25e' },
  ranged: { a: '#1d5b55', b: '#0a2321', accent: '#5ee5c2' },
  swarm: { a: '#3f5d1a', b: '#142108', accent: '#b4e765' },
  spell: { a: '#46256f', b: '#180b2b', accent: '#c693ff' },
};

export const CARDS = {
  knight: {
    id: 'knight', name: 'Knight', cost: 3, role: 'tank', count: 1,
    hp: 780, dmg: 86, hit: 1.1, range: 22, speed: 57, aggro: 140, radius: 16,
    targets: 'ground', kind: 'melee', blurb: 'A sturdy sword and shield.',
  },
  archers: {
    id: 'archers', name: 'Archers', cost: 3, role: 'ranged', count: 2,
    hp: 250, dmg: 46, hit: 0.95, range: 158, speed: 62, aggro: 175, radius: 12,
    targets: 'all', kind: 'ranged', projectile: 'arrow', blurb: 'Two quick shots from range.',
  },
  giant: {
    id: 'giant', name: 'Giant', cost: 5, role: 'tank', count: 1,
    hp: 2250, dmg: 142, hit: 1.5, range: 26, speed: 34, aggro: 0, radius: 23,
    targets: 'buildings', kind: 'melee', blurb: 'Ignores troops. Eats towers.',
  },
  goblins: {
    id: 'goblins', name: 'Goblins', cost: 3, role: 'swarm', count: 3,
    hp: 190, dmg: 38, hit: 0.7, range: 18, speed: 96, aggro: 115, radius: 10,
    targets: 'ground', kind: 'melee', blurb: 'Three tiny, angry knives.',
  },
  fireball: {
    id: 'fireball', name: 'Fireball', cost: 4, role: 'spell', spell: 'fireball',
    dmg: 340, radius: 108, towerMult: 0.35, blurb: 'Big boom. Hits air and ground.',
  },
  arrows: {
    id: 'arrows', name: 'Arrows', cost: 3, role: 'spell', spell: 'arrows',
    dmg: 152, radius: 158, towerMult: 0.35, blurb: 'A rain of arrows over a wide area.',
  },
  musketeer: {
    id: 'musketeer', name: 'Musketeer', cost: 4, role: 'ranged', count: 1,
    hp: 480, dmg: 108, hit: 1.2, range: 212, speed: 56, aggro: 205, radius: 13,
    targets: 'all', kind: 'ranged', projectile: 'bullet', blurb: 'Long range, big damage.',
  },
  minions: {
    id: 'minions', name: 'Minions', cost: 3, role: 'swarm', count: 3,
    hp: 160, dmg: 42, hit: 0.8, range: 20, speed: 82, aggro: 130, radius: 10,
    targets: 'all', flying: true, kind: 'melee', blurb: 'Three flapping menaces.',
  },
};

export const DECK = ['knight', 'archers', 'giant', 'goblins', 'fireball', 'arrows', 'musketeer', 'minions'];

export const TOWER = {
  princess: { hp: 1500, dmg: 62, hit: 0.85, range: 250, radius: 34 },
  king: { hp: 2600, dmg: 95, hit: 0.95, range: 268, radius: 46 },
};

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
export const font = (size, weight = 800) =>
  `${weight} ${size}px "Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif`;

export function roundRectPath(c, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + rr, y);
  c.arcTo(x + w, y, x + w, y + h, rr);
  c.arcTo(x + w, y + h, x, y + h, rr);
  c.arcTo(x, y + h, x, y, rr);
  c.arcTo(x, y, x + w, y, rr);
  c.closePath();
}

export function fillRoundRect(c, x, y, w, h, r, fill) {
  roundRectPath(c, x, y, w, h, r);
  c.fillStyle = fill;
  c.fill();
}

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function makeDeck(elixir = 5) {
  const d = shuffle([...DECK]);
  return { hand: d.slice(0, 4), queue: d.slice(4), elixir };
}

export function formatTime(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function insideRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

export function pointInArena(x, y, pad = 0) {
  return x >= ARENA.x + pad && x <= ARENA.right - pad && y >= ARENA.y + pad && y <= ARENA.bottom - pad;
}

export function unitHeight(r) {
  return r * 2.55;
}

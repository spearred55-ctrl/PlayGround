/* Arena scenery, towers, cards, and HUD icons. */

import {
  W, H, ARENA, RIVER, LANES, BRIDGE, TEAM, ROLE_STYLE, font,
  roundRectPath, fillRoundRect, clamp, lerp,
} from './data.js';
import { drawTroop } from './troops.js';

const OUTLINE = '#0d1624';

/* ---------------------------------------------------------------- scenery */

export function buildScene() {
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const c = cv.getContext('2d');

  const bg = c.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0b1728');
  bg.addColorStop(0.55, '#08111f');
  bg.addColorStop(1, '#060c16');
  c.fillStyle = bg;
  c.fillRect(0, 0, W, H);

  // Arena drop shadow and rim
  c.save();
  c.shadowColor = 'rgba(0,0,0,.55)';
  c.shadowBlur = 30;
  c.shadowOffsetY = 10;
  fillRoundRect(c, ARENA.x - 6, ARENA.y - 6, ARENA.w + 12, ARENA.h + 12, ARENA.r + 6, '#16251b');
  c.restore();

  c.save();
  roundRectPath(c, ARENA.x, ARENA.y, ARENA.w, ARENA.h, ARENA.r);
  c.clip();

  const grass = c.createLinearGradient(0, ARENA.y, 0, ARENA.bottom);
  grass.addColorStop(0, '#5b9f49');
  grass.addColorStop(0.48, '#68ad50');
  grass.addColorStop(1, '#4e9340');
  c.fillStyle = grass;
  c.fillRect(ARENA.x, ARENA.y, ARENA.w, ARENA.h);

  // Mowed checker
  const tile = 52;
  for (let y = ARENA.y; y < ARENA.bottom; y += tile) {
    for (let x = ARENA.x; x < ARENA.right; x += tile) {
      const odd = ((Math.round(x / tile) + Math.round(y / tile)) % 2) === 0;
      c.fillStyle = odd ? 'rgba(255,255,255,.035)' : 'rgba(8,40,12,.045)';
      c.fillRect(x, y, tile, tile);
    }
  }

  // Soft light from the top
  const sheen = c.createRadialGradient(W / 2, RIVER.cy, 60, W / 2, RIVER.cy, 560);
  sheen.addColorStop(0, 'rgba(255,255,255,.07)');
  sheen.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = sheen;
  c.fillRect(ARENA.x, ARENA.y, ARENA.w, ARENA.h);

  drawGroundDetails(c);
  drawRiverBase(c);
  c.restore();

  // Border
  roundRectPath(c, ARENA.x, ARENA.y, ARENA.w, ARENA.h, ARENA.r);
  c.strokeStyle = 'rgba(8,20,12,.6)';
  c.lineWidth = 9;
  c.stroke();
  roundRectPath(c, ARENA.x + 5, ARENA.y + 5, ARENA.w - 10, ARENA.h - 10, ARENA.r - 4);
  c.strokeStyle = 'rgba(210,240,190,.16)';
  c.lineWidth = 2;
  c.stroke();

  return cv;
}

function drawGroundDetails(c) {
  // Grass tufts
  const tufts = [
    [60, 190], [660, 230], [74, 430], [642, 420], [110, 690], [612, 668],
    [86, 900], [640, 940], [300, 160], [420, 470], [250, 990], [500, 990],
    [360, 770], [260, 400], [480, 660], [200, 640], [560, 890], [150, 870],
  ];
  c.strokeStyle = 'rgba(30,82,30,.4)';
  c.lineWidth = 2;
  for (const [x, y] of tufts) {
    c.beginPath();
    c.moveTo(x - 4, y);
    c.quadraticCurveTo(x - 6, y - 7, x - 8, y - 9);
    c.moveTo(x, y);
    c.quadraticCurveTo(x + 1, y - 9, x + 2, y - 12);
    c.moveTo(x + 4, y);
    c.quadraticCurveTo(x + 6, y - 7, x + 9, y - 9);
    c.stroke();
  }

  const flowers = [
    [102, 246, '#ffd46a'], [626, 284, '#ffb1c6'], [148, 414, '#fff2b8'], [582, 470, '#c7a6ff'],
    [90, 740, '#ffd46a'], [638, 712, '#ffb1c6'], [126, 958, '#fff2b8'], [590, 966, '#ffd46a'],
    [342, 190, '#c7a6ff'], [388, 930, '#ffb1c6'],
  ];
  for (const [x, y, col] of flowers) {
    c.fillStyle = 'rgba(20,60,20,.18)';
    c.beginPath(); c.arc(x + 1, y + 2, 4.4, 0, Math.PI * 2); c.fill();
    c.fillStyle = col;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      c.beginPath(); c.arc(x + Math.cos(a) * 3.2, y + Math.sin(a) * 3.2, 2.2, 0, Math.PI * 2); c.fill();
    }
    c.fillStyle = '#e9a11c';
    c.beginPath(); c.arc(x, y, 1.7, 0, Math.PI * 2); c.fill();
  }

  drawBush(c, 52, 350, 13);
  drawBush(c, 666, 390, 11);
  drawBush(c, 48, 830, 12);
  drawBush(c, 670, 860, 13);
  drawBush(c, 76, 130, 10);
  drawBush(c, 648, 148, 9);

  drawRock(c, 42, 560, 9, 6);
  drawRock(c, 678, 580, 8, 5);
  drawRock(c, 56, 990, 7, 5);
  drawRock(c, 664, 1000, 8, 6);
  drawRock(c, 260, 112, 6, 4);
  drawRock(c, 470, 992, 6, 4);
}

function drawBush(c, x, y, s) {
  c.save();
  c.translate(x, y);
  c.fillStyle = 'rgba(15,50,15,.25)';
  c.beginPath(); c.ellipse(2, 4, s * 1.4, s * 0.7, 0, 0, Math.PI * 2); c.fill();
  const blobs = [[-s * 0.6, 0, s * 0.75], [s * 0.35, -s * 0.2, s * 0.8], [0, -s * 0.55, s * 0.7]];
  for (const [bx, by, br] of blobs) {
    c.beginPath(); c.arc(bx, by, br, 0, Math.PI * 2);
    c.fillStyle = '#2f6a2f';
    c.fill();
    c.strokeStyle = 'rgba(10,38,12,.5)';
    c.lineWidth = 1.5;
    c.stroke();
  }
  c.fillStyle = 'rgba(150,215,120,.45)';
  c.beginPath(); c.arc(-s * 0.4, -s * 0.7, s * 0.34, 0, Math.PI * 2); c.fill();
  c.restore();
}

function drawRock(c, x, y, rx, ry) {
  c.save();
  c.translate(x, y);
  c.fillStyle = 'rgba(20,40,20,.2)';
  c.beginPath(); c.ellipse(1, 2, rx * 1.1, ry * 0.7, 0, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.ellipse(0, 0, rx, ry, -0.3, 0, Math.PI * 2);
  c.fillStyle = '#8c9284';
  c.fill();
  c.strokeStyle = 'rgba(35,48,36,.55)';
  c.lineWidth = 1.5;
  c.stroke();
  c.fillStyle = 'rgba(255,255,255,.25)';
  c.beginPath(); c.ellipse(-rx * 0.25, -ry * 0.25, rx * 0.35, ry * 0.22, -0.3, 0, Math.PI * 2); c.fill();
  c.restore();
}

function drawRiverBase(c) {
  // Sandy banks
  c.fillStyle = '#c4ab69';
  c.fillRect(ARENA.x, RIVER.top - 13, ARENA.w, 13);
  c.fillRect(ARENA.x, RIVER.bottom, ARENA.w, 12);
  c.fillStyle = 'rgba(255,240,180,.25)';
  c.fillRect(ARENA.x, RIVER.top - 13, ARENA.w, 3);
  c.fillRect(ARENA.x, RIVER.bottom, ARENA.w, 3);

  const water = c.createLinearGradient(0, RIVER.top, 0, RIVER.bottom);
  water.addColorStop(0, '#2f9ccc');
  water.addColorStop(0.5, '#1d84b8');
  water.addColorStop(1, '#186e9e');
  c.fillStyle = water;
  c.fillRect(ARENA.x, RIVER.top, ARENA.w, RIVER.bottom - RIVER.top);

  // Darker deep-water band
  c.fillStyle = 'rgba(8,50,86,.2)';
  c.fillRect(ARENA.x, RIVER.cy - 8, ARENA.w, 16);

  // Reeds at the banks
  c.strokeStyle = 'rgba(52,104,42,.75)';
  c.lineWidth = 2;
  const reeds = [[78, 1], [122, 1], [312, 1], [598, 1], [646, 1], [240, 0], [420, 0], [560, 0]];
  for (const [x, side] of reeds) {
    const y = side ? RIVER.top - 10 : RIVER.bottom + 6;
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x - 3, y - 7, x - 5, y - 11);
    c.moveTo(x + 3, y);
    c.quadraticCurveTo(x + 5, y - 8, x + 8, y - 10);
    c.stroke();
  }
}

export function drawWater(c, time) {
  c.save();
  c.beginPath();
  c.rect(ARENA.x, RIVER.top, ARENA.w, RIVER.bottom - RIVER.top);
  c.clip();

  for (let row = 0; row < 4; row++) {
    c.beginPath();
    for (let x = ARENA.x; x <= ARENA.right; x += 14) {
      const y = RIVER.top + 9 + row * 10 + Math.sin(time * 1.7 + x * 0.024 + row * 1.3) * 2.2;
      if (x === ARENA.x) c.moveTo(x, y);
      else c.lineTo(x, y);
    }
    c.strokeStyle = `rgba(210,245,255,${0.09 + row * 0.02})`;
    c.lineWidth = 2;
    c.stroke();
  }

  for (let i = 0; i < 9; i++) {
    const x = ARENA.x + ((time * 22 + i * 79) % (ARENA.w + 30)) - 15;
    const y = RIVER.top + 8 + ((i * 37) % (RIVER.bottom - RIVER.top - 16));
    const a = 0.18 + Math.sin(time * 2 + i) * 0.08;
    c.fillStyle = `rgba(240,252,255,${a})`;
    c.beginPath(); c.ellipse(x, y, 7, 1.8, 0, 0, Math.PI * 2); c.fill();
  }

  // Sparkle near the surface
  c.fillStyle = 'rgba(255,255,255,.1)';
  c.fillRect(ARENA.x, RIVER.top + 2, ARENA.w, 2);
  c.restore();
}

export function drawBridges(c) {
  for (const bx of LANES) {
    const w = BRIDGE.half * 2;
    const y = RIVER.top - BRIDGE.pad;
    const h = (RIVER.bottom - RIVER.top) + BRIDGE.pad * 2;

    // Shadow on the water
    c.save();
    c.fillStyle = 'rgba(4,28,44,.3)';
    fillRoundRect(c, bx - w / 2 + 4, y + 7, w, h, 9, 'rgba(4,28,44,.3)');
    c.restore();

    // Deck
    const wood = c.createLinearGradient(bx - w / 2, 0, bx + w / 2, 0);
    wood.addColorStop(0, '#8f5c31');
    wood.addColorStop(0.5, '#bb8248');
    wood.addColorStop(1, '#84522a');
    roundRectPath(c, bx - w / 2, y, w, h, 8);
    c.fillStyle = wood;
    c.fill();

    c.save();
    roundRectPath(c, bx - w / 2, y, w, h, 8);
    c.clip();
    for (let py = y + 8; py < y + h; py += 11) {
      c.strokeStyle = 'rgba(70,38,14,.45)';
      c.lineWidth = 1.5;
      c.beginPath();
      c.moveTo(bx - w / 2, py);
      c.lineTo(bx + w / 2, py);
      c.stroke();
    }
    const glow = c.createLinearGradient(bx - w / 2, 0, bx + w / 2, 0);
    glow.addColorStop(0, 'rgba(255,230,170,.18)');
    glow.addColorStop(0.4, 'rgba(255,240,200,.03)');
    glow.addColorStop(1, 'rgba(60,30,10,.15)');
    c.fillStyle = glow;
    c.fillRect(bx - w / 2, y, w, h);
    c.restore();

    // Rails
    for (const side of [-1, 1]) {
      const rx = bx + side * (w / 2 - 3);
      c.strokeStyle = '#5e3a1d';
      c.lineWidth = 6;
      c.beginPath(); c.moveTo(rx, y + 2); c.lineTo(rx, y + h - 2); c.stroke();
      c.strokeStyle = '#d6a166';
      c.lineWidth = 2;
      c.beginPath(); c.moveTo(rx, y + 3); c.lineTo(rx, y + h - 3); c.stroke();
    }
    // Posts
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const px = bx + side * (w / 2 - 3);
        const py = y + 10 + i * ((h - 20) / 3);
        c.beginPath(); c.arc(px, py, 4, 0, Math.PI * 2);
        c.fillStyle = '#e0b077';
        c.fill();
        c.strokeStyle = '#5e3a1d';
        c.lineWidth = 1.5;
        c.stroke();
      }
    }

    roundRectPath(c, bx - w / 2, y, w, h, 8);
    c.strokeStyle = 'rgba(45,24,8,.65)';
    c.lineWidth = 3;
    c.stroke();
  }
}

/* ----------------------------------------------------------------- towers */

export function drawTower(c, t, time) {
  const r = t.radius;
  const x = t.x;
  const y = t.y;
  const team = TEAM[t.team];

  if (!t.alive) {
    drawRubble(c, t, team, time);
    return;
  }

  const h = t.king ? r * 2.15 : r * 1.95;

  // Ground shadow
  c.fillStyle = 'rgba(8,20,10,.3)';
  c.beginPath();
  c.ellipse(x + 4, y + 9, r * 1.25, r * 0.52, 0, 0, Math.PI * 2);
  c.fill();

  // Stone base
  c.beginPath();
  c.ellipse(x, y + 2, r * 1.2, r * 0.5, 0, 0, Math.PI * 2);
  c.fillStyle = '#596259';
  c.fill();
  c.strokeStyle = 'rgba(20,30,22,.6)';
  c.lineWidth = 3;
  c.stroke();
  c.beginPath();
  c.ellipse(x, y + 1, r * 0.95, r * 0.38, 0, 0, Math.PI * 2);
  c.fillStyle = '#7b8478';
  c.fill();

  // Body
  const body = c.createLinearGradient(x - r, 0, x + r, 0);
  body.addColorStop(0, '#8b9488');
  body.addColorStop(0.35, '#c4cbbd');
  body.addColorStop(0.62, '#a1aa9d');
  body.addColorStop(1, '#788174');
  c.beginPath();
  c.moveTo(x - r * 0.82, y);
  c.lineTo(x + r * 0.82, y);
  c.lineTo(x + r * 0.63, y - h);
  c.lineTo(x - r * 0.63, y - h);
  c.closePath();
  c.fillStyle = body;
  c.fill();
  c.strokeStyle = 'rgba(30,40,32,.55)';
  c.lineWidth = 3;
  c.stroke();

  // Stone courses
  c.save();
  c.beginPath();
  c.moveTo(x - r * 0.82, y);
  c.lineTo(x + r * 0.82, y);
  c.lineTo(x + r * 0.63, y - h);
  c.lineTo(x - r * 0.63, y - h);
  c.closePath();
  c.clip();
  c.strokeStyle = 'rgba(60,70,60,.35)';
  c.lineWidth = 2;
  for (let i = 1; i < 5; i++) {
    const yy = y - (h * i) / 5;
    const halfW = lerp(r * 0.82, r * 0.63, i / 5);
    c.beginPath(); c.moveTo(x - halfW, yy); c.lineTo(x + halfW, yy); c.stroke();
    c.beginPath(); c.moveTo(x, yy); c.lineTo(x, yy - h / 5); c.stroke();
  }
  c.restore();

  // Team band
  const bandY = y - h * 0.4;
  const bandW = lerp(r * 0.82, r * 0.63, 0.4) * 2;
  c.fillStyle = team.dark;
  c.fillRect(x - bandW / 2, bandY, bandW, r * 0.22);
  c.fillStyle = team.main;
  c.fillRect(x - bandW / 2, bandY, bandW, r * 0.1);
  for (let i = -1; i <= 1; i++) {
    c.fillStyle = 'rgba(255,235,190,.85)';
    c.beginPath();
    c.moveTo(x + i * r * 0.32, bandY + r * 0.16);
    c.lineTo(x + i * r * 0.32 - r * 0.05, bandY + r * 0.06);
    c.lineTo(x + i * r * 0.32 + r * 0.05, bandY + r * 0.06);
    c.closePath();
    c.fill();
  }

  // Top platform
  c.beginPath();
  c.ellipse(x, y - h, r * 0.68, r * 0.3, 0, 0, Math.PI * 2);
  c.fillStyle = '#d3dacd';
  c.fill();
  c.strokeStyle = 'rgba(45,55,45,.6)';
  c.lineWidth = 2.5;
  c.stroke();

  // Crenellations
  const count = t.king ? 7 : 5;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + 0.25;
    const bx = x + Math.cos(a) * r * 0.56;
    const by = y - h + Math.sin(a) * r * 0.22;
    c.save();
    c.translate(bx, by);
    c.fillStyle = '#b9c1b4';
    fillRoundRect(c, -r * 0.13, -r * 0.2, r * 0.26, r * 0.26, 2, '#b9c1b4');
    c.strokeStyle = 'rgba(45,55,45,.5)';
    c.lineWidth = 1.5;
    c.stroke();
    c.restore();
  }

  // Banner pole + flag
  const flagSide = t.team === 'blue' ? -1 : 1;
  const poleX = x + flagSide * r * 0.5;
  const poleTop = y - h - r * 1.05;
  c.strokeStyle = '#4b3725';
  c.lineWidth = 3;
  c.beginPath(); c.moveTo(poleX, y - h + 2); c.lineTo(poleX, poleTop); c.stroke();
  c.fillStyle = team.main;
  c.beginPath();
  c.moveTo(poleX, poleTop);
  c.quadraticCurveTo(poleX + flagSide * r * 0.7, poleTop + r * 0.18 + Math.sin(time * 3 + x) * 2, poleX, poleTop + r * 0.5);
  c.quadraticCurveTo(poleX + flagSide * r * 0.28, poleTop + r * 0.34, poleX, poleTop + r * 0.35);
  c.closePath();
  c.fill();
  c.strokeStyle = 'rgba(255,255,255,.35)';
  c.lineWidth = 1;
  c.stroke();

  // Door
  const doorY = y - r * 0.28;
  c.beginPath();
  c.moveTo(x - r * 0.22, y - 2);
  c.lineTo(x - r * 0.22, doorY);
  c.quadraticCurveTo(x, doorY - r * 0.34, x + r * 0.22, doorY);
  c.lineTo(x + r * 0.22, y - 2);
  c.closePath();
  c.fillStyle = '#3d3021';
  c.fill();
  c.strokeStyle = 'rgba(0,0,0,.4)';
  c.lineWidth = 2;
  c.stroke();

  // King crown
  if (t.king) {
    drawCrown(c, x, y - h + 10, r * 0.34, '#ffd45e', '#b57a10');
  }

  // Active ward glow for king
  if (t.king && t.active) {
    c.save();
    c.globalAlpha = 0.25 + Math.sin(time * 3) * 0.08;
    c.strokeStyle = team.main;
    c.lineWidth = 3;
    c.beginPath();
    c.ellipse(x, y + 4, r * 1.3, r * 0.55, 0, 0, Math.PI * 2);
    c.stroke();
    c.restore();
  }

  if (t.hitFlash > 0) {
    c.save();
    c.globalAlpha = Math.min(0.5, t.hitFlash * 2.2);
    c.fillStyle = '#fff';
    c.beginPath();
    c.ellipse(x, y - h / 2, r * 0.85, h * 0.55, 0, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }

  // Health bar
  drawHealthBar(c, x - r * 0.95, y - h - 13, r * 1.9, 9, t.hp / t.maxHp, {
    bg: 'rgba(8,16,12,.72)',
    border: 'rgba(0,0,0,.45)',
  });
}

function drawRubble(c, t, team, time) {
  const r = t.radius;
  const x = t.x;
  const y = t.y;

  c.save();
  c.fillStyle = 'rgba(10,20,10,.35)';
  c.beginPath(); c.ellipse(x, y + 4, r * 1.25, r * 0.5, 0, 0, Math.PI * 2); c.fill();

  c.fillStyle = 'rgba(30,24,18,.55)';
  c.beginPath(); c.ellipse(x, y, r * 1.1, r * 0.45, 0, 0, Math.PI * 2); c.fill();

  const chunks = [
    [-0.5, 0.05, 0.34, 0.2, -0.4],
    [0.15, -0.05, 0.4, 0.22, 0.25],
    [0.55, 0.12, 0.26, 0.15, 0.7],
    [-0.1, 0.2, 0.24, 0.13, 0.1],
    [0.32, -0.18, 0.18, 0.12, -0.2],
  ];
  for (const [dx, dy, sw, sh, rot] of chunks) {
    c.save();
    c.translate(x + dx * r, y + dy * r);
    c.rotate(rot);
    c.fillStyle = '#7d867a';
    fillRoundRect(c, -r * sw / 2, -r * sh / 2, r * sw, r * sh, 3, '#7d867a');
    c.strokeStyle = 'rgba(20,28,20,.5)';
    c.lineWidth = 1.5;
    c.stroke();
    c.fillStyle = 'rgba(255,255,255,.18)';
    c.fillRect(-r * sw / 2 + 2, -r * sh / 2 + 1, r * sw - 4, 2);
    c.restore();
  }

  // Broken banner
  c.save();
  c.translate(x + r * 0.4, y - r * 0.1);
  c.rotate(0.5);
  c.fillStyle = team.dark;
  c.globalAlpha = 0.8;
  fillRoundRect(c, 0, 0, r * 0.55, r * 0.32, 2, team.dark);
  c.restore();

  // Smoke wisps
  c.save();
  for (let i = 0; i < 3; i++) {
    const a = 0.1 + Math.sin(time * 1.4 + i * 2) * 0.035;
    c.fillStyle = `rgba(210,220,215,${a})`;
    const sy = y - 12 - i * 15 - (time * 6 % 12);
    c.beginPath(); c.arc(x + Math.sin(time + i) * 7, sy, 7 + i * 4, 0, Math.PI * 2); c.fill();
  }
  c.restore();
}

/* ------------------------------------------------------------------- cards */

export function drawCardFace(c, card, x, y, w, h, opts = {}) {
  const style = ROLE_STYLE[card.role] || ROLE_STYLE.tank;
  const lift = opts.selected ? -13 : 0;
  const affordable = opts.affordable !== false;
  const shake = opts.shake || 0;

  c.save();
  c.translate(x + shake, y + lift);

  // Drop shadow
  c.fillStyle = 'rgba(0,0,0,.42)';
  fillRoundRect(c, 3, 7, w, h, 16, 'rgba(0,0,0,.42)');

  // Body
  const bg = c.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, style.a);
  bg.addColorStop(1, style.b);
  roundRectPath(c, 0, 0, w, h, 16);
  c.fillStyle = bg;
  c.fill();

  // Inner sheen
  c.save();
  roundRectPath(c, 0, 0, w, h, 16);
  c.clip();
  const glow = c.createRadialGradient(w / 2, h * 0.42, 4, w / 2, h * 0.42, w * 0.7);
  glow.addColorStop(0, 'rgba(255,255,255,.2)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = glow;
  c.fillRect(0, 0, w, h);

  // Rays behind the portrait
  c.globalAlpha = 0.11;
  c.translate(w / 2, h * 0.44);
  for (let i = 0; i < 8; i++) {
    c.rotate(Math.PI / 4);
    c.fillStyle = '#ffffff';
    c.beginPath(); c.moveTo(0, 0); c.lineTo(-9, -w); c.lineTo(9, -w); c.closePath(); c.fill();
  }
  c.restore();

  // Portrait
  c.save();
  c.translate(w / 2, h * 0.66);
  if (card.spell) {
    drawSpellIcon(c, card.spell, 0, -h * 0.1, w * 0.29);
  } else {
    const r = card.id === 'giant' ? w * 0.185 : w * 0.15;
    drawTroop(c, card.id, r, 'blue', { facing: 1, walk: 0.6 });
  }
  c.restore();

  // Bottom name plate
  c.save();
  c.translate(0, h - 40);
  const plate = c.createLinearGradient(0, 0, 0, 40);
  plate.addColorStop(0, 'rgba(6,12,20,0)');
  plate.addColorStop(0.45, 'rgba(6,12,20,.82)');
  plate.addColorStop(1, 'rgba(6,12,20,.92)');
  c.fillStyle = plate;
  c.fillRect(1, 0, w - 2, 39);
  c.fillStyle = '#f6faff';
  c.font = font(14.5, 800);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(card.name.toUpperCase(), w / 2, 24);
  c.restore();

  // Cost badge
  drawElixirDrop(c, 23, 24, 17, true);
  c.fillStyle = '#ffffff';
  c.font = font(16, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(String(card.cost), 23, 25);

  // Count badge
  if (card.count > 1) {
    c.save();
    c.translate(w - 19, 21);
    fillRoundRect(c, -13, -11, 26, 22, 8, 'rgba(7,14,24,.82)');
    c.strokeStyle = 'rgba(255,255,255,.22)';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = '#eaf4ff';
    c.font = font(11, 800);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(`×${card.count}`, 0, 0.5);
    c.restore();
  }

  // Border
  roundRectPath(c, 1.5, 1.5, w - 3, h - 3, 14.5);
  c.strokeStyle = opts.selected ? '#ffd45e' : 'rgba(255,255,255,.18)';
  c.lineWidth = opts.selected ? 3.5 : 1.5;
  c.stroke();
  if (opts.selected) {
    c.save();
    c.shadowColor = 'rgba(255,205,80,.85)';
    c.shadowBlur = 18;
    roundRectPath(c, 1.5, 1.5, w - 3, h - 3, 14.5);
    c.strokeStyle = 'rgba(255,220,110,.8)';
    c.lineWidth = 2;
    c.stroke();
    c.restore();
  }

  // Unaffordable veil
  if (!affordable) {
    roundRectPath(c, 0, 0, w, h, 16);
    c.fillStyle = 'rgba(4,9,16,.58)';
    c.fill();
    c.fillStyle = '#ff7c8a';
    c.font = font(16, 900);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(String(card.cost), 23, 25);
  }

  c.restore();
}

export function drawMiniCard(c, card, x, y, w, h) {
  const style = ROLE_STYLE[card.role] || ROLE_STYLE.tank;
  c.save();
  const bg = c.createLinearGradient(0, y, 0, y + h);
  bg.addColorStop(0, style.a);
  bg.addColorStop(1, style.b);
  roundRectPath(c, x, y, w, h, 9);
  c.fillStyle = bg;
  c.fill();
  c.strokeStyle = 'rgba(255,255,255,.15)';
  c.lineWidth = 1;
  c.stroke();

  c.save();
  roundRectPath(c, x, y, w, h, 9);
  c.clip();
  c.translate(x + w / 2, y + h * 0.62);
  if (card.spell) drawSpellIcon(c, card.spell, 0, 0, w * 0.34);
  else drawTroop(c, card.id, card.id === 'giant' ? w * 0.22 : w * 0.19, 'blue', { walk: 0.5 });
  c.restore();

  drawElixirDrop(c, x + 10, y + 10, 8.5, true);
  c.fillStyle = '#fff';
  c.font = font(9.5, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(String(card.cost), x + 10, y + 10.5);
  c.restore();
}

export function drawSpellIcon(c, kind, cx, cy, s) {
  c.save();
  c.translate(cx, cy);
  if (kind === 'fireball') {
    c.rotate(-0.42);

    const glow = c.createRadialGradient(s * 0.2, 0, 1, s * 0.2, 0, s * 1.55);
    glow.addColorStop(0, 'rgba(255,235,150,.8)');
    glow.addColorStop(0.45, 'rgba(255,130,30,.42)');
    glow.addColorStop(1, 'rgba(255,80,10,0)');
    c.fillStyle = glow;
    c.beginPath(); c.arc(s * 0.2, 0, s * 1.55, 0, Math.PI * 2); c.fill();

    // Flaming tail trailing behind the meteor.
    c.fillStyle = '#ff5a10';
    c.beginPath();
    c.moveTo(s * 0.82, s * 0.5);
    c.quadraticCurveTo(-s * 0.12, s * 0.86, -s * 1.38, s * 0.24);
    c.quadraticCurveTo(-s * 0.72, -s * 0.04, -s * 0.08, -s * 0.56);
    c.quadraticCurveTo(s * 0.55, -s * 0.6, s * 0.82, s * 0.5);
    c.closePath();
    c.fill();

    c.fillStyle = '#ffa921';
    c.beginPath();
    c.moveTo(s * 0.6, s * 0.32);
    c.quadraticCurveTo(-s * 0.02, s * 0.52, -s * 0.86, s * 0.13);
    c.quadraticCurveTo(-s * 0.22, -s * 0.06, s * 0.04, -s * 0.36);
    c.quadraticCurveTo(s * 0.5, -s * 0.34, s * 0.6, s * 0.32);
    c.closePath();
    c.fill();

    // Glowing rock core.
    const ball = c.createRadialGradient(s * 0.08, -s * 0.3, s * 0.04, s * 0.35, 0, s * 0.76);
    ball.addColorStop(0, '#fff7c4');
    ball.addColorStop(0.3, '#ffd35c');
    ball.addColorStop(0.68, '#ff7a16');
    ball.addColorStop(1, '#cf3e0a');
    c.fillStyle = ball;
    c.beginPath(); c.arc(s * 0.35, 0, s * 0.7, 0, Math.PI * 2); c.fill();

    c.fillStyle = 'rgba(100,32,6,.55)';
    c.beginPath(); c.arc(s * 0.18, s * 0.2, s * 0.13, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(s * 0.58, -s * 0.28, s * 0.09, 0, Math.PI * 2); c.fill();
    c.fillStyle = 'rgba(255,255,230,.75)';
    c.beginPath(); c.arc(s * 0.14, -s * 0.33, s * 0.1, 0, Math.PI * 2); c.fill();

    // A few embers chasing the tail.
    c.fillStyle = '#ffb52e';
    c.beginPath(); c.arc(-s * 1.05, -s * 0.16, s * 0.075, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(-s * 0.82, s * 0.55, s * 0.055, 0, Math.PI * 2); c.fill();
  } else {
    // Arrows
    c.rotate(-0.25);
    for (let i = -1; i <= 1; i++) {
      c.save();
      c.translate(i * s * 0.6, Math.abs(i) * s * 0.25);
      c.rotate(0.6);
      c.strokeStyle = '#e8cf9a';
      c.lineWidth = s * 0.13;
      c.lineCap = 'round';
      c.beginPath(); c.moveTo(0, -s * 0.95); c.lineTo(0, s * 0.7); c.stroke();
      c.fillStyle = '#c7d8ea';
      c.beginPath();
      c.moveTo(0, -s * 1.25);
      c.lineTo(-s * 0.22, -s * 0.8);
      c.lineTo(s * 0.22, -s * 0.8);
      c.closePath();
      c.fill();
      c.strokeStyle = '#9c6a35';
      c.lineWidth = s * 0.08;
      for (let f = 0; f < 2; f++) {
        c.beginPath();
        c.moveTo(0, s * (0.35 + f * 0.22));
        c.lineTo(-s * 0.24, s * (0.52 + f * 0.22));
        c.stroke();
        c.beginPath();
        c.moveTo(0, s * (0.35 + f * 0.22));
        c.lineTo(s * 0.24, s * (0.52 + f * 0.22));
        c.stroke();
      }
      c.restore();
    }
  }
  c.restore();
}

export function drawElixirDrop(c, x, y, s, withGlow = false) {
  c.save();
  c.translate(x, y);
  if (withGlow) {
    c.shadowColor = 'rgba(190,90,255,.7)';
    c.shadowBlur = 8;
  }
  c.beginPath();
  c.moveTo(0, -s);
  c.bezierCurveTo(s * 0.92, -s * 0.1, s * 0.72, s * 0.8, 0, s * 0.86);
  c.bezierCurveTo(-s * 0.72, s * 0.8, -s * 0.92, -s * 0.1, 0, -s);
  c.closePath();
  const g = c.createLinearGradient(0, -s, 0, s);
  g.addColorStop(0, '#e29bff');
  g.addColorStop(0.45, '#b44dff');
  g.addColorStop(1, '#6f1fce');
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = 'rgba(46,8,83,.7)';
  c.lineWidth = 1.4;
  c.stroke();
  c.fillStyle = 'rgba(255,255,255,.55)';
  c.beginPath();
  c.ellipse(-s * 0.25, -s * 0.18, s * 0.18, s * 0.3, -0.5, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

/* -------------------------------------------------------------- interface */

export function drawCrown(c, x, y, s, fill = '#ffd45e', stroke = '#b57a10') {
  c.save();
  c.translate(x, y);
  c.beginPath();
  c.moveTo(-s, s * 0.55);
  c.lineTo(-s * 0.92, -s * 0.52);
  c.lineTo(-s * 0.38, s * 0.02);
  c.lineTo(0, -s * 0.72);
  c.lineTo(s * 0.38, s * 0.02);
  c.lineTo(s * 0.92, -s * 0.52);
  c.lineTo(s, s * 0.55);
  c.closePath();
  c.fillStyle = fill;
  c.fill();
  c.strokeStyle = stroke;
  c.lineWidth = Math.max(1, s * 0.1);
  c.stroke();
  fillRoundRect(c, -s * 0.9, s * 0.5, s * 1.8, s * 0.34, s * 0.1, stroke);
  c.restore();
}

export function drawHealthBar(c, x, y, w, h, pct, opts = {}) {
  const p = clamp(pct, 0, 1);
  c.save();
  fillRoundRect(c, x - 1, y - 1, w + 2, h + 2, h / 2 + 1, opts.border || 'rgba(0,0,0,.55)');
  fillRoundRect(c, x, y, w, h, h / 2, opts.bg || 'rgba(8,14,22,.8)');
  if (p > 0) {
    const col = p > 0.55 ? '#5cd86b' : p > 0.28 ? '#ffc63d' : '#ff5c6c';
    c.save();
    roundRectPath(c, x, y, w, h, h / 2);
    c.clip();
    c.fillStyle = col;
    c.fillRect(x, y, w * p, h);
    c.fillStyle = 'rgba(255,255,255,.25)';
    c.fillRect(x, y, w * p, h * 0.4);
    c.restore();
  }
  c.restore();
}

export function drawPauseIcon(c, x, y, s, color = '#eaf4ff') {
  c.save();
  c.translate(x, y);
  fillRoundRect(c, -s * 0.48, -s * 0.6, s * 0.32, s * 1.2, s * 0.1, color);
  fillRoundRect(c, s * 0.16, -s * 0.6, s * 0.32, s * 1.2, s * 0.1, color);
  c.restore();
}

export function drawSoundIcon(c, x, y, s, enabled, color = '#eaf4ff') {
  c.save();
  c.translate(x, y);
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(-s * 0.62, -s * 0.22);
  c.lineTo(-s * 0.2, -s * 0.22);
  c.lineTo(s * 0.2, -s * 0.6);
  c.lineTo(s * 0.2, s * 0.6);
  c.lineTo(-s * 0.2, s * 0.22);
  c.lineTo(-s * 0.62, s * 0.22);
  c.closePath();
  c.fill();
  c.strokeStyle = color;
  c.lineWidth = s * 0.12;
  c.lineCap = 'round';
  if (enabled) {
    c.beginPath(); c.arc(s * 0.18, 0, s * 0.4, -0.8, 0.8); c.stroke();
    c.beginPath(); c.arc(s * 0.18, 0, s * 0.68, -0.75, 0.75); c.stroke();
  } else {
    c.beginPath(); c.moveTo(s * 0.34, -s * 0.36); c.lineTo(s * 0.8, s * 0.36); c.stroke();
    c.beginPath(); c.moveTo(s * 0.8, -s * 0.36); c.lineTo(s * 0.34, s * 0.36); c.stroke();
  }
  c.restore();
}

export function drawCrownPip(c, x, y, s, earned) {
  c.save();
  if (earned) {
    c.shadowColor = 'rgba(255,205,80,.55)';
    c.shadowBlur = 8;
    drawCrown(c, x, y, s, '#ffd45e', '#b57a10');
  } else {
    c.globalAlpha = 0.5;
    c.fillStyle = 'rgba(150,180,215,.12)';
    c.beginPath(); c.arc(x, y, s * 1.3, 0, Math.PI * 2); c.fill();
    c.strokeStyle = 'rgba(170,200,235,.3)';
    c.lineWidth = 1;
    c.stroke();
    c.globalAlpha = 0.55;
    drawCrown(c, x, y, s * 0.78, '#9fb2c9', '#586a7f');
  }
  c.restore();
}

export function drawShieldIcon(c, x, y, s, team) {
  const t = TEAM[team];
  c.save();
  c.translate(x, y);
  c.beginPath();
  c.moveTo(-s * 0.82, -s * 0.82);
  c.lineTo(s * 0.82, -s * 0.82);
  c.lineTo(s * 0.82, s * 0.1);
  c.quadraticCurveTo(s * 0.82, s * 0.8, 0, s * 1.02);
  c.quadraticCurveTo(-s * 0.82, s * 0.8, -s * 0.82, s * 0.1);
  c.closePath();
  const g = c.createLinearGradient(0, -s, 0, s);
  g.addColorStop(0, t.main);
  g.addColorStop(1, t.dark);
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = 'rgba(6,14,24,.75)';
  c.lineWidth = 2;
  c.stroke();
  c.fillStyle = 'rgba(255,255,255,.8)';
  c.font = font(s * 0.8, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(team === 'blue' ? 'Y' : 'R', 0, s * 0.04);
  c.restore();
}

/* Canvas presentation for the arena, HUD, and deploy preview. */

import {
  W, H, ARENA, RIVER, NEXT, ELIXIR, HUD, TEAM, CARDS,
  font, clamp, formatTime, fillRoundRect, roundRectPath, lerp, rand,
} from './data.js';
import {
  drawWater, drawBridges, drawTower, drawCardFace, drawMiniCard,
  drawCrownPip, drawPauseIcon, drawSoundIcon, drawShieldIcon,
  drawHealthBar, drawSpellIcon,
} from './art.js';
import { drawTroop, drawTroopShadow } from './troops.js';

export function render(g) {
  const c = g.ctx;
  c.clearRect(0, 0, W, H);
  c.drawImage(g.scene, 0, 0);

  const shake = g.shake > 0.2 ? g.shake : 0;
  const ox = shake ? (Math.random() * 2 - 1) * shake * 0.55 : 0;
  const oy = shake ? (Math.random() * 2 - 1) * shake * 0.4 : 0;

  c.save();
  c.translate(ox, oy);

  drawWater(c, g.time);
  drawBridges(c);

  for (const s of g.scorches) drawScorch(c, s);
  if (g.state === 'playing' && g.selected !== null) drawDeployZone(g, c);

  for (const t of g.towers) drawTower(c, t, g.time);

  if (g.state === 'menu') {
    drawMenuTroops(g, c);
    c.restore();
    return;
  }

  for (const s of g.pendingSpells) drawPendingSpell(g, c, s);

  drawUnits(g, c);
  drawProjectiles(g, c);
  drawRings(g, c);
  drawParticles(g, c);
  drawFlashes(g, c);
  drawFloaters(g, c);
  drawGhost(g, c);
  c.restore();

  drawHUD(g, c);
  drawHints(g, c);
  if (g.state === 'countdown') drawCountdown(g, c);
  if (g.clashFlash > 0 && g.state === 'playing') drawClash(g, c);
  if (g.banner) drawBanner(g, c);
}

/* ------------------------------------------------------------------ arena */

function drawScorch(c, s) {
  c.save();
  c.translate(s.x, s.y);
  c.rotate(s.rot);
  const g = c.createRadialGradient(0, 0, 2, 0, 0, s.radius);
  g.addColorStop(0, `rgba(18,14,10,${s.alpha})`);
  g.addColorStop(0.6, `rgba(30,22,14,${s.alpha * 0.6})`);
  g.addColorStop(1, 'rgba(30,22,14,0)');
  c.fillStyle = g;
  c.beginPath();
  c.ellipse(0, 0, s.radius, s.radius * 0.55, 0, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

function drawDeployZone(g, c) {
  const card = CARDS[g.playerDeck.hand[g.selected]];
  if (!card) return;
  const top = card.spell ? ARENA.y + 4 : RIVER.bottom + 4;
  c.save();
  c.beginPath();
  c.rect(ARENA.x + 2, top, ARENA.w - 4, ARENA.bottom - top - 2);
  c.clip();
  const grad = c.createLinearGradient(0, top, 0, ARENA.bottom);
  if (card.spell) {
    grad.addColorStop(0, 'rgba(176,108,255,.2)');
    grad.addColorStop(1, 'rgba(176,108,255,.05)');
  } else {
    grad.addColorStop(0, 'rgba(74,167,255,.24)');
    grad.addColorStop(1, 'rgba(74,167,255,.05)');
  }
  c.fillStyle = grad;
  c.fillRect(ARENA.x, top, ARENA.w, ARENA.bottom - top);
  c.restore();

  if (!card.spell) {
    c.save();
    c.setLineDash([7, 7]);
    c.strokeStyle = 'rgba(120,195,255,.4)';
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(ARENA.x + 10, top);
    c.lineTo(ARENA.right - 10, top);
    c.stroke();
    c.restore();
  }
}

function drawMenuTroops(g, c) {
  const units = [
    ['knight', 'blue', 302, 700, 1, 16],
    ['archers', 'blue', 252, 648, 1, 12],
    ['giant', 'red', 470, 420, -1, 23],
    ['goblins', 'red', 418, 450, -1, 10],
  ];
  for (const [type, team, x, y, facing, r] of units) {
    c.save();
    c.translate(x, y);
    c.globalAlpha = 0.95;
    drawTroopShadow(c, r, false);
    drawTroop(c, type, r, team, { facing, walk: g.time * 0.35 + x, moving: false });
    c.restore();
  }
}

function drawUnits(g, c) {
  const units = g.units.filter((u) => u.alive).sort((a, b) => a.y - b.y);
  for (const u of units) {
    const deploying = u.deploy > 0;
    const grow = deploying ? clamp(1 - u.deploy / 0.42, 0, 1) : 1;
    const scale = deploying ? 0.35 + grow * 0.65 : 1;
    const alpha = deploying ? 0.4 + grow * 0.6 : 1;
    const lift = u.fly ? 16 : 0;

    c.save();
    c.translate(u.x, u.y);
    drawTroopShadow(c, u.radius, u.fly);
    // Team ring keeps the two sides readable at a glance.
    c.globalAlpha = 0.55;
    c.strokeStyle = TEAM[u.team].main;
    c.lineWidth = 2;
    c.beginPath();
    c.ellipse(0, 1, u.radius * 0.95, u.radius * 0.38, 0, 0, Math.PI * 2);
    c.stroke();
    c.restore();

    c.save();
    c.translate(u.x, u.y - lift);
    c.scale(scale, scale);
    if (u.attackAnim > 0) {
      const lunge = Math.sin((u.attackAnim / 0.2) * Math.PI) * 3.5;
      c.translate(u.facing * lunge, 0);
    }
    drawTroop(c, u.def.id, u.radius, u.team, {
      facing: u.facing, walk: u.walk, moving: u.moving, flash: u.hitFlash, alpha,
    });
    c.restore();

    if (!deploying && u.hp < u.maxHp) {
      const w = Math.max(26, u.radius * 2.2);
      drawHealthBar(c, u.x - w / 2, u.y - lift - u.radius * 2.85, w, 5, u.hp / u.maxHp, {});
    }
    if (deploying) {
      const p = 1 - u.deploy / 0.42;
      c.save();
      c.globalAlpha = 0.6 * (1 - p);
      c.strokeStyle = TEAM[u.team].main;
      c.lineWidth = 2.5;
      c.beginPath();
      c.ellipse(u.x, u.y, u.radius * (1 + p * 1.8), u.radius * 0.45 * (1 + p * 1.8), 0, 0, Math.PI * 2);
      c.stroke();
      c.restore();
    }
  }
}

function drawProjectiles(g, c) {
  for (const p of g.projectiles) {
    c.save();
    c.translate(p.x, p.y);
    if (p.kind === 'arrow') {
      c.rotate(p.angle);
      c.strokeStyle = '#f2dba9';
      c.lineWidth = 2.4;
      c.lineCap = 'round';
      c.beginPath(); c.moveTo(-11, 0); c.lineTo(6, 0); c.stroke();
      c.fillStyle = '#d7e4f2';
      c.beginPath(); c.moveTo(9, 0); c.lineTo(2, -3); c.lineTo(2, 3); c.closePath(); c.fill();
      c.strokeStyle = '#b9854a';
      c.lineWidth = 1.5;
      c.beginPath(); c.moveTo(-11, 0); c.lineTo(-15, -4); c.moveTo(-11, 0); c.lineTo(-15, 4); c.stroke();
    } else if (p.kind === 'bullet') {
      c.rotate(p.angle);
      c.strokeStyle = 'rgba(255,221,140,.45)';
      c.lineWidth = 2;
      c.beginPath(); c.moveTo(-14, 0); c.lineTo(-3, 0); c.stroke();
      c.fillStyle = '#ffe9a8';
      c.beginPath(); c.arc(0, 0, 4, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#fff8dd';
      c.beginPath(); c.arc(0, 0, 1.8, 0, Math.PI * 2); c.fill();
    } else {
      const team = TEAM[p.team].main;
      c.fillStyle = 'rgba(255,255,255,.15)';
      c.beginPath(); c.arc(0, 0, 11, 0, Math.PI * 2); c.fill();
      c.fillStyle = team;
      c.beginPath(); c.arc(0, 0, 6.5, 0, Math.PI * 2); c.fill();
      c.fillStyle = '#ffffff';
      c.beginPath(); c.arc(-1, -1, 2.4, 0, Math.PI * 2); c.fill();
      c.strokeStyle = 'rgba(255,255,255,.35)';
      c.lineWidth = 2;
      c.beginPath(); c.moveTo(-5, 0); c.lineTo(-16, 0); c.stroke();
    }
    c.restore();
  }
}

function drawRings(g, c) {
  for (const r of g.rings) {
    const t = r.t / r.dur;
    const alpha = 1 - t;
    const radius = r.radius * (0.35 + t * 0.9);
    c.save();
    c.globalAlpha = alpha * 0.9;
    c.strokeStyle = r.color;
    c.lineWidth = 3 * (1 - t) + 1;
    c.beginPath();
    c.ellipse(r.x, r.y, radius, radius * 0.55, 0, 0, Math.PI * 2);
    c.stroke();
    c.restore();
  }
}

function drawParticles(g, c) {
  for (const p of g.particles) {
    const alpha = clamp(p.life / 0.45, 0, 1);
    c.save();
    c.globalAlpha = alpha;
    c.fillStyle = p.color;
    if (p.shape === 'square') {
      c.translate(p.x, p.y);
      c.rotate(p.x * 0.1 + p.y * 0.05);
      c.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    } else {
      c.beginPath();
      c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  }
}

function drawFlashes(g, c) {
  for (const f of g.flashes) {
    const p = f.t / f.dur;
    const alpha = (1 - p) * (1 - p);
    const radius = f.r * (0.55 + p * 0.7);
    c.save();
    c.globalCompositeOperation = 'lighter';
    c.globalAlpha = alpha;
    const grad = c.createRadialGradient(f.x, f.y, 2, f.x, f.y, radius);
    if (f.warm) {
      grad.addColorStop(0, 'rgba(255,255,235,.95)');
      grad.addColorStop(0.3, 'rgba(255,205,110,.8)');
      grad.addColorStop(0.7, 'rgba(255,125,35,.35)');
      grad.addColorStop(1, 'rgba(255,90,20,0)');
    } else {
      grad.addColorStop(0, 'rgba(235,250,255,.9)');
      grad.addColorStop(1, 'rgba(90,170,255,0)');
    }
    c.fillStyle = grad;
    c.beginPath();
    c.arc(f.x, f.y, radius, 0, Math.PI * 2);
    c.fill();
    c.restore();
  }
}

function drawFloaters(g, c) {
  for (const f of g.floaters) {
    const t = f.t / f.dur;
    const alpha = t < 0.6 ? 1 : 1 - (t - 0.6) / 0.4;
    c.save();
    c.globalAlpha = clamp(alpha, 0, 1);
    c.font = font(f.size, 900);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.lineWidth = 4;
    c.strokeStyle = 'rgba(6,12,20,.7)';
    c.strokeText(f.text, f.x, f.y);
    c.fillStyle = f.color;
    c.fillText(f.text, f.x, f.y);
    c.restore();
  }
}

function drawPendingSpell(g, c, s) {
  const p = s.t / s.dur;
  const card = s.card;
  const color = card.spell === 'fireball' ? 'rgba(255,150,50,' : 'rgba(235,215,160,';

  c.save();
  const ringAlpha = 0.16 + p * 0.22;
  c.fillStyle = `${color}${ringAlpha})`;
  c.beginPath();
  c.ellipse(s.x, s.y, card.radius, card.radius * 0.6, 0, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = `${color}${0.4 + p * 0.4})`;
  c.lineWidth = 2;
  c.setLineDash([6, 6]);
  c.beginPath();
  c.ellipse(s.x, s.y, card.radius, card.radius * 0.6, 0, 0, Math.PI * 2);
  c.stroke();
  c.restore();

  if (card.spell === 'fireball') {
    const fromY = s.team === 'blue' ? ARENA.bottom + 34 : ARENA.y - 34;
    const fromX = s.x + (s.team === 'blue' ? 52 : -52);
    const p2 = p * p * (3 - 2 * p);
    const x = lerp(fromX, s.x, p2) + Math.sin(p * Math.PI) * (s.team === 'blue' ? -18 : 18);
    const y = lerp(fromY, s.y, p2);
    c.save();
    const glow = c.createRadialGradient(x, y, 2, x, y, 30);
    glow.addColorStop(0, 'rgba(255,248,190,.95)');
    glow.addColorStop(0.4, 'rgba(255,160,50,.7)');
    glow.addColorStop(1, 'rgba(255,100,20,0)');
    c.fillStyle = glow;
    c.beginPath(); c.arc(x, y, 30, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#ffd35c';
    c.beginPath(); c.arc(x, y + 6, 10, 0, Math.PI * 2); c.fill();
    for (let i = 1; i <= 5; i++) {
      c.globalAlpha = 0.5 - i * 0.075;
      c.fillStyle = i < 3 ? '#ff9a31' : '#e85d20';
      const back = s.team === 'blue' ? 1 : -1;
      c.beginPath(); c.arc(x + rand(-3, 3), y + back * i * 13, 8 - i * 0.8, 0, Math.PI * 2); c.fill();
    }
    c.restore();
  } else {
    c.save();
    for (let i = 0; i < 8; i++) {
      const px = s.x + ((i * 47) % 130) - 65;
      const py = s.y - 160 + ((i * 31) % 40) + p * 180;
      c.strokeStyle = 'rgba(240,225,180,.75)';
      c.lineWidth = 2;
      c.beginPath(); c.moveTo(px, py); c.lineTo(px, py + 16); c.stroke();
      c.fillStyle = '#e8eef8';
      c.beginPath(); c.moveTo(px, py + 18); c.lineTo(px - 3, py + 11); c.lineTo(px + 3, py + 11); c.closePath(); c.fill();
    }
    c.restore();
  }
}

function drawGhost(g, c) {
  if (g.state !== 'playing' || g.selected === null || !g.pointer.inside || g.finishing) return;
  const card = CARDS[g.playerDeck.hand[g.selected]];
  if (!card) return;
  const x = g.pointer.x;
  const y = g.pointer.y;
  const valid = g.canDeploy('blue', card, x, y);

  c.save();
  c.setLineDash([6, 6]);
  c.lineWidth = 2.5;
  if (card.spell) {
    const rad = card.radius;
    c.fillStyle = valid ? 'rgba(176,108,255,.16)' : 'rgba(255,80,90,.18)';
    c.strokeStyle = valid ? 'rgba(210,160,255,.9)' : 'rgba(255,110,120,.9)';
    c.beginPath();
    c.ellipse(x, y, rad, rad * 0.62, 0, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.setLineDash([]);
    drawSpellIcon(c, card.spell, x, y, 22);
  } else {
    const rad = card.radius + 6;
    c.fillStyle = valid ? 'rgba(90,220,130,.14)' : 'rgba(255,70,90,.18)';
    c.strokeStyle = valid ? 'rgba(120,255,170,.9)' : 'rgba(255,110,120,.9)';
    c.beginPath();
    c.ellipse(x, y, rad, rad * 0.45, 0, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.setLineDash([]);
    c.globalAlpha = valid ? 0.75 : 0.45;
    c.translate(x, y);
    drawTroopShadow(c, card.radius, card.flying);
    drawTroop(c, card.id, card.radius, 'blue', { facing: 1, walk: g.time * 4, moving: false });
  }
  c.restore();
}

/* -------------------------------------------------------------------- hud */

function drawHUD(g, c) {
  const blue = g.crowns('blue');
  const red = g.crowns('red');

  // Top bar
  const top = c.createLinearGradient(0, 0, 0, HUD.h);
  top.addColorStop(0, 'rgba(7,14,25,.98)');
  top.addColorStop(1, 'rgba(10,20,35,.9)');
  c.fillStyle = top;
  c.fillRect(0, 0, W, HUD.h);
  c.fillStyle = 'rgba(120,180,255,.14)';
  c.fillRect(0, HUD.h - 1, W, 1);

  // Rival side
  drawShieldIcon(c, 96, 48, 17, 'red');
  c.fillStyle = '#ffc1c8';
  c.font = font(11, 900);
  c.textAlign = 'left';
  c.textBaseline = 'middle';
  c.fillText('RIVAL', 121, 34);
  for (let i = 0; i < 3; i++) drawCrownPip(c, 124 + i * 21, 60, 9.5, i < red);

  // Player side
  drawShieldIcon(c, 624, 48, 17, 'blue');
  c.fillStyle = '#b9dcff';
  c.font = font(11, 900);
  c.textAlign = 'right';
  c.fillText('YOU', 599, 34);
  for (let i = 0; i < 3; i++) drawCrownPip(c, 596 - i * 21, 60, 9.5, i < blue);

  // Pause / sound buttons
  c.save();
  c.fillStyle = 'rgba(255,255,255,.06)';
  c.strokeStyle = 'rgba(160,200,255,.18)';
  c.lineWidth = 1;
  c.beginPath(); c.arc(42, 47, 21, 0, Math.PI * 2); c.fill(); c.stroke();
  c.beginPath(); c.arc(678, 47, 21, 0, Math.PI * 2); c.fill(); c.stroke();
  c.restore();
  drawPauseIcon(c, 42, 47, 12, '#dce9fb');
  drawSoundIcon(c, 678, 47, 11, g.sound.enabled, '#dce9fb');

  // Timer
  const danger = g.state === 'playing' && g.timeLeft <= 10;
  const pulse = danger ? 1 + Math.sin(g.time * 12) * 0.04 : 1;
  c.save();
  c.translate(360, 46);
  c.scale(pulse, pulse);
  fillRoundRect(c, -68, -29, 136, 58, 17, 'rgba(8,16,29,.88)');
  c.strokeStyle = danger ? 'rgba(255,110,120,.7)' : 'rgba(160,200,255,.25)';
  c.lineWidth = 1.5;
  roundRectPath(c, -68, -29, 136, 58, 17);
  c.stroke();
  c.fillStyle = danger ? '#ff9aa4' : '#f4f8ff';
  c.font = font(29, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(formatTime(g.timeLeft), 0, 0);
  c.restore();

  let phase = '';
  let phaseColor = '#c693ff';
  if (g.overtime) { phase = 'OVERTIME'; phaseColor = '#ff9aa4'; }
  else if (g.state === 'playing' && g.timeLeft <= 60) phase = 'DOUBLE ELIXIR';
  else if (g.state === 'countdown') phase = 'GET READY';
  if (phase) {
    c.fillStyle = phaseColor;
    c.font = font(8.5, 900);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(phase, 360, 84);
  }

  drawHand(g, c);
}

function drawHand(g, c) {
  // Bottom panel
  const bottom = c.createLinearGradient(0, 1008, 0, H);
  bottom.addColorStop(0, 'rgba(7,14,25,0)');
  bottom.addColorStop(0.22, 'rgba(7,14,25,.9)');
  bottom.addColorStop(1, 'rgba(5,10,18,1)');
  c.fillStyle = bottom;
  c.fillRect(0, 1008, W, H - 1008);
  c.fillStyle = 'rgba(140,190,255,.12)';
  c.fillRect(20, 1018, W - 40, 1);

  const deck = g.playerDeck;

  // Elixir bar
  fillRoundRect(c, ELIXIR.x, ELIXIR.y, ELIXIR.w, ELIXIR.h, 13, 'rgba(11,22,38,.9)');
  const pct = clamp(deck.elixir / 10, 0, 1);
  c.save();
  roundRectPath(c, ELIXIR.x, ELIXIR.y, ELIXIR.w, ELIXIR.h, 13);
  c.clip();
  const fillGrad = c.createLinearGradient(ELIXIR.x, 0, ELIXIR.x + ELIXIR.w, 0);
  fillGrad.addColorStop(0, '#7a2ad6');
  fillGrad.addColorStop(0.6, '#b44dff');
  fillGrad.addColorStop(1, '#e29bff');
  c.fillStyle = fillGrad;
  c.fillRect(ELIXIR.x, ELIXIR.y, ELIXIR.w * pct, ELIXIR.h);
  c.fillStyle = 'rgba(255,255,255,.28)';
  c.fillRect(ELIXIR.x, ELIXIR.y, ELIXIR.w * pct, 7);
  c.strokeStyle = 'rgba(5,10,20,.4)';
  c.lineWidth = 1.5;
  for (let i = 1; i < 10; i++) {
    const x = ELIXIR.x + (ELIXIR.w / 10) * i;
    c.beginPath(); c.moveTo(x, ELIXIR.y); c.lineTo(x, ELIXIR.y + ELIXIR.h); c.stroke();
  }
  c.restore();
  roundRectPath(c, ELIXIR.x, ELIXIR.y, ELIXIR.w, ELIXIR.h, 13);
  c.strokeStyle = 'rgba(200,150,255,.28)';
  c.lineWidth = 1.5;
  c.stroke();

  // Elixir number
  c.save();
  c.beginPath(); c.arc(668, 1033, 17, 0, Math.PI * 2);
  const orb = c.createRadialGradient(662, 1026, 2, 668, 1033, 20);
  orb.addColorStop(0, '#3a1a5e');
  orb.addColorStop(1, '#170a28');
  c.fillStyle = orb;
  c.fill();
  c.strokeStyle = 'rgba(190,120,255,.55)';
  c.lineWidth = 1.5;
  c.stroke();
  c.fillStyle = '#f0d8ff';
  c.font = font(17, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(String(Math.floor(deck.elixir)), 668, 1034);
  c.restore();

  // Cards
  for (let i = 0; i < 4; i++) {
    const id = deck.hand[i];
    if (!id) continue;
    const card = CARDS[id];
    const r = g.cardRect(i);
    let shake = 0;
    if (g.denied && g.denied.i === i) shake = Math.sin(g.denied.t * 75) * 5;
    drawCardFace(c, card, r.x, r.y, r.w, r.h, {
      selected: g.selected === i,
      affordable: deck.elixir + 0.001 >= card.cost,
      shake,
    });
  }

  // Next card
  const nextId = deck.queue[0];
  if (nextId) {
    c.fillStyle = 'rgba(160,185,215,.55)';
    c.font = font(8, 800);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('NEXT', NEXT.x + NEXT.w / 2, 1062);
    drawMiniCard(c, CARDS[nextId], NEXT.x, NEXT.y, NEXT.w, NEXT.h);
  }

  // Full-bar sparkle
  if (deck.elixir >= 9.98) {
    c.save();
    c.globalAlpha = 0.35 + Math.sin(g.time * 5) * 0.15;
    c.fillStyle = '#f3e3ff';
    c.font = font(9, 900);
    c.textAlign = 'right';
    c.textBaseline = 'middle';
    c.fillText('ELIXIR FULL', ELIXIR.x + ELIXIR.w - 12, ELIXIR.y + 13);
    c.restore();
  }
}

function drawHints(g, c) {
  if (g.state !== 'playing' || g.finishing) return;
  let text = '';
  let color = '#dce9fb';
  if (g.selected !== null) {
    const card = CARDS[g.playerDeck.hand[g.selected]];
    if (card) {
      const overArena = g.pointer.inside;
      const valid = overArena && g.canDeploy('blue', card, g.pointer.x, g.pointer.y);
      if (card.spell) text = overArena ? (valid ? 'Tap to cast' : 'Aim inside the arena') : 'Tap anywhere in the arena to cast';
      else text = overArena ? (valid ? 'Tap to deploy' : 'Can’t deploy there') : 'Tap your half of the arena';
      if (overArena && !valid) color = '#ff9aa4';
    }
  } else if (g.matchTime < 8) {
    text = 'Tap a card, then tap your half to deploy';
  }
  if (!text) return;
  c.save();
  c.font = font(12.5, 700);
  const w = c.measureText(text).width + 32;
  fillRoundRect(c, 360 - w / 2, 984, w, 27, 13, 'rgba(6,14,26,.82)');
  c.strokeStyle = 'rgba(150,195,255,.18)';
  c.lineWidth = 1;
  roundRectPath(c, 360 - w / 2, 984, w, 27, 13);
  c.stroke();
  c.fillStyle = color;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(text, 360, 998);
  c.restore();
}

function drawCountdown(g, c) {
  c.save();
  c.fillStyle = 'rgba(4,10,18,.38)';
  c.beginPath();
  roundRectPath(c, ARENA.x + 2, ARENA.y + 2, ARENA.w - 4, ARENA.h - 4, ARENA.r);
  c.fill();
  c.restore();

  const showClash = g.countdown <= 0.4;
  const n = Math.max(1, Math.ceil(g.countdown - 0.4));
  const text = showClash ? 'CLASH!' : String(n);

  c.save();
  c.translate(360, 520);
  const pop = showClash ? 1 + (0.4 - g.countdown) * 0.3 : 1;
  c.scale(pop, pop);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = font(showClash ? 82 : 116, 900);
  c.lineWidth = 14;
  c.strokeStyle = 'rgba(5,12,22,.75)';
  c.strokeText(text, 0, 0);
  const grad = c.createLinearGradient(0, -60, 0, 60);
  grad.addColorStop(0, '#fff6d8');
  grad.addColorStop(0.5, '#ffd45e');
  grad.addColorStop(1, '#e59c12');
  c.fillStyle = grad;
  c.fillText(text, 0, 0);
  c.restore();

  if (!showClash) {
    c.save();
    c.fillStyle = 'rgba(220,233,251,.72)';
    c.font = font(13, 800);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('DEFEND YOUR CROWNS', 360, 600);
    c.restore();
  }

  // Countdown ring
  const frac = Math.max(0, Math.min(1, (g.countdown - 0.4) % 1));
  c.save();
  c.strokeStyle = 'rgba(255,212,94,.4)';
  c.lineWidth = 4;
  c.beginPath();
  c.arc(360, 520, 112, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - frac));
  c.stroke();
  c.restore();
}

function drawClash(g, c) {
  const a = clamp(g.clashFlash, 0, 1);
  c.save();
  c.globalAlpha = a;
  c.translate(360, 500);
  c.scale(1 + (1 - a) * 0.25, 1 + (1 - a) * 0.25);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = font(86, 900);
  c.lineWidth = 12;
  c.strokeStyle = 'rgba(5,12,22,.7)';
  c.strokeText('CLASH!', 0, 0);
  const grad = c.createLinearGradient(0, -50, 0, 50);
  grad.addColorStop(0, '#fff6d8');
  grad.addColorStop(0.55, '#ffd45e');
  grad.addColorStop(1, '#e59c12');
  c.fillStyle = grad;
  c.fillText('CLASH!', 0, 0);
  c.restore();
}

function drawBanner(g, c) {
  const b = g.banner;
  const t = b.t / b.dur;
  const appear = clamp(b.t / 0.22, 0, 1);
  const fade = t > 0.75 ? 1 - (t - 0.75) / 0.25 : 1;
  const scale = 0.85 + appear * 0.15;
  c.save();
  c.globalAlpha = clamp(fade, 0, 1) * clamp(appear, 0, 1);
  c.translate(360, 455);
  c.scale(scale, scale);
  const w = 390;
  fillRoundRect(c, -w / 2, -46, w, 92, 18, 'rgba(6,13,24,.88)');
  c.strokeStyle = b.color;
  c.lineWidth = 2;
  roundRectPath(c, -w / 2, -46, w, 92, 18);
  c.stroke();
  c.fillStyle = b.color;
  c.font = font(25, 900);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(b.text, 0, -13);
  c.fillStyle = 'rgba(225,238,255,.8)';
  c.font = font(11.5, 700);
  c.fillText(b.sub, 0, 17);
  c.restore();
}

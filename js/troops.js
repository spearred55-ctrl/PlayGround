/* Stylized chibi troop portraits, drawn entirely with canvas paths. */

import { TEAM, clamp } from './data.js';

const OUTLINE = '#0d1624';

function rr(c, x, y, w, h, r) {
  const q = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + q, y);
  c.arcTo(x + w, y, x + w, y + h, q);
  c.arcTo(x + w, y + h, x, y + h, q);
  c.arcTo(x, y + h, x, y, q);
  c.arcTo(x, y, x + w, y, q);
  c.closePath();
}

function fill(c, color) {
  c.fillStyle = color;
  c.fill();
}

function stroke(c, width = 2, color = OUTLINE) {
  c.lineWidth = width;
  c.strokeStyle = color;
  c.lineJoin = 'round';
  c.stroke();
}

function limb(c, x1, y1, x2, y2, width, color) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.lineCap = 'round';
  c.lineWidth = width;
  c.strokeStyle = color;
  c.stroke();
}

export function drawTroopShadow(c, r, flying = false) {
  c.save();
  c.globalAlpha *= flying ? 0.22 : 0.3;
  c.fillStyle = '#07110b';
  c.beginPath();
  c.ellipse(0, flying ? 12 : 2, r * (flying ? 0.8 : 1.05), r * (flying ? 0.3 : 0.46), 0, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

export function drawTroop(c, type, r, teamKey, opts = {}) {
  const team = TEAM[teamKey];
  const facing = opts.facing === -1 ? -1 : 1;
  const walk = opts.walk || 0;
  const moving = Boolean(opts.moving);
  const bob = moving ? Math.sin(walk * 13) * r * 0.09 : Math.sin(walk * 2.2) * r * 0.03;
  const flash = clamp(opts.flash || 0, 0, 1);

  c.save();
  if (opts.alpha !== undefined) c.globalAlpha *= opts.alpha;
  c.translate(0, bob);
  c.scale(facing, 1);
  c.lineJoin = 'round';

  switch (type) {
    case 'knight': drawKnight(c, r, team); break;
    case 'archers': drawArcher(c, r, team); break;
    case 'giant': drawGiant(c, r, team); break;
    case 'goblins': drawGoblin(c, r, team); break;
    case 'musketeer': drawMusketeer(c, r, team); break;
    case 'minions': drawMinion(c, r, team, walk); break;
    default: drawKnight(c, r, team); break;
  }

  if (flash > 0) {
    c.globalAlpha = flash * 0.55;
    c.fillStyle = '#ffffff';
    c.beginPath();
    c.arc(0, -r * 1.15, r * 1.05, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
}

function drawKnight(c, r, team) {
  // Legs and boots
  rr(c, -r * 0.5, -r * 0.55, r * 0.36, r * 0.6, r * 0.12); fill(c, '#3d4c60'); stroke(c, r * 0.09);
  rr(c, r * 0.14, -r * 0.55, r * 0.36, r * 0.6, r * 0.12); fill(c, '#334154'); stroke(c, r * 0.09);

  // Shield behind the body
  c.save();
  c.translate(-r * 0.82, -r * 1.08);
  c.beginPath();
  c.arc(0, 0, r * 0.48, 0, Math.PI * 2);
  fill(c, team.dark);
  stroke(c, r * 0.1, '#0b1522');
  c.beginPath();
  c.arc(0, 0, r * 0.36, 0, Math.PI * 2);
  c.strokeStyle = team.main;
  c.lineWidth = r * 0.09;
  c.stroke();
  c.fillStyle = team.light;
  rr(c, -r * 0.045, -r * 0.2, r * 0.09, r * 0.4, r * 0.03); c.fill();
  rr(c, -r * 0.2, -r * 0.045, r * 0.4, r * 0.09, r * 0.03); c.fill();
  c.restore();

  // Sword
  c.save();
  c.translate(r * 0.62, -r * 1.05);
  c.rotate(-0.55);
  rr(c, 0, -r * 0.09, r * 1.05, r * 0.18, r * 0.05); fill(c, '#dbe6f5'); stroke(c, r * 0.07, '#5c6b7f');
  rr(c, -r * 0.18, -r * 0.24, r * 0.16, r * 0.48, r * 0.05); fill(c, '#e9b44c');
  rr(c, -r * 0.48, -r * 0.08, r * 0.32, r * 0.16, r * 0.06); fill(c, '#7a4a24');
  c.restore();

  // Torso
  rr(c, -r * 0.62, -r * 1.62, r * 1.24, r * 1.2, r * 0.3);
  const armor = c.createLinearGradient(-r * 0.6, -r * 1.6, r * 0.6, -r * 0.5);
  armor.addColorStop(0, '#e4edf9');
  armor.addColorStop(0.5, '#a9bacf');
  armor.addColorStop(1, '#73869e');
  fill(c, armor);
  stroke(c, r * 0.1);

  // Tabard
  rr(c, -r * 0.26, -r * 1.32, r * 0.52, r * 0.78, r * 0.08);
  fill(c, team.main);
  c.save();
  c.globalAlpha *= 0.9;
  rr(c, -r * 0.045, -r * 1.24, r * 0.09, r * 0.55, r * 0.03); fill(c, '#ffffff');
  c.restore();

  // Belt
  rr(c, -r * 0.65, -r * 0.62, r * 1.3, r * 0.18, r * 0.06); fill(c, '#55402b');
  rr(c, -r * 0.12, -r * 0.65, r * 0.24, r * 0.24, r * 0.05); fill(c, '#f0c04c');

  // Shoulders + arms
  c.beginPath(); c.arc(-r * 0.66, -r * 1.46, r * 0.3, 0, Math.PI * 2); fill(c, '#c8d5e6'); stroke(c, r * 0.09);
  c.beginPath(); c.arc(r * 0.66, -r * 1.46, r * 0.3, 0, Math.PI * 2); fill(c, '#c8d5e6'); stroke(c, r * 0.09);
  rr(c, -r * 0.86, -r * 1.34, r * 0.26, r * 0.55, r * 0.12); fill(c, '#8397ad'); stroke(c, r * 0.08);
  rr(c, r * 0.6, -r * 1.34, r * 0.26, r * 0.55, r * 0.12); fill(c, '#8397ad'); stroke(c, r * 0.08);

  // Head + helmet
  c.beginPath(); c.arc(0, -r * 1.92, r * 0.55, 0, Math.PI * 2); fill(c, '#f1c49b'); stroke(c, r * 0.09);
  c.beginPath();
  c.arc(0, -r * 1.98, r * 0.56, Math.PI * 0.9, Math.PI * 2.1);
  c.closePath();
  fill(c, '#c3d0e0');
  stroke(c, r * 0.09);
  rr(c, -r * 0.47, -r * 2.02, r * 0.94, r * 0.16, r * 0.05); fill(c, '#26384d');
  rr(c, -r * 0.06, -r * 2.45, r * 0.12, r * 0.34, r * 0.05); fill(c, '#dbe6f5');
  // Plume
  c.beginPath();
  c.moveTo(0, -r * 2.5);
  c.quadraticCurveTo(r * 0.4, -r * 2.75, r * 0.62, -r * 2.3);
  c.quadraticCurveTo(r * 0.26, -r * 2.4, r * 0.08, -r * 2.36);
  c.closePath();
  fill(c, team.main);
  stroke(c, r * 0.06);
}

function drawArcher(c, r, team) {
  // Legs
  rr(c, -r * 0.42, -r * 0.45, r * 0.3, r * 0.5, r * 0.1); fill(c, '#5b4630'); stroke(c, r * 0.08);
  rr(c, r * 0.12, -r * 0.45, r * 0.3, r * 0.5, r * 0.1); fill(c, '#4d3b28'); stroke(c, r * 0.08);

  // Quiver
  c.save();
  c.translate(-r * 0.62, -r * 1.18);
  c.rotate(0.25);
  rr(c, -r * 0.16, -r * 0.42, r * 0.32, r * 0.8, r * 0.1); fill(c, '#6b4527'); stroke(c, r * 0.08);
  for (let i = -1; i <= 1; i++) {
    limb(c, i * r * 0.08, -r * 0.4, i * r * 0.12, -r * 0.72, r * 0.05, '#e7d7b1');
    c.beginPath(); c.moveTo(i * r * 0.12, -r * 0.78); c.lineTo(i * r * 0.04, -r * 0.62); c.lineTo(i * r * 0.2, -r * 0.62); c.closePath();
    fill(c, team.main);
  }
  c.restore();

  // Bow
  c.save();
  c.translate(r * 0.6, -r * 1.15);
  c.beginPath();
  c.arc(0, 0, r * 0.72, -Math.PI * 0.62, Math.PI * 0.62);
  c.strokeStyle = '#9a6836';
  c.lineWidth = r * 0.13;
  c.lineCap = 'round';
  c.stroke();
  c.beginPath();
  c.moveTo(r * 0.02, -r * 0.66); c.lineTo(r * 0.02, r * 0.66);
  c.strokeStyle = '#f2e7ce'; c.lineWidth = r * 0.045; c.stroke();
  c.restore();

  // Torso
  rr(c, -r * 0.5, -r * 1.42, r * 1.0, r * 0.98, r * 0.28);
  fill(c, '#3e6a4c');
  stroke(c, r * 0.09);
  rr(c, -r * 0.5, -r * 0.72, r * 1.0, r * 0.2, r * 0.06); fill(c, '#6d4a2b');
  c.beginPath(); c.arc(0, -r * 0.88, r * 0.11, 0, Math.PI * 2); fill(c, '#f0c04c');

  // Head + hood
  c.beginPath(); c.arc(0, -r * 1.68, r * 0.51, 0, Math.PI * 2); fill(c, '#f1c49b'); stroke(c, r * 0.09);
  c.beginPath();
  c.arc(0, -r * 1.76, r * 0.56, Math.PI * 1.02, Math.PI * 2.12);
  c.lineTo(r * 0.5, -r * 1.4);
  c.lineTo(r * 0.3, -r * 1.42);
  c.closePath();
  fill(c, team.dark);
  stroke(c, r * 0.08);
  c.beginPath();
  c.moveTo(-r * 0.1, -r * 2.16);
  c.quadraticCurveTo(r * 0.5, -r * 2.5, r * 0.5, -r * 1.95);
  c.quadraticCurveTo(r * 0.2, -r * 2.05, r * 0.05, -r * 2.0);
  c.closePath();
  fill(c, team.main);
  stroke(c, r * 0.07);
  // Eyes
  c.fillStyle = '#26313f';
  c.beginPath(); c.arc(-r * 0.15, -r * 1.68, r * 0.055, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(r * 0.14, -r * 1.68, r * 0.055, 0, Math.PI * 2); c.fill();

  // Arms
  limb(c, r * 0.48, -r * 1.18, r * 0.78, -r * 0.98, r * 0.18, '#f1c49b');
  limb(c, -r * 0.5, -r * 1.18, -r * 0.74, -r * 0.98, r * 0.18, '#f1c49b');
}

function drawGiant(c, r, team) {
  // Legs
  rr(c, -r * 0.72, -r * 0.62, r * 0.54, r * 0.66, r * 0.16); fill(c, '#6b4a2a'); stroke(c, r * 0.1);
  rr(c, r * 0.18, -r * 0.62, r * 0.54, r * 0.66, r * 0.16); fill(c, '#5b3d22'); stroke(c, r * 0.1);
  rr(c, -r * 0.78, -r * 0.12, r * 0.66, r * 0.2, r * 0.08); fill(c, '#3c2a18');

  // Torso
  rr(c, -r * 0.82, -r * 1.78, r * 1.64, r * 1.3, r * 0.38);
  const skin = c.createLinearGradient(-r, -r * 1.8, r * 0.8, -r * 0.6);
  skin.addColorStop(0, '#f0bd85');
  skin.addColorStop(1, '#cf955e');
  fill(c, skin);
  stroke(c, r * 0.11);

  // Belly + belt
  c.beginPath(); c.ellipse(0, -r * 1.16, r * 0.52, r * 0.4, 0, 0, Math.PI * 2); fill(c, '#e7ae74');
  rr(c, -r * 0.86, -r * 0.78, r * 1.72, r * 0.28, r * 0.08); fill(c, '#5b3a1e');
  rr(c, -r * 0.17, -r * 0.82, r * 0.34, r * 0.3, r * 0.06); fill(c, '#f3c556');
  // Team tattoo / sash
  c.save();
  c.beginPath();
  c.moveTo(-r * 0.78, -r * 1.6);
  c.lineTo(r * 0.65, -r * 1.3);
  c.lineTo(r * 0.64, -r * 1.12);
  c.lineTo(-r * 0.79, -r * 1.42);
  c.closePath();
  fill(c, team.main);
  c.globalAlpha *= 0.55;
  c.restore();

  // Arms
  rr(c, -r * 1.12, -r * 1.66, r * 0.34, r * 0.95, r * 0.16); fill(c, '#dda36c'); stroke(c, r * 0.09);
  rr(c, r * 0.78, -r * 1.66, r * 0.34, r * 0.95, r * 0.16); fill(c, '#dda36c'); stroke(c, r * 0.09);
  c.beginPath(); c.arc(-r * 1.02, -r * 0.74, r * 0.34, 0, Math.PI * 2); fill(c, '#efbc84'); stroke(c, r * 0.09);
  c.beginPath(); c.arc(r * 1.02, -r * 0.74, r * 0.34, 0, Math.PI * 2); fill(c, '#efbc84'); stroke(c, r * 0.09);

  // Head
  c.beginPath(); c.arc(0, -r * 2.02, r * 0.52, 0, Math.PI * 2); fill(c, '#f2c08a'); stroke(c, r * 0.1);
  // Hair + beard
  c.beginPath();
  c.arc(0, -r * 2.12, r * 0.54, Math.PI * 1.05, Math.PI * 2.0);
  c.closePath();
  fill(c, '#b85f2c');
  c.beginPath();
  c.moveTo(-r * 0.44, -r * 1.98);
  c.quadraticCurveTo(0, -r * 1.5, r * 0.46, -r * 2.0);
  c.quadraticCurveTo(r * 0.3, -r * 1.62, 0, -r * 1.58);
  c.quadraticCurveTo(-r * 0.3, -r * 1.64, -r * 0.44, -r * 1.98);
  c.closePath();
  fill(c, '#c46a32');
  // Eyes
  c.fillStyle = '#2a1c12';
  c.beginPath(); c.arc(-r * 0.17, -r * 2.05, r * 0.06, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(r * 0.17, -r * 2.05, r * 0.06, 0, Math.PI * 2); c.fill();
}

function drawGoblin(c, r, team) {
  // Legs
  rr(c, -r * 0.38, -r * 0.4, r * 0.28, r * 0.44, r * 0.1); fill(c, '#4c5f27'); stroke(c, r * 0.08);
  rr(c, r * 0.1, -r * 0.4, r * 0.28, r * 0.44, r * 0.1); fill(c, '#3e4e1f'); stroke(c, r * 0.08);

  // Dagger
  c.save();
  c.translate(r * 0.55, -r * 1.0);
  c.rotate(-0.55);
  c.beginPath();
  c.moveTo(0, -r * 0.09);
  c.lineTo(r * 0.72, 0);
  c.lineTo(0, r * 0.09);
  c.closePath();
  fill(c, '#dbe6f5');
  stroke(c, r * 0.06, '#58687c');
  rr(c, -r * 0.14, -r * 0.15, r * 0.2, r * 0.3, r * 0.05); fill(c, '#a97734');
  c.restore();

  // Torso
  rr(c, -r * 0.46, -r * 1.32, r * 0.92, r * 0.94, r * 0.26); fill(c, '#6d4b2b'); stroke(c, r * 0.09);
  rr(c, -r * 0.46, -r * 0.8, r * 0.92, r * 0.2, r * 0.06); fill(c, '#3c2a18');
  c.beginPath(); c.arc(0, -r * 0.74, r * 0.1, 0, Math.PI * 2); fill(c, '#f0c04c');

  // Head
  c.beginPath(); c.arc(0, -r * 1.6, r * 0.56, 0, Math.PI * 2); fill(c, '#7fce4f'); stroke(c, r * 0.09);
  // Ears
  c.beginPath(); c.moveTo(-r * 0.48, -r * 1.62); c.lineTo(-r * 1.08, -r * 1.85); c.lineTo(-r * 0.5, -r * 1.37); c.closePath(); fill(c, '#6cbb40'); stroke(c, r * 0.07);
  c.beginPath(); c.moveTo(r * 0.48, -r * 1.62); c.lineTo(r * 1.08, -r * 1.85); c.lineTo(r * 0.5, -r * 1.37); c.closePath(); fill(c, '#6cbb40'); stroke(c, r * 0.07);
  // Eyes
  c.fillStyle = '#fff8dc';
  c.beginPath(); c.ellipse(-r * 0.18, -r * 1.66, r * 0.13, r * 0.15, 0, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.ellipse(r * 0.18, -r * 1.66, r * 0.13, r * 0.15, 0, 0, Math.PI * 2); c.fill();
  c.fillStyle = '#17210c';
  c.beginPath(); c.arc(-r * 0.15, -r * 1.64, r * 0.06, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(r * 0.21, -r * 1.64, r * 0.06, 0, Math.PI * 2); c.fill();
  // Grin
  c.beginPath(); c.arc(0, -r * 1.46, r * 0.22, 0.15, Math.PI - 0.15); c.strokeStyle = '#24340f'; c.lineWidth = r * 0.055; c.stroke();
  c.fillStyle = '#e9f7d6';
  c.beginPath(); c.moveTo(-r * 0.08, -r * 1.38); c.lineTo(-r * 0.02, -r * 1.28); c.lineTo(r * 0.04, -r * 1.38); c.closePath(); c.fill();
  // Team bandana
  rr(c, -r * 0.58, -r * 1.92, r * 1.16, r * 0.18, r * 0.08); fill(c, team.main); stroke(c, r * 0.06, '#0d1624');
}

function drawMusketeer(c, r, team) {
  // Legs
  rr(c, -r * 0.44, -r * 0.5, r * 0.32, r * 0.56, r * 0.1); fill(c, '#4b3a63'); stroke(c, r * 0.08);
  rr(c, r * 0.12, -r * 0.5, r * 0.32, r * 0.56, r * 0.1); fill(c, '#3f3054'); stroke(c, r * 0.08);

  // Rifle
  c.save();
  c.translate(r * 0.15, -r * 1.25);
  c.rotate(-0.42);
  rr(c, -r * 0.1, -r * 0.13, r * 1.35, r * 0.14, r * 0.05); fill(c, '#5d3d22');
  rr(c, r * 0.55, -r * 0.15, r * 0.85, r * 0.11, r * 0.04); fill(c, '#c7d3e2');
  rr(c, r * 0.52, -r * 0.2, r * 0.14, r * 0.22, r * 0.04); fill(c, '#e6b65a');
  c.restore();

  // Coat
  rr(c, -r * 0.58, -r * 1.6, r * 1.16, r * 1.18, r * 0.26);
  const coat = c.createLinearGradient(-r * 0.6, -r * 1.6, r * 0.6, -r * 0.5);
  coat.addColorStop(0, '#7d68b8');
  coat.addColorStop(1, '#4a3a7c');
  fill(c, coat);
  stroke(c, r * 0.1);
  rr(c, -r * 0.1, -r * 1.58, r * 0.2, r * 1.1, r * 0.06); fill(c, team.main);
  // Buttons
  for (let i = 0; i < 3; i++) {
    c.beginPath(); c.arc(r * 0.3, -r * (1.34 - i * 0.22), r * 0.045, 0, Math.PI * 2); fill(c, '#f3cf7a');
  }
  // Shoulder pads
  c.beginPath(); c.ellipse(-r * 0.62, -r * 1.45, r * 0.28, r * 0.2, -0.3, 0, Math.PI * 2); fill(c, team.dark); stroke(c, r * 0.07);
  c.beginPath(); c.ellipse(r * 0.62, -r * 1.45, r * 0.28, r * 0.2, 0.3, 0, Math.PI * 2); fill(c, team.dark); stroke(c, r * 0.07);

  // Head
  c.beginPath(); c.arc(0, -r * 1.86, r * 0.5, 0, Math.PI * 2); fill(c, '#f1c49b'); stroke(c, r * 0.09);
  // Hair
  c.beginPath(); c.arc(0, -r * 1.88, r * 0.52, Math.PI * 0.85, Math.PI * 2.05); c.closePath(); fill(c, '#5a3d2b');

  // Hat
  c.save();
  c.translate(0, -r * 2.16);
  c.rotate(-0.12);
  c.beginPath(); c.ellipse(0, 0, r * 0.94, r * 0.22, 0, 0, Math.PI * 2); fill(c, '#3b2e52'); stroke(c, r * 0.07);
  rr(c, -r * 0.52, -r * 0.42, r * 1.04, r * 0.44, r * 0.12); fill(c, '#4a3a66'); stroke(c, r * 0.07);
  rr(c, -r * 0.52, -r * 0.14, r * 1.04, r * 0.14, r * 0.04); fill(c, team.main);
  // Feather
  c.beginPath();
  c.moveTo(r * 0.3, -r * 0.3);
  c.quadraticCurveTo(r * 0.95, -r * 0.85, r * 1.08, -r * 0.25);
  c.quadraticCurveTo(r * 0.7, -r * 0.4, r * 0.34, -r * 0.08);
  c.closePath();
  fill(c, team.light);
  stroke(c, r * 0.05);
  c.restore();

  // Arms
  limb(c, -r * 0.55, -r * 1.15, -r * 0.3, -r * 0.92, r * 0.18, '#f1c49b');
  limb(c, r * 0.52, -r * 1.18, r * 0.34, -r * 0.95, r * 0.18, '#f1c49b');
}

function drawMinion(c, r, team, walk = 0) {
  c.save();
  c.translate(0, -r * 1.15);
  const flap = Math.sin(walk * 9) * r * 0.12;

  // Wings
  c.save();
  c.globalAlpha *= 0.85;
  c.beginPath();
  c.moveTo(-r * 0.35, -r * 0.2);
  c.quadraticCurveTo(-r * 1.4, -r * (1.0 + flap / r * 0.4), -r * 1.15, r * 0.28);
  c.quadraticCurveTo(-r * 0.75, r * 0.12, -r * 0.35, r * 0.18);
  c.closePath();
  fill(c, team.dark);
  stroke(c, r * 0.07, '#141a32');
  c.beginPath();
  c.moveTo(r * 0.35, -r * 0.2);
  c.quadraticCurveTo(r * 1.4, -r * (1.0 + flap / r * 0.4), r * 1.15, r * 0.28);
  c.quadraticCurveTo(r * 0.75, r * 0.12, r * 0.35, r * 0.18);
  c.closePath();
  fill(c, team.dark);
  stroke(c, r * 0.07, '#141a32');
  c.restore();

  // Body
  c.beginPath(); c.ellipse(0, 0, r * 0.58, r * 0.72, 0, 0, Math.PI * 2);
  const body = c.createLinearGradient(0, -r * 0.7, 0, r * 0.7);
  body.addColorStop(0, '#7b68c9');
  body.addColorStop(1, '#463780');
  fill(c, body);
  stroke(c, r * 0.09, '#17122e');

  // Belly
  c.beginPath(); c.ellipse(0, r * 0.14, r * 0.3, r * 0.34, 0, 0, Math.PI * 2); fill(c, '#a495df');

  // Horns
  c.beginPath(); c.moveTo(-r * 0.36, -r * 0.55); c.lineTo(-r * 0.5, -r * 0.92); c.lineTo(-r * 0.16, -r * 0.62); c.closePath(); fill(c, '#f0c04c'); stroke(c, r * 0.05);
  c.beginPath(); c.moveTo(r * 0.36, -r * 0.55); c.lineTo(r * 0.5, -r * 0.92); c.lineTo(r * 0.16, -r * 0.62); c.closePath(); fill(c, '#f0c04c'); stroke(c, r * 0.05);

  // Face
  c.fillStyle = '#fffbe8';
  c.beginPath(); c.ellipse(-r * 0.2, -r * 0.14, r * 0.17, r * 0.2, 0, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.ellipse(r * 0.2, -r * 0.14, r * 0.17, r * 0.2, 0, 0, Math.PI * 2); c.fill();
  c.fillStyle = '#241a45';
  c.beginPath(); c.arc(-r * 0.18, -r * 0.12, r * 0.07, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.arc(r * 0.22, -r * 0.12, r * 0.07, 0, Math.PI * 2); c.fill();
  // Grin
  c.beginPath(); c.arc(0, r * 0.14, r * 0.16, 0.15, Math.PI - 0.15); c.strokeStyle = '#241a45'; c.lineWidth = r * 0.06; c.stroke();
  c.fillStyle = '#fffbe8';
  c.beginPath(); c.moveTo(-r * 0.08, r * 0.25); c.lineTo(0, r * 0.38); c.lineTo(r * 0.08, r * 0.25); c.closePath(); c.fill();

  // Feet
  c.beginPath(); c.ellipse(-r * 0.22, r * 0.72, r * 0.16, r * 0.1, 0, 0, Math.PI * 2); fill(c, team.main);
  c.beginPath(); c.ellipse(r * 0.22, r * 0.72, r * 0.16, r * 0.1, 0, 0, Math.PI * 2); fill(c, team.main);

  c.restore();
}

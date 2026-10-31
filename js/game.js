/* Match lifecycle, simulation, combat, and player input. */

import {
  W, H, ARENA, RIVER, LANES, TEAM, DIFFICULTY, CARDS, TOWER,
  HAND, ELIXIR, clamp, rand, pick, dist, makeDeck, formatTime,
  pointInArena, insideRect,
} from './data.js';
import { buildScene } from './art.js';
import { Sound } from './audio.js';
import { resetAI, updateAI } from './ai.js';
import { render } from './render.js';

export class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');
    this.sound = new Sound();
    this.scene = buildScene();
    this.time = 0;
    this.difficulty = 'classic';
    this.state = 'menu';
    this.sfxAt = {};
    this.endTimer = null;
    this.finishTimer = null;
    this.overlayTimer = null;
    this.bindUI();
    this.bindInput();
    this.resetBoard();
    this.showMenu();
    window.__miniClash = this;
  }

  /* ------------------------------------------------------------- lifecycle */

  resetBoard() {
    clearTimeout(this.finishTimer);
    clearTimeout(this.overlayTimer);
    this.finishTimer = null;
    this.overlayTimer = null;
    this.units = [];
    this.towers = [];
    this.projectiles = [];
    this.particles = [];
    this.floaters = [];
    this.rings = [];
    this.scorches = [];
    this.pendingSpells = [];
    this.flashes = [];
    this.banner = null;
    this.shake = 0;
    this.clashFlash = 0;
    this.selected = null;
    this.drag = null;
    this.denied = null;
    this.finishing = false;
    this.result = null;
    this.overtime = false;
    this.doubleShown = false;
    this.timeLeft = 180;
    this.matchTime = 0;
    this.countdown = 0;
    this.stats = { cardsPlayed: 0, elixirSpent: 0 };
    this.pointer = { x: W / 2, y: RIVER.cy + 90, inside: false };
    this.playerDeck = makeDeck(5);
    this.makeTowers();
    resetAI(this);
  }

  makeDeck() {
    return makeDeck(5);
  }

  makeTowers() {
    const mk = (team, kind, x, y) => {
      const def = TOWER[kind];
      const king = kind === 'king';
      return {
        team, king, x, y, radius: def.radius,
        hp: def.hp, maxHp: def.hp, dmg: def.dmg, hit: def.hit, range: def.range,
        cooldown: rand(0.5, 1.1), active: !king, alive: true, hitFlash: 0,
        isTower: true, aim: 0,
      };
    };
    this.towers = [
      mk('red', 'king', 360, 212),
      mk('red', 'princess', 190, 334),
      mk('red', 'princess', 530, 334),
      mk('blue', 'princess', 190, 778),
      mk('blue', 'princess', 530, 778),
      mk('blue', 'king', 360, 900),
    ];
  }

  startRound() {
    this.resetBoard();
    this.state = 'countdown';
    this.countdown = 3.4;
    this.lastCount = 4;
    this.hideOverlay();
    this.sound.init();
    this.sound.play('count');
  }

  showMenu() {
    this.resetBoard();
    this.state = 'menu';
    this.sound.init();
    this.showPanel('menu');
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.selected = null;
    this.drag = null;
    this.showPanel('pause');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.hideOverlay();
    this.sound.play('select');
  }

  restart() {
    this.startRound();
  }

  finish(result) {
    if (this.state === 'ended') return;
    clearTimeout(this.finishTimer);
    clearTimeout(this.overlayTimer);
    this.finishTimer = null;
    this.finishing = false;
    this.state = 'ended';
    this.result = result;
    this.selected = null;
    this.drag = null;
    this.sound.play(result);
    if (result === 'win') {
      for (let i = 0; i < 4; i++) {
        this.burst(ARENA.x + rand(80, ARENA.w - 80), ARENA.y + rand(100, 500), ['#ffd45e', '#ffffff', '#5ee5c2'][i % 3], 12, 190, { gravity: 120, size: [3, 6] });
      }
    }
    this.overlayTimer = setTimeout(() => this.showEnd(), 850);
  }

  queueFinish(result, delay = 1000) {
    if (this.finishing || this.state !== 'playing') return;
    this.finishing = true;
    this.finishTimer = setTimeout(() => {
      this.finishTimer = null;
      this.finish(result);
    }, delay);
  }

  showEnd() {
    const blue = this.crowns('blue');
    const red = this.crowns('red');
    const title = document.getElementById('end-title');
    const eyebrow = document.getElementById('end-eyebrow');
    const sub = document.getElementById('end-sub');
    const crowns = document.getElementById('end-crowns');
    const stats = document.getElementById('end-stats');

    title.className = 'result-title' + (this.result === 'lose' ? ' lose' : this.result === 'draw' ? ' draw' : '');
    title.textContent = this.result === 'win' ? 'Victory' : this.result === 'lose' ? 'Defeat' : 'Draw';
    eyebrow.textContent = this.overtime ? 'OVERTIME RESULT' : 'MATCH COMPLETE';
    sub.textContent = this.result === 'win'
      ? (blue >= 3 ? 'A flawless three-crown sweep.' : 'The arena is yours. Wear the crown well.')
      : this.result === 'lose'
        ? 'They found the gap. Queue up and take it back.'
        : 'Neither side blinked. The crowns stay split.';
    crowns.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const pip = document.createElement('span');
      pip.className = 'crown-pip' + (i < blue ? ' on' : '');
      pip.textContent = '♛';
      crowns.appendChild(pip);
    }
    const rows = [
      ['Your crowns', String(blue)],
      ['Rival crowns', String(red)],
      ['Cards played', String(this.stats.cardsPlayed)],
      ['Match time', formatTime(this.matchTime)],
      ['Difficulty', DIFFICULTY[this.difficulty].label],
    ];
    stats.innerHTML = rows.map(([label, value]) =>
      `<div class="stat-row"><span>${label}</span><span>${value}</span></div>`).join('');
    this.showPanel('end');
  }

  /* ------------------------------------------------------------------- ui */

  showPanel(which) {
    const overlay = document.getElementById('overlay');
    const panels = {
      menu: document.getElementById('menu-panel'),
      end: document.getElementById('end-panel'),
      pause: document.getElementById('pause-panel'),
    };
    overlay.classList.remove('hidden');
    for (const [key, panel] of Object.entries(panels)) panel.classList.toggle('hidden', key !== which);
  }

  hideOverlay() {
    document.getElementById('overlay').classList.add('hidden');
  }

  bindUI() {
    document.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        this.difficulty = chip.dataset.difficulty;
        document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('selected', c === chip));
        this.sound.play('select');
      });
    });
    document.getElementById('play-btn').addEventListener('click', () => this.startRound());
    document.getElementById('again-btn').addEventListener('click', () => this.startRound());
    document.getElementById('menu-btn').addEventListener('click', () => this.showMenu());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('restart-btn').addEventListener('click', () => this.startRound());
    document.getElementById('quit-btn').addEventListener('click', () => this.showMenu());
  }

  /* ---------------------------------------------------------------- input */

  toPoint(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * W,
      y: ((e.clientY - rect.top) / rect.height) * H,
    };
  }

  bindInput() {
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    c.addEventListener('pointermove', (e) => {
      const p = this.toPoint(e);
      this.pointer.x = p.x;
      this.pointer.y = p.y;
      this.pointer.inside = pointInArena(p.x, p.y, 2);
      if (this.selected !== null && this.state === 'playing') c.style.cursor = 'crosshair';
      else c.style.cursor = 'default';
    });
    c.addEventListener('pointerup', (e) => this.onPointerUp(e));
    c.addEventListener('pointercancel', () => { this.drag = null; });
    c.addEventListener('pointerleave', () => { this.pointer.inside = false; });
    c.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (this.state === 'playing') this.selected = null;
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Escape') {
        if (this.state === 'playing') {
          e.preventDefault();
          if (e.key === 'Escape' && this.selected !== null) { this.selected = null; return; }
          this.pause();
        } else if (this.state === 'paused') {
          e.preventDefault();
          this.resume();
        }
        return;
      }
      if (this.state !== 'playing') return;
      if (e.key >= '1' && e.key <= '4') {
        const i = Number(e.key) - 1;
        if (i < this.playerDeck.hand.length) this.selectCard(i);
      }
      if (e.key.toLowerCase() === 'm') {
        this.sound.toggle();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.pause();
    });
  }

  onPointerDown(e) {
    e.preventDefault();
    this.sound.init();
    const p = this.toPoint(e);
    this.pointer.x = p.x;
    this.pointer.y = p.y;
    this.pointer.inside = pointInArena(p.x, p.y, 2);

    if (this.hitCircle(p, 42, 47, 32)) {
      if (this.state === 'playing') this.pause();
      return;
    }
    if (this.hitCircle(p, 678, 47, 32)) {
      this.sound.toggle();
      return;
    }

    if (this.state !== 'playing' || this.finishing) return;

    const idx = this.cardAt(p);
    if (idx >= 0) {
      this.selectCard(idx);
      if (this.selected !== null) {
        this.drag = { id: e.pointerId, moved: false, startX: p.x, startY: p.y };
        try { this.canvas.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      }
      return;
    }

    if (this.selected !== null && pointInArena(p.x, p.y, 2)) {
      this.tryDeploy(p.x, p.y);
    }
  }

  onPointerUp(e) {
    if (!this.drag) return;
    const p = this.toPoint(e);
    this.pointer.x = p.x;
    this.pointer.y = p.y;
    if (this.state === 'playing' && this.selected !== null && pointInArena(p.x, p.y, 2)) {
      this.tryDeploy(p.x, p.y);
    }
    this.drag = null;
  }

  hitCircle(p, x, y, r) {
    return Math.hypot(p.x - x, p.y - y) <= r;
  }

  selectCard(i) {
    if (this.state !== 'playing') return;
    if (this.selected === i) {
      this.selected = null;
      return;
    }
    if (!this.canAfford(i)) {
      this.denied = { i, t: 0.3 };
      this.sound.play('deny');
      return;
    }
    this.selected = i;
    this.sound.play('select');
  }

  cardRect(i) {
    return { x: HAND.x + i * (HAND.cardW + HAND.gap), y: HAND.y, w: HAND.cardW, h: HAND.cardH };
  }

  cardAt(p) {
    for (let i = 0; i < 4; i++) {
      if (insideRect(p.x, p.y, this.cardRect(i))) return i;
    }
    return -1;
  }

  canAfford(i) {
    const id = this.playerDeck && this.playerDeck.hand[i];
    if (!id) return false;
    return this.playerDeck.elixir + 0.001 >= CARDS[id].cost;
  }

  tryDeploy(x, y) {
    if (this.selected === null || this.state !== 'playing') return;
    const i = this.selected;
    const card = CARDS[this.playerDeck.hand[i]];
    if (!card) return;
    if (!this.canAfford(i)) {
      this.denied = { i, t: 0.3 };
      this.sound.play('deny');
      return;
    }
    if (!this.canDeploy('blue', card, x, y)) {
      this.denied = { i, t: 0.3 };
      this.sound.play('deny');
      this.addFloater(x, y - 10, 'Not there', '#ff8d98', 12, 0.7);
      return;
    }
    this.playCard('blue', i, x, y);
    this.selected = null;
    this.drag = null;
  }

  canDeploy(team, card, x, y) {
    if (!card) return false;
    if (card.spell) return pointInArena(x, y, 10);
    const r = card.radius || 10;
    const minY = team === 'blue' ? RIVER.bottom + 8 : ARENA.y + 20;
    const maxY = team === 'blue' ? ARENA.bottom - 22 : RIVER.top - 8;
    if (x < ARENA.x + 18 + r || x > ARENA.right - 18 - r) return false;
    if (y < minY || y > maxY) return false;
    for (const t of this.towers) {
      if (!t.alive) continue;
      if (Math.hypot(x - t.x, y - t.y) < t.radius + r + 4) return false;
    }
    return true;
  }

  /* --------------------------------------------------------------- update */

  update(dt) {
    this.time += dt;
    this.stepEffects(dt);

    if (this.state === 'countdown') {
      this.countdown -= dt;
      const n = Math.ceil(this.countdown - 0.4);
      if (n !== this.lastCount && n >= 1 && n <= 3) {
        this.lastCount = n;
        this.sound.play('count');
      }
      if (this.countdown <= 0.4 && this.lastCount !== 0) {
        this.lastCount = 0;
        this.clashFlash = 1.0;
        this.sound.play('clash');
      }
      if (this.countdown <= 0) {
        this.countdown = 0;
        this.state = 'playing';
      }
      return;
    }

    if (this.state !== 'playing') return;

    this.matchTime += dt;
    this.updateClock(dt);
    if (this.state !== 'playing') return;

    this.regenElixir(dt);
    updateAI(this, dt);
    this.updateUnits(dt);
    this.updateTowers(dt);
    this.updateSpells(dt);
    this.updateProjectiles(dt);
    this.cleanup();
  }

  stepEffects(dt) {
    if (this.banner) {
      this.banner.t += dt;
      if (this.banner.t >= this.banner.dur) this.banner = null;
    }
    if (this.clashFlash > 0) this.clashFlash = Math.max(0, this.clashFlash - dt);
    if (this.denied) {
      this.denied.t -= dt;
      if (this.denied.t <= 0) this.denied = null;
    }
    this.shake = Math.max(0, this.shake - dt * 26);

    for (const p of this.particles) {
      p.life -= dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += p.gravity * dt;
      p.vx *= 1 - 1.8 * dt;
      p.vy *= 1 - 0.6 * dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
    if (this.particles.length > 300) this.particles.splice(0, this.particles.length - 300);

    for (const f of this.floaters) {
      f.t += dt;
      f.y -= 30 * dt;
    }
    this.floaters = this.floaters.filter((f) => f.t < f.dur);

    for (const r of this.rings) {
      r.t += dt;
    }
    this.rings = this.rings.filter((r) => r.t < r.dur);

    for (const f of this.flashes) f.t += dt;
    this.flashes = this.flashes.filter((f) => f.t < f.dur);
  }

  updateClock(dt) {
    this.timeLeft -= dt;
    if (!this.overtime && this.timeLeft <= 60 && !this.doubleShown) {
      this.doubleShown = true;
      this.showBanner('DOUBLE ELIXIR', 'Elixir flows twice as fast', '#c693ff', 2.4);
      this.sound.play('crown');
    }
    if (this.timeLeft > 0) return;
    this.timeLeft = 0;
    const blue = this.crowns('blue');
    const red = this.crowns('red');
    if (!this.overtime) {
      if (blue === red) {
        this.overtime = true;
        this.timeLeft = 60;
        this.showBanner('OVERTIME', 'First tower destroyed wins', '#ff8f9b', 3);
        this.sound.play('crown');
      } else {
        this.finish(blue > red ? 'win' : 'lose');
      }
    } else {
      this.finish(blue === red ? 'draw' : blue > red ? 'win' : 'lose');
    }
  }

  elixirMultiplier() {
    return this.overtime || this.timeLeft <= 60 ? 2 : 1;
  }

  regenElixir(dt) {
    const gain = (dt / 2.8) * this.elixirMultiplier();
    this.playerDeck.elixir = Math.min(10, this.playerDeck.elixir + gain);
    this.ai.deck.elixir = Math.min(10, this.ai.deck.elixir + gain);
  }

  crowns(team) {
    const enemy = team === 'blue' ? 'red' : 'blue';
    const king = this.towers.find((t) => t.team === enemy && t.king);
    if (king && !king.alive) return 3;
    return this.towers.filter((t) => t.team === enemy && !t.king && !t.alive).length;
  }

  /* ---------------------------------------------------------------- units */

  updateUnits(dt) {
    for (const u of this.units) {
      if (!u.alive) continue;
      u.hitFlash = Math.max(0, u.hitFlash - dt);
      u.attackAnim = Math.max(0, u.attackAnim - dt);
      u.cooldown = Math.max(0, u.cooldown - dt);
      if (u.deploy > 0) {
        u.deploy -= dt;
        continue;
      }

      let target = u.target;
      if (target && (!target.alive || !this.canTarget(u, target))) target = null;
      if (target && !target.isTower && dist(u, target) > u.def.aggro * 1.8 + 80) target = null;

      if (target && target.isTower && u.def.targets !== 'buildings') {
        const near = this.findUnitTarget(u);
        if (near) target = near;
      }
      if (!target) {
        target = this.findUnitTarget(u) || this.findTowerTarget(u);
      }
      u.target = target;
      if (!target) {
        u.moving = false;
        continue;
      }

      const reach = dist(u, target) - (target.radius || 0);
      if (reach <= u.def.range + u.radius * 0.25 + 3) {
        u.moving = false;
        u.facing = target.x >= u.x ? 1 : -1;
        if (u.cooldown <= 0) {
          u.cooldown = u.def.hit;
          u.attackAnim = 0.2;
          this.unitAttack(u, target);
        }
      } else {
        const point = this.pathPoint(u, target);
        if (point) this.moveUnit(u, point, dt);
      }
    }
    this.separate();
  }

  canTarget(u, other) {
    if (!other || !other.alive || other.team === u.team) return false;
    if (other.isTower) return true;
    if (other.deploy > 0) return false;
    if (u.def.targets === 'buildings') return false;
    if (u.def.targets === 'ground' && other.fly) return false;
    return true;
  }

  findUnitTarget(u) {
    if (u.def.targets === 'buildings') return null;
    let best = null;
    let bestD = Infinity;
    for (const o of this.units) {
      if (!this.canTarget(u, o)) continue;
      const d = dist(u, o) - o.radius;
      if (d <= u.def.aggro && d < bestD) {
        best = o;
        bestD = d;
      }
    }
    return best;
  }

  findTowerTarget(u) {
    const enemy = u.team === 'blue' ? 'red' : 'blue';
    const princesses = this.towers.filter((t) => t.team === enemy && t.alive && !t.king);
    let pool = princesses;
    if (!pool.length) pool = this.towers.filter((t) => t.team === enemy && t.alive && t.king);
    let best = null;
    let bestScore = Infinity;
    for (const t of pool) {
      const score = Math.abs(u.x - t.x) + Math.abs(u.y - t.y) * 0.3;
      if (score < bestScore) {
        best = t;
        bestScore = score;
      }
    }
    return best;
  }

  pathPoint(u, target) {
    if (u.fly) return target;
    const uTop = u.y < RIVER.cy;
    const tTop = target.y < RIVER.cy;
    if (uTop === tTop) return target;

    const bridge = this.bestBridge(u, target);
    if (u.y > RIVER.top - 4 && u.y < RIVER.bottom + 4) {
      return { x: bridge, y: tTop ? RIVER.top - 30 : RIVER.bottom + 30 };
    }
    return { x: bridge, y: RIVER.cy };
  }

  bestBridge(u, target) {
    let best = LANES[0];
    let bestScore = Infinity;
    for (const bx of LANES) {
      const score = Math.abs(u.x - bx) + Math.abs(target.x - bx) * 0.25;
      if (score < bestScore) {
        best = bx;
        bestScore = score;
      }
    }
    return best;
  }

  moveUnit(u, dest, dt) {
    let dx = dest.x - u.x;
    let dy = dest.y - u.y;
    const d = Math.hypot(dx, dy);
    if (d < 2) {
      u.moving = false;
      return;
    }
    dx /= d;
    dy /= d;
    const step = u.def.speed * dt;
    let nx = u.x + dx * step;
    let ny = u.y + dy * step;

    if (!u.fly && ny > RIVER.top - 4 && ny < RIVER.bottom + 4) {
      const onBridge = LANES.some((bx) => Math.abs(nx - bx) < 31);
      if (!onBridge) {
        ny = u.y <= RIVER.cy ? Math.min(ny, RIVER.top - 8) : Math.max(ny, RIVER.bottom + 8);
      }
    }

    u.x = clamp(nx, ARENA.x + 12 + u.radius, ARENA.right - 12 - u.radius);
    u.y = clamp(ny, ARENA.y + 12 + u.radius, ARENA.bottom - 12 - u.radius);
    u.moving = true;
    u.walk += dt;
    if (Math.abs(dx) > 0.12) u.facing = dx > 0 ? 1 : -1;
  }

  separate() {
    for (let i = 0; i < this.units.length; i++) {
      const a = this.units[i];
      if (!a.alive || a.deploy > 0) continue;
      for (let j = i + 1; j < this.units.length; j++) {
        const b = this.units[j];
        if (!b.alive || b.deploy > 0 || a.fly !== b.fly) continue;
        const min = a.radius + b.radius;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        if (d >= min) continue;
        if (d < 0.001) { dx = rand(-1, 1); dy = rand(-1, 1); d = Math.hypot(dx, dy) || 1; }
        const push = (min - d) * 0.5;
        const ox = (dx / d) * push;
        const oy = (dy / d) * push;
        a.x -= ox; a.y -= oy;
        b.x += ox; b.y += oy;
      }
      if (!a.fly) {
        for (const t of this.towers) {
          if (!t.alive) continue;
          const min = t.radius + a.radius + 2;
          const dx = a.x - t.x;
          const dy = a.y - t.y;
          const d = Math.hypot(dx, dy);
          if (d < min && d > 0.001) {
            a.x = t.x + (dx / d) * min;
            a.y = t.y + (dy / d) * min;
          }
        }
      }
      a.x = clamp(a.x, ARENA.x + 10 + a.radius, ARENA.right - 10 - a.radius);
      a.y = clamp(a.y, ARENA.y + 10 + a.radius, ARENA.bottom - 10 - a.radius);
    }
  }

  unitAttack(u, target) {
    if (u.def.kind === 'ranged') {
      const speed = u.def.projectile === 'bullet' ? 700 : 520;
      this.spawnProjectile({
        x: u.x + u.facing * u.radius * 0.6,
        y: u.y - u.radius * 1.3,
        target,
        team: u.team,
        dmg: u.def.dmg,
        speed,
        kind: u.def.projectile,
      });
      this.sfx(u.def.projectile === 'bullet' ? 'shot' : 'arrow', 0.07);
    } else {
      this.applyDamage(target, u.def.dmg, u.team);
      this.burst(target.x, target.y - (target.isTower ? 20 : 10), '#fff2b8', 4, 90, { gravity: 60, size: [1.5, 3] });
      this.sfx('hit', 0.055);
    }
  }

  /* --------------------------------------------------------------- towers */

  updateTowers(dt) {
    for (const t of this.towers) {
      if (!t.alive) continue;
      t.hitFlash = Math.max(0, t.hitFlash - dt);
      if (!t.active) continue;
      t.cooldown -= dt;
      if (t.cooldown > 0) continue;

      let best = null;
      let bestD = Infinity;
      for (const u of this.units) {
        if (!u.alive || u.team === t.team || u.deploy > 0) continue;
        const d = dist(t, u);
        if (d <= t.range + u.radius && d < bestD) {
          best = u;
          bestD = d;
        }
      }
      if (best) {
        t.cooldown = t.hit;
        this.spawnProjectile({
          x: t.x,
          y: t.y - (t.king ? 82 : 60),
          target: best,
          team: t.team,
          dmg: t.dmg,
          speed: 620,
          kind: 'tower',
        });
        this.sfx('towerShot', 0.09);
      } else {
        t.cooldown = 0.12;
      }
    }
  }

  /* ----------------------------------------------------------- projectiles */

  spawnProjectile({ x, y, target, team, dmg, speed, kind }) {
    this.projectiles.push({
      x, y, target, team, dmg, speed, kind, life: 2.4, angle: 0,
      lx: target ? target.x : x,
      ly: target ? target.y : y,
    });
  }

  updateProjectiles(dt) {
    for (const p of this.projectiles) {
      p.life -= dt;
      if (p.life <= 0) { p.dead = true; continue; }
      if (p.target && p.target.alive) {
        p.lx = p.target.x;
        p.ly = p.target.y - (p.target.isTower ? 30 : 10);
      }
      const dx = p.lx - p.x;
      const dy = p.ly - p.y;
      const d = Math.hypot(dx, dy);
      p.angle = Math.atan2(dy, dx);
      const step = p.speed * dt;
      if (d <= step + 6) {
        p.x = p.lx;
        p.y = p.ly;
        p.dead = true;
        if (p.target && p.target.alive) {
          this.applyDamage(p.target, p.dmg, p.team);
          const hitColor = p.kind === 'tower' ? TEAM[p.team].main : '#ffe7ae';
          this.burst(p.x, p.y, hitColor, p.kind === 'tower' ? 8 : 4, 120, { gravity: 90, size: [1.5, 3.4] });
          if (p.kind === 'tower') this.sfx('towerHit', 0.12);
        }
      } else {
        p.x += (dx / d) * step;
        p.y += (dy / d) * step;
      }
    }
    this.projectiles = this.projectiles.filter((p) => !p.dead);
  }

  /* --------------------------------------------------------------- spells */

  updateSpells(dt) {
    for (const s of this.pendingSpells) {
      s.t += dt;
      if (s.t >= s.dur) {
        s.done = true;
        this.resolveSpell(s);
      }
    }
    this.pendingSpells = this.pendingSpells.filter((s) => !s.done);
  }

  resolveSpell(s) {
    const card = s.card;
    const enemy = s.team === 'blue' ? 'red' : 'blue';
    for (const u of this.units) {
      if (!u.alive || u.team !== enemy) continue;
      if (dist(u, s) <= card.radius + u.radius * 0.6) {
        this.applyDamage(u, card.dmg, s.team);
      }
    }
    for (const t of this.towers) {
      if (!t.alive || t.team !== enemy) continue;
      if (dist(t, s) <= card.radius + t.radius * 0.55) {
        this.applyDamage(t, card.dmg * card.towerMult, s.team);
      }
    }

    const fire = card.spell === 'fireball';
    this.burst(s.x, s.y, fire ? '#ffb22e' : '#d8c08a', fire ? 36 : 22, fire ? 260 : 180, {
      gravity: fire ? 160 : 300, size: fire ? [3, 8] : [1.5, 4],
    });
    this.burst(s.x, s.y, fire ? '#fff2b0' : '#ffffff', 12, 130, { gravity: 40, size: [2, 5] });
    this.addRing(s.x, s.y, card.radius, fire ? 'rgba(255,170,60,.9)' : 'rgba(235,215,160,.8)', 0.5);
    if (fire) {
      this.addRing(s.x, s.y, card.radius * 1.5, 'rgba(255,240,190,.9)', 0.32);
      this.flashes.push({ x: s.x, y: s.y, r: card.radius * 1.7, t: 0, dur: 0.42, warm: true });
    }
    this.addScorch(s.x, s.y, card.radius * 0.85, fire ? 0.4 : 0.2);
    this.shake = Math.max(this.shake, fire ? 22 : 9);
    this.sfx(fire ? 'boom' : 'arrows', 0.1);
  }

  /* ----------------------------------------------------------- card play */

  playCard(team, index, x, y) {
    const deck = team === 'blue' ? this.playerDeck : this.ai.deck;
    const id = deck.hand[index];
    const card = CARDS[id];
    if (!card || deck.elixir + 0.001 < card.cost) return false;
    if (!this.canDeploy(team, card, x, y)) return false;

    deck.elixir -= card.cost;
    deck.hand[index] = deck.queue.shift();
    deck.queue.push(id);

    if (team === 'blue') {
      this.stats.cardsPlayed++;
      this.stats.elixirSpent += card.cost;
    }
    if (card.spell) {
      this.sound.play(card.spell === 'fireball' ? 'fireball' : 'arrows');
    } else if (team === 'blue') {
      this.sound.play('deploy');
    } else {
      this.sound.play('enemyDeploy');
    }

    if (card.spell) {
      this.pendingSpells.push({
        team, card, x, y, t: 0, dur: card.spell === 'fireball' ? 0.55 : 0.5,
        fromY: y - (card.spell === 'fireball' ? 300 : 50),
      });
    } else {
      this.spawnTroop(team, card, x, y);
    }
    return true;
  }

  spawnTroop(team, card, x, y) {
    const offsets = card.count === 1
      ? [[0, 0]]
      : card.count === 2
        ? [[-15, 0], [15, 0]]
        : [[0, -11], [-17, 8], [17, 8]];
    for (const [dx, dy] of offsets) {
      const u = this.makeUnit(team, card, x + dx, y + dy);
      this.units.push(u);
    }
    this.addRing(x, y, card.radius + 16, TEAM[team].main, 0.45);
    this.burst(x, y + 4, '#e9dfc4', 10, 75, { gravity: 120, size: [2, 4] });
    this.burst(x, y + 4, TEAM[team].main, 6, 60, { gravity: 40, size: [1.5, 3] });
  }

  makeUnit(team, card, x, y) {
    return {
      def: card, team, x, y,
      hp: card.hp, maxHp: card.hp, radius: card.radius, fly: Boolean(card.flying),
      target: null, cooldown: rand(0.25, 0.65), deploy: 0.42, walk: rand(0, 4),
      facing: team === 'blue' ? 1 : -1, moving: false, hitFlash: 0,
      attackAnim: 0, alive: true,
      isUnit: true,
    };
  }

  /* -------------------------------------------------------------- damage */

  applyDamage(target, amount, team) {
    if (!target || !target.alive) return;
    target.hp -= amount;
    target.hitFlash = Math.max(target.hitFlash || 0, 0.16);
    if (target.isTower) {
      if (target.king) target.active = true;
      if (amount >= 24 && Math.random() < 0.48) {
        this.addFloater(target.x + rand(-10, 10), target.y - target.radius * 1.8, String(Math.round(amount)), '#ffe7a1', 13, 0.6);
      }
      if (target.hp <= 0) this.destroyTower(target);
    } else if (target.hp <= 0) {
      this.killUnit(target);
    }
  }

  killUnit(u) {
    if (!u.alive) return;
    u.alive = false;
    this.burst(u.x, u.y - u.radius, TEAM[u.team].main, 9, 120, { gravity: 240, size: [2, 4.5] });
    this.burst(u.x, u.y - u.radius, '#ffffff', 5, 90, { gravity: 120, size: [1, 3] });
    this.addRing(u.x, u.y, u.radius + 8, TEAM[u.team].glow, 0.28);
  }

  destroyTower(t) {
    if (!t.alive) return;
    t.alive = false;
    t.hp = 0;

    const team = TEAM[t.team];
    this.burst(t.x, t.y - 30, '#b7c0b2', 26, 230, { gravity: 260, size: [2, 7] });
    this.burst(t.x, t.y - 20, team.main, 16, 180, { gravity: 180, size: [2, 5] });
    this.burst(t.x, t.y - 15, '#ffcf5a', 12, 150, { gravity: 100, size: [2, 5] });
    this.addRing(t.x, t.y, t.radius * 2.4, team.glow, 0.8);
    this.addScorch(t.x, t.y, t.radius * 1.3, 0.45);
    this.flashes.push({ x: t.x, y: t.y - 20, r: t.radius * 2.4, t: 0, dur: 0.5, warm: true });
    this.shake = Math.max(this.shake, 26);
    this.sfx('towerDown', 0.2);
    this.addFloater(t.x, t.y - t.radius * 2.5, '+1 CROWN', '#ffd45e', 17, 1.2);

    if (!t.king) {
      const king = this.towers.find((k) => k.team === t.team && k.king);
      if (king) king.active = true;
    }

    const blue = this.crowns('blue');
    const red = this.crowns('red');
    if (t.king) {
      this.queueFinish(t.team === 'red' ? 'win' : 'lose', 1150);
    } else if (this.overtime) {
      this.queueFinish(blue === red ? 'draw' : blue > red ? 'win' : 'lose', 1000);
    } else if (!this.overtime) {
      this.sound.play('crown');
    }
  }

  /* -------------------------------------------------------------- effects */

  burst(x, y, color, count, speed, opts = {}) {
    const colors = Array.isArray(color) ? color : [color];
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const v = rand(speed * 0.25, speed);
      const size = opts.size ? rand(opts.size[0], opts.size[1]) : rand(2, 4);
      this.particles.push({
        x, y,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v - (opts.up || 0),
        gravity: opts.gravity === undefined ? 180 : opts.gravity,
        life: rand(0.3, 0.85),
        max: 0.85,
        size,
        color: pick(colors),
        shape: opts.shape || (Math.random() < 0.25 ? 'square' : 'circle'),
      });
    }
  }

  addRing(x, y, radius, color, dur = 0.5) {
    this.rings.push({ x, y, radius, color, t: 0, dur });
  }

  addFloater(x, y, text, color, size = 14, dur = 0.8) {
    this.floaters.push({ x, y, text, color, size, t: 0, dur });
  }

  addScorch(x, y, radius, alpha = 0.3) {
    this.scorches.push({ x, y, radius, alpha, rot: rand(0, Math.PI) });
    if (this.scorches.length > 16) this.scorches.shift();
  }

  showBanner(text, sub, color, dur = 2.2) {
    this.banner = { text, sub, color, t: 0, dur };
  }

  sfx(name, gap = 0.06) {
    const now = this.time;
    if (this.sfxAt[name] && now - this.sfxAt[name] < gap) return;
    this.sfxAt[name] = now;
    this.sound.play(name);
  }

  cleanup() {
    this.units = this.units.filter((u) => u.alive);
  }
}

const game = new Game();
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  game.update(dt);
  render(game);
}
requestAnimationFrame(frame);

/* Enemy commander. Plays from the same deck, pays the same elixir. */

import { CARDS, DIFFICULTY, LANES, RIVER, ARENA, clamp, rand, pick, dist } from './data.js';

export function resetAI(g) {
  g.ai = { deck: { hand: [], queue: [], elixir: 5 }, think: rand(2, 3) };
  g.ai.deck = g.makeDeck();
  g.ai.think = rand(...DIFFICULTY[g.difficulty].think);
}

export function updateAI(g, dt) {
  if (g.finishing) return;
  const deck = g.ai.deck;
  if (!deck) return;
  g.ai.think -= dt;
  if (g.ai.think > 0) return;
  const cfg = DIFFICULTY[g.difficulty];
  g.ai.think = rand(cfg.think[0], cfg.think[1]);
  playTurn(g, cfg);
}

function playTurn(g, cfg) {
  const deck = g.ai.deck;
  const hand = deck.hand.map((id) => CARDS[id]);
  const affordable = hand
    .map((card, index) => ({ card, index }))
    .filter((o) => o.card.cost <= deck.elixir + 0.001);
  if (!affordable.length) return;

  const playerUnits = g.units.filter((u) => u.alive && u.team === 'blue' && u.deploy <= 0);
  const threats = playerUnits.filter((u) => u.y < RIVER.cy + 210);

  // 1. Value spells: clusters, or a nearly-dead tower.
  const spells = affordable.filter((o) => o.card.spell);
  if (spells.length && Math.random() < cfg.spell && castValueSpell(g, spells, playerUnits)) return;

  // 2. Defend. Better difficulties react more often.
  if (threats.length && Math.random() < cfg.defend) {
    const troops = affordable.filter((o) => !o.card.spell && o.card.targets !== 'buildings');
    let pool = troops;
    if (threats.some((u) => u.fly)) {
      const airCapable = troops.filter((o) => o.card.targets === 'all');
      if (airCapable.length) pool = airCapable;
    }
    if (pool.length) {
      // Prefer a solid defender, but don't dump the most expensive card on a lone goblin.
      pool = [...pool].sort((a, b) => b.card.cost - a.card.cost);
      const choice = threats.length >= 3 ? pool[0] : (pool[0].card.cost > 4 ? pool[pool.length - 1] : pool[0]);
      const avgX = threats.reduce((s, u) => s + u.x, 0) / threats.length;
      const lane = nearestLane(avgX);
      const threatY = Math.min(...threats.map((u) => u.y));
      const y = clamp(threatY - 95, ARENA.y + 110, RIVER.top - 24);
      if (deployTroop(g, choice, lane + rand(-22, 22), y)) return;
    }
  }

  // 3. Push. The AI waits for enough elixir and attacks the softer lane.
  if (deck.elixir >= cfg.push) {
    const troops = affordable.filter((o) => !o.card.spell);
    if (troops.length) {
      let choice = null;
      const giant = troops.find((o) => o.card.id === 'giant');
      if (giant && deck.elixir >= 7) choice = giant;
      else {
        const support = troops.filter((o) => o.card.id !== 'giant');
        choice = support.length ? pick(support) : troops[0];
      }
      const lane = pushLane(g);
      const y = choice.card.id === 'giant' ? 474 : 462;
      if (deployTroop(g, choice, lane + rand(-26, 26), y)) return;
    }
  }

  // 4. Don't sit on a full bar.
  if (deck.elixir >= 9.6) {
    const troop = pick(affordable.filter((o) => !o.card.spell));
    if (troop) deployTroop(g, troop, pick(LANES) + rand(-30, 30), 468);
  }
}

function deployTroop(g, choice, x, y) {
  const r = choice.card.radius || 10;
  const spot = findFreeSpot(g, x, y, r);
  if (!spot) return false;
  if (!g.canDeploy('red', choice.card, spot.x, spot.y)) return false;
  return g.playCard('red', choice.index, spot.x, spot.y);
}

function findFreeSpot(g, x, y, r) {
  const offsets = [
    [0, 0], [30, 0], [-30, 0], [0, -28], [0, 32], [42, -24], [-42, -24],
  ];
  for (const [dx, dy] of offsets) {
    const nx = clamp(x + dx, ARENA.x + 30, ARENA.right - 30);
    const ny = clamp(y + dy, ARENA.y + 90, RIVER.top - 24);
    if (g.canDeploy('red', { spell: false, radius: r }, nx, ny)) return { x: nx, y: ny };
  }
  return null;
}

function castValueSpell(g, spells, playerUnits) {
  for (const option of spells) {
    const card = option.card;
    let best = null;
    for (const center of playerUnits) {
      const caught = playerUnits.filter((u) => dist(u, center) <= card.radius * 0.85);
      if (!caught.length) continue;
      let score = caught.reduce((s, u) => s + Math.min(u.hp, card.dmg), 0);
      if (caught.length >= 3) score += 150;
      else if (caught.length === 2) score += 60;
      else score -= 40;
      if (!best || score > best.score) {
        const cx = caught.reduce((s, u) => s + u.x, 0) / caught.length;
        const cy = caught.reduce((s, u) => s + u.y, 0) / caught.length;
        best = { x: cx, y: cy, score, count: caught.length };
      }
    }

    // Finish a weak tower if no juicy cluster exists.
    for (const t of g.towers) {
      if (t.team !== 'blue' || !t.alive) continue;
      const towerDamage = card.dmg * card.towerMult;
      if (t.hp <= towerDamage + 8) {
        const score = 120 + (t.king ? 220 : 0);
        if (!best || score > best.score) best = { x: t.x, y: t.y, score, count: 1, tower: true };
      }
    }

    if (best && (best.count >= 2 || best.tower)) {
      const wobble = g.difficulty === 'ruthless' ? 6 : g.difficulty === 'classic' ? 14 : 26;
      g.playCard('red', option.index, best.x + rand(-wobble, wobble), best.y + rand(-wobble, wobble));
      return true;
    }
  }
  return false;
}

function nearestLane(x) {
  return Math.abs(x - LANES[0]) <= Math.abs(x - LANES[1]) ? LANES[0] : LANES[1];
}

function pushLane(g) {
  // Hit the weaker princess tower; sometimes feint to the other lane.
  if (Math.random() < 0.3) return pick(LANES);
  const left = g.towers.find((t) => t.team === 'blue' && !t.king && t.x < 360);
  const right = g.towers.find((t) => t.team === 'blue' && !t.king && t.x > 360);
  if (left && right && left.alive !== right.alive) return left.alive ? left.x : right.x;
  if (left && right) return left.hp <= right.hp ? left.x : right.x;
  return pick(LANES);
}

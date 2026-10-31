# Mini Clash

A tiny 2D lane-battler inspired by Clash Royale. Deploy troops, defend your towers, and break the enemy King — all in a single canvas, with no build step and no external assets.

## Play

Serve the folder with any static server and open it in a browser:

```bash
python3 -m http.server 3002
# then visit http://localhost:3002
```

The game fills a 9:16 play area and works with mouse, touch, and keyboard.

## How to play

1. Pick a card from your hand of four.
2. Tap (or drag) anywhere on your half of the arena to deploy it.
3. Troops march toward the bridges, fight what they meet, and attack towers.
4. Destroy a Princess Tower for **1 crown**; destroy the King Tower for an instant **3-crown** win.
5. The side with the most crowns after **3:00** wins. A tied match goes to **overtime**, where the first crown decides it.

Elixir refills over time. The **last minute** doubles the elixir rate, so save a push for the finish.

### Controls

| Action | Mouse / touch | Keyboard |
| --- | --- | --- |
| Select card | Tap a card | `1` – `4` |
| Deploy | Tap your half, or drag a card there | — |
| Pause / resume | Pause button | `Space` or `Esc` |
| Mute | Speaker button | `M` |

Drag-and-drop and tap-to-place both work on phones. The hand, elixir bar, and arena scale together on smaller screens.

## Cards

| Card | Cost | Role |
| --- | --- | --- |
| Knight | 3 | Tough melee defender |
| Archers | 3 | Ranged pair |
| Giant | 5 | Tower-seeking tank |
| Goblins | 2 | Fast, cheap swarm |
| Musketeer | 4 | Long-range single-target |
| Minions | 3 | Flying swarm |
| Fireball | 4 | Area spell, heavy damage |
| Arrows | 3 | Cheap area spell, clears swarms |

You and the rival draw from the same eight-card deck, so every matchup is symmetrical.

## Difficulty

- **Casual** — slow reactions, forgiving elixir use.
- **Classic** — balanced pushes, defends when threatened.
- **Ruthless** — fast decisions, punishes overcommitment, times spells.

## Under the hood

- Vanilla JavaScript modules, canvas 2D, and the Web Audio API.
- All artwork is drawn procedurally — troops, towers, cards, spell icons, and arena scenery.
- Sound effects are synthesized at runtime; no image, font, or audio files are required.
- `js/data.js` holds stats and layout, `js/game.js` the simulation, `js/render.js` and `js/art.js` the presentation, and `js/ai.js` the rival.

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/spearred55-ctrl/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/spearred55-ctrl/PlayGround)

- 🎮 [Open the project](https://omgithub.com/spearred55-ctrl/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=spearred55-ctrl%2FPlayGround).
- 💻 [Explore the source](https://github.com/spearred55-ctrl/PlayGround).
- 🛠️ [Check build runs](https://github.com/spearred55-ctrl/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/spearred55-ctrl/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/spearred55-ctrl).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->

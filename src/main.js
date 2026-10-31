import { Game } from './game.js';
import { UI } from './ui.js';

async function boot() {
  const ui = new UI();
  const game = new Game(ui);
  window.__BATTLEWORLD__ = game;
  game.start();
  try {
    await game.initWorld();
    window.__BW_READY__ = true;
  } catch (error) {
    console.error(error);
    document.getElementById('loadCopy').textContent = 'BOOT FAILURE · CHECK CONSOLE';
    document.getElementById('loadCopy').style.color = '#ff7a58';
  }
}

boot();

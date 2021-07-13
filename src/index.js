import Game from '../speed_node/game'
import View from './view'

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const board = document.querySelector('.board');
  const view = new View(game, board);
  // view.runAI();
});

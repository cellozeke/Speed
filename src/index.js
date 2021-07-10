const Game = require("../speed_node/game");
const View = require("./view");

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const board = document.querySelector('#board');
  const view = new View(game, board);
});

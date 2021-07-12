const Game = require("../speed_node/game");
const View = require("./view");
// import Game from '../speed_node/game'
// import View from './view'

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const board = document.querySelector('#board');
  const view = new View(game, board);
  const player1Hand = document.querySelector('.hand-1');
  const player2Hand = document.querySelector('.hand-2');
  console.log(player1Hand);
  console.log(player2Hand);
});

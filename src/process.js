import Game from '../speed_node/game'
import View from './view'

export default class Process {
  constructor() {
    this.game;
    this.board = document.querySelector('.board');
    this.view;
    this.handleClick = this.handleClick.bind(this);
    window.addEventListener('click', this.handleClick);
  };

  restart() {
    const cards = document.querySelectorAll('.card');
    const piles = document.querySelectorAll('.pile');
    const reserves = document.querySelectorAll('.reserve');
    [...cards, ...piles, ...reserves].forEach(ele => {if (ele) ele.remove()});
    this.game ? this.game.restart() : this.game = new Game();
    this.view ? this.view.restart() : this.view = new View(this.game, this.board);
  };

  handleClick(e) {
    if (e.target.classList.contains('new-game')) {
      this.restart();
    };
  };
};

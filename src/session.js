import Game from '../speed_node/game'
import View from './view'

export default class Session {
  constructor() {
    this.game;
    this.board = document.querySelector('.board');
    this.view;
    this.handleClick = this.handleClick.bind(this);
    window.addEventListener('click', this.handleClick);
  };

  restart(diff) {
    const cards = document.querySelectorAll('.card');
    const piles = document.querySelectorAll('.pile');
    const reserves = document.querySelectorAll('.reserve');
    [...cards, ...piles, ...reserves].forEach(ele => {if (ele) ele.remove()});
    this.game ? this.game.restart() : this.game = new Game();
    this.view ? this.view.restart(diff) : this.view = new View(this.game, this.board, diff);
  };

  handleClick(e) {
    if (e.target.classList.contains('new-game')) {
      const diff = Array.prototype.slice.call(document.querySelectorAll('input[type="radio"]')).find(ele => ele.checked).id;
      this.restart(diff);
    };
  };
};
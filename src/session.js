import Game from '../speed_node/game';
import View from './view';

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
    const msg = document.querySelector('.msg');
    [...cards, ...piles, ...reserves, msg].forEach(ele => {if (ele) ele.remove()});
    this.game ? this.game.restart() : this.game = new Game();
    this.view ? this.view.restart(diff) : this.view = new View(this.game, this.board, diff);
  };

  handleClick(e) {
    if (e.target.classList.contains('new-game')) {
      const diff = e.target.innerHTML
      this.restart(diff);
    };
    // let blah = document.querySelectorAll('head > link')[1];
    // console.log(blah);
    // blah.remove();
  };
};

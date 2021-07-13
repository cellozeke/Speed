// import Card from '../speed_node/card'
import Game from '../speed_node/game';
import Utils from './utils';

export default class View {
  constructor(game, board) {
    this.game = game;
    this.board = board;
    this.setupBoard();
    this.handleKey = this.handleKey.bind(this);
    window.addEventListener('keydown', this.handleKey);
    this.handleClick = this.handleClick.bind(this);
    this.board.addEventListener('click', this.handleClick);
  };

  setupBoard() {
    const player1Hand = document.querySelectorAll('.hand-1 > .card-slot');
    const player2Hand = document.querySelectorAll('.hand-2 > .card-slot');
    for (let i = 0; i < Game.MAX_HAND_SIZE; i++) {
      player1Hand[i].appendChild(Utils.getCardHTML(this.game.hand1[i]));
      player2Hand[i].appendChild(Utils.getCardHTML(this.game.hand2[i]));
    };
    
    const pile1Slot = document.querySelector('.pile-1-slot');
    const pile1 = Utils.getPileHTML(this.game.pile1);
    pile1.classList.add('pile-1');
    pile1Slot.appendChild(pile1);
    const pile2Slot = document.querySelector('.pile-2-slot');
    const pile2 = Utils.getPileHTML(this.game.pile2);
    pile2.classList.add('pile-2');
    pile2Slot.appendChild(pile2);

    const reserve1Slot = document.querySelector('.reserve-1-slot')
    const reserve1 = Utils.getReserveHTML(this.game.reserve1);
    reserve1.classList.add('reserve-1');
    reserve1Slot.appendChild(reserve1);
    const reserve2Slot = document.querySelector('.reserve-2-slot')
    const reserve2 = Utils.getReserveHTML(this.game.reserve2);
    reserve2.classList.add('reserve-2');
    reserve2Slot.appendChild(reserve2);
  }

  renderReserves() {
    const reserve1 = document.querySelector('.reserve-1');
    reserve1.innerHTML = this.game.reserve1.length;
    const reserve2 = document.querySelector('.reserve-2');
    reserve2.innerHTML = this.game.reserve2.length;
  };

  renderStacks() {
    const stack1Slot = document.querySelector('.stack-1-slot');
    if (stack1Slot.hasChildNodes()) stack1Slot.removeChild(stack1Slot.childNodes[0]);
    stack1Slot.appendChild(Utils.getCardHTML(this.game.stack1[this.game.stack1.length - 1]));
    const stack2Slot = document.querySelector('.stack-2-slot');
    if (stack2Slot.hasChildNodes()) stack2Slot.removeChild(stack2Slot.childNodes[0]);
    stack2Slot.appendChild(Utils.getCardHTML(this.game.stack2[this.game.stack2.length - 1]));
  };

  renderPiles() {
    const pile1 = document.querySelector('.pile-1');
    pile1.innerHTML = this.game.pile1.length;
    const pile2 = document.querySelector('.pile-2');
    pile2.innerHTML = this.game.pile2.length;
  };

  playFromHand(idx) {
    const handCardSlot = document.querySelectorAll('.hand-1 > .card-slot')[idx];
    handCardSlot.lastChild.remove();
  };

  drawIntoHand(idx) {
    const handCardSlot = document.querySelectorAll('.hand-1 > .card-slot')[idx];
    handCardSlot.appendChild(Utils.getCardHTML(this.game.hand1[idx]));
  };

  handleKey(e) {
    if (Game.KEYS.includes(e.key.toLowerCase())) {
      const idx = Game.KEYS.indexOf(e.key.toLowerCase());
      const oldSelected = document.querySelector('.selected');
      const newSelected = document.querySelectorAll('.hand-1 .card-slot')[idx].firstChild;
      if (!newSelected) return;
      if (oldSelected && oldSelected !== newSelected) oldSelected.classList.remove('selected');
      newSelected.classList.contains('selected') ? newSelected.classList.remove('selected') : newSelected.classList.add('selected');
    } else if (e.key === ' ') {
      let idx = this.game.drawCard();
      if (idx !== false) {
        this.drawIntoHand(idx);
        this.renderPiles();
      };
    } else if (e.key.toLowerCase() === 'f') {
      this.game.flipReserves();
      this.renderReserves();
      this.renderStacks();
    };
  };
  
  handleClick(e) {
    const selectedCard = document.querySelector('.selected');
    if (!selectedCard || !e.path[1].classList.contains('stack-slot')) return;
    const handCard = this.game.hand1.find(card => card && card.suit === selectedCard.dataset['suit'] && card.value === selectedCard.dataset['value']);
    const idx = this.game.hand1.indexOf(handCard);
    const stackNum = e.path[1].classList.contains('stack-1-slot') ? 1 : 2;
    if (this.game.playCard(idx, stackNum)) {
      this.playFromHand(idx);
      this.renderStacks();
    }; //else flash error
    this.game.checkWinner();
  };

};

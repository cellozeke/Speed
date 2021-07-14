import Card from './card';
import Deck from './deck';

export default class Game {
  constructor() {
    this.hand1 = [];
    this.hand2 = [];
    this.pile1 = [];
    this.pile2 = [];
    this.reserve1 = [];
    this.reserve2 = [];
    this.stack1 = [];
    this.stack2 = [];
    this.dealCards();
  };

  dealCards() {
    let deck = new Deck().cards;
    // this.hand1 = deck.splice(0, Game.MAX_HAND_SIZE);
    // this.hand2 = deck.splice(0, Game.MAX_HAND_SIZE);
    for (let i = 0; i < Game.MAX_HAND_SIZE; i++) {
      this.hand1.push(deck.pop());
      this.hand2.push(deck.pop());
    };
    for (let i = 0; i < Game.START_PILE_SIZE; i++) {
      this.pile1.push(deck.pop());
      this.pile2.push(deck.pop());
    };
    for (let i = 0; i < Game.START_RESERVE_SIZE; i++) {
      this.reserve1.push(deck.pop());
      this.reserve2.push(deck.pop());
    };
  };

  flipReserves() {
    if (!this.reserve1.length) {
      while (this.stack1.length) {this.reserve1.push(this.stack1.pop())};
    };
    if (!this.reserve2.length) {
      while (this.stack2.length) {this.reserve2.push(this.stack2.pop())};
    };
    this.stack1.push(this.reserve1.pop());
    this.stack2.push(this.reserve2.pop());
  };

  validMove(card1Value, card2Value) {
    return (Math.abs(Card.VALUES.indexOf(card1Value) - Card.VALUES.indexOf(card2Value)) % 11 === 1);
  };

  playCard(idx, stack) {
    if (this.validMove(this.hand1[idx].value, stack[stack.length - 1].value)) {
      stack.push(this.hand1[idx]);
      this.hand1[idx] = null;
      return true;
    };
    return false;
  };

  drawCard() {
    if (!this.pile1.length) return false;
    for (let i = 0; i < Game.MAX_HAND_SIZE; i++) {
      if (this.hand1[i] === null) {
        this.hand1[i] = this.pile1.pop();
        return i;
      };
    };
    return false;
  };

  AIPlayCard() {
    const stacks = [this.stack1, this.stack2];
    for (let i = 0; i < Game.MAX_HAND_SIZE; i++) {
      let stack = stacks[Math.floor(Math.random() * stacks.length)];
      let otherStack = stacks.filter(ele => ele !== stack)[0];
      if (!this.hand2[i]) continue;
      if (this.validMove(this.hand2[i].value, stack[stack.length - 1].value)) {
        stack.push(this.hand2[i]);
        this.hand2[i] = null;
        return i;
      };
      if (this.validMove(this.hand2[i].value, otherStack[otherStack.length - 1].value)) {
        otherStack.push(this.hand2[i]);
        this.hand2[i] = null;
        return i;
      };
    };
    return false;
  };

  AIDrawCard(idx) {
    if (!this.pile2.length) return false;
    this.hand2[idx] = this.pile2.pop();
    return true;
  };

  checkWinner() {
    if (!this.pile1.length && this.hand1.every(card => card === null)) return 1;
    if (!this.pile2.length && this.hand2.every(card => card === null)) return 2;
    return false;
  };

  restart() {
    this.hand1 = [];
    this.hand2 = [];
    this.pile1 = [];
    this.pile2 = [];
    this.reserve1 = [];
    this.reserve2 = [];
    this.stack1 = [];
    this.stack2 = [];
    this.dealCards();
  };
};

Game.MAX_HAND_SIZE = 5;
Game.START_PILE_SIZE = 15;
Game.START_RESERVE_SIZE = 6;
Game.KEYS = 'qwert';

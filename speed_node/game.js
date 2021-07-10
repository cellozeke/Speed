const Card = require("./card");
const Deck = require("./deck");

class Game {
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

  dealCards () {
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
};

Game.MAX_HAND_SIZE = 5;
Game.START_PILE_SIZE = 15;
Game.START_RESERVE_SIZE = 6;

module.exports = Game;

// let g = new Game();
// console.log(g);

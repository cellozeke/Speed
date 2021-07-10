const Card = require("./card");

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffleDeck();
  };

  createDeck() {
    for (let i = 0; i < Card.SUITS.length; i++) {
      for (let j = 0; j < Card.VALUES.length; j++) {
        this.cards.push(new Card(Card.SUITS[i], Card.VALUES[j]));
      };
    };
  };

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    };
  };
};

module.exports = Deck;

// let d = new Deck();
// console.log(d);

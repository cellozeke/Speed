const Card = require("./card");

class Deck {
  constructor() {
    this.cards = this.createDeck();
    this.shuffleDeck();
  };

  createDeck() {
    return Card.SUITS.flatMap(suit => {
      return Card.VALUES.map(value => new Card(suit, value));
    });
  };

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    };
  };
};

module.exports = Deck;

let d = new Deck();
console.log(d);
console.log(d.cards.length)

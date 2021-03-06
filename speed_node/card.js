export default class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  };

  get color() {
    return ['♠', '♣'].includes(this.suit) ? 'black' : 'red';
  };
};

Card.SUITS = ['♣', '♦', '♥', '♠'];
Card.VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

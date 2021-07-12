class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  };

  get color() {
    return ['♠', '♣'].includes(this.suit) ? 'black' : 'red';
  };

  getHTML() {
    let cardDiv = document.createElement('div');
    cardDiv.innerText = this.suit;
    cardDiv.classList.add('card', this.color);
    cardDiv.dataset.suit = `${this.suit}`;
    cardDiv.dataset.value = `${this.value}`;
    return cardDiv;
  };
};

Card.SUITS = ['♣', '♦', '♥', '♠'];
Card.VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

module.exports = Card;
// export default Card;

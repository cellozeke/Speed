const Utils = {
  getCardHTML(card) {
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = card.suit;
    cardDiv.classList.add('card', card.color);
    cardDiv.dataset.suit = `${card.suit}`;
    cardDiv.dataset.value = `${card.value}`;
    return cardDiv;
  },

  getPileHTML(pile) {
    let pileDiv = document.createElement('div');
    pileDiv.innerHTML = pile.length;
    pileDiv.classList.add('pile');
    pileDiv.dataset.size = `${pile.length}`;
    return pileDiv;
  },

  getReserveHTML(reserve) {
    let reserveDiv = document.createElement('div');
    reserveDiv.innerHTML = reserve.length;
    reserveDiv.classList.add('reserve');
    reserveDiv.dataset.size = `${reserve.length}`;
    return reserveDiv;
  }
};

export default Utils;

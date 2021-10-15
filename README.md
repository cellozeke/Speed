# README

## Overview

Speed is a classic two-player card game where the first player to play all of their cards wins. This Speed app is a browser-based version of the game, with three levels of difficulty that determine the speed at which the AI opponent plays.

## Link to live site

https://cellozeke.github.io/Speed/

## Technologies

Speed is built entirely with JavaScript, bundled with Webpack, and utilizes only vanilla DOM manipulation.

## Gameplay clip

![alt text](https://live.staticflickr.com/65535/51589938416_556bea9906_o.gif)

## Highlight features

### Sliding cards

One of the difficulties in making this game visually appealing was sliding the cards across the play area. I accomplished this by determining the starting and ending positions and using a translate animation.

```
  translateCard(ele1, ele2) {
    const first = Utils.getPosition(ele1);
    const second = Utils.getPosition(ele2);
    const x = second[0] - first[0];
    const y = second[1] - first[1];
    ele1.animate([
      { transform: `translate(${x}px, ${y}px)`}
    ], {
      duration: View.CARD_ANIMATION_LENGTH,
      fill: 'forwards',
      iterations: 1
    });
    setTimeout(() => ele1.remove(), View.CARD_ANIMATION_LENGTH);
    setTimeout(() => this.renderStacks(), View.CARD_ANIMATION_LENGTH);
  };
```

### Lightning and fire themes

![alt text](https://live.staticflickr.com/65535/51590832540_a965ddabe7_o.gif)

Users are able to switch between themes at any point in the game, which changes the background images, fonts, and even cursor.

```
  function chooseTheme(e) {
    if (e.target.classList.contains('theme')) {
      const oldCss = document.querySelectorAll('head > link')[2];
      oldCss.remove();
      const head = document.querySelector('head');
      const newCss = document.createElement('link');
      newCss.setAttribute('rel', 'stylesheet');
      newCss.setAttribute('href', e.target.innerHTML === 'Lightning' ? './dist/main.css' : './dist/fire.css');
      head.appendChild(newCss);
    };
  };
```

import Session from './session';

document.addEventListener("DOMContentLoaded", () => {
  let session = new Session();
  const title = document.querySelector('h1');
  title.animate([
    { textShadow: '0 0 10px lime'},
    { textShadow: '0 0 10px red' },
    { textShadow: '0 0 10px cyan', letterSpacing: '0.4px' },
    { textShadow: '0 0 10px orange' },
    { textShadow: '0 0 10px lime'}
  ], {
    duration: 1000,
    iterations: Infinity
  });
  // const body = document.querySelector('body');
  // const msg = document.createElement('div');
  // msg.classList.add('msg');
  // msg.innerHTML = 'You win!'
  // // msg.innerHTML = (winner === 1 ? 'You win!' : 'AI wins!');
  // console.log(msg);
  // body.appendChild(msg);
  // msg.animate([
  //   { textShadow: '0 0 10px lime', boxShadow: '0 0 50px orange' },
  //   { textShadow: '0 0 10px red', boxShadow: '0 0 50px lime' },
  //   { textShadow: '0 0 10px cyan', boxShadow: '0 0 50px red' },
  //   { textShadow: '0 0 10px orange', boxShadow: '0 0 50px cyan' },
  //   { textShadow: '0 0 10px lime', boxShadow: '0 0 50px orange' }
  // ], {
  //   duration: 2000,
  //   iterations: Infinity
  // });
});

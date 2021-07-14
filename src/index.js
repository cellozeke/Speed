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
});

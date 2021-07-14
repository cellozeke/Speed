import Session from './session';

document.addEventListener("DOMContentLoaded", () => {
  let session = new Session();
  const title = document.querySelector('h1');
  title.animate([
    // keyframes
    { color: 'red' },
    { color: 'orange' },
    { color: 'red' }
  ], {
    // timing options
    duration: 1000,
    iterations: Infinity
  });
});

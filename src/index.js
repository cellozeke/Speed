import Session from './session';
import Sound from './sound';

document.addEventListener("DOMContentLoaded", () => {
  let session = new Session();
  const title = document.querySelector('h1');
  title.animate([
    { textShadow: '0 0 10px lime'},
    { textShadow: '0 0 10px red' },
    { textShadow: '0 0 10px cyan' }, //, letterSpacing: '0.4px'
    { textShadow: '0 0 10px orange' },
    { textShadow: '0 0 10px lime'}
  ], {
    duration: 2000,
    iterations: Infinity
  });

  const music = new Sound('./dist/flight_of_the_bumblebee_2.mp3');
  const musicEle = document.querySelector('button.music');
  musicEle.classList.add('off');
  window.addEventListener('click', toggleMusic);

  function toggleMusic(e) {
    if (e.target.classList.contains('off')) {
      e.target.classList.remove('off');
      e.target.classList.add('on');
      music.play();
    } else if (e.target.classList.contains('on')) {
      e.target.classList.remove('on');
      e.target.classList.add('off');
      music.stop();
    };
  };

  window.addEventListener('click', chooseTheme);

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
});

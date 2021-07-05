import colors from './colors.js';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
const delay = 1000;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, delay);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
});

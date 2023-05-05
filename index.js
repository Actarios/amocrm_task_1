const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let currentTimer = '';

const createTimerAnimator = () => {
  return (seconds) => {
    
    let hrs = Math.floor((seconds / 3600 ));
    let min = Math.floor((seconds / 60 ) % 60);
    let sec = Math.floor(seconds % 60);

    timerEl.innerHTML = `
      ${hrs < 10 ? '0' + hrs : hrs} : 
      ${min < 10 ? '0' + min : min} : 
      ${sec < 10 ? '0' + sec : sec}
    `
    
    currentTimer = setTimeout(() => {
      createTimerAnimator()(seconds - 1)
    }, 1000)

    if (seconds == 0) {
      clearTimeout(currentTimer)
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  let inputVal = event.target.value;
  event.target.value = inputVal.replace(/[^0-9 ]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearTimeout(currentTimer)
  animateTimer(seconds);

  inputEl.value = '';
});
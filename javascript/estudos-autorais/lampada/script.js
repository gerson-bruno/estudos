const lamp = document.querySelector('.initial');
const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');
const btnReset = document.querySelector('.btn-reset');

btnOn.addEventListener('click', () => {
  lamp.classList.add('on');
  lamp.classList.remove('off');
});

btnOff.addEventListener('click', () => {
  lamp.classList.add('off');
  lamp.classList.remove('on');
});

btnReset.addEventListener('click', () => {
  lamp.classList.remove('on');
  lamp.classList.remove('off');
});

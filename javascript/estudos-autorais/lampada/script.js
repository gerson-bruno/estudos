const lamp = document.querySelector('.initial');
const lampOn = document.querySelector('.on');
const lampOff = document.querySelector('.off');
const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');
const btnReset = document.querySelector('.btn-reset');

btnOn.addEventListener('click', () => {
    lamp.style.display = 'none';
    lampOn.style.display = 'block';
    lampOff.style.display = 'none';
});

btnOff.addEventListener('click', () => {
    lamp.style.display = 'none';
    lampOn.style.display = 'none';
    lampOff.style.display = 'block';
});

btnReset.addEventListener('click', () => {
    lamp.style.display = 'block';
    lampOn.style.display = 'none';
    lampOff.style.display = 'none';
});
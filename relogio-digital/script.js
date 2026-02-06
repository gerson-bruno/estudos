const horaElement = document.getElementById('hora');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');
const ampmElement = document.getElementById('ampm');

function updateClock() {
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();
    let ampm = 'AM';

    if (hora > 12) {
        hora -= 12;
        ampm = 'PM';
    }

    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    horaElement.textContent = hora;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;
    ampmElement.textContent = ampm;
}

setInterval(updateClock, 1000);
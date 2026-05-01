import modificarstrings from './modificarstrings.js';

const carros = [
    'ford',
    'chevrolet',
    'fiat',
    'volkswagen',
    'honda',]

const carrosCapitalizados = modificarstrings.capitalizar(carros);
const carrosOrdenados = modificarstrings.ordenar(carrosCapitalizados);
carrosOrdenados.forEach((carro) => console.log(carro));

console.log(modificarstrings.capitalizar(carros));
console.log(modificarstrings.ordenar(carros));
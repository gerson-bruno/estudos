import Caneta from "./caneta.ts";
const caneta1 = new Caneta('Bic', 'Azul', 0.5, 100, true);
const caneta2 = new Caneta('Pilot', 'Preta', 0.7, 50, false);
const caneta3 = new Caneta('Faber-Castell', 'Vermelha', 1.0, 0, false);

caneta1.status();
caneta1.rabiscar();
console.log('-------------------');
caneta2.status();
caneta2.rabiscar();
console.log('-------------------');
caneta3.status();
caneta3.rabiscar();
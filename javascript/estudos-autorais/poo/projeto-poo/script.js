import modificarstrings from './modificarstrings.js';

const ingredientes = [
  'água',
  'mel',
  'sal',
  'mostarda',
  'pimenta',
  'alho',
  'cebola',
  'azeite',
  'vinagre',
  'limão',
];


/* const ingredientesCapitalizados = modificarstrings.capitalizar(ingredientes);
const ingredientesOrdenados = modificarstrings.ordenar(ingredientesCapitalizados);
ingredientesOrdenados.forEach((ingrediente) => console.log(ingrediente));  */


console.log(modificarstrings.capitalizar(ingredientes));
console.log(modificarstrings.ordenar(ingredientes));
console.log(modificarstrings.caixaAlta(ingredientes));
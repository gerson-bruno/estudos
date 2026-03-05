// UNDEFINED e NULL
// undefined - quando não tem valor
// null - quando queremos dar um valor vazio (atribuido pelo desenvolvedor)

console.log(typeof null, typeof undefined);

console.log(null === undefined); // false, não são idênticos.

console.log(null == undefined); // true, pois não possuem valor.


// Não são iguais a false, pois mesmo que o valor seja falso, ele tem um valor.
console.log(null == false); // false, pois null tem um valor.

console.log(undefined == false); // false, pois undefined tem um valor.
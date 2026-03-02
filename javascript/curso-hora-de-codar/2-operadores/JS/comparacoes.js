// Maior e Menor: > e <
// Maior ou igual e Menor ou igual: >= e <=    

// Diferente: !=
// Estritamente diferente: !==

// Igual: ==
// Estritamente igual: === (é mais utilizado do que ==)

// Negação: !

console.log(5 <= 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 != 5);
console.log(5 !== 5);
console.log(!true);
console.log(!false);
console.log("--------------------------------------------");

// Operadores === e !== levam em consideração o TIPO DO DADO, por isso devem ser utilizados preferencialmente ao inves de == e !=


console.log(5 === "5");
console.log(5 == "5"); // aqui gera true pois não considera o tipo do dado
console.log(5 !== "5");
console.log(5 != "5");

console.log("--------------------------------------------");

// Observe que 5 + "5" gera no console 55, pois ele soma a string 5 com o number 5, por isso não é exatamente igual.

console.log(5 + "5");

// Se verificarmos no typeof de 5 + "5", será string pois ele soma a string 5 com o number 5 e gera uma string com os dois.

console.log(typeof (5 + "5"));
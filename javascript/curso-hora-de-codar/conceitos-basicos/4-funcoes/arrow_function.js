/* Arrow function é uma função anônima,
ou seja, ela obrigatoriamente deve 
ser atribuida a uma variável. */

const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();


const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return;
    } else {
        console.log("Impar");
    }   
}

parOuImpar(5);
parOuImpar(6);
parOuImpar(7);
parOuImpar(8);
parOuImpar(9);
parOuImpar(10);


console.log("--------------------------------------------");

/* O Arrow Function pode ter uma SINTEXES MAIS CURTA:
Útil para funções pequenas, onde omitimos as {} e também a 
instrução de return (ja é realizada automaticamente) */

const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(5));  // Número que se quer calcular a raiz quadrada.

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));

console.log(raizQuadrada2(4)); // pode-se aproveitar a funcition mais de uma vez e apenas alterar o numero que se quer calcular a raiz quadrada.


console.log("--------------------------------------------");    













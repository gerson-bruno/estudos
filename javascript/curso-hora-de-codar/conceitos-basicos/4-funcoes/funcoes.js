// function | nome da função | parâmetros opcionais ( ) | corpo da função {}

function nomeFuncao() {
    console.log("Opa");
}
nomeFuncao(); // <-- chamando a função, sem isso o console não mostra NADA.

console.log("--------------------------------------------");

// Chamando a função dentro de uma variável:

const minhaFuncaoEmVariável = function () {
  console.log("Função em variável!");
};
minhaFuncaoEmVariável(); // chamando a função pelo nome da variavel.

console.log("--------------------------------------------");

// Utilizar a função dentro da variável const é utilizado principalmente para ter a certeza que uma função não sobrescreve outra.
// O resultado final das duas é o mesmo.

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}
funcaoComParametro("Imprimindo..."); // agora o console mostrará o texto do console.log e esse dentro da funcao.
funcaoComParametro("Imprimindo 2...");

console.log("--------------------------------------------");

// Retorno das funções:
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}
const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

console.log("--------------------------------------------");

// Escopo de funções:

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função: ${y}`);
}
testandoEscopo();
console.log(`Y fora da função: ${y}`);

//alterando o valor global de Y
y = 30;
console.log(`Y fora da função: ${y}`);

console.log("--------------------------------------------");

// Escopo aninhado (Nested Scopes):
let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    console.log(m);
  }

  console.log(m);
}
escopoAninhado();

console.log(m);

console.log("--------------------------------------------");
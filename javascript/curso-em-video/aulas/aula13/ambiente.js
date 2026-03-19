/* Exercícios de laços servem para deixar o código mais organizado, facilitando a leitura e entendimento do mesmo.
Além disso, eles podem ser usados para executar um bloco de instruções um certo número de vezes. 
Imagine esse c´digo abaixo, onde eu queira executar o console.log 6 vezes, sem o mecanismo de laço ficaria assim:

console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')

Para deixar o código mais organizado, eu posso usar o laço de repetição. Como o exemplo abaixo que é exatamente o mesmo que o anterior:
*/

let contador = 1
while (contador <= 6){
    console.log('Tudo bem?')
    contador++
}

// Aqui ele primeiro testa e se a condição for True, ele executa o Looping.

let conta = 1
do {
    console.log('Tudo bem???')
    conta++
} while (conta <= 6)

// Aqui ele primeiro executa o Looping e depois testa a condição. 

// A estrutura do while ou do, tem a mesma função. Porém o while é comumente mais utilizado.
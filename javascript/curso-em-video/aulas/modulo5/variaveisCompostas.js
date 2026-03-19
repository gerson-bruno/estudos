let num = [5, 8, 4]
console.log(num)
num[3] = 6
console.log(num)
num[4] = 7
console.log(num)
num.push(9) //o .push adiciona o valor a ultima posição
console.log(num)
num.length //saber o cumprimento (nesse caso 6, pois a variavel tem 6 itens)
console.log(`O vetor tem ${num.length} posições`)
num.sort() //coloca todos os elementos em ordem crescente
console.log(num) // observa aqui os dois ultimos consoles pra ver o .sort

console.log("--------------------------------------------------------------------")
// Para saber qual numero esta em determinada posição é só executar:
console.log(num[0]) // O zero(0) mostra 4, pois ele é o primeiro da lista depois de ordenada.
console.log(num[3]) // Aqui se mostra o 7 porque ele é o quarto da lista (as listas SEMPRE INICIAM NO ZERO)
console.log(num.indexOf(7)) // Aqui ele mostra 3 pq significa que o numero 7 esta na terceira posição (inicia a partir do zero)
console.log(num.indexOf(4)) //indexOf(elemento) serve para mostrar em que posição o elemento esta na variavel
console.log(num.indexOf(2)) //aqui retorna -1 porque na variavel não existe o valor(elemento) numero 2.

console.log("--------------------------------------------------------------------")
num.push(3)
console.log(num)
num.sort()
num.push(2) // Perceba que aqui o 2 ficou por ultimo, pois ele veio depois do comando .sort
console.log(num)

console.log("--------------------------------------------------------------------")
/* for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
 FORMA ANTIGA */
 //FORMA ATUAL
 for(let pos in num){ //cria uma variavel(let pos) in (variavel composta - num)
    console.log(num[pos])
 }
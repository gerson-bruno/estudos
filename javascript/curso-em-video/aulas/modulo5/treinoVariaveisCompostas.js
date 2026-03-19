let Leticia = ['Leticia', 31, 'Terapeuta Ocupacional', 'Casada', 'Mãe da Luna e do Tutu']
//console.log(Leticia)
//console.log(Leticia.indexOf(31)) // retorna 1 pois esta na posição 1 (lembre-se que se inicia na zero)
//console.log(Leticia[2]) // retorna Terapeuta Ocupacional, porque é o que estava na segunda posição.

if(Leticia[2] === 'Terapeuta Ocupacional') {
    console.log("Parabéns você é TO!")
} else {
    console.log("Qual a sua profissão?")
}

console.log(Leticia.sort())
Leticia.push('Ama o seu marido')
console.log(Leticia)
console.log(Leticia.sort())

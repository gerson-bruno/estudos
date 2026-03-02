const animal = {
    nome: "Luna",
    peso: "14 Kg",
    latir: function() {
        console.log("Au au au");
    },
    job: function() {
        console.log("Dormir");
    }
}

console.log(animal.nome);
console.log(animal.peso);
animal.latir();
animal.job();


// 2 - aprofundando em métodos
const pessoa = {
    nome: "João",
    idade: 30,
    getNome: function() {
        return this.nome;    
    },
    getIdade: function() {
        return this.idade;
    }
    }

    console.log(pessoa.getNome());
    console.log(pessoa.getIdade());


// 3 - prototype - recurso não tão utilizado, mas importante para entender a herança em JavaScript
const text = "Olá, mundo!";
    console.log(Object.getPrototypeOf(text));
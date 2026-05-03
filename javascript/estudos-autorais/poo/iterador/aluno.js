class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }
    info() {
        console.log(`${this.nome} - ${this.idade} - ${this.curso}`);
    }
}

export default Aluno;
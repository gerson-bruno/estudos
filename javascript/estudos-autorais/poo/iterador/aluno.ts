class Aluno {
    private nome: string;
    private idade: number;
    public curso: string;
    public cursando: boolean;

    constructor(
        nome: string,
        idade: number,
        curso: string,
        cursando: boolean
    ) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.cursando = cursando;
    }

    status(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Cursando: ${this.cursando ? 'Sim' : 'Não'}`);
    }
}

export default Aluno;

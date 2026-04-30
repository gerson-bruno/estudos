class Aluno {
  constructor(nome, curso, notas) {
    this.nome = nome;
    this.curso = curso;
    this.notas = notas;
  }

  get media() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }

  info() {
    console.log(`${this.nome} - ${this.curso} - ${this.notas} - ${this.media}`);
  }
}

const aluno1 = new Aluno('Gerson', 'Análise e Desenvolvimento de Sistemas', [10, 9, 10]);
const aluno2 = new Aluno('Maria', 'Análise e Desenvolvimento de Sistemas', [9, 10, 8]);
const aluno3 = new Aluno('João', 'Análise e Desenvolvimento de Sistemas', [7, 6, 8]);
const aluno4 = new Aluno('Ana', 'Análise e Desenvolvimento de Sistemas', [10, 9, 10]);

aluno1.info();
aluno2.info();
aluno3.info();
aluno4.info();
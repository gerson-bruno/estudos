import Aluno from './aluno.ts';

const aluno1 = new Aluno('João', 20, 'Engenharia', true);
aluno1.status();

const alunos = [
    new Aluno('Maria', 22, 'Medicina', true),
    new Aluno('Pedro', 19, 'Direito', false),
    new Aluno('Ana', 21, 'Arquitetura', true)
];
alunos.forEach(aluno => aluno.status());
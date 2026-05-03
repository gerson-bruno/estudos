import Aluno from './aluno.js';

const alunos = [
    new Aluno('João', 20, 'Engenharia'),
    new Aluno('Maria', 22, 'Medicina'),
    new Aluno('Pedro', 19, 'Direito'),
    new Aluno('Ana', 21, 'Arquitetura'),
    new Aluno('Lucas', 23, 'Administração')
];

// Exibir todos os alunos

/* for (let i = 0; i < alunos.length; i++) { 
    alunos[i].info();
}  */

/* alunos.forEach((aluno) => aluno.info());  */


// Exibir apenas os alunos com mais de 21 anos
/* for (const aluno of alunos) {
    if (aluno.idade > 21) {
        console.log(`${aluno.nome}, ${aluno.idade}: você tem mais de 21 anos!`);
    }
} */

/* for (const aluno of alunos) {
    if (aluno.idade > 21) {
        aluno.info();
    } 
}  */

// Exibir apenas os alunos do curso de Engenharia

/* for (const aluno of alunos) {
    if (aluno.curso === 'Engenharia') {
        aluno.info();
    }
}  */


// Exibir apenas os alunos cujo nome não seja Maria
/*  for (const aluno of alunos) {
    if (aluno.nome !== 'Maria') {
        console.log(`${aluno.nome} - seu nome não é Maria`);
    }
};  */


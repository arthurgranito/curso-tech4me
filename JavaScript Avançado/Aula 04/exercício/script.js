class Aluno{
    constructor(nome, nota, turma, presenca){
        this.nome = nome;
        this.nota = nota;
        this.turma = turma;
        this.presenca = presenca;
    }
}

const alunos = [new Aluno('Matias', 9.8, 'A', true), new Aluno('João', 5.4, 'B', true), new Aluno('Luisa', 8.9, 'A', false), new Aluno('Maria', 7.0, 'C', false), new Aluno('Julio', 3.8, 'A', true), new Aluno('Fábio', 2.4, 'A', false)];

const novaListaAlunos = alunos.filter(aluno => aluno.nota >= 7 && aluno.turma == 'A');

console.log('Alunos da turma A com a nota maior ou igual a 7:')

novaListaAlunos.forEach(aluno => console.log(`${aluno.nome}: ${aluno.nota}`));

const aluno = alunos.find(aluno => aluno.nome == 'Maria');


console.log('Aluno Filtrado:')
console.log(`${aluno.nome}, ${aluno.nota}, ${aluno.turma}`);

const totalPresencas = alunos.reduce((acumulador, alunoEscolhido) => {
    if (alunoEscolhido.presenca) {
        return acumulador + 1;
    } else{
        return acumulador + 0;
    }
}, 0 );

console.log('Total de presenças:' + totalPresencas);
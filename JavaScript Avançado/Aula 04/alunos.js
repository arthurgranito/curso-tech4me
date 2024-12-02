class Aluno{
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [new Aluno('Matias', 9.8), new Aluno('Matheus', 8.8), new Aluno('Arthur', 5.8), new Aluno('Davi', 4.8), new Aluno('Leo', 7.2)];

// const novaLista = alunos.filter(aluno => aluno.nota < 7);

// novaLista.forEach(aluno => console.log(aluno));

// // Find
// const aluno = alunos.find(aluno => aluno.nome == 'Leo');

// console.log(aluno);

console.log("Lista não ordenada:");
alunos.forEach(aluno => console.log(aluno));

//Ordem alfabética

// const alunosOrdenadosPorNome = alunos.sort((aluno1, aluno2) => {
//     if(aluno1.nome > aluno2.nome) //Se aluno1 vem depois que aluno2 no alfabeto
//     {
//         return 1;
//     } else{
//         return -1;
//     }
// })

const alunosOrdenadosPorNome = alunos.sort((aluno1, aluno2) => aluno1.nome.localeCompare(aluno2.nome));

console.log("Lista em ordem alfabética:");
alunosOrdenadosPorNome.forEach(aluno => console.log(aluno));

// Ordenar em ordem numérica(ordenar pela nota)
const alunosOrdenadosPorNota = alunos.sort((aluno1, aluno2) => aluno2.nota - aluno1.nota);

console.log("Lista em ordem de notas:")
alunosOrdenadosPorNota.forEach(aluno => console.log(aluno));

//Somando todas as médias e tirando uma média

const somaDasMedias = alunos.reduce((acumulador, aluno) => (acumulador + aluno.nota), 0)

const mediaDaTurma = (somaDasMedias/alunos.length).toFixed(1);

console.log(`A média dessa turma é de: ${mediaDaTurma}`);
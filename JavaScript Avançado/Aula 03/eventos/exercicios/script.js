class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const nomeAluno = document.getElementById('nome');
const notaAluno = document.getElementById('nota');
const resultado = document.getElementById('lista-alunos');
const form = document.getElementById('form');

const alunos = [];

function cadastrarNomes() {
    const aluno = new Aluno(nomeAluno.value, notaAluno.value);
    alunos.push(aluno);
    resultado.style.display = 'flex';

    resultado.innerHTML = '';
    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.innerText = `${aluno.nome} - Nota: ${aluno.nota}`;

        resultado.appendChild(li);
    });
}

form.addEventListener('submit', (evento) => {
    if (nomeAluno.value == '' || notaAluno.value == '') {
        alert('Preencha todos os campos!');
    } else {
        evento.preventDefault();
        cadastrarNomes();
        form.reset();
    }
})



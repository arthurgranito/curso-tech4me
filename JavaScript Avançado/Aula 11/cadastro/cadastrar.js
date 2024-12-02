const form = document.getElementById('form');
const nome = document.getElementById('nome');
const id = document.getElementById('id');
const media = document.getElementById('media');
const inputStatus = document.getElementById('status');
const verAlunos = document.getElementById('verAlunos');
const listaAtualizada = document.getElementById('listaCompleta');
const url = 'http://localhost:3000/alunos';

class Aluno{
    constructor(id, nome, media, status){
        this.id = id;
        this.nome = nome;
        this.media = media;
        this.status = status;
    }
}

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    if(nome.value == '' || id.value == '' || media.value == '' || inputStatus.value == ''){
        alert("Preencha todos os campos!")
    } else{
        const aluno = new Aluno(id.value, nome.value, media.value, inputStatus.value);
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(aluno)
        });
        form.reset();
    }
})









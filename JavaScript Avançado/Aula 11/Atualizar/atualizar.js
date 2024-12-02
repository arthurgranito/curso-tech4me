const atualizarAlunoTodo = document.getElementById('todo');
const fecharAbaAlunoTodo = document.getElementById('x-todo');
const abaAlunoTodo = document.getElementById('aba-todo');
const idTodo = document.getElementById('id-todo');
const nomeTodo = document.getElementById('nome-todo');
const mediaTodo = document.getElementById('media-todo');
const statusTodo = document.getElementById('status-todo');
const formTodo = document.getElementById('form-todo');
const atualizarUma = document.getElementById('uma');
const fecharAbaUma = document.getElementById('x-uma');
const abaUma = document.getElementById('aba-uma');
const propriedadeUma = document.getElementById('propriedade-escolhida');
const idUma = document.getElementById('id-uma');
const novoValor = document.getElementById('valor-novo');
const formUma = document.getElementById('form-uma');

class AlunoAtualizado {
    constructor(id, nome, media, status){
        this.id = id;
        this.nome = nome;
        this.media = media;
        this.status = status;
    }
}

atualizarUma.addEventListener('click', () => {
    abaUma.classList.remove('hidden');
})

fecharAbaUma.addEventListener('click', () => {
    abaUma.classList.add('hidden');
    formUma.reset();
})

atualizarAlunoTodo.addEventListener('click', () => {
    abaAlunoTodo.classList.remove('hidden');
})

fecharAbaAlunoTodo.addEventListener('click', () => {
    abaAlunoTodo.classList.add('hidden');
    formTodo.reset();
})

formTodo.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    if(idTodo.value == '' || nomeTodo.value == '' || mediaTodo.value == '' || statusTodo.value == ''){
        alert('Preencha todos os campos!');
    } else{
        const aluno = new AlunoAtualizado(idTodo.value, nomeTodo.value, mediaTodo.value, statusTodo.value);
        await fetch(`http://localhost:3000/alunos/${idTodo.value}`, {
            method: 'PUT',
            body: JSON.stringify(aluno)
        });
        formTodo.reset();
    }
})

formUma.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    if(propriedadeUma.value == '' || novoValor.value == ''){
        alert('Preencha todos os dados!');
    }else{
        if(propriedadeUma.value == 'nome'){
            await fetch(`http://localhost:3000/alunos/${idUma.value}`, {
                method: "PATCH",
                body: JSON.stringify({
                    nome: `${novoValor.value}`
                })
            })
        }

        if(propriedadeUma.value == 'media'){
            await fetch(`http://localhost:3000/alunos/${idUma.value}`, {
                method: "PATCH",
                body: JSON.stringify({
                    media: `${novoValor.value}`
                })
            })
        }

        if(propriedadeUma.value == 'status'){
            await fetch(`http://localhost:3000/alunos/${idUma.value}`, {
                method: "PATCH",
                body: JSON.stringify({
                    status: `${novoValor.value}`
                })
            })
        }
    }
})
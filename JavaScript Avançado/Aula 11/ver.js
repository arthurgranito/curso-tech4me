const botaoVer = document.getElementById('verAlunos');
const fecharAba = document.getElementById('fechar');
const lista = document.getElementById('lista');
const aba = document.getElementById('aba');

botaoVer.addEventListener('click', async () => {
    const promise = await fetch('http://localhost:3000/alunos');
    const response = await promise.json();
    
    if(response.length == 0){
        alert('Você precisa cadastrar um aluno!');
    } else{
        aba.classList.remove('hidden');
        response.forEach(aluno => {
            const div = document.createElement('div');
            div.classList.add('aluno');
            const pID = document.createElement('p');
            const pNome = document.createElement('p');
            const pMedia = document.createElement('p');
            const pStatus = document.createElement('p');
    
            pID.innerText = `ID: ${aluno.id}`;
            pNome.innerText = `Nome: ${aluno.nome}`;
            pMedia.innerText = `Média: ${aluno.media}`;
            pStatus.innerText = `Status: ${aluno.status}`;
    
            div.appendChild(pID);
            div.appendChild(pNome);
            div.appendChild(pMedia);
            div.appendChild(pStatus);
            lista.appendChild(div);
        })
    }
})

fecharAba.addEventListener('click', () => {
    aba.classList.add('hidden');
});

/* <div class="aluno">
<p>Nome: Arthur Granito</p>
<p>Média: 10</p>
<p>Status: Aprovado</p>
</div> */

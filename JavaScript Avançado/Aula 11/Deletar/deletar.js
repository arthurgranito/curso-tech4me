const form = document.getElementById('form');
const id =  document.getElementById('id');

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    if(id.value == ''){
        alert('Preencha com o ID!');
    } else{
        await fetch(`http://localhost:3000/alunos/${id.value}`, {
            method: "DELETE"
        })
    }
})
const botao = document.getElementById('botao');

// botao.onclick = () => alert('Mensagem enviada!');

//Elemento.addEventListener('qual o evento', função);

botao.addEventListener('click', () => alert('Mensagem enviada!'));

//Form para cadastrar nomes

const nomes = [];
const nome = document.getElementById('nome');
const botaoExibir = document.getElementById('exibir');

const adicionarNomes = () => nomes.push(nome.value);

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    adicionarNomes();
    formulario.reset();
    nome.focus();
    alert('Nome cadastrado!');
})

botaoExibir.addEventListener('click', () => alert(nomes.join(', ')));


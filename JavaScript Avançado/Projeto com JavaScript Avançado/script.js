class Produto {
    constructor(nome, quantidade, precoFinal) {
        this.nome = nome;
        this.precoFinal = precoFinal;
        this.quantidade = quantidade;
    }
}

const produtos = [];

const nome = document.getElementById('nome');
const preco = document.getElementById('preco');
const quantidade = document.getElementById('quantidade');
const formulario = document.getElementById('form');
const section = document.getElementById('lista');

const atualizarProdutos = () => {
    section.innerHTML = '';

    produtos.forEach((produto, index) => {
        const div = document.createElement('div');
        div.classList.add('produto');
        const p = document.createElement('p');
        p.innerText = `${produto.nome} - ${produto.quantidade} unidades - R$ ${produto.precoFinal}`;
        const button = document.createElement('button');
        button.innerText = 'Remover';

        button.addEventListener('click', () => removerProduto(index));

        div.appendChild(p);
        div.appendChild(button);
        section.appendChild(div);
    })
}

const removerProduto = (i) => {
    produtos.splice(i, 1);
    atualizarProdutos();
    if(produtos.length == 0){
        section.style.display = 'none';
    }
}

formulario.addEventListener('submit', (evento) => {
    if (nome.value == '' || preco.value == '' || quantidade.value == '') {
        evento.preventDefault();
        alert('Preencha os campos!');
    } else {
        evento.preventDefault();
        const precoFinal = (parseFloat(preco.value) * parseFloat(quantidade.value)).toFixed(2);
        const produto = new Produto(nome.value, quantidade.value, precoFinal);
        produtos.push(produto);
        section.style.display = 'flex';

        atualizarProdutos();

        formulario.reset();
    }
});



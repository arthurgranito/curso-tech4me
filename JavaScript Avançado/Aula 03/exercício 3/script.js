const nome = document.getElementById('nome');
const codigoProduto = document.getElementById('codigo');
const categoria = document.getElementById('categoria');
const precoBase = document.getElementById('precoBase');
const resultado = document.getElementById('resultado');

class Produto{
    constructor(nome, codigo, categoria, precoBase){
        this.nome = nome;
        this.codigo = codigo;
        this.categoria = categoria;
        this.precoBase = precoBase;
        this.precoFinal = this.calcularPrecoFinal(this.precoBase, this.categoria);
    }

    calcularPrecoFinal = (precoBase, categoria) => {
        let taxaImposto;

        if (categoria == 'Eletrônicos') {
            taxaImposto = 0.18;
        } else{
            taxaImposto = 0.12;
        }

        return precoBase + (precoBase * taxaImposto);
    }
}

const produtos = [];

function cadastrarProduto(){
    if (nome == '' || codigoProduto == '' || categoria == '' || precoBase == '') {
        alert('Preencha todos os campos!!');
    } else{
        const produto = new Produto(nome.value, codigoProduto.value, categoria.value, parseFloat(precoBase.value));

        produtos.push(produto);

        nome.value = '';
        codigoProduto.value = '';
        categoria.value = '';
        precoBase.value = '';
    }
}

function exibirProdutos(){
    resultado.innerHTML = '';
    
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.className = 'produtos';
        const pNome = document.createElement('p');
        const pCodigo = document.createElement('p');
        const pCategoria = document.createElement('p');
        const pPrecoBase = document.createElement('p');
        const pPrecoFinal = document.createElement('p');

        pNome.innerText = `Nome: ${produto.nome}`;
        pCodigo.innerText = `Código do Produto: ${produto.codigo}`;
        pCategoria.innerText = `Categoria: ${produto.categoria}`;
        pPrecoBase.innerText = `Preço Base: R$${produto.precoBase}`;
        pPrecoFinal.innerText = `Preço Final: R$${produto.precoFinal}`;

        resultado.style.display = 'flex';
        divProduto.appendChild(pNome);
        divProduto.appendChild(pCodigo);
        divProduto.appendChild(pCategoria);
        divProduto.appendChild(pPrecoBase);
        divProduto.appendChild(pPrecoFinal);

        resultado.appendChild(divProduto);
    })
}
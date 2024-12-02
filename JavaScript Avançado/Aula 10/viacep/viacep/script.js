const cep = document.getElementById('cep');
const inputRua = document.getElementById('rua');
const inputComplemento = document.getElementById('complemento');
const inputBairro = document.getElementById('bairro');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');
const formulario = document.getElementById('formulario');
const botaoLimpar = document.getElementById('limpar');

class Endereco {
    constructor(cep, rua, complemento, bairro, cidade, estado) {
        this.cep = cep;
        this.rua = rua;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(endereco => criarEndereco(endereco));
})

const criarEndereco = (endereco) => {
    const novoEndereco = new Endereco(endereco.cep, endereco.logradouro, endereco.complemento, endereco.bairro, endereco.localidade, endereco.estado);

    inputRua.value = novoEndereco.rua;
    inputComplemento.value = novoEndereco.complemento;
    inputBairro.value = novoEndereco.bairro;
    inputCidade.value = novoEndereco.cidade;
    inputEstado.value = novoEndereco.estado;
}

botaoLimpar.addEventListener('click', () => {
    formulario.reset();
})

class Endereco{
    constructor(cep, rua, complemento, bairro, cidade, estado){
        this.cep = cep;
        this.rua = rua;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    exibirDados(){
        return `Bairro: ${this.bairro}, Rua: ${this.rua}, Cidade: ${this.cidade}`;
    }
}

const url = "https://viacep.com.br/ws/25956-005/json/"
fetch(url) //buscar -> retorna uma promise
.then(response => response.json()) //then -> o que faremos com essa promise
.then(endereco => criarEndereco(endereco));

const criarEndereco = (endereco) => {
    const novoEndereco = new Endereco(endereco.cep, endereco.logradouro, endereco.complemento, endereco.bairro, endereco.localidade, endereco.uf);

    alert(novoEndereco.exibirDados());
}
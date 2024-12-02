//Classe Carro (marca, modelo, ano, valorCompra, valorAtual, cor);
const resultado = document.getElementById("resultado");
const modelo = document.getElementById('modelo');
const marca = document.getElementById('marca');
const ano = document.getElementById('ano');
const valorCompra = document.getElementById('compra');
const valorAtual = document.getElementById('valorAtual');
const cor = document.getElementById('cor');

class Carro {
    constructor(marca, modelo, ano, valorCompra, valorAtual, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valorCompra = valorCompra;
        this.valorAtual = valorAtual;
        this.cor = cor;
        this.lucroLoja = this.calcularLucro();
        this.ipva = this.calcularIPVA();
        this.licenciamento = this.calcularLicenciamento();
    }

    //Método para calcular lucro da loja (3%)
    calcularLucro = () => this.valorCompra * 0.03;

    //Método para calcular o IPVA (4% sobre o valor atual)
    calcularIPVA = () => this.valorAtual * 0.04;

    //Método para calcular o licenciamento (R$160,00 para veiculos com até 10 anos)
    calcularLicenciamento = () => {
        const anoAtual = new Date().getFullYear();

        return this.ano >= (anoAtual - 10) ? 160.00 : 0.00;

        // if(this.ano >= (anoAtual - 10)){
        //     return 160.00;
        // } else{
        //     return 0.00;
        // }
    }
}

// Criando instâncias da classe Veiculo
const carros = [];

function cadastrarCarro() {
    const carro = new Carro(marca.value, modelo.value, ano.value, valorCompra.value, valorAtual.value, cor.value);
    carros.push(carro);

    modelo.value = '';
    marca.value = '';
    ano.value = '';
    valorAtual.value = '';
    valorCompra.value = '';
    cor.value = '';
}

function exibirCarros() {
    const section = document.createElement('section');
    const veiculo = document.createElement('p');
    const valorCompra = document.createElement('p');
    const valorAtual = document.createElement('p');
    const cor = document.createElement('p');
    const lucroLoja = document.createElement('p');
    const ipva = document.createElement('p');
    const licenciamento = document.createElement('p');

    carros.forEach(carro => {
        veiculo.innerText = `Veiculo: ${carro.marca} ${carro.modelo} (${carro.ano})`;
        cor.innerText = `Cor: ${carro.cor}`;
        valorCompra.innerText = `Valor Compra: R$ ${carro.valorCompra}`;
        valorAtual.innerText = `Valor Atual: R$ ${carro.valorAtual}`;
        lucroLoja.innerText = `Lucro da Loja: R$ ${carro.lucroLoja}`;
        ipva.innerText = `IPVA: R$ ${carro.ipva}`;
        licenciamento.innerText = `Licenciamento: R$ ${carro.licenciamento}`;

        section.style.border = '1px solid black';
        section.appendChild(veiculo);
        section.appendChild(cor);
        section.appendChild(valorCompra);
        section.appendChild(valorAtual);
        section.appendChild(lucroLoja);
        section.appendChild(ipva);
        section.appendChild(licenciamento);

        resultado.appendChild(section);
    }
    )
}

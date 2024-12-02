const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const dataNascimento = document.getElementById('data');
const salarioBruto = document.getElementById('salarioBruto');
const funcionarios = [];
const resultado = document.getElementById('resultado');

class Funcionario {
    constructor(nome, cpf, dataNascimento, salarioBruto) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.salarioBruto = parseFloat(salarioBruto);
        this.inss = this.calcularINSS();
        this.irrf = this.calcularIRRF();
        this.impostoFinal = (this.calcularImpostoFinal()).toFixed(2);
        this.salarioLiquido = this.calcularSalarioLiquido();
    }

    // Método para calcular INSS
    calcularINSS = () => {
        if (this.salarioBruto <= 1100) {
            return this.salarioBruto * 0.075;
        }
        if (this.salarioBruto >= 1100.01 && this.salarioBruto <= 2200) {
            return this.salarioBruto * 0.09;
        }
        if (this.salarioBruto >= 2200.01 && this.salarioBruto <= 3300) {
            return this.salarioBruto * 0.12;
        }
        if (this.salarioBruto >= 3300.01) {
            return this.salarioBruto * 0.14;
        }
    }

    calcularIRRF = () => {
        if (this.salarioBruto <= 2500) {
            return this.salarioBruto * 0.075;
        }
        if (this.salarioBruto >= 2500.01 && this.salarioBruto <= 3500) {
            return this.salarioBruto * 0.15;
        }
        if (this.salarioBruto >= 3500.01 && this.salarioBruto <= 4500) {
            return this.salarioBruto * 0.225;
        }
        if (this.salarioBruto >= 4500.01) {
            return this.salarioBruto * 0.275;
        }
    }

    calcularImpostoFinal = () => {
        return this.inss + this.irrf;
    }

    calcularSalarioLiquido = () => {
        return this.salarioBruto - parseFloat(this.impostoFinal);
    }
}

function cadastrarFuncionario() {
    if (nome.value == '' || cpf.value == '' || dataNascimento.value == '' || salarioBruto.value == '') {
        alert('Preencha todos os campos!');
    } else {
        const funcionario = new Funcionario(nome.value, cpf.value, dataNascimento.value, salarioBruto.value);

        funcionarios.push(funcionario);

        nome.value = '';
        cpf.value = '';
        dataNascimento.value = '';
        salarioBruto.value = '';
    }
}

function exibirFuncionarios() {
    resultado.innerHTML = '';
    funcionarios.forEach(funcionario => {
        const divFuncionario = document.createElement('div');
        divFuncionario.classList.add('funcionario');
        const pNome = document.createElement('p');
        const pCPF = document.createElement('p');
        const pData = document.createElement('p');
        const pSalario = document.createElement('p');
        pNome.innerText = `Nome: ${funcionario.nome}`;
        pCPF.innerText = `CPF: ${funcionario.cpf}`;
        pData.innerText = `Data de Nascimento: ${funcionario.dataNascimento}`;
        pSalario.innerText = `Salário Líquido: R$${funcionario.salarioLiquido}`;

        resultado.style.display = 'flex';
        divFuncionario.appendChild(pNome);
        divFuncionario.appendChild(pCPF);
        divFuncionario.appendChild(pData);
        divFuncionario.appendChild(pSalario);

        resultado.appendChild(divFuncionario);
    })
}
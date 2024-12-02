const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const cpf = document.getElementById('cpf');
const form = document.getElementById('form');


class Pessoa{
    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf) {
        const cpfPadrao = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;

        return cpfPadrao.test(cpf) ? (this._cpf = cpf, alert(`Nome: ${this.nome} - Idade: ${this.idade} - CPF: ${this.cpf}`)) : alert('CPF inválido!');
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if(nome.value == '' || idade.value == '' || cpf.value == ''){
        alert('Preencha todos os campos!');
    } else{
        const pessoa = new Pessoa(nome.value, idade.value, cpf.value);
    }
    form.reset();
});




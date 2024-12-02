class Usuario {
    constructor(nome, sobrenome, email, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
    }

    get senha(){
        return this._senha;
    }

    set senha(novaSenha){
        //letra maiuscula, um simbolo, um numero, 8 caracteres
        const padraoSenha = /^(?=.*[A-Z])(?=.*[a-z])(\W_])(?=.*[0-9]).{8,}$/;
        if(padraoSenha){
            this._senha = novaSenha;
        } else{
            alert('A senha é inválida!');
        }
    }
}

const form = document.getElementById("form");
const usuarios = [];

const cadastrar = () => {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (confirmarSenha != senha) {
        alert('As senhas nao correspondem!')
    }

    const usuario = new Usuario(nome, sobrenome, email, senha);
    usuarios.push(usuario);
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    cadastrar();
    form.reset();
})

const botaoExibir = document.getElementById('exibir');

botaoExibir.addEventListener('click', () => {
    usuarios.forEach(usuario => {
        alert(`${usuario.nome} ${usuario.sobrenome} - ${usuario.email} - ${usuario.senha}`);
    })
})

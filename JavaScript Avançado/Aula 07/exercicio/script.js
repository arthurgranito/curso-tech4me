class Carro{
    constructor(modelo, ano, placa){
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
        this.estado = this.verificarEstado();
    }

    get placa() {
        return this._placa;
    }

    set placa(novaPlaca) {
        const padraoPlaca = /^[A-Z]{3}[0-9]{4}$/;
        if(padraoPlaca.test(novaPlaca)) {
            this._placa = novaPlaca;
        } else{
            console.log('Placa inválida!');
        }
    }

    verificarEstado = () => {
        const data = new Date();
        return (this.ano >= (data.getFullYear() - 2) ? 'Seminovo' : 'Usado');
    }
}

const carro = new Carro('Palio', 2010, 'ABC1234');

console.log(carro.placa);
class Carro{
    constructor(marca, modelo, placa, cor, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.cor = cor;
        this.ano = ano;
    }
}

const carros = [];

carros.push(new Carro('Volkswagen', 'Virtus', 'abc-1234', 'Azul', 2023));

carros.push(new Carro('Volkswagen', 'Nivus', 'abc-1244', 'Preto', 2022));

carros.push(new Carro('Toyota', 'Corolla', 'abc-e234', 'Branco', 2023));

carros.push(new Carro('Honda', 'Civic', 'abc-1234', 'Vermelho', 2024));

carros.push(new Carro('Audi', 'Q3', 'abc-1234', 'Azul', 2023));

carros.forEach(carro => {
    if (carro.marca == 'Volkswagen') {
        console.log(carro);
    }
});
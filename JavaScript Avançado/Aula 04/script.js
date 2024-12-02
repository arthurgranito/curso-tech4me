//For OF
const carros = ['Nivus', 'Sandero', 'Clio', 'Palio', 'Sandeiro', 'Palio', 'Palio'];

let carroPedro = 'Palio';

let novoCarroPedro = 'BMW';

for (const carro of carros) {
    if (carro == carroPedro) {
        let index = carros.indexOf(carro);
        carros[index] = novoCarroPedro;
    }
}

for (const carro of carros) {
    console.log(carro);
}

//Map
const novaLista = carros.map(carro => 'Carro:' + carro);

novaLista.forEach(carro => console.log(carro));

// Filter 
const novaListaFiltrada = carros.filter(carro => carro == 'Palio');

novaListaFiltrada.forEach(carro => console.log(carro));
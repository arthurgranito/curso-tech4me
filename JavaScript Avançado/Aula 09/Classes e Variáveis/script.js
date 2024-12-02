//Escopo = aonde a variável foi declarada

var nome = 'Matheus' // Variável de escopo global
console.log(nome);

function name() {
    nome = 'Outro nome';

    var outroNome = 'Fábio'; //Escopo dentro da função
}

//Variáveis

//Variável do tipo var possui escopo global e pode ser redeclarada
var nome = 'Matias';
console.log(nome);

//Const não pode ser redeclarado e não pode ser alterado o valor inicial
const numero = 10;

console.log(numero);


//Let, o let também não pode ser redeclarado e possui nomes unicos

let escola = 'CESO';

let escola2 = 'Tech4me';

function name() {
    let escola = this.escola;
}

//Classes
class Pizza{
    constructor(tamanho, sabor, valor){
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.valor = valor;
    }

    get tamanho(){
        return this._tamanho;
    }

    set tamanho(tamanho){
        if(tamanho == 'P' || tamanho == 'M' || tamanho == 'G'){
            this._tamanho = tamanho;
        } else{
            console.log('Tamanho inválido');
        }
    }

    descricao(){
        return `Pizza: Sabor: ${this.sabor}, Tamanho: ${this.tamanho}, Valor: R$${this.valor}`
    }
}

const pizza = new Pizza('P', 'Frango com catupiry', 35.99);

console.log(pizza.descricao());

const outraPizza = new Pizza('GG', 'Calabresa', 39.80);

const objetoPizza = {
    tamanho: "GG",
    sabor: "Calabresa",
    valor: 38.80
}

const textoJson = JSON.stringify(objetoPizza);

const texto = '{"tamanho":"GG","sabor":"Calabresa","valor":38.8}';

const novoObjeto = JSON.parse(texto);
console.log(novoObjeto);
console.log(textoJson);

const novaPizza = new Pizza(novoObjeto.tamanho, novoObjeto.sabor, novoObjeto.valor);

console.log(novaPizza.descricao());
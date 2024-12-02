//String literals ou Template Strings

const texto = `Isso é um texto que permite inserção de expressões.`
const soma = `Soma: ${10 + 10}`;

console.log(soma);

// cumprimento = Tenha uma boa Tarde(se a hora for antes das 18h) noite(Se a hora for depois das 18h)

const data = new Date();

const verHora = () => {
    if(data.getHours() < 18){
        return 'tarde!';
    } else{
        return 'noite!';
    }
}

const cumprimento = `Tenha uma boa ${verHora()}`;

console.log(cumprimento);


//Operador Ternário ? :
const cumprimento2 = `Tenha uma boa ${data.getHours() < 18 ? 'tarde!' : 'noite!'}`;

console.log(cumprimento2);
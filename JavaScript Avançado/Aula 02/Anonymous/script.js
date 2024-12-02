const funcao1 = function() {
    console.log('Olá!');
}

const funcao2 = function() {
    console.log('Tchau!');
}

const listaDeFuncoes = [funcao1, funcao2];

for (let i = 0; i < listaDeFuncoes.length; i++) {
    listaDeFuncoes[i]();
}


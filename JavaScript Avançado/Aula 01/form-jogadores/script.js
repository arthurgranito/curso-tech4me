class Jogador {
    constructor(nome, posicao, imagem) {
        this.nome = nome;
        this.posicao = posicao;
        this.imagem = imagem;
    }
}

const jogadores = [];

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let posicao = document.getElementById('posicao').value;
    let imagem = document.getElementById('imagem').value;

    const jogador = new Jogador(nome, posicao, imagem);

    jogadores.push(jogador);

    document.getElementById('playerForm').reset();
}

function exibir(){
    let posicaoEscolhida = document.getElementById('exibirPosicao').value;
    const jogadoresExibidos = document.getElementById('playerCards');
    const jogadoresEscolhidos = [];
    jogadoresExibidos.innerText = '';

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].posicao == posicaoEscolhida) {
            jogadoresEscolhidos.push(jogadores[i]);
        }
    }

    for (let i = 0; i < jogadoresEscolhidos.length; i++) {
        const playerCard = document.createElement('div');
        const imagemCard = document.createElement('img');
        const nomeCard = document.createElement('h3');
        playerCard.className = 'player-card';

        nomeCard.innerText = jogadoresEscolhidos[i].nome;
        imagemCard.src = jogadoresEscolhidos[i].imagem;
        imagemCard.alt = 'Foto Jogador';

        playerCard.appendChild(imagemCard);
        playerCard.appendChild(nomeCard);

        jogadoresExibidos.appendChild(playerCard);
    }
}
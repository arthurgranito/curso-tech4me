const tempo = 5 * 60; //300
let tempoRestante = tempo;

const relogio = document.getElementById('cronometro');

const atualizarRelogio = function() {
    const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
    const segundos = String(tempoRestante % 60).padStart(2, '0');

    relogio.innerText = `${minutos}:${segundos}`;

    if (tempoRestante > 0) {
        tempoRestante--;
    }
}

setInterval(atualizarRelogio, 1000);
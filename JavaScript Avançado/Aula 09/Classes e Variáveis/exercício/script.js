const relogioMinutos = document.getElementById('minutos');
const relogioSegundos = document.getElementById('segundos');
const main = document.getElementById('main');
const texto = document.getElementById('promocao');

const tempo = 0.05 * 60;
let tempoRestante = tempo;

const atualizarRelogio = function(){
    const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
    const segundos = String(tempoRestante % 60).padStart(2, '0');

    relogioMinutos.innerText = `${minutos}`;
    relogioSegundos.innerText = `${segundos}`;

    if(tempoRestante > 0){
        texto.style.display = 'none';
        tempoRestante--;
    } else{
        main.style.display = 'none';
        texto.style.display = 'flex';
    }
}

setInterval(atualizarRelogio, 1000);
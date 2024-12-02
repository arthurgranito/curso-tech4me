const atualizarRelogio = function() {
    const relogio = document.getElementById('relogio');
    const horario = new Date();
    const horas = String(horario.getHours()).padStart(2, '0');
    const minutos = String(horario.getMinutes()).padStart(2, '0');
    const segundos = String(horario.getSeconds()).padStart(2, '0');

    relogio.innerText = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);

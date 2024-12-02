document.getElementById('iniciar').addEventListener('click', () => {
   setTimeout(() => {
        const dados = `Dados recebidos do servidor: ${new Date().toLocaleTimeString()}`;
        document.getElementById('resultado').innerText = dados;
   }, 5000); 
})


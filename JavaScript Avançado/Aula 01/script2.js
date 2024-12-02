const titulo = document.createElement('h1');

titulo.innerText = 'Ranking';

const divs = document.getElementsByClassName('time');

document.body.insertBefore(titulo, divs[0]);


for (let i = 0; i < divs.length; i++) {
    const item = divs[i];

    item.innerText = `${i + 1}° ${item.innerText}`
}


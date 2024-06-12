const dialogue = [
    "Era uma vez...",
    "Um jovem que estava perdido",
    "Mas no meio de tamanha desventura, encontrou abrigo",
    "Encontrou alguém em quem ele podia confiar suas maiores alegrias",
    "Mas também seus maiores receios",
    "Alguém em quem ele podia se abrigar",
    "Mas que poderia servir de abrigo também",
    "Foi aí que ele se encontrou",
    "Mesmo sem um mapa, agora tinha um rumo",
    "Navegar nas águas do teu oceano",
    "Até encontrar meu eterno repouso"
];

let index = 0;

function displayDialogue() {
    if (index < dialogue.length) {
        document.getElementById('dialogue').style.opacity = 1;
        document.getElementById('dialogue').innerText = dialogue[index];
        index++;
    } else {
        document.getElementById('dialogue').innerHTML = "<a href='ocean.html'>Eu te amo muito</a>";
        clearInterval(intervalId); // Parar a exibição do diálogo

    }
}

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').style.display = 'none'; // Esconder o botão "Começar"
    intervalId = setInterval(displayDialogue, 3500); // Muda o diálogo a cada 3 segundos
});

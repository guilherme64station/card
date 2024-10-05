console.log("Script carregado");

function revealcard(cardId) {
    const card = document.getElementById(cardId);
    const cardImage = card.querySelector('.cardImage'); // Obtém a imagem dentro do card

    // Gera um número aleatório entre 1 e 3
    const randomNumber = Math.floor(Math.random() * 8) + 1; //função aleatório
    cardImage.src = `img/image${randomNumber}.jpg`; // Verifique se esse caminho está correto
    cardImage.style.display = 'block'; // Torna a imagem visível

    // Atualiza o texto do card
    card.textContent = ''; // Limpa o texto antes de mostrar a imagem
    card.appendChild(cardImage); // Adiciona a imagem ao card
}

// Atribuindo eventos de clique às cartas
document.getElementById('card1').addEventListener('click', function() {
    revealcard('card1');
});

document.getElementById('card2').addEventListener('click', function() {
    revealcard('card2');
});

document.getElementById('card3').addEventListener('click', function() {
    revealcard('card3');
});

// Função para alterar o status de um jogo
function alterarStatus(id){
    // Obtém o elemento do jogo clicado usando o ID fornecido
    let gameClicado = document.getElementById(`game-${id}`);

    // Seleciona a imagem e o botão dentro do elemento do jogo
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Verifica se o jogo já está alugado
    if(imagem.classList.contains('dashboard__item__img--rented')){
        // Se estiver alugado, remove a classe de alugado da imagem
        imagem.classList.remove('dashboard__item__img--rented');
        // Muda o texto do botão para "Alugar"
        botao.textContent = 'Alugar';
        // Remove a classe de devolução do botão
        botao.classList.remove('dashboard__item__button--return');
    } else {
        // Se não estiver alugado, adiciona a classe de alugado à imagem
        imagem.classList.add('dashboard__item__img--rented');
        // Muda o texto do botão para "Devolver"
        botao.textContent = 'Devolver';
        // Adiciona a classe de devolução ao botão
        botao.classList.add('dashboard__item__button--return');
    }
}
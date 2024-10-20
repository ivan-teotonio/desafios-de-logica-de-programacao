let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    
    let nomeNormalizado = nome.value.trim().toLowerCase();

    // Este trecho de código verifica duas condições antes de adicionar um novo nome à lista de amigos:

    // 1. Verifica se o nome já existe na lista (ignorando maiúsculas/minúsculas)
    // O método 'some' verifica se pelo menos um elemento do array satisfaz a condição
    // Neste caso, ele verifica se já existe um nome igual (ignorando maiúsculas/minúsculas)
    if(amigos.some(amigo => amigo.toLowerCase() === nomeNormalizado)){
        alert('Nome já adicionado');
        return;
    } 
    // 2. Verifica se o nome está vazio após remover espaços em branco
    else if(nomeNormalizado === ''){
        alert('Nome não pode ser vazio');
        return;
    }

    // Se passar por ambas as verificações, o código continuará e adicionará o nome à lista

    amigos.push(nome.value.trim());

    if (listaAmigos.textContent.trim() === '') {
        // Se estiver vazia, adiciona o nome sem vírgula
        listaAmigos.textContent += nome.value.trim();
    } else {
        // Se já houver nomes, adiciona uma vírgula antes do novo nome
        listaAmigos.textContent += ', ' + nome.value.trim();
    }

    nome.value = '';
}

function sortear(){
    // Verifica se há pelo menos 3 amigos na lista
    if (amigos.length < 3) {
        alert('É necessário ter pelo menos 3 amigos para realizar o sorteio.');
        return;
    }

    // Embaralha a lista de amigos
    embaralha(amigos);

    // Obtém o elemento onde será exibido o resultado do sorteio
    let sorteio = document.getElementById('lista-sorteio');

    // Limpa o conteúdo anterior do sorteio
    sorteio.innerHTML = '';

    // Percorre a lista de amigos
    for(let i = 0; i < amigos.length; i++){
        if(i === amigos.length - 1){
            // Se for o último amigo da lista, ele tira o primeiro
            sorteio.innerHTML += `<li>${amigos[i]} --> ${amigos[0]}</li>`;
        }else{
            // Caso contrário, cada amigo tira o próximo da lista
            sorteio.innerHTML += `<li>${amigos[i]} --> ${amigos[i + 1]}</li>`;
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
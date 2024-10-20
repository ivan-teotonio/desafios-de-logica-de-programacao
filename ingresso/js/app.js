
function comprar(){
    
    tipo = document.getElementById('tipo-ingresso').value;
    qtd = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista'){
        comprarPista(qtd);
    }else if(tipo == 'superior'){
        comprarSuperior(qtd);
    }else if(tipo == 'inferior'){
        comprarInferior(qtd);
    }
    

    
    

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade insuficiente');
    }else{
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }

    document.getElementById('qtd').value = '';
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade insuficiente');
    }else{
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade insuficiente');
    }else{
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}


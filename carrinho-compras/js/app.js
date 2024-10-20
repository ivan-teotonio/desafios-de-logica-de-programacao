let totalGeral;
limpar();

function adicionar(){

    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);
    nomeProduto = produto.split('-')[0];
    valorUnitario = produto.split('R$')[1];

    let precoTotal = valorUnitario * quantidade;

    totalGeral += precoTotal;

    let listaProdutos = document.getElementById('lista-produtos');

    listaProdutos.innerHTML +=`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
          <span class="texto-azul">R$${valorUnitario}</span>
          </section>`;

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = 0;

}

function limpar(){

    totalGeral = 0;

    let listaProdutos = document.getElementById('lista-produtos').innerHTML = '';

    let totalCarrinho = document.getElementById('valor-total').textContent = 'R$ 0';


}


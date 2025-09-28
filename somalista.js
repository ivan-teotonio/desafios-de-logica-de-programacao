// Somalista – Peça ao usuário para digitar 5 números e mostre a soma deles.

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let soma =0;
// let lista = 0;
// let contador = 0;

// function pedirNumero(){
//     if(contador < 5){
//         //pedir um numero ao usuario
//         readline.question(`Digite o número ${contador} número: `,(numero) => {
//             //converter o numero para numero
//             let n = Number(numero);
//             //verificar se o numero é valido
//             if(!isNaN(n)){
//                 //adicionar o numero na lista
//                 lista.push(n);
//                 //somar o numero na soma
//                 soma += n;
//                 //incrementar o contador
//                 contador++;
//             }else{
//                 console.log("Por favor, digite um número válido.");
//             }
//             //recursividade
//             pedirNumero();
//         })
//     }else{
//         //mostrar os numeros digitados
//         console.log(`Números: digitados ${lista}`)
//         //mostrar a soma
//         console.log(`Soma: ${soma}`)
//         //fechar o readline
//         readline.close();
//     }
// }
// pedirNumero();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//variaveis
let soma = 0;
let lista = [];
let contador = 0;

//função
function pedirNumero() {

    //condição para verificar se o contador é menor que 5
    if(contador < 5){
        //pedir um numero ao usuario
        Readline.question(`Digite o contador ${contador + 1}: número `,(numero) => {
            //converter o numero para numero
            let n = Number(numero);
            //verificar se o numero é valido
            if(!isNaN(n)){
                //adicionar o numero na lista
                lista.push(n);
                //somar o numero na soma
                soma += n; 
                //incrementar o contador
                contador++;
            }else{
                //mostrar mensagem de erro
                console.log("Por favor, digite um número válido.");
            }
            //recursividade
            pedirNumero();    
        })
    }else{
        //mostrar os numeros digitados
        console.log(`Números digitados: ${lista.join(', ')}`)
        //mostrar a soma
        console.log(`Soma: ${soma}`)
        //fechar o readline
        readline.close();
    }

}
//chamar a função
pedirNumero();


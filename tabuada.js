// Tabuada – Peça um número ao usuário e mostre a tabuada dele de 1 a 10.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', (numero) => {
    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    readline.close();
});


function parOrImpar(numero: number): string {
    if (numero % 2 === 0) {
        return `O número ${numero} é par`;
    }
       return `O número ${numero} é ímpar`
}

function parOrImpar2(numero: number): string {
    return numero % 2 === 0 ? `O número ${numero} é par`
                            : `O número ${numero} é ímpar`
}

console.log(parOrImpar2(56970))
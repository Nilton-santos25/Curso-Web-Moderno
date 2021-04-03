//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {  //funcao anônima
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const multiplicacao = (a, b) => {
    return a * b
}

console.log(multiplicacao(2, 4))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('CaracaMlk!!!')
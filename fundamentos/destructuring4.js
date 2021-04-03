function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] // se o minimo for maior que o maximo, inverta a variável
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor arredonda para baixo, ceil para cima
}

console.log(rand ([50, 40])) 
console.log(rand([992])) //passando apenas o minimo
console.log(rand([, 10])) //passando apenas o máximo
console.log(rand([])) //passando um array vazio, assumindo os valores padrao 0 e 1000
console.log(rand()) //erro pois esta desestruturando de algo undefined
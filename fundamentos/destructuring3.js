function rand({ min=0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955 })) // pega o valor padrao definido no máx = 1000
console.log(rand({})) //navega entre 0 e mil que foram definidos na funcao 
console.log(rand()) // erro pois não tem atributos definidos
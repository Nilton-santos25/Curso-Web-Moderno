const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //tirando os números quebrados
console.log(media.toString()) //transforma inteiro em string 
console.log(media.toString(2)) //transforma inteiro em binario 
console.log(typeof media) // tipo da variável ou do dado
console.log(typeof Number) // função

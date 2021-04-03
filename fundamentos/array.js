const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 //adicionar no array
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste") //adiciona itens no array
console.log(valores)

console.log(valores.pop()) //deleta a última posição do array
delete valores[0] //apaga o valor da posição desejava
console.log(valores)

console.log(typeof valores)
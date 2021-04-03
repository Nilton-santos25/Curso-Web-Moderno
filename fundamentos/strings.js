const escola = 'FAFRAM'

console.log(escola.charAt(4))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3))//pega o codigo do caracter na tabela ASCII
console.log(escola.indexOf('F')) //verifica se existe a letra na variavél se sim exibe o 0 se nao -1

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Faculdade ".concat(escola).concat("!")) //concatenando uma estring
console.log("Faculdade " + escola + "!")
console.log(escola.replace('A', 'I')) //SUBSTITUI O A POR I

console.log('Nilton,Maria,Pedro'.split(',')) //transformando um um array
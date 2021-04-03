let contador = 1
while(contador <= 10) {
    console.log(`contador while= ${contador}`)
    contador ++
}

console.log('====== fim while ======')

for (let i = 1; i <= 10; i++) {
    console.log(`contador for = ${i}`)
}

console.log('====== fim for =======')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i=0; i < notas.length; i++) {
    console.log(`notas ${i} = ${notas[i]}`)
}

console.log(notas)
console.log('percorrendo as notas de um array')
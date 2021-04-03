function soBoaNoticia(nota) {
    if(nota >=7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.8)

function seForVerdadeEuFalo(valor) {
    if(valor) { //apenas executa se o valor for verdadeiro
        console.log('É verdade.... '+ valor)
    }
}

seForVerdadeEuFalo() //undefined = falso
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) //falso
seForVerdadeEuFalo('') //falso
seForVerdadeEuFalo(0)//falso
seForVerdadeEuFalo(-1) //verdadeiro
seForVerdadeEuFalo(' ')//verdadeiro
seForVerdadeEuFalo('?')//verdadeiro
seForVerdadeEuFalo([])//verdadeiro
seForVerdadeEuFalo([1, 2])//verdadeiro  
seForVerdadeEuFalo({})//verdadeiro
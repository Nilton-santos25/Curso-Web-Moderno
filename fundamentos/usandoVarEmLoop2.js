const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })

}

funcs[2]()
funcs[8]()

/* mostra o numero 10 pois a chamada da funcao está fora
do escopo */
// novo recurso do Es2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tirando de dentro do objeto o atributo nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/*const { conta: { ag, num } } = pessoa
console.log(ag, num) 

ERRO problema pois está acessando algo que não é objeto 
pois está nullo e indefinido 
*/

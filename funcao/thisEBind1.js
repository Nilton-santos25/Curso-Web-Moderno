const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //acessando saudacao do objeto pessoa
        // console.log(saudacao) sem o this irá dar um erro
    }
}

pessoa.falar()
const falar = pessoa.falar //armazenando a função em uma variável
falar() // conflito entre paradigmas: funcional e O.O

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000 ) //a cada 1 segundo a função anonima será disparada1
}

new Pessoa
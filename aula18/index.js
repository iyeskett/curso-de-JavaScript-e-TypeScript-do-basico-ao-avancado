function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Felipe', 'Mello', 20);

console.log(pessoa1);

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Marta',
    idade: 23,

    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
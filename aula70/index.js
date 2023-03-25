// String literal: '' "" ``
// Array literal: []
// Número literal: 123
// Função literal: Function

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Mello'
};


const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);
console.log();

const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Mello';
pessoa1.idade = 21;
pessoa1.falarNome = function () {
    return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa, pessoa1);
console.log();

delete pessoa1.nome;
console.log(pessoa1);
console.log();

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

console.log();
console.log('*************************');
console.log();

// *********************************

// Factory functions / Constructor functions / Classes

// Factory functions
function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criarPessoa('Felipe', 'Mello');
console.log(p1.nomeCompleto);

console.log();
console.log('*************************');
console.log();

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this);
}

// {} <- this -> this
const p2 = new Pessoa('Felipe', 'Mello');
Object.freeze(p2);
p2.nome = 'Teste';
const p3 = new Pessoa('Maria', 'Marina');
console.log(p2);
console.log(p3);

// const p3 = {};
// p2.nome = 'Felipe';

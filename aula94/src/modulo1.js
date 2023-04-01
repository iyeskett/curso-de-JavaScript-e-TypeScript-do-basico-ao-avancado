const nome = 'Felipe';
const sobrenome = 'Mello';
const idade = 21;
const cpf = '111.111.111-11';

function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export default (x, y) => x * y;

export { nome, sobrenome, idade, soma }
// export {nome as default, sobrenome, idade, soma}

// export { nome as nome2, sobrenome, idade, soma };
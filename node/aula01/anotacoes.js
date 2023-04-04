// ****** Exemplo de export ******

const nome = 'Felipe';
const sobrenome = 'Mello';

const falarNome = ()=> `${nome} ${sobrenome}`;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falarNome = falarNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falarNome = falarNome;
this.qualquerCoisa = 'O que eu quiser exportar';

// ****** Exemplo de import ******
const {nome, sobrenome, falarNome} = require('./mod1');

console.log(nome, sobrenome);
console.log(falarNome());

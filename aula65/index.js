// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
console.log();

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasComMais50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
const pessoasComNomeFinalA = pessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'));

console.log(`Nome com mais de 5 letras:`);
for (const pessoa of pessoasComNomeGrande) {
    console.log(pessoa.nome)
}
console.log();

console.log(`Pessoas com mais de 50 anos:`);
for (const pessoa of pessoasComMais50Anos) {
    console.log(pessoa.nome, pessoa.idade)
}
console.log();

console.log(`Nome terminando com A:`);
for (const pessoa of pessoasComNomeFinalA) {
    console.log(pessoa.nome)
}
console.log();

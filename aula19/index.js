// Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados
// Referência (mutável) - array, object, function - Passados por referência

const a = {
    nome: 'Felipe',
    sobrenome: 'Mello'
};

const b = a;

b.nome = 'Felipe';
console.log(a);
console.log(b);
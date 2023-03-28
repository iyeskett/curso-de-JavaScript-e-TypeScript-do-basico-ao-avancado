/*
Object.values
Object.entries
Object.assing(des, any)
Object.getOwnPropertyDescriptor(o 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
Object.freeze(produto);
produto.nome = 'Não vai funcionar por causa do freeze'
// const caneca = {...produto};
// const caneca = Object.assign({}, produto, {material: 'Porcelana'});
const caneca = {nome: produto.nome, preco: produto.preco, material: 'porcelana'};
Object.defineProperty(caneca, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer coisa'
});

caneca.nome = 'Caneca';

console.log(produto);
console.log(caneca);
console.log(Object.keys(produto));
console.log();

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));
console.log();

console.log(Object.values(caneca));
console.log();
console.log(Object.entries(caneca));
console.log();

for(let [chave, valor] of Object.entries(caneca)){
    console.log(chave, valor);
}

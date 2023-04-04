const Cachorro = require('./z/mod2');

console.log(Cachorro);
const cachorro = new Cachorro('Dog');

cachorro.latir();


const path = require('path');

console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));
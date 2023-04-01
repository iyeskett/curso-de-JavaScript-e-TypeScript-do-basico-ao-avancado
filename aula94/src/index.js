import Padrao, { nome, sobrenome, idade, soma } from './modulo1';
// import {nome, sobrenome, idade, soma} from './modulo1';
import * as MeuModulo from './modulo1';
console.log(MeuModulo);


const p1 = new Padrao(nome, sobrenome);
console.log(p1);

// console.log(MeuModulo.nome, MeuModulo.sobrenome, MeuModulo.idade);
// console.log(MeuModulo.soma(5,5));
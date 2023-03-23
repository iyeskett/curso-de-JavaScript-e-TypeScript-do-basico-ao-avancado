const frutas = ['Pera', 'Maçâ', 'Uva'];

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Mello',
    idade: 21
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}


// for (let i in frutas) {
//     console.log(`${Number(i) + 1}:`, frutas[i]);
// }

// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }
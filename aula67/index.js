// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);

const pares = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

const dobro = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(total);
console.log();
console.log(pares);
console.log();
console.log(dobro);
console.log();


// Retorne a pessoa mais velha 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoaMaisVelha = pessoas.reduce((acumulador, obj) => {
    if(obj.idade > acumulador.idade) acumulador = obj;
    return acumulador;
});

console.log(pessoaMaisVelha);
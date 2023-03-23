let a = 'a'; // b
let b = 'b'; // c
let c = 'c'; // a

[a, b, c] = [b, c, a];

console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// ... rest, ... spread
// const [um, dois, tres, ...resto] = numeros;

const [um, , tres, , cinco, , sete] = numeros; // pular valores

console.log(um, tres, cinco, sete);
// console.log(resto);
let num1 = 1500;
let num2 = 2.5;
let num3 = 10.8364384863254;
let num4 = 'Olá';
let num5 = 0.7;
let num6 = 0.1;

console.log(num1.toString()+ num2);
console.log(num1.toString(2)); // binario
console.log(num3.toFixed(2)); // casas decimais
console.log(Number.isInteger(num2)); // verificar se número é inteiro
console.log(Number.isNaN(num1 * num4)); // Verificar se conta é inválida

num5 += num6;
num5 += num6;
num5 += num6; // Mostra 0.9999999999
num5 = Number(num5.toFixed(2)); // Corrige mostrando 1
console.log(num5);
console.log(Number.isInteger(num5));

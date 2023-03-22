const nome = 'Felipe';
const sobrenome = 'Mello';
const nomeCompleto = `${nome} ${sobrenome}`;
const peso = 80;
const alturaEmM = 1.83;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2002;
let idade = 2023 - anoNascimento;




console.log(`${nomeCompleto}, tem ${idade}, pesa ${peso} kg \ntem ${alturaEmM} de altura e seu IMC é de ${imc}    
        `);
const alunos = ['Maria', 'Joao', 'Jose'];

alunos.unshift('First');

alunos.push('Teste');
console.log(alunos);
alunos.pop();

console.log(alunos);
console.log(alunos[3]);
console.log(alunos.length);

const removido = alunos.shift();
console.log(`${removido} foi removido`);
console.log(alunos);

delete alunos[1];
console.log(alunos);

console.log(alunos.slice(0,2));

console.log(alunos instanceof(Array));
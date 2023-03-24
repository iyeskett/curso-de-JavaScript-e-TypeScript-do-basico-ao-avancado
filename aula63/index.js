const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

// pop
// const removidos = nomes.splice(-1, Number.MAX_VALUE);

// shift
// const removidos = nomes.splice(0,1);

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', 'Miranda');

//unshift
// nomes.splice(0,0, 'Luiz', 'Otavio');

nomes.splice(2, 0, 'Luiz', 'Otavio');

console.log(nomes);


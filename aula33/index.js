const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Mello',
    idade: 21,
    endereco: {
        rua: 'tiburcio de sousa',
        numero: 1180
    }
};

const {nome: teste = '', sobrenome, endereco: {rua, ...restoEndereco }, ...resto} = pessoa;
console.log(teste, sobrenome, resto, rua,  restoEndereco);
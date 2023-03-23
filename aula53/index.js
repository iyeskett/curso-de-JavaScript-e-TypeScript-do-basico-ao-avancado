function retornarFuncao() {
    const nome = 'Felipe';
    return () => {
        return nome;
    };
}

const funcao = retornarFuncao();
console.dir(funcao);
// IIFE -> Immediately invoked function expression
((idade, peso, altura) => {
    const sobrenome = 'Mello';
    function criarNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falarNome() {
        console.log(criarNome('Felipe'));
    }

    falarNome();
    console.log(idade, peso, altura);

})(21, 76, 1.85);

const nome = 'Maria';
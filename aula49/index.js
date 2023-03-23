function falarOi() {
    console.log('Oi!');
}

const souUmDado = () => {
    console.log('Sou um dado');
}

souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

const obj = {
    falar(){
        console.log('Estou falando...');
    }
};

obj.falar();
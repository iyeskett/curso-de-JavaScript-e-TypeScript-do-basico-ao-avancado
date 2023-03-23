
// arguments que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        console.log(argumento);
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao2(['Felipe', 'Mello', 20]);

const conta  = function(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        console.log(numero);
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }
    console.log(operador, acumulador, numeros);
};

conta('+', 0, 20, 30, 40, 50);
function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(2, 3);
console.log(resultado);


/* É igual a 
*    const raiz = function (n) {
*        return n ** 0.5;
*    };
*/
const raiz = n => n ** 0.5;

console.log(raiz(9));
// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: () => {
            return estoque
        }, // valor
        writable: false, // pode alterar 
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        }
    })
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 50000;
console.log(p1);

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

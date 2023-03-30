const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 0 && valor <= 100) this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    carro.acelerar();
}

console.log(carro);

// for(let i =0; i <= 200; i++){
//     carro.freiar();
// }

carro.velocidade = 2000;
console.log(carro.velocidade);
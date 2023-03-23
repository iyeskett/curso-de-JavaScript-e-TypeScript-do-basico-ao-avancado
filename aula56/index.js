function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}.`
        },

        altura,
        peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criarPessoa('Felipe', 'Mello', 1.85, 74);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Felipe Silva Mello';
console.log(p1.nomeCompleto);
console.log(p1.fala('dotnet'));


const p2 = criarPessoa('Maria', 'Marina', 1.6, 42);
console.log(p2.imc);



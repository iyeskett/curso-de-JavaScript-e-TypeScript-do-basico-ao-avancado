// Funcao construtora -> objetos
// Funcao fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Atributos ou métodos privados
    const ID = 1;
    const metodoInterno = () => {
        console.log('Pessoa válida');
    };

    // Atributos ou métodos públicos
    this.metodo = () => {
        console.log(`${this.nome}: Sou um método`);
        metodoInterno();
    };
}

const pessoa1 = new Pessoa('Felipe', 'Mello');
const pessoa2 = new Pessoa('Maria', 'Marina');

pessoa1.metodo();
pessoa2.metodo();

console.log(pessoa1.nome);
console.log(pessoa2.nome);

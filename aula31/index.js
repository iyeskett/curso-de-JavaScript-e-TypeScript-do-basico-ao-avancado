const verdadeira = true;


//let tem escopo de bloco {... bloco}
// var só tem escopo de função

let nome = 'Felipe';
var nome1 = 'Felipe';

var nome1 = 'Teste';

if (verdadeira) {
    let nome = 'Samara';
    console.log(nome, nome1);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome1);
    }

}
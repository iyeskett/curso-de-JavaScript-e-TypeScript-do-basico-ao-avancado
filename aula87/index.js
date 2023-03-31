function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('ERRO'))
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });


}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    // Promise.race traz o primeiro valor
    // 'Primeiro valor',
    esperar('Promise 1', rand(1, 5)),
    esperar('Promise 2', rand(1, 5)),
    esperar('Promise 3', rand(1, 5)),
    // esperar(1000, rand(1, 5)),
    // 'Outro valor'
];


Promise.all(promises) // Retorna todas as promises
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (e) {
        console.log(e);
    });

Promise.race(promises) // Retorna a primeira promise a ser finalizada
    .then(valor => {
        console.log(valor);
    })
    .catch(e => {
        console.log(e);
    });

function baixarPagina() {
    const emCache = true;

    if (emCache)
        // return Promise.resolve('Página em cache'); // Cai no then
        return Promise.reject('Página em cache'); // Cai no catch
    else
        return esperar('Baixei a página', 3000);
}

baixarPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO:',e));

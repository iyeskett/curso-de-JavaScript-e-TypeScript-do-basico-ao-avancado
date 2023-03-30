function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });


}

esperar('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperar('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperar(2222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Último a ser exibido');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });

console.log('Exibido antes qualquer promisse');
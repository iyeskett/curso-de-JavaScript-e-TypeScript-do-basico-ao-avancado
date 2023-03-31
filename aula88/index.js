function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('CAI NO ERRO'))
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperar('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperar('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperar('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase;
//     })
//     .then(fase => console.log(`Terminamos na fase ${fase}`))
//     .catch(e => console.log(e));

async function executa() {
    try {
        let fase;
        fase = esperar('Fase 1', 1000);
        console.log(fase);

        setTimeout(function() {
            console.log(`Essa promise estava pendente`, fase);
        }, 1100);

        fase = await esperar('Fase 2', 4000);
        console.log(fase);
        fase = await esperar('Fase 3', 5000);
        console.log(fase);

        console.log(`Terminamos na ${fase}`);
    } catch (error) {
        console.log(error);
    }

}

executa();
console.log('teste');

/*
    pending -> pendente
    fullfilled -> resolvida
    reject -> rejeitada
*/

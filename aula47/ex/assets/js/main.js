const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

})

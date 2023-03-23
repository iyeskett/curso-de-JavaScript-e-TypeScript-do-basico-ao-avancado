function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'];

    return diasSemana[diaSemana];

}

function getNomeMes(numeroMes) {
    const meses = ['Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'];

    return meses[numeroMes];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatarData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = getNomeMes(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const diaSemana = data.getDay();
    const diaSemanaTexto = getDiaSemanaTexto(diaSemana);


    return `${diaSemanaTexto}, ${dia} de ${mes} de ${ano} - ${hora}:${minutos}`;

}


const textoHtml = document.querySelector('#texto');

const data = new Date();

const dataFormatada = formatarData(data);

console.log(dataFormatada);
textoHtml.innerHTML = dataFormatada;

// Método mais prático
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
textoHtml.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full', timeStyle: 'short' });
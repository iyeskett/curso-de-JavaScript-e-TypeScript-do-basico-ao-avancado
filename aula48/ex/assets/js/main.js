const inputTarefa = document.querySelector('.tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerHTML = textoInput;
    limparInput();
    tarefas.appendChild(li);
    criarBotaoApagar(li);
}

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function tarefaValida(inputTexto) {
    if (!inputTexto || inputTexto.trim() === '') return false;
    return true;
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.slice(0, -6).trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);

}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }

}

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (tarefaValida(inputTarefa.value)) {
            criarTarefa(inputTarefa.value);
            salvarTarefas();
            return;
        }
        limparInput();
    }
})

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btn-tarefa')) {
        if (tarefaValida(inputTarefa.value)) {
            criarTarefa(inputTarefa.value);
            salvarTarefas();
            return
        }

        limparInput();
    }

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }

});

adicionarTarefasSalvas();

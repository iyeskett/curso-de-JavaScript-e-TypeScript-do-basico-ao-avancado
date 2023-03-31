// fetch('pessoas.json')
// .then(response => response.json())
// .then(json => carregarElementosNaPagina(json))
// .catch();

axios('pessoas.json')
.then(response => carregarElementosNaPagina(response.data))
.catch(e => console.log(e));

function carregarElementosNaPagina(json){
  const table = document.createElement('table');

  for(let pessoa of json){
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}

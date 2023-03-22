const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

const texto = document.getElementById('texto');
texto.innerHTML = `<p> Raiz quadrada: ${numero ** (1/2)} </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p> Arredondado para cima: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casa decimais: ${numero.toFixed(2)} </p>`;


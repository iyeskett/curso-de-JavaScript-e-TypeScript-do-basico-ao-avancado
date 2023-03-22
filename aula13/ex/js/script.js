const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Nome: <strong>${nome}<strong/><br/>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}<strong/> letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}<strong/><br/>`;
document.body.innerHTML += `O primeiro indice da letra E no seu nome é: <strong>${(nome.toUpperCase()).indexOf('E')}<strong/><br/>`;
document.body.innerHTML += `O ultimo indice da letra E no seu nome é: <strong>${(nome.toUpperCase()).lastIndexOf('E')}<strong/><br/>`;
document.body.innerHTML += `As 3 ultimas letras do seu nome são: <strong>${nome.slice(-3)}<strong/><br/>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}<strong/><br/>`;
document.body.innerHTML += `Seu nome com letras maiusculas: <strong>${nome.toUpperCase()}<strong/><br/>`;
document.body.innerHTML += `Seu nome com letras minusculas: <strong>${nome.toLowerCase()}<strong/><br/>`;


console.log(nome);
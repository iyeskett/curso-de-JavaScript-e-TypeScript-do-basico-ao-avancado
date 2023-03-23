const nomes = ['Felipe', 'Samara', 'Sarah'];

for (const valor of nomes) {
    console.log(valor);
}

console.log();

nomes.forEach((element, indice, array)=>{
    console.log(element, indice, array);
})
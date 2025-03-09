let listaCarros = ['Ferrari', 'Gol', 'Sandero', 'Argo', 'Mercedes', 'BMW', 'Audi'];

for (lista in listaCarros) {
    console.log(listaCarros[lista])
}
console.log('-='.repeat(10*2))
for (let n = 1; n <= 10; n++ ) {
    console.log(`Frase Qualquer ` + n)
}

console.log('-='.repeat(10*2))

let cores = [
    {nome: 'Preto', qtd: 10},
    {nome: 'Branco', qtd: 20},
    {nome: 'Azul', qtd: 30},
    {nome: 'Vermelho', qtd: 40 }
];
/*
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}
console.log('-='.repeat(10*2))
*/
for (i in cores) {
    console.log(cores[i].nome.toUpperCase());
}

console.log('-='.repeat(10*2))
/*
for(let cor of cores) {
    console.log(`${cor.nome} - ${cor.qtd}`);
}
*/
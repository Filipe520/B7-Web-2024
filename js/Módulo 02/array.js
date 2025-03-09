// Jeito errado
let color1 = 'blue';
let color2 = 'red';

// Jeito certo
let colors = ['blue', 'red', 'pink'];

// Filtrando para pegar os valores dentro do array
for (i in colors) {
    console.log(`A cor ${Number(i)+1}: ${colors[i]}, dentro do array`);
}
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=-')
let nomes = ['Filipe', 'Pedro', 'Silvia'];

let lista = [
    'biabla',
    ['xx', 'yy']
];

console.log(lista[1][0]);
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=-')
let ingredientes = [
    'Agua',
    'Farinha',
    'Ovo',
    'Manteiga',
    'Sal',
];

// ingredientes[6] = 'Cebola' // Nunca faz assim

// .push vai adicionar mais um item dentro do array
ingredientes.push('chocolate');
console.log(ingredientes);
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=-')
// .pop vai remover o último item dentro do array
ingredientes.pop();
console.log(ingredientes);
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=-')
// .shift vai remover o primeiro item do array
ingredientes.shift();
console.log(ingredientes);
console.log('-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-==-=-=-')
console.log(`Total de ingredientes: ${ingredientes.length}`);
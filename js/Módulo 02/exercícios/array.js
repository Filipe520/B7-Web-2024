//1. [ x ] - No array abaixo, qual o número que pegar a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log(`1. ${carros[x]}`);

console.log('-=-=-=-=-=-=-=-=-=-=-');

// 2. [ x ] - Troque a Ferrari por Audi
console.log('2. Lista com Audi:');
carros[1] = 'Audi';
console.log(carros);
console.log('-=-=-=-=-=-=-=-=-=-=-');

// 3. [ x ] - Adicione o Volvo a lista
carros.push('Volvo')
console.log('3. Lista com Volvo:');
console.log(carros);
console.log('-=-=-=-=-=-=-=-=-=-=-');

// 4. [ ] - Exiba quantos itens tem no array
console.log(`4. itens no array: ${carros.length}`)
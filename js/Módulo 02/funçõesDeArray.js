let frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

console.log(frutas);
console.log('-=-'.repeat(10*2));

frutas.push('Laranja'); // Adiciona um elemento no final do array
frutas.pop(); // Deleta o último elemento
frutas.shift(); // Deleta o primeiro elemento
frutas[0] = 'Morango'; // Altera o valor do elemento

console.log(frutas.join(', ')); // Junta os elementos do array

console.log('-=-'.repeat(10*2));
console.log(frutas);

console.log('-=-'.repeat(10*2))
console.log(frutas.length);

console.log('-=-'.repeat(10*2));

frutas[frutas.length - 1] = 'Melancia'; // Altera o último elemento
console.log(frutas);

console.log('-=-'.repeat(10*2));

frutas.pop(); // Deleta o último elemento
frutas.push('Melancia'); // Adiciona um elemento no final do array
console.log(frutas);


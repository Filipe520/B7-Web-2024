// Declarando uma variável com um número decimal
let n1 = 10.545342321341;

// Convertendo o número para string e concatenando com o número 5
let convertToString = n1.toString() + 5;

// Verificando o tipo da variável n1
let whatType = (typeof(n1));

// Formatando o número para ter apenas 2 casas decimais
let formatNumber = n1.toFixed(2);

// Exibindo o tipo da variável n1
console.log('Whats is the Type: ' + whatType);

// Separador visual no console
console.log('-=-'.repeat(10), 'Métodos de Numbers', '-=-'.repeat(10));

// Exibindo o valor original de n1
console.log('N1: ' + n1);

// Separador visual no console
console.log('-=-'.repeat(10), 'Métodos de Numbers', '-=-'.repeat(10));

// Exibindo o tipo da variável convertToString (depois de converter para string)
console.log('Whats is the Type: ' + typeof(convertToString));

// Exibindo o valor de n1 convertido para string e concatenado com 5
console.log('Convertendo para string: ' + convertToString);

// Separador visual no console
console.log('-=-'.repeat(10), 'Métodos de Numbers', '-=-'.repeat(10));

// Exibindo o número formatado com 2 casas decimais
console.log(formatNumber);

// Separador visual no console
console.log('-=-'.repeat(10), 'Métodos de Numbers', '-=-'.repeat(10));

// Declarando uma string que representa um número decimal
let n = '25.5';

// Convertendo a string para número usando Number() e somando 5
let numerosFormat2 = Number(n) + 5;

// Convertendo a string para número inteiro usando parseInt() e somando 5
let numerosFormat3 = parseInt(n) + 5;

// Convertendo a string para número decimal usando parseFloat() e somando 5.45
let numerosFormat4 = parseFloat(n) + 5.45;

// Exibindo o resultado da soma com parseFloat()
console.log(numerosFormat4);


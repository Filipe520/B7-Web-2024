console.log('-=-'.repeat(10), 'Métodos de String (1/3)', '-=-'.repeat(10));

let nome = 'Eu gosto de carros';

// Obtém a quantidade de caracteres na string
let qtdCaracteres = nome.length;

// O método indexOf retorna o índice da primeira ocorrência de um valor na string.
// Se o valor não for encontrado, ele retorna -1.
let buscaAlgo = nome.indexOf('Filipe');

let resultado = null;

// Verifica se o valor foi encontrado na string
if (buscaAlgo > -1) {
    resultado = 'Achou';
} else {
    resultado = 'Não achou!';
}

console.log(resultado);

console.log('-=-'.repeat(10), 'Métodos de String (2/3)', '-=-'.repeat(10));

// O método slice extrai uma parte da string com base em índices de início e fim.
// Quando usamos valores negativos, ele conta a partir do final da string.
let pegandoInfor = nome.slice(-4); // Extrai os últimos 4 caracteres da string

// O método substring extrai uma parte da string entre dois índices (início e fim).
// Ele não aceita valores negativos.
let pegandoInfor2 = nome.substring(0, 10); // Extrai os primeiros 10 caracteres da string

// O método substr extrai uma parte da string a partir de um índice inicial
// e com base em uma quantidade específica de caracteres.
// Valores negativos no índice inicial contam a partir do final da string.
let pegandoInfor3 = nome.substr(-4, 2); // Extrai 2 caracteres começando dos últimos 4 da string

console.log(pegandoInfor3);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método replace substitui uma parte da string por outra.
// Ele não altera a string original, mas retorna uma nova string com a substituição.
let substituirAlgo = nome.replace('carros', 'motos');

// Se quisermos alterar a string original, podemos atribuir o resultado de replace à variável original.
// nome = nome.replace('carros', 'motos');

console.log('Nome: ' + nome);
console.log('Resultado: ' + substituirAlgo);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método toUpperCase converte todos os caracteres da string para maiúsculas.
let caracteresMaiusculas = nome.toUpperCase();
console.log(caracteresMaiusculas);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método toLowerCase converte todos os caracteres da string para minúsculas.
let caracteresMinusculo = nome.toLowerCase();
console.log(caracteresMinusculo);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método concat junta duas ou mais strings em uma única string.
let concatenar = nome.concat(' Lacerda');
console.log(concatenar);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método trim remove os espaços em branco do início e do final da string.
let removerEspacos = nome.trim();
console.log(removerEspacos);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método charAt retorna o caractere em uma posição específica da string.
// Também podemos acessar o caractere diretamente usando a notação de colchetes.
let qualCaracterPosicao = nome.charAt(1); // Retorna o caractere na posição 1
let posicacaoCaracter = nome[1]; // Outra forma de acessar o caractere na posição 1
console.log(posicacaoCaracter);

console.log('-=-'.repeat(10), 'Métodos de String (3/3)', '-=-'.repeat(10));

// O método split divide a string em um array com base em um delimitador.
// Cada parte da string separada pelo delimitador se torna um elemento do array.
let number = '1,2,3,4,5,6,7,8,9,10';
let receitaBola = 'ovo;margarina;leite';

let tranformaStrEmARRAY = number.split(','); // Divide a string em um array usando ',' como delimitador
let receita = receitaBola.split(';'); // Divide a string em um array usando ';' como delimitador
console.log(receita);
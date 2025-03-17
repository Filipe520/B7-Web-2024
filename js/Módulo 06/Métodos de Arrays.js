// Exibe um título para a seção de Métodos de Arrays
console.log('-=-'.repeat(10), 'Métodos de Arrays(1/4)', '-=-'.repeat(10));
console.log('-=-'.repeat(5) + 'Receita de BOLO' + '-=-'.repeat(5));

// Array com os ingredientes de uma receita de bolo
let lista = [
    "2 xícaras de farinha de trigo",
    "1 xícara de açúcar",
    "1/2 xícara de manteiga",
    "1 colher de sopa de fermento em pó",
    "1 pitada de sal",
    "1 xícara de leite",
    "2 ovos"
];

lista.pop(); // Remove o último item do array ("2 ovos")

lista.shift(); // Remove o primeiro item do array ("2 xícaras de farinha de trigo")

lista.push('Prato'); // Adiciona "Prato" ao final do array

// Substitui o elemento no índice 4 por "Liquidificador"
lista[4] = 'Liquidificador';

// Adiciona um elemento no final do array usando lista.length (não recomendado, use push())
lista[lista.length] = 'Forno';

// Converte o array em uma string separada por vírgulas
let res = lista.toString();

// Converte o array em uma string separada por quebras de linha
let res2 = lista.join('\n');

// Localiza o índice de um elemento específico no array
let res3 = lista.indexOf('1 colher de sopa de fermento em pó');

// Apenas para exibir o array atual
let res4 = lista;

// Exibe o array formatado com quebras de linha
console.log(res2.toString());

console.log('-=-'.repeat(10), 'Métodos de Arrays(2/4)', '-=-'.repeat(10));

// Remove o item no índice 1, mas deixa um espaço vazio (não recomendado)
let deletaItem = delete lista[1];

// Remove 2 elementos a partir do índice 1 (melhor forma de remover elementos)
let removeAlgo = lista.splice(1, 2);

console.log(lista); // Exibe o array após as remoções

// Cria um novo array para demonstração
let lista2 = ['Prato', 'Liquidificador', 'Forno', 'a', 'n', 'b'];

// Junta os dois arrays em um só
let juncaoArray = lista.concat(lista2);
console.log(juncaoArray);

// Ordena o array em ordem alfabética
let ordenaArray = juncaoArray.sort();
// Reverte a ordem do array
let ordemReversa = juncaoArray.reverse();

console.log(ordemReversa);

console.log('-=-'.repeat(10), 'Métodos de Arrays(3/4)', '-=-'.repeat(10));

// Cria um array de números
let lista3 = [1, 45, 4, 9, 16, 25];
let lista4 = [];

// Usa map() para criar um novo array com os valores dobrados
lista4 = lista3.map(function (item) {
    return item * 2;
});

// Usa filter() para criar um novo array com valores maiores que 20
lista4 = lista3.filter(function(item) {
    if(item > 20) {
        return true;  
    } else {
        return false;
    }
});

// Usa every() para verificar se todos os elementos são maiores que 20
lista4 = lista3.every(function(item) {
    if (item > 20) {
        return true;
    } else {
        return false;
    }
});

// Usa some() para verificar se pelo menos um elemento é maior que 10
lista4 = lista3.some(function(item) {
    return (item > 10) ? true : false;
});


// Armazena o resultado da última operação em uma variável e exibe no console
let res5 = lista4;
console.log(res5);

console.log('-=-'.repeat(10), 'Métodos de Arrays(3/4)', '-=-'.repeat(10));

// Exibe o array original de números
console.log(lista3);

// Usa find() para localizar o primeiro elemento que seja igual a 16
lista4 = lista3.find(function(item) {
    return (item == 16) ? true : false;
});

// Usa findIndex() para localizar o índice do primeiro elemento que seja igual a 16
lista4 = lista3.findIndex(function(item) {
    return (item == 16) ? true : false;
});

// Exibe o resultado da operação findIndex()
console.log(lista4);

console.log('-=-'.repeat(10));

let users = [
    {id: 1, nome: 'Filipe', sobrenome: 'Alves'},
    {id: 2, nome: 'Matheus', sobrenome: 'Estevam'},
    {id: 3, nome: 'Paulo', sobrenome: 'abc'}
];

let pessoa1 = users.find((item) => (item.id == 3) ? true : false);

// let pessoa = users.find(function(item) {
//     return (item.id == 2) ? true : false;
// })

console.log(pessoa1)
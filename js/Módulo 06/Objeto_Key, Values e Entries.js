// Criando uma lista de compras como um array
const listaDeCompras = ['Arroz', 'Feijão', 'Macarrão', 'Leite', 'Pão', 'Ovos'];

// Exibindo as chaves (índices) do array listaDeCompras
console.log(Object.keys(listaDeCompras)); // Retorna: ['0', '1', '2', '3', '4', '5']

// Exibindo os valores do array listaDeCompras
console.log(Object.values(listaDeCompras)); // Retorna: ['Arroz', 'Feijão', 'Macarrão', 'Leite', 'Pão', 'Ovos']

// Exibindo as entradas (pares chave-valor) do array listaDeCompras
console.log(Object.entries(listaDeCompras)); 
// Retorna: [['0', 'Arroz'], ['1', 'Feijão'], ['2', 'Macarrão'], ['3', 'Leite'], ['4', 'Pão'], ['5', 'Ovos']]

// Criando um objeto pessoa com algumas propriedades
let pessoa = {
    nome: 'Filipe',
    sobreNome: 'Alves',
    idade: 99
}

// Exibindo as chaves (propriedades) do objeto pessoa
console.log(Object.keys(pessoa)); // Retorna: ['nome', 'sobreNome', 'idade']

// Exibindo os valores das propriedades do objeto pessoa
console.log(Object.values(pessoa)); // Retorna: ['Filipe', 'Alves', 99]

// Exibindo as entradas (pares chave-valor) do objeto pessoa
console.log(Object.entries(pessoa)); 
// Retorna: [['nome', 'Filipe'], ['sobreNome', 'Alves'], ['idade', 99]]
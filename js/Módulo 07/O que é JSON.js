// Este é um exemplo de um objeto JavaScript que representa dados em formato JSON

const pessoa = {
    // Propriedade que armazena o nome da pessoa
    nome: "João",
    
    // Propriedade que armazena a idade da pessoa
    idade: 30,
    
    // Propriedade que armazena uma lista de habilidades da pessoa
    habilidades: ["JavaScript", "Python", "Java"],
    
    // Propriedade que indica se a pessoa está ativa (true ou false)
    ativo: true
};

// Exibindo o nome da pessoa no console
console.log(pessoa.nome);

// Convertendo um objeto JavaScript para uma string JSON
let stringJson = JSON.stringify({ nome: 'Filipe', idade: 90 });
console.log('Isso aqui é uma string JSON: ' + stringJson);

// Convertendo uma string JSON de volta para um objeto JavaScript
let jsonConvertido = JSON.parse(stringJson);
console.log(jsonConvertido.nome); // Exibindo o nome do objeto convertido

console.log('-=-'.repeat(10)); // Separador visual no console

// Exemplo de outro objeto para demonstração
let p1 = {
    // Propriedade que armazena um array com diferentes tipos de dados
    'nomes': ['Filipe', 55]
};

// Convertendo o objeto para uma string JSON
let json = JSON.stringify(p1);

// Convertendo a string JSON de volta para um objeto JavaScript
let resJson = JSON.parse(json);

// Verificando o tipo do segundo elemento do array 'nomes'
console.log(typeof(resJson.nomes[1])); // Exibe 'number'

/*

Resumo:
- JSON.parse: Converte uma string JSON em um objeto JavaScript.
- JSON.stringify: Converte um objeto JavaScript em uma string JSON.

*/

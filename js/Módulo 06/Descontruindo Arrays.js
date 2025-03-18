// O array `info` contém algumas informações pessoais
let info = ['Filipe Alves', 'Filipe', 'Alves', '@Filipe'];

// Exemplos de desestruturação do array `info` (comentados):
// 1. Extrair todos os elementos em variáveis separadas
// let [ nomeCompleto, nome, sobrenome, instagram ] = info;

// 2. Extrair elementos específicos, pulando outros
// let [ nomeCompleto,,, instagram ] = info;

// 3. Pular o primeiro e o terceiro elementos, extrair o segundo e o quarto
// let [ , nome, , instagram ] = info;

// Desestruturação com valores padrão
// Se o array não fornecer valores, os padrões serão usados
let [ nome='Matheus', sobrenome='Estevam', idade=18] = ['Filipe', 'Alves'];

// A função `criar` retorna um array
let criar = () => [1,2,3];

// Desestruturando o array retornado em variáveis
let [a,b,c] = criar();

// Exibindo os valores desestruturados no console
console.log(a,b,c); // Saída: 1 2 3
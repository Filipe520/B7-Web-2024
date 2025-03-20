// Código SÍNCRONO
// Neste trecho, as variáveis são atribuídas de forma síncrona, ou seja, o código é executado linha por linha, 
// e o resultado é imediatamente disponível antes de passar para a próxima linha.

let nome = 'Filipe'; // Atribuição de uma string à variável 'nome'
let sobreNome = 'Alves'; // Atribuição de uma string à variável 'sobreNome'
let completo = nome + ' ' + sobreNome; // Concatenação das variáveis 'nome' e 'sobreNome' com um espaço entre elas
console.log(completo); // Exibe o nome completo no console

// Código ASSÍNCRONO
// Aqui, a função `Maquininha.pegarTemperatura()` é assíncrona, o que significa que ela pode não retornar 
// imediatamente o valor esperado. O restante do código continua sendo executado enquanto a função resolve sua tarefa.

let nome2 = 'Filipe'; // Atribuição de uma string à variável 'nome2'
let sobreNome2 = 'Alves'; // Atribuição de uma string à variável 'sobreNome2'
let temperatura = Maquininha.pegarTemperatura(); // Chamada de uma função assíncrona para pegar a temperatura
let completo2 = nome2 + ' ' + sobreNome2; // Concatenação das variáveis 'nome2' e 'sobreNome2' com um espaço entre elas
console.log(completo2); // Exibe o nome completo no console, mas a temperatura pode ainda não estar disponível
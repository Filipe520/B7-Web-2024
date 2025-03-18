// Criando um array chamado 'numeros' com alguns números
let numeros = [1, 2, 3, 4];

// Usando o operador spread para copiar os valores do array 'numeros' e adicionar novos valores
let outrosN = [...numeros, 5, 6, 7, 8];

console.log(outrosN); // Exibe o novo array 'outrosN' no console

// Criando um objeto chamado 'info' com algumas informações
let info = {
    nome: 'Filipe',
    sobrenome: 'Alves',
    idade: 99
};

// Usando o operador spread para copiar os valores do objeto 'info' e adicionar novas propriedades
let novaInfo = {
    ...info,
    cidade: 'Campina Grande',
    estado: 'Paraiba',
    pais: 'Brasil'
};

console.log(novaInfo); // Exibe o novo objeto 'novaInfo' no console

// Função que adiciona novas informações a um objeto recebido como parâmetro
function adicionarInfo(info) {
    let novasInfo = {
        ...info, // Copia as propriedades do objeto recebido
        status: 0, // Adiciona uma nova propriedade 'status'
        token: 'alksdalkda', // Adiciona uma nova propriedade 'token'
        data_cadastro: '.....' // Adiciona uma nova propriedade 'data_cadastro'
    };
    return novasInfo; // Retorna o novo objeto com as informações adicionadas
}

console.log(adicionarInfo({nome: 'Filipe', sobrenome: 'Alves'})); 
// Chama a função 'adicionarInfo' passando um objeto e exibe o resultado no console

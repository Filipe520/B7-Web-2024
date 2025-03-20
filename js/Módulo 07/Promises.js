// Função que retorna uma Promise para pegar a temperatura
function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...'); // Mensagem indicando que a temperatura está sendo obtida

        setTimeout(function(){
            resolve('40 na sombra'); // Após 2 segundos, a Promise é resolvida com o valor '40 na sombra'
        }, 2000);
    });
}

// Usando a PROMISE
console.log('Código antes!'); // Executado antes de chamar a função pegarTemperatura()

let temp = pegarTemperatura(); // Chama a função que retorna a Promise

console.log('Código durante!'); // Executado enquanto a Promise ainda está pendente

// Quando a Promise for resolvida, executa o código dentro do .then()
temp.then((Promise) => {
    console.log(`Temperatura: ${Promise}`); // Exibe a temperatura retornada pela Promise
});

// Caso a Promise seja rejeitada, executa o código dentro do .catch()
temp.catch(() => {
    console.log('Eita deu erro!'); // Mensagem de erro caso algo dê errado
});

console.log('Código depois!'); // Executado após a chamada da função pegarTemperatura()
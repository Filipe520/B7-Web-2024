/*
O que é um CALLBACK?

Callback é uma função que é passada como argumento para outra função e é executada após algum evento ou operação ser concluída.

Exemplo de uso de callback:
- Quando o botão é clicado:
    -- Faz uma requisição para a URL X
    -- Executa a função callback quando a resposta é recebida
*/

let clickCallBack = () => {
    alert('Clicou no botãozinho');
};

// Adiciona um evento de clique ao botão com id 'button' e define a função clickCallBack como callback
document.querySelector('#button').addEventListener('click', clickCallBack);
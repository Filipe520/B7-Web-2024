// Função assíncrona para buscar dados de uma API e exibir o primeiro título do array
async function callBack() {
    // Fazendo uma requisição GET para a API
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Convertendo a resposta para JSON
    let json = await response.json();

    // Exibindo o status da resposta no console
    console.log(`Status: ${response.status}`);
    // Mostrando o título do primeiro item do array em um alerta
    alert(`O primeiro título do array é ${json[0].title}`);
}

// Função assíncrona para inserir dados na API
async function inserir() {
    // Fazendo uma requisição POST para a API com os dados no corpo
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Método HTTP POST
        headers: {
            'Content-Type': 'application/json' // Cabeçalho indicando o tipo de conteúdo
        },
        body: JSON.stringify({
            title: 'Titulo de teste', // Título do post
            body: 'Corpo de teste', // Corpo do post
            userId: 2 // ID do usuário
        })
    });

    // Convertendo a resposta para JSON
    let json = await response.json();
    // Exibindo o objeto retornado no console
    console.log(json);
}

// Adicionando um evento de clique ao botão com id 'button' para chamar a função callBack
document.querySelector('#button').addEventListener('click', callBack);
// Adicionando um evento de clique ao botão com id 'inserir' para chamar a função inserir
document.querySelector('#inserir').addEventListener('click', inserir);
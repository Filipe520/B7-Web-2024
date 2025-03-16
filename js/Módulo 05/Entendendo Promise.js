// Promise = Promessa

// Todo fetch retorna uma Promise (Promessa)

function callBack() {
    // Fazendo uma requisição para a URL fornecida
    let reg = fetch('https://jsonplaceholder.typicode.com/posts')
    
    // Quando a requisição for concluída, converte a resposta para JSON
    reg.then((response) => {
        console.log((`Status: ${response.status}`))
        return response.json();
    })

    // Quando a conversão para JSON for concluída, exibe o título do primeiro post
    .then((json) => {
        alert(`O primeiro título do array é ${json[0].title}`)
    })
    // Ser der problema na requisição agente usar o catch
    .catch(() => {
        alert('Deu PROBLEMA na requisição!');
    })
    
    .finally(() => {
        alert('Opa, acabou TUDO!');
    })


    // Este alerta será exibido imediatamente após o clique, antes da requisição ser concluída
    alert('Opa, Clicou!');
}

// Adiciona um evento de clique ao botão que chama a função callBack
let button = document.querySelector('#button').addEventListener('click', callBack);
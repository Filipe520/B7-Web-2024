// Promise = Promessa

// Todo fetch retorna uma Promise (Promessa)

function callBack() {
    // Métodos HTTP: GET, POST, PUT, DELETE

    /*
    
    Método GET: Usado para buscar dados de um servidor.
    Método POST: Usado para enviar dados para um servidor.
    Método PUT: Usado para atualizar dados existentes em um servidor.
    Método DELETE: Usado para excluir dados de um servidor.
    
    */

    // Esse aqui foi um Métado GET
    let reg = fetch('https://jsonplaceholder.typicode.com/posts')

    reg.then((response) => {
        console.log((`Status: ${response.status}`))
        return response.json();
    })

    .then((json) => {
        alert(`O primeiro título do array é ${json[0].title}`)
    })

    .catch(() => {
        alert('Deu PROBLEMA na requisição!');
    })
    
    .finally(() => {
        alert('Opa, acabou TUDO!');
    })

    alert('Opa, Clicou!');
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })

    .then((response) => {
        return response.json();
    })

    .then((json) => {
        console.log(json[0])
    });
}

// Adiciona um evento de clique ao botão que chama a função callBack
document.querySelector('#button').addEventListener('click', callBack);

document.querySelector('#inserir').addEventListener('click', inserir);
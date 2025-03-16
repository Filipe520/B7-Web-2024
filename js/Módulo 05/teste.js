// https://jsonplaceholder.typicode.com/posts

function callBack() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log(`Status code: ${response.status} do CallBack`)
        return response.json();
    })
    // Vai mostrar o primeiro título do JSON
    .then((json) => {
        alert(`Primeiro título é ${json[0].title}`)
    })
    // Ser der erro na requisição vai aparece essa mensagem
    .catch((json) => {
        alert(`A sua REQUISIÇÃO deu erro. Entre em contato com suporte. ${json}`)
    })
    // O finally vai aparecer quando terminar a requisição.
    .finally(() => {
        console.log(`A requisição foi finalizada com SUCESSO.`)
    })
}

function post() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de TESTE.',
            body: 'Body de teste.',
            userID: 34
        })
    })

    .then((response) => response.json())
    .then((json) => console.log(json))
}

document.querySelector('#button').addEventListener('click', callBack);
document.querySelector('#inserir').addEventListener('click', post);
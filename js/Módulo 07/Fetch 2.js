function loadPosts() {
    document.querySelector('#posts').innerHTML = 'Carregando...';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            console.log(`Status code: ${Response.status}`)
            return Response.json();
        })
        .then((json) => {
            montarBlog(json);
        })
        .catch(() => {
            console.log('Deu Algum problema!')
        })
}

function montarBlog(lista) {
    let html = '';

    for(let i = 0; i < lista.length; i++) {
        html += `<h3>${lista[i].title}</h3>`
        html += `<p>${lista[i].body}</p>`
        html += '<br>'
    }

    document.querySelector('#posts').innerHTML = html;
}
async function loadPosts() {
    document.querySelector('#posts').innerHTML = 'Carregando...';
    
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();

    montarBlog(json);
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
function loadPosts() {
    document.querySelector('#posts').innerHTML = 'Carregando...';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((Response) => {
            alert(`Status code: ${Response.status}`)
            return Response.json();
        })
        .then((json) => {
            document.querySelector('#posts').innerHTML = json.length+' Posts';
        })
        .catch(() => {
            console.log('Deu Algum problema!')
        })
}
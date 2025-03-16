// https://jsonplaceholder.typicode.com/posts

function callBack() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })

    .then((json) => {
        alert(`O primeiro título da API é ${json[0].title}`);
    })
}

let button = document.querySelector('#button').addEventListener('click', callBack);
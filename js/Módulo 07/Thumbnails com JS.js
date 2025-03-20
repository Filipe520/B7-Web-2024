function mostrar() {
    let imagem = document.querySelector('#imagem').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 900

    document.getElementById('area').appendChild(img)
}

// Esse aqui é SÍNCRONO
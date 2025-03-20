function mostrar() {
    let reader = new FileReader();
    let imagem = document.querySelector('#imagem').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 900;

        document.querySelector('#area').appendChild(img)
    }

    reader.readAsDataURL(imagem);
}

// ASSÍNCRONO
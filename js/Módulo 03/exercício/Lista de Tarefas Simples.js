// Elementos
const input = document.querySelector('#txt');
let lista = document.querySelector('#lista');

// Funções
function soltou(event) {
    if (event.key === 'Enter') {
        // Adicionar elemento LI na Lista
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi)

        // Limpar o campo de texto
        input.value = ''
    }
}

// Evento
input.addEventListener('keyup', soltou);
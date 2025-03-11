// Elementos
let lista = document.querySelector('#lista');
let input = document.querySelector('input');

// Eventos
input.addEventListener('keyup', handleKeyUp);

// Funções
function handleKeyUp(event) {
    if (event.key === 'Enter') {
        // Jeito errado
            //lista.innerHTML += `<li>${input.value}</li>`;
        // Jeito certo
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        input.value = '';
    }
}

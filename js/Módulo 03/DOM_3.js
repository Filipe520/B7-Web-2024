let input = document.querySelector('input');
let botao_senha = document.querySelector('#botao-senha');
/*
function clicou() {
    // Pegar o valor do input
    console.log(input.value);
    // Pegar o valor do placeholder
    console.log(input.getAttribute('placeholder'));

    // Verificar se o input tem o atributo placeholder
    if (input.hasAttribute('placeholder')) {
        console.log('Tem o atributo placeholder');
    } else {
        console.log('Não tem o atributo placeholder');
    }

    // getAttribute() é case sensitive (ele retorna null se o nome do atributo não estiver exatamente igual)

    // hasAttribute() é case sensitive (ele retorna false se o nome do atributo não estiver exatamente igual)

    // setAttribute() é case sensitive (ele cria um novo atributo se o nome do atributo não estiver exatamente igual)

    input.setAttribute('placeholder', 'Placeholder modificado');
}
*/

function clicou() {
    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        botao_senha.innerText = 'Mostrar senha';
    } else {
        input.setAttribute('type', 'text');
        botao_senha.innerText = 'Ocultar senha';
    }

}


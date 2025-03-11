/*
console.log('-=-'.repeat(10), 'Minhas bibliotecas', '-=-'.repeat(10));

let div = document.getElementById('teste');
let div2 = document.querySelector('#teste');
let botao = document.getElementsByClassName('botao');
let lista = document.querySelectorAll('.botao');
let botaoNew = document.querySelector('#botaoNew');
let botaoNew3 = document.querySelector('.botaoNew3');

console.log(div);
console.log(div2);
console.log(botao);
console.log(lista);


console.log('-=-'.repeat(10), 'Função no botão', '-=-'.repeat(10));

function clicou() {
    alert('Você clicou no botão')
}

//botaoNew.addEventListener('click', clicou);
botaoNew.addEventListener('click', () => {
    alert('Você clicou no botão novo!')
});

// botao.addEventListener('click', function() {
//     alert('Você clicou no botão2')
// })

console.log('-=-'.repeat(10), 'Eventos de clique', '-=-'.repeat(10));

function criou() {
    console.log('Você clicou no botão!')
}

botaoNew3.addEventListener('click', () => {
    alert('Você clicou no botão 3')
});
*/

console.log('-=-'.repeat(10), 'Manipulando elementos 1', '-=-'.repeat(10));


let teste_02 = document.querySelector('#teste-02');
// children = filhos dos elementos
let filhos = teste_02.children[0];
// a variável ul recebe o elemento ul que está dentro do elemento teste_02
let ul = teste_02.querySelector('ul');



function novoEventos() {
    //console.log(filhos);
    //console.log(ul);

    // Vai mostrar o conteúdo do elemento ul mais em texto
    //console.log(ul.innerHTML);

    // Vai adicionar um novo item na lista com a tag Item alterado
    //ul.innerHTML += '<li><strong>Item alterado</strong></li>';
    //ul.children[2].innerHTML = '<i>Item alterado 2</i>';
    // O outerHTML vai mostrar o conteúdo do elemento ul mais em texto
    console.log(ul.outerHTML);

    // Vai alterar o conteúdo do elemento ul
    // Vai remover o conteúdo do elemento ul e adicionar um novo conteúdo
    ul.outerHTML = '<div><strong>Item alterado</strong></div>';
}

teste_02.addEventListener('click', novoEventos);


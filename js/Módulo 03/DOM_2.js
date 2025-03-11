console.log('-=-'.repeat(10), 'Manipulando elementos 2', '-=-'.repeat(10));

let teste_03 = document.querySelector('#teste-03');
let ul = teste_03.querySelector('ul');
let botao = teste_03.querySelector('button');
let newLi = document.createElement('li')
//newLi.innerText = 'Novo item li'

/*
function clicou() {
    /*
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].append('(Alterado)');
        ul.outerHTML = '<p>Novo item adicionado com <strong>sucesso</strong>!</p>';
    }

    //ul.appendChild(newLi);
    //ul.innerHTML += '<li>Item adicionado</li>';
    // prepend adiciona um novo elemento ao início de um elemento pai
    //ul.prepend(newLi);
}
*/
// o método append() adiciona um novo elemento ao final de um elemento pai mas não substitui o conteúdo existente, apenas adiciona ao final

// Usando o append() ele é mais eficiente e mais fácil de usar do que o innerHTML, pois ele não substitui o conteúdo existente, apenas adiciona ao final

//ul.children[3].append('Ok');

console.log('-=-'.repeat(10), 'Manipulando elementos 3', '-=-'.repeat(10));

const newButton = document.createElement('button');

newButton.innerHTML = 'Botão criado'; 

let newUl_2 = document.createElement('ul');
// After e Before são métodos que adicionam um novo elemento antes ou depois de um elemento pai
ul.before(newUl_2);

function clicou() {
    for (let i = 0; i < 5; i++) {
        let novoLI = document.createElement('li');
        novoLI.innerHTML = 'Item add ' + (i+1);
        newUl_2.append(novoLI);
    }

}



botao.addEventListener('click', clicou);
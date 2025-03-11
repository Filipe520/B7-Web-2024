let teste_05 = document.querySelector('#teste-05');
let li = teste_05.querySelector('li');
let botao_class = teste_05.querySelector('.botao-05');

function clicou() {
    li.style.color = 'white';
    li.style.backgroundColor = 'black';
    li.style.fontSize = '20px';
    li.style.fontWeight = 'bold';
    li.style.padding = '10px';
    li.style.borderRadius = '5px';
    li.style.margin = '5px';
    li.style.textAlign = 'center';
    li.style.width = '100px';
    li.style.height = '100px';  
    li.style.display = 'flex';
    li.style.justifyContent = 'center';
    li.style.alignItems = 'center';
    li.style.transition = 'all 0.5s';
    li.style.transform = 'rotate(360deg)';
    li.style.boxShadow = '0 0 10px black';

    //botao_class.classList.toggle('azul')

    if (botao_class.classList.contains('azul')) {
        botao_class.replace('Azul', 'Vermelho');
    } else {
        botao_class.replace('Vermelho', 'Azul');
    }
}
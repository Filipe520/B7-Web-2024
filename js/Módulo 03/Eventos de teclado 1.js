function soltou(e) {
    // .code retorna o código da tecla, tipo o nome
    //console.log(e.code);
    // .key retorna o valor da tecla, tipo o caractere
    //console.log(e.key);
    // .which retorna o código da tecla, tipo o número da tabela ASCII
    //console.log(e.which);
    // .keyCode retorna o código da tecla, tipo o número da tabela ASCII
    //console.log(e.keyCode);
    // .charCode retorna o código da tecla, tipo o número da tabela ASCII
    //console.log(e.charCode);
    // .type retorna o tipo do evento
    //console.log(e.type);
    console.log('Tecla APERTADA: ' + e.code);
    console.log('SHIFT? ' + e.shiftKey);
    console.log('CTRL? ' + e.ctrlKey);
    console.log('ALT? ' + e.altKey);
    console.log('--'.repeat(10));
}


const input = document.querySelector('#input-06');
input.addEventListener('keyup', soltou);
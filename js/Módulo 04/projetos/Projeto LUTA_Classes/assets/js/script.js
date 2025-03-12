// Cria uma nova instância de Log e passa o elemento com a classe 'log' para ela
let log = new Log(document.querySelector('.log'));

// Cria um novo personagem Knight chamado 'Filipe'
let char = new Knight('Filipe');

// Cria uma nova instância de Stage com o personagem, monstro, elementos do DOM e log
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

// Inicia o estágio
stage.start();

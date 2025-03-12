// Cria um personagem do tipo feiticeiro com o nome 'Filipe'
const char = createSorcerer('Filipe');

// Cria um monstro grande
const monster = createBigMonster();

// Inicia o estágio da luta entre o personagem e o monstro
stage.start(
    char, // Personagem
    monster, // Monstro
    document.querySelector('#char'), // Elemento HTML do personagem
    document.querySelector('#monster') // Elemento HTML do monstro
);
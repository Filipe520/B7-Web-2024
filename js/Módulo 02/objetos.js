let nome = 'Filipe';
let nomes = ['Filipe', 'Pedro'];

let personagem = {
    nome: 'Mario Bros',
    pais: 'US',
    idade: 30,
    olhos: ['Preto', 'Azul'],

    caracteristicas: {
        forca: 150,
        tamanho: 1.89,
        magia: 5,
        stamina: 15
    }
};

console.log(`${personagem.nome} tem ${personagem.idade} acharactenos é sua força é ${personagem.caracteristicas.forca} de FORÇA`);
console.log(personagem.olhos[1]);

personagem.nome = 'Luigi';
personagem.caracteristicas.forca += 5;

console.log(`Força: ${personagem.caracteristicas.forca}`)

personagem.olhos.push('Verde');
console.log(personagem.olhos)
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--')
let character = {
    name: 'Filipe',
    age: 27,
    car: [
        { model: 'Fiat', color: 'Preto'},
        { model: 'Ferrari', color: 'Vermelho'}
    ]
}

console.log(character.car[1].model)
console.log('-='.repeat(10*2))

let pessoa = {
    nome: 'Filipe',
    sobreNome: 'Alves',
    idade: 27,
    // Ser você que usar o this usa a função assim.
    nomeCompleto: function() {
        return `${this.nome} ${this.sobreNome}`
    },
    // o this não funcionar dentro do objeto
    //fullName: () => `${this.nome} ${this.sobreNome}`
}

console.log(pessoa.nome + ' ' + pessoa.sobreNome);
//console.log(pessoa.fullName())
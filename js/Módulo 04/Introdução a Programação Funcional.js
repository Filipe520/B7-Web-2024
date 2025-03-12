// Função para criar uma pessoa com nome, sobrenome e idade
function createPerson(name, lastName, age) {
    return  {
        name, // Nome
        lastName, // Sobrenome
        age, // Idade
        getFullName() { // Método para obter o nome completo
            return `${this.name} ${this.lastName}`
        }
    }
}

// Criando duas pessoas usando a função createPerson
let person1 = createPerson('Filipe', 'Alves', 27);
let person2 = createPerson('Júnior', 'Silva', 20);

// Imprimindo o nome completo da primeira pessoa
console.log(person1.getFullName());

console.log('-=-'.repeat(10)) // Separador visual no console

// Objeto pessoa com propriedades e métodos
let person = {
    nome: 'Filipe', // Nome
    sobreNome: 'Alves', // Sobrenome
    idade: 27, // Idade

    // Método para obter o nome completo
    PegandoNomeCompleto() {
        return `${this.nome} ${this.sobreNome}`;
    },
    // Método para iniciar a pessoa
    start() {
        console.log('Deu start na pessoa');
    }
}

// Chamando o método start do objeto pessoa
person.start();
// Imprimindo o nome completo da pessoa
console.log(person.PegandoNomeCompleto())
// Define uma classe Pessoa com uma idade padrão de 0
class Pessoa {
    idade = 0;

    // Construtor para inicializar a propriedade nome
    constructor(nome) {
        this.nome = nome;
    }

    // Método para imprimir uma mensagem de saudação
    dizerOI() {
        console.log(`${this.nome} diz OI`);
    }
}

// Define uma classe Estudante que estende Pessoa
class Estudante extends Pessoa {
    // Construtor para inicializar as propriedades nome e id
    constructor(nome, id) {
        super(nome); // Chama o construtor da classe pai
        this.id = id;
    }

    // Método para chamar o método dizerOI da classe pai
    dizerOla() {
        super.dizerOI();
    }
}

// Cria uma instância de Estudante com nome 'Filipe' e id 21
let p1 = new Estudante('Filipe', 21);
p1.idade = 20; // Define a propriedade idade de p1 para 20

// Cria outra instância de Estudante com nome 'Pedro' e id 2
let p2 = new Estudante('Pedro', 2);

// Chama o método dizerOla em p1, que imprimirá 'Filipe diz OI'
p1.dizerOla();

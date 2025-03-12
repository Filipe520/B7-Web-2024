// Imprime uma linha de separação e um título no console
console.log('-=-'.repeat(5*2), 'Classes: Instância', '-=-'.repeat(5*2));

// Define a classe Person
class Person {
    // Propriedades da classe com valores iniciais
    _age = 0;
    steps = 0;

    // Construtor que inicializa a propriedade name
    constructor(firsName, lastName) {
        this.name = firsName;
        this.lastName = lastName;
    }

    // Método para incrementar o número de passos
    takeAStep() {
        this.steps++;
    }

    // Método para definir a idade, com verificação de tipo
    setAge(newAge) {
        if (typeof newAge === 'number') {
            this.age = newAge;
        } else {
            console.log('Idade não aceita. (Só números)');
        }
    }

    // Método getter para obter o nome completo
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }

    // Método getter para obter a idade
    get age() {
        return this._age;
    }

    // Método setter para definir a idade, com verificação de tipo
    set age(x) {
        if(typeof x == 'number') {
            this._age = x;   
        }
    }
}

// Criação de instâncias da classe Person
let p1 = new Person('Filipe', 'Silva');
let p2 = new Person('Maria', 'Leite');
let p3 = new Person('Pedro', 'Duarte');

p1.age = 32

// Imprime a idade e o número de passos de Filipe no console
console.log(`${p1.fullName} tem ${p1.age} anos.`);
console.log(`Passos de ${p1.name}: ${p1.steps}`);

// Imprime o número de passos de Maria no console
console.log(`Passos de ${p2.name}: ${p2.steps}`);
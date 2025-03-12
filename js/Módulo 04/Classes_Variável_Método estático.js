class Person {
    // Declarando uma propriedade estática 'hands' que é compartilhada entre todas as instâncias da classe
    static hands = 2;
    // Declarando uma propriedade de instância 'age' com valor padrão de 0
    age = 0;

    // Método construtor para inicializar a propriedade 'name' para cada instância
    constructor(name) {
        this.name = name;
    }

    // Método estático 'sayHi' que pode ser chamado na própria classe, não nas instâncias
    static sayHi() {
        // 'this.name' será indefinido aqui porque 'name' não é uma propriedade estática
        console.log(`Oi ${this.name}`)
    }
}

// Criando uma nova instância da classe Person com o nome 'Filipe'
let p1 = new Person('Filipe');

// Chamando o método estático 'sayHi' na classe Person
Person.sayHi()

// Modificando a propriedade estática 'hands' para a classe Person
Person.hands = 3;

// Registrando uma mensagem usando a instância 'p1' e a propriedade estática 'hands'
console.log(`Oi, eu sou ${p1.name} e tenho ${Person.hands} mãos.`);
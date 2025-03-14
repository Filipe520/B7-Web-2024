// Knight ou Sorcerer - Guerreiro ou Mago
// LittleMonster ou BigMonster

class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    // Getter para a vida
    get life() {
        return this._life;
    }
    // Setter para a vida, garantindo que não seja menor que 0
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

// Classe Knight (Cavaleiro) que herda de Character
class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

// Classe Sorcerer (Feiticeiro) que herda de Character
class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

// Classe LittleMonster (Monstrinho) que herda de Character
class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

// Classe BigMonster (Monstrão) que herda de Character
class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

// Classe Stage (Palco) que gerencia a luta entre dois personagens
class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    // Inicia a luta e configura os eventos de ataque
    start() {
        this.update();
        // TODO: Evento do botão de atacar.

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter1, this.fighter2)
        })

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter2, this.fighter1)
        })
    }

    // Atualiza a interface com os dados dos lutadores
    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`

        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    // Realiza um ataque de um lutador contra outro
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMenssage(`Atacando cachorro morto.`);
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defeseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefese = attacked.defense * defeseFactor;

        if (actualAttack > actualDefese) {
            attacked.life -= actualAttack;
            this.log.addMenssage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        } else {
            this.log.addMenssage(`${attacked.name} conseguiu defender...`)
        }

        this.update();
    }
}

// Classe Log (Registro) que gerencia o registro das ações da luta
class Log {
    list = [];

    constructor(listE1) {
        this.listE1 = listE1;
    }

    // Adiciona uma mensagem ao registro
    addMenssage(msg) {
        this.list.push(msg);
        this.render();
    }

    // Renderiza o registro na interface
    render() {
        this.listE1.innerHTML = '';

        for(let i in this.list) {
            this.listE1.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
// - O que é uma função?

function gravidade(valor) {
    if (valor < 0 || valor === undefined){
        console.log('Erro o valor dentro da função foi menor que 0')
    } else {
        console.log(`A Gravidade do Planeta é: ${valor}`)
    }
    
}


gravidade(9.8)
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-')

// Função responsavel por fazer a somar de adição
function somar(n1, n2) {
    return n1 + n2
}
const n1 = 10;
const n2 = 25;

const resultado = somar(n1, n2);

console.log(`Resultado: ${resultado}`);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-')


function nomeCompleto(nome, sobreNome) {
    return `${nome} ${sobreNome}`;
}

const completo = nomeCompleto('Filipe', 'Alves')

console.log(completo)

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-')

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log('É MAIOR de idade.');
} else {
    console.log('É MENOR de idade!');
}
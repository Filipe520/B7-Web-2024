let telefone = '52131';

//console.log(telefone.padEnd(9, ' * '));
console.log(telefone.padStart(9, '-'))

console.log('-=-'.repeat(20))

let cartao = '1234 5564 7467 4321';

// Maneira que não pode fazer!
console.log('Este é seu cartão: ' +cartao)


let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(16, '*')

console.log('Este é seu cartão: ' +cartaoMascarado)
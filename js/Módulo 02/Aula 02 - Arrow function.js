function somar(x, y) {
    return x + y;
}

console.log(somar(4, 5))

// Arrow function
// const somar2 = (x,y) => {
//     return x + y
// }

// agente podia colocar depois' => ' {} as chaves mais as chaves é usado quando tem mais de uma linha, ser for somente return um resultado agente nem precisar colocar as chaves{}
const somar2 = (x,y) => x + y;
console.log(somar2(10, 15))

// function sobreNome(sob) {
//     return 'Filipe ' + sob; 
// }

// console.log(sobreNome('Alves'))

// Simplificado ao máximo a arrow function

// Ser tiver somente um parâmentro dentro da função agente nem precisa abrir cochetes, somente falar o nome da função o parâmetro é o retorno da função.
const sobreNome = sob => 'Filipe ' + sob;
const sobreNome2 = (sob) => 'Filipe ' + sob;
const sobreNome3 = (sob) => {
    return 'Filipe ' + sob;
}
const sobreNome4 = (sob) => {
    let nomeCompleto = 'Filipe ' + sob
    return nomeCompleto;
}
console.log(sobreNome4('Alves'))
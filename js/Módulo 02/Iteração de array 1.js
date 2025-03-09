
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

let Bigfilmes = filmes.filter((value, index, array) => value.length > 5);

console.log(Bigfilmes);

// every - verifica se todos os elementos do array passam no teste implementado pela função fornecida
// some - verifica se ao menos um dos elementos do array passa no teste implementado pela função fornecida

let ok = filmes.some((value) => {
    return value.length > 3;
})

if (ok) {
    console.log("Algum item é maior que 3 caracteres");
} else {
    console.log("Nem item é maior que 3 caracteres");
}

console.log('-=-'.repeat(10*2))

let frutas = ["maçã", "banana", "laranja", "melancia"];

frutas.pop();
frutas.push('Uva');

if (frutas.includes('Uva')) {
    console.log('Sim, temos uva');
} else {
    console.log('Não temos uva');
}
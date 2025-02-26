// [ x ] - 1. Substitua o @ pelo condicional correta para que
// o resultado seja TRUE

let x = 10;
let y = 5;

console.log(x > y);

// [ x ] - 2. Substitua o @ pela condicional correta para que
// o resultado seja FALSE

let w = '10';
let z = 10;

console.log(w === z)

// [ x ] - 3. Substitua o @ pela condicional correta para que
// o resultado seja TRUE

let a = 10;
let b = 5;

console.log(a != b)

// [ x ] - 4. Crie uma condicional para verificar se o preço da
// carne está barato ou caro. PS: Até 45 está bárato.

let preco = 40.3;

let precoBarato = (preco <= 45)
let precoCaro = preco > 44;

if (precoBarato) {
    console.log(`A carne está barata.`)
} else if (precoCaro) {
    console.log('A carne muito caro.')
}
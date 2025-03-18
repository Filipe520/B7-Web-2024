function add(...numeros) {
    console.log(numeros)
}

add(5,6,7,8,9,10,11,12,13,14);

// function addNomes(...nomes) {
//     console.log(nomes)
// }

// addNomes('filipe', 'paulo', 'matheus', 'luan', 'vitória');

console.log('-=-'.repeat(10), 'Exercício', '-=-'.repeat(10))

function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ['Bonieky', 'Paulo'];

let outros = adicionar(nomes, 'Antonio', 'Maria', 'José')

console.log(outros)

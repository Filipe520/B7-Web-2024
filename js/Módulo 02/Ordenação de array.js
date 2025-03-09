let frutas = [ 'Banana', 'Maçã', 'Abacaxi', 'Uva', 'Laranja' ];

frutas.sort();
console.log(frutas); // Vai deixar em ordem alfabética

frutas.reverse();
console.log(frutas); // Vai deixar em ordem reversa alfabética

console.log('-=-'.repeat(10*2))

let cars = [
    {brand: 'Ford', year: 2005},
    {brand: 'Chevrolet', year: 2010},
    {brand: 'Fiat', year: 2001}
]

// Jeito mais simples
cars.sort((a, b) => b.year - a.year);

// Jeito mais complexo
/*
cars.sort((a, b) => {
    if(a.year < b.year) {
        return -1;
    } else if(a.year > b.year) {
        return 1;
    } else {
        return 0;
    }
})
*/
console.log(cars);
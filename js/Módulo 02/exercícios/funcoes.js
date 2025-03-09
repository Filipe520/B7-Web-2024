/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula de porcentagem: (y / x) * 100
Uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(n1, n2){
    return (n1 / n2) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(y, x);

console.log(`${pct}% de ${x} ${y}`);
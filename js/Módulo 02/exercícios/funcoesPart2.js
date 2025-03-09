/*
Calcule o preço do imóvel
    - m2 = 3.000
    - Se tiver 1 quarto, o m2 é 1x
    - Se tiver 2 quartos, o m2 é 1.2x
    - Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let calc = metragem * m2;

    if (quartos === 1) {
        return calc
    } else if (quartos === 2) {
        return calc*1.2
    } else if (quartos === 3) {
        return calc*1.5
    }
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);

let precoFormatado = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`A casa custa ${precoFormatado}`);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-')

function calcularImovel_2(qtd_metragem, qtd_quatos) {
    let m2 = 3000;
    let valor = 0;

    switch (qtd_quatos) {
        case 1:
        default:
            valor = qtd_metragem * m2;
            break;
        case 2:
            valor = qtd_metragem * (m2*1.2);
            break;
        case 3:
            valor = qtd_metragem * (m2*1.5);
            break;
    }

    return valor
}

let qtd_metragem = 123;
let qtd_quatos = 3;
let valor = calcularImovel_2(qtd_metragem, qtd_quatos);

let precoFormatado2 = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(`A casa custa ${precoFormatado2}.`)
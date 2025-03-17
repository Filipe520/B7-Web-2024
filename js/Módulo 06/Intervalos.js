// Exibe uma linha de separação no console para organização visual
console.log('-=-'.repeat(10), 'Intervalos (1/2)', '-=-'.repeat(10));

let timer; // Variável para armazenar o identificador do intervalo

// Função para iniciar o intervalo que chama a função showTime a cada 1 segundo
function comecar() {
    timer = setInterval(showTime, 1000);
}

// Função para parar o intervalo
function parar() {
    clearInterval(timer);
}

// Função que exibe a hora atual no elemento com a classe 'demo'
function showTime() {
    let d = new Date(); // Obtém a data e hora atual

    let h = d.getHours(); // Obtém as horas
    let m = d.getMinutes(); // Corrigido para obter os minutos (antes estava 'getMonth')
    let s = d.getSeconds(); // Obtém os segundos

    let txtHora = h + ':' + m + ':' + s; // Formata a hora no formato HH:MM:SS

    document.querySelector('.demo').innerHTML = txtHora; // Atualiza o conteúdo do elemento com a hora
}

// Exibe outra linha de separação no console para organização visual
console.log('-=-'.repeat(10), 'Intervalos (2/2)', '-=-'.repeat(10));

let timer2; // Variável para armazenar o identificador do timeout

// Função que executa uma ação após 2 segundos
function rodar() {
    timer2 = setTimeout(() => {
        document.querySelector('.demo').innerHTML += 'RODOU!'; // Adiciona o texto "RODOU!" ao elemento
    }, 2000);
}

// Função para cancelar o timeout antes que ele seja executado
function parar2s() {
    clearTimeout(timer2);
}

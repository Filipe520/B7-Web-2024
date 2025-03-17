console.log('-=-'.repeat(10), 'Datas (1/3)', '-=-'.repeat(10));

// Em JavaScript, os meses começam do índice 0. Exemplo:
/*
0 - Janeiro
1 - Fevereiro
2 - Março
3 - Abril
4 - Maio
5 - Junho
6 - Julho
7 - Agosto
8 - Setembro
9 - Outubro
10 - Novembro
11 - Dezembro
*/

// Exemplos de criação de objetos Date:
// let d = new Date(2020, 0, 12, 12, 30, 12); // Ano, mês (0-based), dia, hora, minuto, segundo
// let d = new Date('2020-01-01 15:42:17'); // Data no formato ISO
let d = new Date(); // Data e hora atuais

let dataResuminda = d.toDateString(); // Data em formato resumido (ex.: "Wed Jan 01 2020")
let dataGMT = d.toUTCString(); // Data em formato UTC (ex.: "Wed, 01 Jan 2020 15:42:17 GMT")
let dataTudo = d.toString(); // Data completa como string (ex.: "Wed Jan 01 2020 15:42:17 GMT+0000 (UTC)")

console.log('-=-'.repeat(10), 'Datas (2/3)', '-=-'.repeat(10));

// Obtendo valores individuais da data: DD/MM/AAAA
let ano = d.getFullYear(); // Ano completo (ex.: 2023)
let mes = d.getMonth(); // Mês (0-based, ex.: 0 para Janeiro)
let dia = d.getDate(); // Dia do mês (1-31)

// Obtendo valores individuais da hora: HH:MM:SS:MSS
let horas = d.getHours(); // Hora (0-23)
let minutos = d.getMinutes(); // Minutos (0-59)
let segundos = d.getSeconds(); // Segundos (0-59)
let milisegundos = d.getMilliseconds(); // Milissegundos (0-999)

let timeStap = Date.now(); // Timestamp atual (milissegundos desde 1º de janeiro de 1970)
let novoValor = d.getTime(); // Timestamp da data armazenada no objeto `d`

console.log('-=-'.repeat(10), 'Datas (3/3)', '-=-'.repeat(10));

// Alterando valores da data
d.setFullYear(2022); // Define o ano como 2022
d.setMonth(11); // Define o mês como Dezembro (11)
d.setDate(d.getDate() + 5); // Adiciona 5 dias à data atual

console.log(d);

d.setHours(d.getHours() + 24); // Adiciona 24 horas (1 dia) à hora atual
console.log(d);

d.setHours(d.getHours() - 24); // Subtrai 24 horas (1 dia) da hora atual
console.log(d);

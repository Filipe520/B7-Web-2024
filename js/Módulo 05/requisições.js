// O que é Sincrono e Assincrono?

// Código Síncrono: As instruções são executadas uma após a outra, de forma sequencial.

let nome = 'Filipe';
let sobreNome = 'Alves';
let nomeCompleto = nome + sobreNome;

// Código Assíncrono: As instruções podem ser executadas fora da ordem, permitindo que outras tarefas sejam realizadas enquanto se espera por uma operação (como uma requisição de rede) ser concluída.

setTimeout(() => {
    console.log('Essa mensagem é exibida após 2 segundos');
}, 2000);

console.log('Essa mensagem é exibida imediatamente');
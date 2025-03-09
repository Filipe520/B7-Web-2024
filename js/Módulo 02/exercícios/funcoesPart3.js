/*
    Crie uma função que valide usuário e senha
        - Usuário correto: pedro
        - Senha correta: 123
*/

// Uso da função:
function validar(usuario, senha) {
    // Convertendo senha para número.
    let password = Number(senha);

    if (usuario === 'pedro' && password === 123) {
        return true;
    } else {
        return false;
    }
}

// Dados colotados do usuário.
let usuario = 'pedro';
let senha = '123';

// vai enviar os dados para a função, é a função vai retorna um valor verdadeiro ou falso.
let validacao = validar(usuario, senha);

// Ser a validação for true, ele vai conceder o acesso a conta.
// ser a validação for false, ele vai nega o acesso da conta.
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}
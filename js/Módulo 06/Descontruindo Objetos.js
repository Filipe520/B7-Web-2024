// Exibe um título para a seção de descontrução de objetos
console.log('-=-'.repeat(10), 'Descontruindo Objetos (1/2)', '-=-'.repeat(10));

// Objeto "pessoa" com propriedades aninhadas e um método para retornar o nome completo
let pessoa = {
    nome: 'Filipe',
    sobrenome: 'Alves',
    // idade: 27, // Propriedade comentada, mas pode ser usada para testes
    social: {
        facebook: 'b7Web',
        instagram: {
            url: '@filipe',
            seguidores: 1000
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

// Função que utiliza desestruturação para acessar propriedades do objeto
let pegarNomeCompleto = ({
    nome = 'Paulo', // Valor padrão caso "nome" não exista no objeto
    sobrenome = 'Silva', // Valor padrão caso "sobrenome" não exista no objeto
    social: {
        instagram: { url: instagram = '@b7Web' } // Valor padrão para "instagram"
    }
}) => `${nome} ${sobrenome} é seu instagram é ${instagram}`;

// Chama a função e exibe o resultado no console
console.log(pegarNomeCompleto(pessoa));

// Comentário explicando o método tradicional de acessar propriedades de um objeto
// Em vez de agente fazer assim:
// let idade = pessoa.idade;
// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let instagram = pessoa.social.instagram

// Comentário explicando o método moderno de desestruturação
// Agente faz assim:
// Processo de descontrução do OBJETO!(2)

// Exemplo de desestruturação com valores padrão
// let { nome: pessoaNome, sobrenome, idade = 20 } = pessoa;
// console.log(pessoaNome, sobrenome, idade);

// Exibe um título para a segunda seção de descontrução de objetos
console.log('-=-'.repeat(10), 'Descontruindo Objetos (2/2)', '-=-'.repeat(10));

// Exemplo de desestruturação de propriedades aninhadas
// let { facebook, instagram } = pessoa.social;

// Exemplo de desestruturação com valores padrão e propriedades aninhadas
// let { nome, idade = 20, social: { instagram } } = pessoa;

// Exemplo mais complexo de desestruturação com renomeação de variáveis
// let { nome,
//       sobrenome,
//       social: { facebook,
//                 instagram: { url: instagram, seguidores } } } = pessoa;

// Exemplo de desestruturação com renomeação de um objeto aninhado
// let { nome,
//       sobrenome,
//       social: instagram } = pessoa;

// Exibe as variáveis desestruturadas no console
// console.log(nome, sobrenome, facebook, instagram, seguidores);

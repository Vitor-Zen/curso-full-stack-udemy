const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Zen',
    idade: 21,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);
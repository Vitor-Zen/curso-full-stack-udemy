const produto = { nome: 'Produto', preco: 1.8};
const caneca = { 
    ...produto,
    material: 'Porcelana',
};

// Exibe configurações de property de um atributo do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// Exibe chave do objetot
console.log(Object.keys(caneca));
// Exibe chave a valor do objeto
console.log(Object.entries(caneca));
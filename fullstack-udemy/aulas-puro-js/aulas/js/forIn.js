//const frutas = ['banana', 'maça', 'uva', 'abacaxi', 'laranja'];

// For in -> lê os indices ou chaves do objeto
//for (let i in frutas) {
//    console.log(frutas[i]);
//}

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Zen',
    idade: '21'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
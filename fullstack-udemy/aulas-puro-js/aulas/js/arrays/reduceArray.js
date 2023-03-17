// Some todos os números

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const somaNumeros = numeros.reduce((valor, acumulador) => acumulador += valor);
// console.log(somaNumeros);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 80 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const maisVelha = pessoas.reduce((maior, indice) => {
    if(maior.idade > indice.idade) return maior;
    return indice;
})
console.log(maisVelha);

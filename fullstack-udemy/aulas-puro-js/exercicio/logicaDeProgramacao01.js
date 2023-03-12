//Escreva uma funcao que recebe 2 numeros e retorna o maior entre eles

function maior(primeiroValor, segundoValor) {
    if (primeiroValor > segundoValor) {
        console.log(`${primeiroValor} é maior do que ${segundoValor}`);
    } else {
        console.log(`${segundoValor} é maior do que ${primeiroValor}`);
    }
}

console.log(maior(10,25));

//Outra alternativa com arrow function
//const max = (primeiroValor, segundoValor) => x > y ? x : y;
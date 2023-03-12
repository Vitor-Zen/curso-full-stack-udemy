//Continua continua para a proxima interacao
//break sai do bloco

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }

    if (numero === 7) {
        break;
    }

    console.log(numero);
}
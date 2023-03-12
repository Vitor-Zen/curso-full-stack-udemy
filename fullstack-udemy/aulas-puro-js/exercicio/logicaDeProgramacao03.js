//Escreva uma funcao que receba um numero e retorne o seguinte:
//Numero e divisivel por 3 = Fizz
//Numero e divisivel por 5 = Buzz
//Numero e divisivel por 3 e 5 = FizzBuzz
//Numero NAO e divisivel por 3 e 5 = retorna o proprio numero
//Checar se o numero e realmente um numero
//Use a funcao com numeros de 0 a 100

function recebeNumero(numero) {
    if (typeof numero != 'number') {
        return numero;
    }

    if ((numero % 3) === 0 && (numero % 5) === 0) {
        return 'FizzBuzz';
    }else if ((numero % 3) === 0) {
        return 'Fizz'
    } else if ((numero % 5) === 0) {
        return 'Buzz'
    } else {
        console.log(numero);
    }

}

for (let i = 0; i <= 100; i++) {
    console.log(i, recebeNumero(i));
}
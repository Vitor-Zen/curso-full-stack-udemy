// Essa função ela não entrega todos os valores de uma vez, 
// é uma função preguiçosa que a cada chamada devolve um valor
function* geradoraUm() {
    // Código aqui...
    yield 'Valor 1';
     // Código aqui...
     yield 'Valor 2';
    // Código aqui...
    yield 'Valor 3';
}

// const g1 = geradoraUm();
// console.log(g1.next().value);

//function* gerdoraDois() {
//    let i = 0;

//    while(true) {
//        yield i;
//        i++;
//    }
//}

function* geradoraTres() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradorQuatro() {
    yield* geradoraTres();
    yield 3;
    yield 4;
    yield 5;
}

//const g4 = geradorQuatro();
//for (let valor of g4) {
//    console.log(valor);
//}

function* geradoraCinco() {
   
    yield function() {
        console.log('Vim do y1')
    }

    yield function() {
        console.log('Vim do y2');
    }

}

const g5 = geradoraCinco();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
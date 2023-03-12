// Declaração de função (Function hoisting) 
// Hoisting => A engine do js faz com que a função vá para o topo na hora de ser interpretada, então podemos chamar uma função desse tipo antes de cria-la

// Isso é uma função hoisting, feita da forma "normal"
falaOi();
function falaOi() {
    console.log('Oi');
}

// Podemos tratar a função como um dado
const souUmDado = function () {
    console.log('Sou um dado')
};

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto podemos ter uma função
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();

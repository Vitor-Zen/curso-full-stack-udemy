// nomes.splice(indice, delete, adicionaElemento)
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(0, 0, 'Luiz', 'Otavio', 'Miranda');
// console.log(nomes);

const removidos = nomes.splice(3, 1, 'Luiz');
console.log(removidos, nomes);
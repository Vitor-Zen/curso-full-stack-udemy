// Produto -> aumento de preco, desconto de preco
// Camiseta = Cor, caneca = material -> simulando um e-commerce 

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Se criar um prototype de mesmo nome dentro de camiseta, ele sobreescreve o método do pai
// Camiseta.prototype.aumento = function(percentual) {
//     this.preco = this.preco + (this.preco * (percentual/ 100));
// };

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);

const produto = new Produto('Generico', 111)

console.log(produto);
console.log(camiseta);

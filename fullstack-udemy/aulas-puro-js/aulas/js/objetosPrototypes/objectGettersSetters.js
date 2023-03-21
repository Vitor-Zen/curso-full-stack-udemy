function Produto(nome, preco, estoque) {
     this.nome = nome;
     this.preco = preco;

     Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // permição para configurar a propriedade
        get: () => {
            return estoque;
        },

        set: (valor) => {
            
            if (typeof valor !== 'number') {
                throw new TypeError('ERRO');
            } return valor;
        },

    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 6
console.log(p1.estoque);
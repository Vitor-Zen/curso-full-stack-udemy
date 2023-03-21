// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // Quando utilizamos this, deixamos a propriedade pública
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true, 
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        },
    });
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor
        writable: false, // permição para alterar
        configurable: false, // permição para configurar a propriedade
    });

    // Reconfigurando a mesma propriedade
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, 
    //     value: estoque, 
    //     writable: true, 
    //     configurable: true,
    // });

}

const p1 = new Produto('Camiseta', 20, 3);

console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
};
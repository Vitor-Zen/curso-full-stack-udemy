// Factory function
// function criaPessoa (nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
        
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         },

//         get nomeCompletoGet() {
//             return `${this.nome} ${this.sobrenome}`;
//         },

//     };
// }

// const p1 = criaPessoa('Vitor', 'Zen');

// É uma função
// console.log(p1.nomeCompleto());
// É um getter
// console.log(p1.nomeCompletoGet);



// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Vitor', 'Zen');
console.log(p1);
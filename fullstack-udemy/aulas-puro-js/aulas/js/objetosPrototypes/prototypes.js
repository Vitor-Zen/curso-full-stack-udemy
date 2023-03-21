// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Cria um método dentro de prototype
Pessoa.prototype.estouAqui = 'Estou aqui'
Pessoa.prototype.nomeCompletto = () => { return this.nome + ' ' + this.sobrenome };

// Pessoa.prototype === pessoa1.__proto__

// Instância
const primeiraPessoa = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const segundaPessoa = new Pessoa('Vitor', 'Zen'); // <- Pessoa = Função construtora

console.dir(primeiraPessoa);
console.dir(segundaPessoa);
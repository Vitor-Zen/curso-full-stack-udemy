// Função construtora -> objetos
// Função fabrica -> objetos
//Construtora -> Pessoa (precisamos usar a primeira letra maiuscula)
function Pessoa(nome, sobrenome) {
    // Variaveis privadas || Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = () => {

    };

    // this.nome = Pessoa.nome || Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um método');
    };
}
const p1 = new Pessoa('Vitor', 'Zen');
console.log(p1.nome);
p1.metodo();
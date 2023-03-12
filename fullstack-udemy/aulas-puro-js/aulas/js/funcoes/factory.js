// Factory funciton
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        altura: altura,
        peso: peso,
        
        // Cria uma função que retorna nome completo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        // Cria uma função anonima como um atributo
        fala: function(assunto) {
                // this.nome é a mesma coisa que usarmos p1.nome, por isso temos acesso ao argumento nome
                return `${this.nome} está ${assunto}.`
        },
         
        // usando get nossa função "finge" ser um atributo
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Vitor', 'Zen', 1.6, 79);

// Já que não foi usado a palavra get na criação, precisamos executar como uma função
//console.log(p1.nomeCompleto());
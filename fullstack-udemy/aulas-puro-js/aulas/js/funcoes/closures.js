function retornaFuncao() {
    const nome = 'Luiz'
    return () => {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);
// Quando utilizar o map, é bom criar um novo array para manipular os dados que você deseja, 
// pois array em js é passado por referência, e se não fizer isso, você altera o valor do 
// array original.


// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobraNumeros = numeros.map(valor => valor * 2);
// console.log(dobraNumeros);

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const pessoaString = pessoas.map(obj => obj.nome);
const removeNome = pessoas.map(obj => ({ idade: obj.idade }));

const adicionaID = pessoas.map((obj, indice) => {
    // Criando novo array para não alterar o array original
    const newObj = { ...obj};
    newObj.id = indice + 1;
    return newObj;
})
console.log(adicionaID);
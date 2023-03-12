// const nomes = ['Eduardo', 'Maria', 'GiowGiow'];

// Cria array utilizando construtor
const nomes = new Array('Eduardo', 'Maria', 'Joana');
nomes[2] = 'João';

// deleta o item do array, mas mantém o espaço
delete nomes[2];

//console.log(nomes);

const nomesPit = ['Zeenlol', 'Brunao', 'Giow'];
// Utiliza rest para copiar o array e fazer alterações sem implicar no array original
const novosPits = [...nomesPit];
// Adiciona novo elemento no final do array
novosPits.push('Vasques');

//console.log(nomesPit);
//console.log(novosPits);

nomesPit.pop();
// Note que após clonar o array original, adicionamos um nome no array copia e deletamos um nome do array original
//console.log(nomesPit);

// Removemos o ultimo elemento do array e adicionamos ele a uma variavel
const removido = novosPits.pop();
//console.log(`Array original = ${novosPits}. Ultimo indice removido ${removido}`);

// Adiciona elemento no inicio do array
novosPits.unshift('Topeira');
//console.log(novosPits);

//                  0       1       2       3          4
const frutas = ['Banana', 'Maçã', 'Uva', 'Morango', 'Kiwi'];
// Fatiando o array || O ulltimo indice do array não é incluido
const frutasNovo = frutas.slice(0, -2);
//console.log(frutasNovo);

const nomeCompleto = 'Vitor Zen Correa'
// Transforma nomeCompleto em um array e usando split para separar por espaços
const novoNomeCompleto = nomeCompleto.split(' ');
//console.log(novoNomeCompleto)

const nomeGiowArray = ['Giovanni', 'Martinelli']
// Transforma um array em uma string
const nomeGiowString = nomeGiowArray.join(' ')
//console.log(`Sou uma string agora ${nomeGiowString}`);
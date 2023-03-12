const teste = document.querySelector('.teste');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for (let i = 0; i < elementos.length; i++) {
    //Cria tag e salva em para
    const para = document.createElement(elementos[i].tag);
    //Captura o texto do objeto e salva em node
    const node = document.createTextNode(elementos[i].texto);
    //Passa o texto para a tag criada
    para.appendChild(node);
    //adiciona essa tag em um elemento da tela
    teste.appendChild(para);
};

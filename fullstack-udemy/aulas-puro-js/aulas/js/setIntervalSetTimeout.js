function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

/*setInterval repete chamadas de funções ou executam trechos de código
com um tempo de espera fixo entre cada chamada.*/
const timer = setInterval(() => {
    console.log(mostraHora());
    //1000 está em milesimos de segundos, representa que vai executar essa função a cada 1 segundo
}, 1000);

//A função só pode ser executada apenas 1 única vez, e está sendo utilizada para parar a função setInterval
setTimeout(() => {
   clearInterval(timer) 
}, 3000);

//Aqui a função está sendo usada para exibr a mensagem depois de 5 segundos da execução do programa
setTimeout(() =>{
    console.log('Olá mundo!');
}, 5000)
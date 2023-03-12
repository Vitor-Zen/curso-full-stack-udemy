const h1 = document.querySelector('.container h1');

const data = new Date();

const diaSemana = data.getDay();
const diaSemanaTexto = pegaDiaSemana(diaSemana);

const mesAno = data.getMonth();
const mesAnoTexto = pegaMesAno(mesAno);

const diaMes = data.getDate();
const dataAno = data.getFullYear();
const horaInteira = data.getHours();
const minutos = data.getMinutes();

function pegaDiaSemana (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sabado';
            break;
        default:
            diaSemanaTexto = '';
    }

    return diaSemanaTexto;
}

function pegaMesAno (month) {
    let mesTexto;
    
    switch (month) {
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2:
            mesTexto = 'Março';
            break;
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
            break;
        default:
            mesTexto = '';
    }

    return mesTexto;
}

h1.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesAnoTexto} de ${dataAno} ${horaInteira}:${minutos}`;

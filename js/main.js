// DESENVOLVIDO POR MIM MESMO SEM AUXÍLIO DO CURSO

function mudaCor1 () {
    let azul = document.getElementById('robo');
    azul.src='./img/robotron1.png'
}

function mudaCor2 () {
    let amarelo = document.getElementById('robo');
    amarelo.src='./img/robotron2.png'
}

function mudaCor3 () {
    let branco = document.getElementById('robo');
    branco.src='./img/robotron3.png'
}

function mudaCor4 () {
    let preto = document.getElementById('robo');
    preto.src='./img/robotron4.png'
}

function mudaCor5 () {
    let rosa = document.getElementById('robo');
    rosa.src='./img/robotron5.png'
}

function mudaCor6 () {
    let vermelho = document.getElementById('robo');
    vermelho.src='./img/robotron6.png'
}

// SEGUINDO O CURSO


const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});



function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) -1;
    } else {
        peca.value = parseInt(peca.value) +1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}



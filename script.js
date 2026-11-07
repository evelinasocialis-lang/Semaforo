// Obtém as referências dos elementos HTML das luzes
const luzVermelha = document.getElementById('luz-vermelha');
const luzAmarela = document.getElementById('luz-amarela');
const luzVerde = document.getElementById('luz-verde');

// Variável para controlar se é a primeira vez que ligamos o semáforo
let primeiraLigacao = true;

// Função auxiliar para desligar todas as luzes antes de mudar de estado
function limparLuzes() {
luzVermelha.classList.remove('vermelha-ativa');
luzAmarela.classList.remove('amarela-ativa');
luzVerde.classList.remove('verde-ativa');
}

function mudarCor(corBotao) {

limparLuzes();

if (primeiraLigacao) {

luzVermelha.classList.add('vermelha-ativa');
primeiraLigacao = false;
} else {

const elemento = document.getElementById(corBotao);
if (elemento) {

if (corBotao === 'luz-vermelha') elemento.classList.add('vermelha-ativa');
if (corBotao === 'luz-amarela') elemento.classList.add('amarela-ativa');
if (corBotao === 'luz-verde') elemento.classList.add('verde-ativa');
}
}
}

// Funções ativadas pelos cliques dos botões 
function ligarVermelho() {
mudarCor('luz-vermelha');
}

function ligarAmarelo() {
mudarCor('luz-amarela');
}

function ligarVerde() {
mudarCor('luz-verde');
}

function desligarSemaforo() {
limparLuzes();

}


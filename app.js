let listaNumeros = [];
let qntNumeros = 10;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function msgInicial() {
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", "Escolha um número entre 1 e 10");
}

msgInicial();

function numeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * + qntNumeros + 1);
    let qntLista = listaNumeros.length;

    if (qntLista == qntNumeros){
        qntLista = [];
    }

    if (listaNumeros.includes(numEscolhido)) {
        return numeroAleatorio();
    } else {
        listaNumeros.push(numEscolhido);
        return numEscolhido;
    }
}
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        exibirTexto("h1", "Parabens!");
        exibirTexto("p", `Você descobriu! O número secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTexto("h1", "ERROOOOU!");
            exibirTexto("p", "Tente um número menor.");
        } else {
            exibirTexto("h1", "Ainda não");
            exibirTexto("p", "Tente um número maior.");
        }
        tentativa++;
        limparCampo();

    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    msgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

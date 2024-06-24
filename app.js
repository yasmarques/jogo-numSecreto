let qntNumeros = 10;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function numeroAleatorio() {
    return parseInt(Math.random() * + qntNumeros + 1);
}



function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        acertou();
    } else {
        if (chute > numeroSecreto) {
            exibirTexto("h1", "ERROOOOU!");
            exibirTexto("p", "Tente um número menor.");
        } else {
            exibirTexto("h1", "Ainda não");
            exibirTexto("p", "Tente um número maior.");
        }
        tentativa++;
    }
}
function acertou() {
    window.location.assign("acertou.html")
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    exibirTexto("h2", `Você descobriu! O número secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}.`);
}

function reiniciarJogo() {

}

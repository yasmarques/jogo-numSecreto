alert("Jogo do Número secreto");

let qntNumeros = 100;
let numeroSecreto = parseInt(Math.random() * + qntNumeros + 1);
let chute;
let tentativa = 1;

while (chute != numeroSecreto) {
      chute = prompt(`Escolha um número entre 1 e ${qntNumeros}`);

      if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert ("ERROOOOU! Tente um número menor.");
        } else {
            alert ("Errou, é um número maior que esse.");
        }

        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu! O número secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}.`);




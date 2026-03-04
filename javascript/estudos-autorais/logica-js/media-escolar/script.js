document.getElementById("btn").addEventListener("click", verificarMedia);

function verificarMedia() {
    const input1 = document.getElementById("inputnum1");
    const input2 = document.getElementById("inputnum2");
    const input3 = document.getElementById("inputnum3");
    const resultado = document.getElementById("result");
    const valorMedia = document.getElementById("valorMedia");

    if (
        input1.value === "" ||
        input2.value === "" ||
        input3.value === ""
    ) {
        resultado.textContent = "Preencha todas as notas. ⚠️";
        resultado.style.color = "#9514df";
        return;
    }

    const nota1 = Number(input1.value);
    const nota2 = Number(input2.value);
    const nota3 = Number(input3.value);

    if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        resultado.textContent = "Por favor, insira notas válidas. ⚠️";
        resultado.style.color = "#9514df";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    valorMedia.textContent = `Média: ${media.toFixed(2)}`;

    if (media >= 7) {
        resultado.textContent = "Parabéns, você foi aprovado! 😎";
        resultado.style.color = "#3cb33e";
    } else if (media >= 5 && media < 7) {
        resultado.textContent = "Você está de recuperação. 🫤";
        resultado.style.color = "#dfa914";
    } else {
        resultado.textContent = "Você foi reprovado. 🥺";
        resultado.style.color = "#A52A2A";
    }

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input1.focus();
}
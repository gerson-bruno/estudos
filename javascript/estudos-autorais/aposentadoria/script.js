document.getElementById("btn").addEventListener("click", verificarAposentadoria);
document.getElementById("inputnum").value = "";
function verificarAposentadoria() {
    const input = document.getElementById("inputnum");
    const idade = Number(document.getElementById("inputnum").value);
    const resultado = document.getElementById("result");
    if (isNaN(idade) || idade <= 0 || idade > 120) {
        resultado.textContent = "Por favor, insira uma idade válida.";
        resultado.style.color = "#dfa914";
        return;
    }
    else if (idade >= 65) {
        resultado.textContent = "Você pode se aposentar!";
        resultado.style.color = "#3cb33e";
    } else {
        resultado.textContent = "Você ainda não pode se aposentar!";
        resultado.style.color = "#A52A2A";
    }
    input.value = "";
    input.focus();
}
// Selecionando os elementos do HTML
const userScoreEl = document.getElementById("userScore");
const cpuScoreEl = document.getElementById("cpuScore");
const animacaoEl = document.getElementById("animacao");
const resultadoEl = document.getElementById("resultado");

// Variáveis de estado
let userScore = Number(localStorage.getItem("userScore")) || 0;
let cpuScore = Number(localStorage.getItem("cpuScore")) || 0;

// Atualiza o placar inicial vindo do LocalStorage
atualizarPlacar();

function getEmoji(e) {
  if (e === "pedra") return "🪨";
  if (e === "papel") return "📄";
  return "✂️";
}

function jogar(escolhaUsuario) {
  const opcoes = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

  // Estado de "Pensando..."
  animacaoEl.innerText = "🤜🤛";
  resultadoEl.innerText = "Pensando...";
  resultadoEl.className = "resultado"; // Limpa as cores (win/lose/draw)

  setTimeout(() => {
    let res = "";
    let classe = "";

    if (escolhaUsuario === escolhaComputador) {
      res = "Empate!";
      classe = "draw";
    } else if (
      (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
      (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
      (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
      res = "Você ganhou!";
      classe = "win";
      userScore++;
    } else {
      res = "Você perdeu!";
      classe = "lose";
      cpuScore++;
    }

    // Atualiza a tela
    animacaoEl.innerText = `${getEmoji(escolhaUsuario)} x ${getEmoji(escolhaComputador)}`;
    resultadoEl.innerText = `${escolhaUsuario} vs ${escolhaComputador} → ${res}`;
    resultadoEl.className = `resultado ${classe}`;
    
    atualizarPlacar();
    salvarDados();
  }, 500);
}

function atualizarPlacar() {
  userScoreEl.innerText = userScore;
  cpuScoreEl.innerText = cpuScore;
}

function salvarDados() {
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("cpuScore", cpuScore);
}

function resetar() {
  userScore = 0;
  cpuScore = 0;
  atualizarPlacar();
  salvarDados();
  animacaoEl.innerText = "🤜🤛";
  resultadoEl.innerText = "";
  resultadoEl.className = "resultado";
}
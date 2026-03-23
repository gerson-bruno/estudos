const userScoreEl = document.getElementById("userScore");
const cpuScoreEl = document.getElementById("cpuScore");
const animacaoEl = document.getElementById("animacao");
const resultadoEl = document.getElementById("resultado");
const botoesContainer = document.querySelector(".botoes");
const btnReset = document.querySelector(".reset");

let userScore = 0; // Melhor de 3 geralmente não salva no localStorage para ser uma partida nova
let cpuScore = 0;
let jogoAtivo = true;

// Sons
function tocarSom(tipo) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (tipo === 'click') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(); osc.stop(ctx.currentTime + 0.1);
    } else if (tipo === 'win') {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start(); osc.stop(ctx.currentTime + 0.5);
    } else if (tipo === 'gameover') {
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 1);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 1);
        osc.start(); osc.stop(ctx.currentTime + 1);
    }
}

function dispararConfete() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#ffffff', '#eab308']
    });
}

function jogar(escolhaUsuario) {
    if (!jogoAtivo) return;

    tocarSom('click');
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    animacaoEl.innerText = "🤜🤛";
    animacaoEl.classList.add("balancar");
    resultadoEl.innerText = "Quem ganha esse round?";
    resultadoEl.className = "resultado";

    setTimeout(() => {
        animacaoEl.classList.remove("balancar");
        let res = "";
        let classe = "";

        if (escolhaUsuario === escolhaComputador) {
            res = "Empate no round!";
            classe = "draw";
        } else if (
            (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
            (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
            (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
        ) {
            res = "Ponto pra você! ⚡";
            classe = "win";
            userScore++;
        } else {
            res = "Ponto da CPU! 🤖";
            classe = "lose";
            cpuScore++;
        }

        userScoreEl.innerText = userScore;
        cpuScoreEl.innerText = cpuScore;
        animacaoEl.innerText = `${getEmoji(escolhaUsuario)} x ${getEmoji(escolhaComputador)}`;
        resultadoEl.innerText = res;
        resultadoEl.className = `resultado ${classe}`;

        verificarVencedor();
    }, 600);
}

function getEmoji(e) {
    const emojis = { pedra: "🪨", papel: "📄", tesoura: "✂️" };
    return emojis[e];
}

function verificarVencedor() {
    // Vence quem fizer 2 pontos (Melhor de 3)
    if (userScore === 2 || cpuScore === 2) {
        jogoAtivo = false;
        botoesContainer.classList.add("escondido");
        btnReset.classList.add("brilhar");
        btnReset.innerText = "Jogar Novamente";

        if (userScore === 2) {
            resultadoEl.innerHTML = "🏆 <strong>VOCÊ É O CAMPEÃO!</strong> 🏆";
            resultadoEl.className = "resultado win";
            tocarSom('win');
            dispararConfete();
        } else {
            resultadoEl.innerHTML = "💀 <strong>A CPU VENCEU A PARTIDA!</strong> 💀";
            resultadoEl.className = "resultado lose";
            tocarSom('gameover');
        }
    }
}

function resetar() {
    tocarSom('click');
    userScore = 0;
    cpuScore = 0;
    jogoAtivo = true;
    
    userScoreEl.innerText = 0;
    cpuScoreEl.innerText = 0;
    animacaoEl.innerText = "🤜🤛";
    resultadoEl.innerText = "Primeiro a marcar 2 pontos ganha!";
    resultadoEl.className = "resultado";
    
    botoesContainer.classList.remove("escondido");
    btnReset.classList.remove("brilhar");
    btnReset.innerText = "Reiniciar Placar";
}
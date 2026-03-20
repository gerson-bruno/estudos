let animation;
let selected = "saccade";
let countdown;
let timeLeft = 0;
let score = 0;

function selectExercise(e, type) {
    selected = type;
    const items = document.querySelectorAll('.exercise-list li');
    items.forEach(li => li.classList.remove('active'));
    e.currentTarget.classList.add('active');
}

function start() {
    cancelAnimationFrame(animation);
    clearInterval(countdown);

    const ball = document.getElementById("ball");
    const area = document.getElementById("exercise-area");
    const stripes = document.getElementById("optokinetic");

    const speedBase = parseInt(document.getElementById("speed").value) || 5;
    timeLeft = parseInt(document.getElementById("time").value) || 30;

    score = 0;
    document.getElementById("score").innerText = "";
    document.getElementById("timer").innerText = "Tempo: " + timeLeft;

    // Estado inicial de posição e direção
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 1;

    stripes.style.display = "none";
    ball.style.display = "block";

    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = "Tempo: " + timeLeft;
        if (timeLeft <= 0) stop();
    }, 1000);

  // Adicione esta variável no topo da função start()
    let diagonalStep = 0; 
    let forward = true;

    function animate() {
        const w = area.clientWidth;
        const h = area.clientHeight;
        const bW = ball.offsetWidth;
        const bH = ball.offsetHeight;

        if (selected === "diagonal") {
            // Criamos um "X" usando interpolação linear (LERP)
            // A velocidade é adaptada pelo tamanho da tela para manter a constância
            const stepSize = speedBase / 1000; 
            
            if (forward) diagonalStep += stepSize;
            else diagonalStep -= stepSize;

            if (diagonalStep >= 2) forward = false;
            if (diagonalStep <= 0) forward = true;

            if (diagonalStep <= 1) {
                // Primeira perna do X: Superior Esquerdo -> Inferior Direito (\)
                x = diagonalStep * (w - bW);
                y = diagonalStep * (h - bH);
            } else {
                // Segunda perna do X: Superior Direito -> Inferior Esquerdo (/)
                let t = diagonalStep - 1;
                x = (1 - t) * (w - bW);
                y = t * (h - bH);
            }
        }

        // --- RESTO DOS MOVIMENTOS (MANTIDOS) ---
        else if (selected === "saccade") {
            y = (h / 2) - (bH / 2);
            x += (speedBase * 4) * dx;
            if (x >= w - bW || x <= 0) { dx *= -1; x = (x <= 0) ? 0 : w - bW; }
        } 
        else if (selected === "smooth") {
            y = (h / 2) - (bH / 2);
            x += speedBase * dx;
            if (x >= w - bW || x <= 0) { dx *= -1; x = (x <= 0) ? 0 : w - bW; }
        } 
        else if (selected === "vertical") {
            x = (w / 2) - (bW / 2);
            y += speedBase * dy;
            if (y >= h - bH || y <= 0) { dy *= -1; y = (y <= 0) ? 0 : h - bH; }
        } 
        else if (selected === "vor") {
            x = (w / 2) - (bW / 2);
            y = (h / 2) - (bH / 2);
        }
        else if (selected === "optokinetic") {
            ball.style.display = "none";
            stripes.style.display = "block";
            let pos = parseFloat(stripes.dataset.pos || 0);
            pos -= speedBase;
            if (pos <= -w) pos = 0;
            stripes.style.transform = `translateX(${pos}px)`;
            stripes.dataset.pos = pos;
        }
        else if (selected === "random") {
            if (Math.random() < 0.02) {
                x = Math.random() * (w - bW);
                y = Math.random() * (h - bH);
            }
        }

        if (selected !== "optokinetic") {
            ball.style.left = x + "px";
            ball.style.top = y + "px";
        }

        animation = requestAnimationFrame(animate);
    }

    animate();
}
function stop() {
    cancelAnimationFrame(animation);
    clearInterval(countdown);
    document.getElementById("timer").innerText = "Sessão Finalizada";
}

function fullscreen() {
    const area = document.getElementById("exercise-area");
    if (area.requestFullscreen) area.requestFullscreen();
    // O navegador redimensiona a div, e o animate() pegará os novos W e H no próximo frame.
}

// Funções de Modal e Target mantidas conforme seu original
function hitTarget() { if (selected === "random") { score++; document.getElementById("score").innerText = "Acertos: " + score; } }
function showInfo(e, t) {
    e.stopPropagation();
    const info = { "saccade": "Sacadas rápidas.", "smooth": "Seguimento suave.", "vertical": "Cima e baixo.", "diagonal": "Movimento em X.", "vor": "Estabilização central.", "optokinetic": "Estimulação periférica.", "random": "Atenção aleatória." };
    document.getElementById("modal-text").innerText = info[t] || "";
    document.getElementById("modal").style.display = "block";
}
function closeModal() { document.getElementById("modal").style.display = "none"; }
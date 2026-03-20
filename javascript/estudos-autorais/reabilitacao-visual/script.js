let animation;
let selected="saccade";
let countdown;
let timeLeft=0;
let score=0;

function selectExercise(type){
selected=type;
}

function start(){

cancelAnimationFrame(animation);
clearInterval(countdown);

const ball=document.getElementById("ball");
const area=document.getElementById("exercise-area");
const stripes=document.getElementById("optokinetic");

let speed=parseInt(document.getElementById("speed").value);
timeLeft=parseInt(document.getElementById("time").value);

score=0;
document.getElementById("score").innerText="";

let x=(area.clientWidth/2)-(ball.offsetWidth/2);
let y=(area.clientHeight/2)-(ball.offsetHeight/2);

let dx=0;
let dy=0;

stripes.style.display="none";
ball.style.display="block";

setTimeout(()=>{dx=1;dy=1;},300);

countdown=setInterval(()=>{
timeLeft--;
document.getElementById("timer").innerText="Tempo: "+timeLeft;
if(timeLeft<=0) stop();
},1000);

function animate(){

let w=area.clientWidth;
let h=area.clientHeight;

let centerX=(w/2)-(ball.offsetWidth/2);
let centerY=(h/2)-(ball.offsetHeight/2);

if(selected==="saccade"){
y=centerY;
x+=speed*2*dx;
if(x>w-20||x<0) dx*=-1;
}

if(selected==="smooth"){
y=centerY;
x+=speed*dx;
if(x>w-20||x<0) dx*=-1;
}

if(selected==="vertical"){
x=centerX;
y+=speed*dy;
if(y>h-20||y<0) dy*=-1;
}

if(selected==="diagonal"){
x+=speed*dx;
y+=speed*dy;
if(x>w-20||x<0) dx*=-1;
if(y>h-20||y<0) dy*=-1;
}

if(selected==="vor"){
x=centerX;
y=centerY;
}

if(selected==="optokinetic"){
ball.style.display="none";
stripes.style.display="block";

let pos=parseInt(stripes.dataset.pos||0);
pos-=speed;

if(pos<=-w) pos=0;

stripes.style.transform=`translateX(${pos}px)`;
stripes.dataset.pos=pos;
}

if(selected==="random"){
if(Math.random()<0.02){
x=Math.random()*(w-20);
y=Math.random()*(h-20);
}
}

ball.style.left=x+"px";
ball.style.top=y+"px";

animation=requestAnimationFrame(animate);
}

animate();
}

function stop(){
cancelAnimationFrame(animation);
clearInterval(countdown);
}

function fullscreen(){
document.getElementById("exercise-area").requestFullscreen();
}

function hitTarget(){
if(selected==="random"){
score++;
document.getElementById("score").innerText="Acertos: "+score;
}
}

function showInfo(e,type){
e.stopPropagation();

let text="";

if(type==="saccade") text="Movimentos rápidos entre dois pontos. Treina velocidade ocular, leitura e coordenação. Indicado para hipofunção vestibular e déficit de atenção visual.";
if(type==="smooth") text="Seguimento contínuo do alvo. Trabalha controle ocular e estabilidade visual. Indicado em tontura e dificuldade de rastreamento.";
if(type==="vertical") text="Movimento vertical dos olhos. Importante para integração vestibular e coordenação superior/inferior.";
if(type==="diagonal") text="Movimento mais complexo. Aumenta demanda neurológica e controle motor ocular.";
if(type==="vor") text="Fixar olhar com movimento de cabeça. Fundamental na reabilitação vestibular.";
if(type==="optokinetic") text="Listras em movimento contínuo. Usado para dessensibilização visual e adaptação vestibular.";
if(type==="random") text="Alvo aleatório. Treina atenção, reação e coordenação.";

document.getElementById("modal-text").innerText=text;
document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}
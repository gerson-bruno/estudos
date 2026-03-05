// 1 - Adicionando eventos
const btn = document.querySelector('#my-button');
btn.addEventListener("click", function(){
    console.log("Clicou aqui!")
});
//A estrutura é basicamente: Selecionar o elemento, adicionar um evento, e depois a função que deve ser executada quando o evento acontecer. O evento pode ser click, mouseover, mouseout, keydown, keyup, etc. E a função pode ser anônima ou nomeada. O importante é que a função seja executada quando o evento acontecer.
//---------------------------------------------------------------


// 2 - Removendo eventos - não funciona com funções anônimas
const secondBtn = document.querySelector('#btn');
function imprimirMensagem(){
    console.log("Teste")
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector('#other-btn');
thirdBtn.addEventListener("click", () => {
    console.log("Evento Removido!");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

//Para verificar clica no primeiro botao e depois no segundo, retorna o clique no primeiro e você verá que ele não modifica mais no console (F12);
//---------------------------------------------------------------



// 3 - Argumento do Evento
const myTitle = document.querySelector('#my-title');
myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
    console.log("Título clícavel haha!")
});
//a function (event), mostra alguns detalhes sobre o evento.
//---------------------------------------------------------------



// 4 - Propagação 
// Dispara todos os eventos de elementos que estiverem ligados no HTML (dentro de um mesmo container).
const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector('#div-btn');

containerBtn.addEventListener("click", () =>{
    console.log("Evento 01")
});

btnInsideContainer.addEventListener("click",() => {
    console.log("Evento 02")
});

/* 
btnInsideContainer.addEventListener("click",(e) => {
    e.stopPropagation();
    console.log("Evento 02")
}); 

Aqui o Evento 1 não é acionado ao apertar o botão! 
*/
//---------------------------------------------------------------



// 5 - Removendo eventos padrões
const a = document.querySelector('a');
    a.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("Agora o link não funciona mais!")
        alert("Agora você não vai pro google! haha")
    })



/*
Eventos de Teclas:
KEYUP - ativa quando a tecla é solta;
    (exemplos: buscas)
KEYDOWN - ativa quando a tecla é pressionada.
    (exemplos: validação)
*/


// 6 - Eventos de teclas
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})


/* Outros eventos de mouse:
click: evento de clique;
mousedown: pressionou o botão do mouse;
mouseup: soltou o botão;
dblclick: clique duplo.
mousemove: detecta a posição do ponteiro do mouse;
*/

// 7 - Eventos de mouse
const mouse = document.querySelector('#mouse');
mouse.addEventListener("dblclick", () => {
    console.log("dois cliques aqui haha")
});


// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
   // console.log(`No eixo X: ${e.x}`);
   // console.log(`No eixo Y: ${e.y}`)
})

// 9 - Evento por Scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200)
        console.log("Passamos de 200px")
})

//adicionado ao window ao inves de ao document, pois o ponto de referencia aqui é a propria tela.
//No exemplo acima, podemos utilizar para fazer landing pages animadas, que aparecem ou desaparecem coisas de acordo com o rolar da tela.

// 10 - Evento de focus/blur
const input = document.querySelector('#my-input');

input.addEventListener("focus", (e) => {
    console.log("Entrou no Input!");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do imput!");
});

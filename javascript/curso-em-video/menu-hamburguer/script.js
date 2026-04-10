// BURGUER

const menuBurger = document.querySelector(".menu");

document.querySelector("#burger").addEventListener("click", () => {
    if (menuBurger.style.display === "none") {
        menuBurger.style.display = "block"; 
    } else {
        menuBurger.style.display = "none"; 
    }
});

// FRASE

const apareceu = document.querySelector(".apareceu");
const sumiu = document.querySelector(".sumiu");

apareceu.addEventListener("click", () => {
    apareceu.style.display = "none";
    sumiu.style.display = "block";
});

sumiu.addEventListener("click", () => {
    apareceu.style.display = "block";
    sumiu.style.display = "none";
});

// NUMEROS

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");

num1.addEventListener("click", () => {
    num1.style.display = "none";
    num2.style.display = "block";
});

num2.addEventListener("click", () => {
    num2.style.display = "none";
    num3.style.display = "block";
})

num3.addEventListener("click", () => {
    num3.style.display = "none";
    num1.style.display = "block";
})
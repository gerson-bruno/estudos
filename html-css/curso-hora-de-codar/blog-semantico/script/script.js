year = textcontent = document.getElementById("year");
year.textContent = new Date().getFullYear();


let button = document.getElementById("dark");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
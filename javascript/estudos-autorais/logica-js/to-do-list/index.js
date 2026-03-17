document.querySelector(".addbtn").addEventListener("click", () => {
    const inputValue = document.querySelector(".inputtxt").value;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.textContent = inputValue;
    document.querySelector(".list").appendChild(li);
    li.appendChild(btn)
    btn.textContent = "Remover";
    btn.addEventListener("click", () => {
        btn.parentElement.remove()
    })
    document.querySelector(".inputtxt").value = "";
});


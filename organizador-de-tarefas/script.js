// ===============================
// FUNÇÃO DE DRAG
// ===============================
function enableDrag(card) {
    card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });
}

// ATIVA DRAG NOS CARDS EXISTENTES
document.querySelectorAll(".kanban-card").forEach(enableDrag);

// ===============================
// DRAG AND DROP NAS COLUNAS
// ===============================
document.querySelectorAll(".kanban-cards").forEach(column => {
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.classList.add("cards-hover");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("cards-hover");
    });

    column.addEventListener("drop", () => {
        column.classList.remove("cards-hover");
        const draggingCard = document.querySelector(".kanban-card.dragging");
        if (draggingCard) {
            column.appendChild(draggingCard);
        }
    });
});

// ===============================
// MODAL DE ADIÇÃO DE TAREFA
// ===============================
const modal = document.getElementById("taskModal");
const modalTitleInput = document.getElementById("modalTaskTitle");
const confirmBtn = document.getElementById("confirmTask");
const cancelBtn = document.getElementById("cancelTask");

let currentColumn = null;

document.querySelectorAll(".add-card").forEach(button => {
    button.addEventListener("click", () => {
        currentColumn = button.closest(".kanban-column").querySelector(".kanban-cards");
        modal.classList.add("active");
        modalTitleInput.value = "";
        modalTitleInput.focus();
    });
});

cancelBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// ===============================
// CRIAR CARD
// ===============================
confirmBtn.addEventListener("click", () => {
    const title = modalTitleInput.value.trim();
    if (!title || !currentColumn) return;

    const priority = document.querySelector('input[name="priority"]:checked').value;

    const priorityMap = {
        low: "Baixa Prioridade",
        medium: "Média Prioridade",
        high: "Alta Prioridade"
    };

    const card = document.createElement("div");
    card.classList.add("kanban-card");
    card.setAttribute("draggable", "true");

    card.innerHTML = `
        <div class="badge ${priority}">
            <span>${priorityMap[priority]}</span>
        </div>
        <p class="card-title">${title}</p>
        <div class="card-infos">
            <div class="card-icons">
                <button class="edit">Editar</button>
                <button class="remove">Remover</button>
            </div>
            <div class="user">
                <img src="img/avatar.jpg" class="profile">
            </div>
        </div>
    `;

    enableDrag(card);

    card.querySelector(".remove").addEventListener("click", () => card.remove());

    card.querySelector(".edit").addEventListener("click", () => {
        const newTitle = prompt("Editar tarefa:", title);
        if (newTitle) {
            card.querySelector(".card-title").textContent = newTitle;
        }
    });

    currentColumn.appendChild(card);
    modal.classList.remove("active");
});

// ===============================
// LIXEIRA DRAG & DROP
// ===============================
const trash = document.getElementById("trash");

trash.addEventListener("dragover", e => {
    e.preventDefault();
    trash.classList.add("hovered");
});

trash.addEventListener("dragleave", () => {
    trash.classList.remove("hovered");
});

trash.addEventListener("drop", () => {
    const draggingCard = document.querySelector(".kanban-card.dragging");
    if (!draggingCard) return;

    trash.classList.remove("hovered");

    const confirmDelete = confirm("Tem certeza que deseja apagar esta tarefa?");
    if (confirmDelete) {
        draggingCard.remove();
    } else {
        draggingCard.classList.remove("dragging");
    }
});


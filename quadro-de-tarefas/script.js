document.querySelectorAll(".kanban-card").forEach(card => {
    card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
    });
});

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


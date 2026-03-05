// seleção de elementos
const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTitle = document.querySelector('#multiplication-title span');
const multiplicationTable = document.querySelector('#multiplication-operations');

// função para criar tabuada
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;
        multiplicationTable.innerHTML += `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;
    }
};

// evento submit
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    multiplicationTitle.textContent = multiplicationNumber;
    createTable(multiplicationNumber, multiplicatorNumber);
});
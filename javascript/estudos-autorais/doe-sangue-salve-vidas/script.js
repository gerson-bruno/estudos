// Form Submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado(a) pelo contato, sua mensagem foi enviada com sucesso! Em breve retornaremos o contato.');
    this.reset();
});

// Automatic year update
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Blood compatibility
function showCompatibility() {
    const bloodType = document.getElementById("bloodType").value;
    const resultDiv = document.getElementById("compatibilityResult");

    const compatibilityData = {
        "A+": { receive: "A+, A-, O+, O-", donate: "A+, AB+" },
        "A-": { receive: "A-, O-", donate: "A+, A-, AB+, AB-" },
        "B+": { receive: "B+, B-, O+, O-", donate: "B+, AB+" },
        "B-": { receive: "B-, O-", donate: "B+, B-, AB+, AB-" },
        "AB+": { receive: "Todos os tipos", donate: "AB+" },
        "AB-": { receive: "A-, B-, AB-, O-", donate: "AB+, AB-" },
        "O+": { receive: "O+, O-", donate: "A+, B+, AB+, O+" },
        "O-": { receive: "O-", donate: "Todos os tipos" }
    };

    if (bloodType === "") {
        resultDiv.innerHTML = "";
        return;
    }

    const data = compatibilityData[bloodType];

    resultDiv.innerHTML = `
        <p><strong>Você pode receber de:</strong> ${data.receive}</p>
        <p><strong>Você pode doar para:</strong> ${data.donate}</p>
    `;
}
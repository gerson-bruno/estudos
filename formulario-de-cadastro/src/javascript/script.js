document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       OLHO DA SENHA
    =============================== */
    const passwordIcons = document.querySelectorAll('.password-icon');

    passwordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.closest('.input-field')?.querySelector('.form-control');
            if (!input) return;

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });

    /* ===============================
       VALIDAÇÃO DO FORM
    =============================== */
    const form = document.getElementById('form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        /* CAMPOS OBRIGATÓRIOS */
        const requiredFields = form.querySelectorAll('.form-control:not([data-optional])');

        requiredFields.forEach(field => {
            removeError(field);

            if (!field.value.trim()) {
                showError(field, 'Campo obrigatório');
                isValid = false;
            }
        });

        /* VALIDAÇÃO DE GÊNERO */
        const genderInputs = form.querySelectorAll('input[name="gender"]');

        if (genderInputs.length) {
            removeGenderError();

            const genderChecked = Array.from(genderInputs).some(input => input.checked);

            if (!genderChecked) {
                showGenderError('Campo obrigatório');
                isValid = false;
            }
        }

        /* VALIDAÇÃO DE SENHAS IGUAIS */
        const password = form.querySelector('#password');
        const confirmPassword = form.querySelector('#confirm_password');

        if (password && confirmPassword) {
            removeError(confirmPassword);

            if (
                password.value.trim() &&
                confirmPassword.value.trim() &&
                password.value !== confirmPassword.value
            ) {
                showError(confirmPassword, 'As senhas não coincidem');
                isValid = false;
            }
        }

        /* SUBMIT FINAL */
        if (isValid) {
            form.submit();
        }
    });

    /* ===============================
       FUNÇÕES DE ERRO
    =============================== */
    function showError(input, message) {
        const inputBox = input.closest('.input-box');
        if (!inputBox) return;

        const error = document.createElement('div');
        error.classList.add('error-message');
        error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;

        inputBox.appendChild(error);
    }

    function removeError(input) {
        const inputBox = input.closest('.input-box');
        if (!inputBox) return;

        const error = inputBox.querySelector('.error-message');
        if (error) error.remove();
    }

    function showGenderError(message) {
        const container = document.querySelector('.radio-container');
        if (!container) return;

        const error = document.createElement('div');
        error.classList.add('error-message');
        error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;

        container.appendChild(error);
    }

    function removeGenderError() {
        const container = document.querySelector('.radio-container');
        if (!container) return;

        const error = container.querySelector('.error-message');
        if (error) error.remove();
    }

});

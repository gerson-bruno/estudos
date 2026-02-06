document.addEventListener('DOMContentLoaded', () => {
    const passwordIcons = document.querySelectorAll('.password-icon');

    passwordIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const input = icon.closest('.input-field').querySelector('.form-control');

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
});



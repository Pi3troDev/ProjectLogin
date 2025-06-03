// Espera o carregamento do HTML
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Adiciona o listener de envio
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita recarregar a página

        const login = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;

        if (login === "admin@gmail.com" && senha === "admin") {
            alert('Sucesso');
            location.href = "login.html"
        } else {
            alert('Usuário ou senha incorretos');
        }
    });
});

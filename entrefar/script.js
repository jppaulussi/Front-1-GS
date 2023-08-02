document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Aqui você pode adicionar a lógica de autenticação para validar o login.
    // Por exemplo, pode verificar se o usuário e a senha são válidos.
    // Vamos usar um exemplo simples aqui:
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuario" && password === "senha") {
        // Login bem sucedido
        showMessage("Login realizado com sucesso!");
    } else {
        // Login falhou
        showMessage("Usuário ou senha inválidos. Por favor, tente novamente.", true);
    }
});

function showMessage(message, isError = false) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = isError ? "red" : "green";
}
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;

    if (password !== confirmPassword) {
        showMessage("As senhas não coincidem. Por favor, tente novamente.", true);
    } else {
        // Aqui você pode adicionar a lógica para salvar os dados de cadastro em um banco de dados ou em alguma estrutura de armazenamento.
        // Por exemplo, você pode enviar esses dados para um servidor utilizando uma requisição HTTP.

        showMessage("Cadastro realizado com sucesso!");
    }
});

function showMessage(message, isError = false) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = isError ? "red" : "green";
}


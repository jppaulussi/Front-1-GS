
document.getElementById("loginForm").addEventListener("submit", function(event) {
  var nomeCompleto = document.getElementById("nomeCompleto").value;
  var endereco = document.getElementById("endereco").value;
  var itemDoacao = document.getElementById("itemDoacao").value;

  if (nomeCompleto.trim() === '' || endereco.trim() === '' || itemDoacao.trim() === '') {
    event.preventDefault(); // Impede o envio do formulário

    alert("Por favor, preencha todos os campos."); // Exibe uma mensagem de erro
  }
  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  emailForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value.trim();

      if (!validateEmail(email)) {
          emailError.textContent = 'E-mail inválido';
          emailInput.classList.add('error');
      } else {
          emailError.textContent = '';
          emailInput.classList.remove('error');
          // Aqui você pode prosseguir com o envio dos dados ou outras ações necessárias
      }
  });

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
      return emailRegex.test(email);
  }

  const url = 'http://localhost:8080/cadastrar';
  function obterValoresFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const login = document.getElementById('Login').value;
    const endereco = document.getElementById('Endereço').value;
    const senha = document.getElementById('senha').value;

    return {
        nome,
        email,
        login,
        endereco,
        senha
    };
}
  
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
      .then(response => {
          if (response.ok) {
              // Exibe o alerta de confirmação
              alert('Usuário cadastrado com sucesso!');
              // Redireciona para a página principal
              window.location.href = 'pagina_principal.html';
          } else {
              throw new Error('Erro ao cadastrar usuário.');
          }
      })
      .catch(error => {
          console.error(error);
      });
  



  
});













document.getElementById("loginForm").addEventListener("submit", function(event) {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var endereco = document.getElementById("endereco").value;
    var itemDoacao = document.getElementById("itemDoacao").value;
  
    if (nomeCompleto.trim() === '' || endereco.trim() === '' || itemDoacao.trim() === '') {
      event.preventDefault(); // Impede o envio do formulário
  
      alert("Por favor, preencha todos os campos."); // Exibe uma mensagem de erro
    }});
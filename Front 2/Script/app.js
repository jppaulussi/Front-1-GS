// Função para buscar as informações do banco de dados
function buscarInformacoes() {
  // Simulando a busca das informações do banco de dados
  const informacoes = [
      { nome: 'João Silva', endereco: 'Rua A, 123', alimento: 'Arroz', dataColeta: '10/05/2023', latitude: -23.550520, longitude: -46.633308 },
      { nome: 'Maria Santos', endereco: 'Av. B, 456', alimento: 'Feijão', dataColeta: '15/05/2023', latitude: -23.562656, longitude: -46.654451 },
      { nome: 'Carlos Oliveira', endereco: 'Travessa C, 789', alimento: 'Macarrão', dataColeta: '20/05/2023', latitude: -23.548939, longitude: -46.638823 }
  ];

  const cardsContainer = document.getElementById('cardsContainer');

  // Iterar sobre as informações e criar os cards
  informacoes.forEach(function (info) {
      const card = document.createElement('div');
      card.className = 'card';

      const nomeElement = document.createElement('h3');
      nomeElement.textContent = 'Nome: ' + info.nome;

      const enderecoElement = document.createElement('p');
      enderecoElement.textContent = 'Endereço: ' + info.endereco;

      const alimentoElement = document.createElement('p');
      alimentoElement.textContent = 'Alimento: ' + info.alimento;

      const dataColetaElement = document.createElement('p');
      dataColetaElement.textContent = 'Data de Coleta: ' + info.dataColeta;

      card.appendChild(nomeElement);
      card.appendChild(enderecoElement);
      card.appendChild(alimentoElement);
      card.appendChild(dataColetaElement);

      cardsContainer.appendChild(card);
  });
}

// Função para inicializar o mapa
function initMap() {
  // Coordenadas do centro do mapa
  const center = { lat: -23.550520, lng: -46.633308 };

  // Criar o mapa
  const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
  });

  // Adicionar marcadores para cada informação
  const informacoes = [
      { nome: 'João Silva', endereco: 'Rua A, 123', alimento: 'Arroz', dataColeta: '10/05/2023', latitude: -23.550520, longitude: -46.633308 },
      { nome: 'Maria Santos', endereco: 'Av. B, 456', alimento: 'Feijão', dataColeta: '15/05/2023', latitude: -23.562656, longitude: -46.654451 },
      { nome: 'Carlos Oliveira', endereco: 'Travessa C, 789', alimento: 'Macarrão', dataColeta: '20/05/2023', latitude: -23.548939, longitude: -46.638823 }
  ];

  informacoes.forEach(function (info) {
      const marker = new google.maps.Marker({
          position: { lat: info.latitude, lng: info.longitude },
          map: map,
          title: info.nome
      });
  });
}

// Função para deslogar
function deslogar() {
  // Implemente as ações necessárias para deslogar o usuário aqui
  alert('Usuário deslogado com sucesso!');
  // Redirecionar para a página de login
  window.location.href = 'LoginTela.html';
}

// Chamar as funções ao carregar a página
window.onload = function () {
  buscarInformacoes();

  document.getElementById("loginForm").addEventListener("submit", function (event) {
      var nomeCompleto = document.getElementById("nomeCompleto").value;
      var endereco = document.getElementById("endereco").value;
      var itemDoacao = document.getElementById("itemDoacao").value;

      if (nomeCompleto.trim() === '' || endereco.trim() === '' || itemDoacao.trim() === '') {
          event.preventDefault(); // Impede o envio do formulário
          alert("Por favor, preencha todos os campos."); // Exibe uma mensagem de erro
      }
  });
};

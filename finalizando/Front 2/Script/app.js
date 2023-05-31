const loginUrl = 'http://ec2-54-94-242-3.sa-east-1.compute.amazonaws.com:8080/usuarios/logar';
const apiUrl = 'http://ec2-54-94-242-3.sa-east-1.compute.amazonaws.com:8080/admin';

function buscarInformacoes() {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token não encontrado. O usuário não está logado.');
    return;
  }

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição.');
      }
      return response.json();
    })
    .then(data => {
      const cardsContainer = document.getElementById('cardsContainer');

      data.forEach(function (info) {
        const card = document.createElement('div');
        card.className = 'card';

        const nomeElement = document.createElement('h3');
        nomeElement.textContent = 'Nome: ' + info.nomeUsuario;

        const enderecoElement = document.createElement('p');
        enderecoElement.textContent = 'Endereço: ' + info.endereco;

        const alimentoElement = document.createElement('p');
        alimentoElement.textContent = 'Alimento: ' + info.alimento;

        const dataColetaElement = document.createElement('p');
        dataColetaElement.textContent = 'Data de Coleta: ' + info.data_coleta;

        card.appendChild(nomeElement);
        card.appendChild(enderecoElement);
        card.appendChild(alimentoElement);
        card.appendChild(dataColetaElement);

        cardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
}

// Chamar a função buscarInformacoes após o login bem-sucedido (após o redirecionamento)
if (window.location.href.includes('Infos.HTML')) {
  buscarInformacoes();
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


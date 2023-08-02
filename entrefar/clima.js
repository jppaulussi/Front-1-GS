const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave de API do OpenWeatherMap

// Função para obter dados climáticos da cidade selecionada
function getWeatherData() {
    const selectedCity = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            showWeatherData(data);
        })
        .catch(error => {
            console.error('Erro ao obter dados climáticos:', error);
        });
}

// Função para mostrar os dados climáticos na página
function showWeatherData(data) {
    const cityName = data.name;
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;

    document.getElementById('city-name').innerText = `Cidade: ${cityName}`;
    document.getElementById('weather-description').innerText = `Clima: ${weatherDescription}`;
    document.getElementById('temperature').innerText = `Temperatura: ${temperature} °C`;
}

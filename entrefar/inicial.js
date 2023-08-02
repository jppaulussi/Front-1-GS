// Dados fictícios da temperatura do mar
const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
        {
            label: 'Temperatura do Mar (°C)',
            data: [20, 23, 22, 25, 24, 26],
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            borderWidth: 1,
        }
    ]
};

// Opções do gráfico
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
        }
    }
};

// Criação do gráfico de barras
const ctx = document.getElementById('temperatureChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

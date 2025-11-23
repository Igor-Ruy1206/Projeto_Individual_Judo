const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');


new Chart(ctx, {
type: 'bar',
data: {
    labels: ['João', 'Maria', 'Ana'],
    datasets: [{
        label: 'Pontuação',
        data: [55, 10, 30],
        borderWidth: 5,
        backgroundColor: '#637CEF',
        color: '#637CEF',
        borderColor: '#637CEF',
        barPercentage: 0.4
    }]
},
options: {
    plugins: {
        title: {
            display: true,
            text: 'Painel geral dos menores tutelados',
            font: {
                size: 30
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            min: 0,
            max: 60,
            title: {
                display: true,
                text: '(%)'
            },
            ticks: {
                stepSize: 10
            }
        }
    }
}
})

new Chart(ctx2, {
type: 'line',
data: {
    labels: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
    datasets: [{
    label: '13/10/2025',
    data: [21, 23, 17, 16, 24, 29, 26, 31, 35, 41],
    borderWidth: 5,
    backgroundColor: '#637CEF',
    color: '#637CEF',
    borderColor: '#637CEF',
    tension: 0.3
    }]
},
options: {
    plugins: {
        title: {
            display: true,
            text: 'Histórico de Registros do Sensor 032-OES',
            font: {
                size: 30
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            min: 0,
            max: 60,
            title: {
                display: true,
                text: '(%)'
            },
            ticks: {
                stepSize: 10
            }
        }
    }
}
})
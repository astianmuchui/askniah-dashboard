const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [1200, 1900, 300, 2500, 200, 1800, 400],
            backgroundColor: 'rgba(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.5
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false // Disables the grid lines on the x-axis
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false // Disables the grid lines on the y-axis
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Revenue for the Week'
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true
                }
            }
        }
    }
});

const appointments_ctx = document.getElementById('appointmentsChart').getContext('2d');
const appointmentsChart = new Chart(appointments_ctx, {
    type: 'pie',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Appointments',
            data: [14, 12, 8, 4, 16, 25, 38],
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 99, 132)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 32)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Appointments this week'
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    padding: 20,

                }
            }
        },
        layout: {
            padding: 10
        }
    }
});

const patientSignups_ctx = document.getElementById('patientsChart').getContext('2d');
const patientSignupsChart = new Chart(patientSignups_ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], // Updated labels to days of the week
        datasets: [{
            label: 'Patient Signups',
            data: [5, 8, 3, 6, 10, 7, 4], // Sample data for each day
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 99, 132)',
                'rgba(255, 206, 86)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 32)',
                'rgba(153, 102, 255)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 32, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Patient Signups'
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    }
});
const tasks_ctx = document.getElementById('tasksChart').getContext('2d');
const tasksChart = new Chart(tasks_ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], // Updated labels to days of the week
        datasets: [{
            label: 'Tasks',
            data: [8, 12, 6, 10, 15, 9, 7], // Sample data for each day
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 99, 132)',
                'rgba(255, 206, 86)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 32)',
                'rgba(153, 102, 255)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 32, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Tasks'
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    }
});

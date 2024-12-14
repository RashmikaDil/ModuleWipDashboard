import React from 'react';
import { Bar } from 'react-chartjs-2';
import homeData from "../data/homeData";
import { Chart as ChartJS, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ChartComponent() {
    const tealColors = [
        'rgba(0, 128, 128, 0.8)',   // Teal
        'rgba(0, 150, 136, 0.8)',   // Light Teal
        'rgba(0, 105, 92, 0.8)',    // Dark Teal
        'rgba(64, 224, 208, 0.8)',  // Turquoise
        'rgba(72, 209, 204, 0.8)',  // Medium Turquoise
    ];

    const chartData = {
        labels: homeData.map(data => data.line),
        datasets: [
            {
                label: 'WIP Data',
                data: homeData.map(data => data.wip),
                backgroundColor: tealColors,
                borderColor: 'rgba(255, 255, 255, 0.6)',
                borderWidth: 1
            }
        ]
    };

    let delayed;
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white' // White color for legend labels
                }
            },
            title: {
                display: true,
                text: 'WIP Data by Line',
                color: 'white', // White color for title
                font: {
                    size: 18
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 128, 128, 0.8)', // Semi-transparent teal for tooltip background
                titleColor: 'white',
                bodyColor: 'white',
                borderColor: 'white',
                borderWidth: 1
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white' // White color for x-axis labels
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Very light white for grid lines
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' // White color for y-axis labels
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Very light white for grid lines
                }
            }
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}

export default ChartComponent;
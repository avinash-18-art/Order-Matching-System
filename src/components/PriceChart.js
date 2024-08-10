import React, { useEffect, useState } from 'react';
import './PriceChart.css'; // Import the CSS file
import Chart from 'chart.js/auto';

function PriceChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        async function fetchChartData() {
            const response = await fetch('/completed_orders');
            const data = await response.json();
            setChartData(data);
        }

        fetchChartData();
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('priceChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.map(order => new Date(order.timestamp).toLocaleDateString()),
                datasets: [{
                    label: 'Price',
                    data: chartData.map(order => order.price),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Price'
                        }
                    }
                }
            }
        });
    }, [chartData]);

    return (
        <div className="price-chart">
            <h2>Price Chart</h2>
            <canvas id="priceChart"></canvas>
        </div>
    );
}

export default PriceChart;

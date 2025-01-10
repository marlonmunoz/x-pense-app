import React from "react";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CryptoGraph = ({ data }) => {
    if(!data || !Array.isArray(data)) {
        return <span>Loading...</span>
    }

    const chartData = {
        labels: data.map(entry => new Date(entry.last_updated).toLocaleTimeString()),
        datasets: [
            {
                label: 'Bitcoin',
                data: data.filter(entry => entry.id === 'bitcoin').map(entry => entry.current_price),
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
            },
            {
                label: 'Ethereum',
                data: data.filter(entry => entry.id === 'ethereum'). map(entry => entry.current_price),
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
            }
        ]
    };
    return <Line data={chartData} />
}

export default CryptoGraph;

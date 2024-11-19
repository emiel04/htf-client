import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PieChart = ({ completed, max }) => {
    // Calculate the percentage of completion
    const percentageCompleted = (completed / max) * 100;
    const percentageRemaining = 100 - percentageCompleted;

    // Define chart data
    const chartData = {
        labels: ['Completed', 'Remaining'], // Labels for the chart
        datasets: [
            {
                label: 'Completion Progress',
                data: [percentageCompleted, percentageRemaining], // Data values corresponding to completed and remaining
                backgroundColor: ['#08d45c', '#981a1a'],
                textStrokeColor: 'black',
                hoverOffset: 4,
            },
        ],
    };

    // Define chart options
    const chartOptions = {
        responsive: true, // Make the chart responsive
        plugins: {
            legend: {
                position: 'bottom', // Move the labels to the bottom
                labels: {
                    font: {
                        size: 14, // Adjust font size of the labels
                    },
                    color: '#ffffff', // Set the legend text color to white
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="flex justify-center items-center">
            {/* Pie chart with custom width and height */}
            <Pie data={chartData} options={chartOptions} height={200} width={200} />
        </div>
    );
};

export default PieChart;

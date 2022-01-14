import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
    const data = {
        labels: ['Completed', 'Not Completed'],
        datasets: [
            {
                label: ['Completed(%)', 'Not Completed(%)'],
                data: [localStorage.getItem('CompletedPercentage'), localStorage.getItem('NotCompletedPercentage')],
                backgroundColor: ['rgba(255, 205, 86, 1)', 'rgba(255, 99, 132, 1)']
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        }
    };

    return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;

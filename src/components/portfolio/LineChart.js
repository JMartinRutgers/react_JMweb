import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import "./portfolio.css";


const LineChart = () => {
    return ( <
        Line data = {
            {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'Charts Any where',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'purple',

                    borderColor: [
                        'rgba(250, 99, 132, 0.2)',
                        'rgba(220, 165, 232, 0.2)',
                        'rgba(250, 39, 132, 0.2)',
                        'rgba(223, 92, 12, 0.2)',
                        'rgba(245, 893, 232, 0.2)',


                    ],
                    borderWidth: 2,

                }, ],
            }
        }
        height = { 100 }
        width = { 100 }
        options = {
            {
                maintainAspectRatio: false,
                scales: {
                    yAxes: []
                }
            }
        }
        />    
    )
}
export default LineChart;
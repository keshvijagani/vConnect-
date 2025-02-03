import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const MeetingChart = ({meetingsData}) => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Meeting Booked",
                data: meetingsData || [10, 15, 8, 20, 25, 30, 5, 12, 18, 22, 27, 35],
                pointRadius: 5,
                borderWidth: 2,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",

            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            }
        },
        scales: {
            y: {
            beginAtZero: true,
            }
        }
    }

    return(
    
        <div className="chart-table-container mt-4 p-4" style={{width: "100%"}} >
           <Line data={data} options={options} />
        </div>
    )
}

export default MeetingChart;
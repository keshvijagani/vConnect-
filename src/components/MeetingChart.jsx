import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Table } from "react-bootstrap";

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
            }
        },
        scales: {
            y: {
            beginAtZero: true,
            }
        }
    }

    return(
    
        <div className="card shadow-sm mt-4 p-4 mx-auto" style={{maxHeight:"600px"}}>
          <h3 className="text-start text-primary mb-3 fs-6">Meetings & Employees</h3>
            <div className="chart-container" >
            <Line data={data} options={options} />
            </div>
            </div>


   
   

    
    )
}

export default MeetingChart;
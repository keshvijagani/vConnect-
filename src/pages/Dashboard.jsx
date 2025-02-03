import React, { useEffect, useState } from 'react'
import MyNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MeetingChart from '../components/MeetingChart';
import { Container, Row, Col } from 'react-bootstrap';
import MeetingTable from '../components/MeetingTable';


const meetings = [
  {name: "Project Discussion", date: "31 Jan 2025", starttime: "9AM", endtime: "10:30AM", link: "#" },
  {name: "Client Call", date: "31 Jan 2025", starttime: "3PM", endtime: "4PM", link: "#"  },
  {name: "Team Discussion", date: "31 Jan 2025", starttime: "11AM", endtime: "1PM", link: "#"  }
]

const Dashboard = () => {
  const [meetingsData, setMeetingsData] = useState([]);

  useEffect(() => {
    
    setMeetingsData([10, 20, 30, 40, 50, 60, 15, 25, 35, 45, 55, 65]);
  }, []);

  return (
  
      <Container fluid className="p-4">
          <h3 className="mb-4">Dashboard</h3>
          <Row className="justify-content-start">
            <Col md={8} className="d-flex justify-content-center">
              <MeetingChart meetingsData={meetingsData} />
            </Col>
          </Row>

          <div>
            <h2 className='mt-4'>Today's Meeting Booking</h2>
            <MeetingTable meetings={meetings} />
          </div>
        </Container>
        
  )
}

export default Dashboard;

import React, { useEffect, useState } from 'react'
import MyNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MeetingChart from '../components/MeetingChart';
import { Container, Row, Col } from 'react-bootstrap';

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
        </Container>
        
  )
}

export default Dashboard;

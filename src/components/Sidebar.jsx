import React from 'react';
import { Nav } from "react-bootstrap";
import { FaTachometerAlt, FaCog, FaSignOutAlt, } from "react-icons/fa";
import { MdDataThresholding } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";



function Sidebar() {
  return (
    <div className='bg-light shadow text-white p-2 d-flex flex-column' style={{ width: "250px", height: "calc(100vh - 50px)" }}>
      <Nav className="flex-column flex-grow-1">
        <Nav.Link href="/dashboard" className="text-black d-flex align-items-center mt-3"><FaTachometerAlt style={{ marginRight: "10px", fontSize: "20px" }} /> Dashboard</Nav.Link>
        <Nav.Link href="#" className="text-black d-flex align-items-center"><FaCog style={{ marginRight: "10px", fontSize: "20px" }} /> Settings</Nav.Link>
        <Nav.Link href="/tabledata" className="text-black d-flex align-items-center "><MdDataThresholding style={{ marginRight: "10px", fontSize: "20px" }} /> Table Data</Nav.Link>
        <Nav.Link href="/meetingdata" className="text-black d-flex align-items-center "><SiGotomeeting style={{ marginRight: "10px", fontSize: "20px" }} />Meeting Data</Nav.Link>
      </Nav>


      <div className='p-3'>
        <Nav.Link href="#" className="text-black d-flex align-items-center"><FaSignOutAlt style={{ marginRight: "10px", fontSize: "20px" }} />Sign Out</Nav.Link>
      </div>

    </div>
  )
}

export default Sidebar;
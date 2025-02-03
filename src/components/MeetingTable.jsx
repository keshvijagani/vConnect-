import React from 'react'
import { Table } from "react-bootstrap";
import { Button } from 'react-bootstrap';


const MeetingTable = ({meetings}) => {
    return(
       
                <Table>
                    <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.name}</td>
              <td>{meeting.date}</td>
              <td>{meeting.starttime}</td>
              <td>{meeting.endtime}</td>
             <td>
                <Button varient="primary">Join</Button>
              </td>
            </tr>
          ))}
        </tbody>
                </Table>
         
    )
}
     


export default MeetingTable

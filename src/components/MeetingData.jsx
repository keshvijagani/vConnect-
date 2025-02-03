import React, { useEffect, useState } from 'react';
import "../assets/style/MeetingData.css";
import axios from 'axios';
import moment from 'moment';

function MeetingData() {
    const [data, setData] = useState([]);
    const [mname, setMname] = useState('');
    const [mdate, setMdate] = useState(''); 
    const [mstime, setMstime] = useState('');
    const [metime, setMetime] = useState('');
    const [memail, setMemail] = useState('');  // New email state
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(res => setData(res.data)) 
            .catch(er => {
                setError('Failed to fetch data');
                console.log(er);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = (data.length + 1).toString(); 

        const newMeeting = {
            id: id,
            name: mname,
            date: moment(mdate).format('YYYY-MM-DD'), 
            starttime: mstime,
            endtime: metime,
            email: memail  // Include email in the new meeting object
        };

        axios.post('http://localhost:3000/data', newMeeting)
            .then(res => {
                console.log("Meeting added:", res.data);
                setData([...data, res.data]); 
                setMname('');
                setMdate('');
                setMstime('');
                setMetime('');
                setMemail('');  // Reset the email field
            })
            .catch(err => {
                setError('Failed to add meeting');
                console.log(err);
            });
    };

    return (
        <div className='MeetingData'>
            {error && <div className="error">{error}</div>}  

            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text' 
                        placeholder='Enter Your Name' 
                        value={mname} 
                        required 
                        onChange={e => setMname(e.target.value)} 
                    />
                    <input 
                        type='date' 
                        placeholder='Meeting Date' 
                        value={mdate} 
                        required 
                        onChange={e => setMdate(e.target.value)} 
                    />
                    <input 
                        type='time' 
                        placeholder='Meeting Start Time' 
                        value={mstime} 
                        required 
                        onChange={e => setMstime(e.target.value)} 
                    />
                    <input 
                        type='time' 
                        placeholder='Meeting End Time' 
                        value={metime} 
                        required 
                        onChange={e => setMetime(e.target.value)} 
                    />
                    <input 
                        type='email'  // New input for email
                        placeholder='Enter Your Email' 
                        value={memail} 
                        required 
                        onChange={e => setMemail(e.target.value)} 
                    />
                    <button type="submit">Add</button>
                </form>
            </div>

            <table className='header'>
                <thead>
                    <tr>
                        <th>Meeting Name</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Email</th>  {/* New column for email */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((meeting) => (
                        <tr key={meeting.id}>  
                            <td>{meeting.name}</td>
                            <td>{moment(meeting.date).format('MMMM Do YYYY')}</td>  
                            <td>{meeting.starttime}</td>
                            <td>{meeting.endtime}</td>
                            <td>{meeting.email}</td>  {/* Display email */}
                            <td>
                                <button>Join</button>                                
                                <button>Add</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MeetingData;

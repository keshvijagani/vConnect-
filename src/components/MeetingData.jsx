// import React, { useEffect, useState } from 'react';
// import "../assets/style/MeetingData.css";
// import axios from 'axios';
// import moment from 'moment';
// import { gapi } from 'gapi-script';

// function MeetingData() {
//     const [data, setData] = useState([]);
//     const [mname, setMname] = useState('');
//     const [mdate, setMdate] = useState("2025-01-01");
//     const [mstime, setMstime] = useState("00:00");
//     const [metime, setMetime] = useState("00:00");
//     const [error, setError] = useState('');
//     const [googleAuth, setGoogleAuth] = useState(null);

//     useEffect(() => {
//         gapi.load('client:auth2', () => {
//             gapi.auth2.init({
//                 client_id: '282596581039-t4lu0uvmoe8ovcqtsffpik8brnu3225m.apps.googleusercontent.com',
//             }).then(auth2 => {
//                 setGoogleAuth(auth2);
//             });
//         });

//         axios.get('http://localhost:3000/data')
//             .then(res => setData(res.data))
//             .catch(er => {
//                 setError('Failed to fetch data');
//                 console.log(er);
//             });
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const id = (data.length + 1).toString();
//         const newMeeting = {
//             id: id,
//             name: mname,
//             date: moment(mdate).format('YYYY-MM-DD'),
//             starttime: mstime,
//             endtime: metime,
//             meetLink: "",  // Placeholder for the Google Meet link
//         };

//         if (googleAuth?.isSignedIn.get()) {
//             const meetLink = await createGoogleMeetLink(newMeeting);
//             newMeeting.meetLink = meetLink;
//         } else {
//             alert('Please sign in to Google first');
//             return;
//         }

//         axios.post('http://localhost:3000/data', newMeeting)
//             .then(res => {
//                 setData([...data, res.data]);
//                 setMname('');
//                 setMdate('2025-01-01');
//                 setMstime('00:00');
//                 setMetime('00:00');
//             })
//             .catch(err => {
//                 setError('Failed to add meeting');
//                 console.log(err);
//             });
//     };

//     const createGoogleMeetLink = (meeting) => {
//         return new Promise((resolve, reject) => {
//             const event = {
//                 summary: meeting.name,
//                 description: 'Meeting created via Google Meet integration',
//                 start: {
//                     dateTime: `${meeting.date}T${meeting.starttime}:00`,
//                     timeZone: 'America/Los_Angeles',
//                 },
//                 end: {
//                     dateTime: `${meeting.date}T${meeting.endtime}:00`,
//                     timeZone: 'America/Los_Angeles',
//                 },
//                 conferenceData: {
//                     createRequest: {
//                         requestId: 'sample1234',
//                         conferenceSolutionKey: { type: 'hangoutsMeet' },
//                     },
//                 },
//                 attendees: [{ email: 'example@example.com' }],
//             };

//             gapi.client.load('calendar', 'v3', () => {
//                 gapi.client.calendar.events.insert({
//                     calendarId: 'primary',
//                     resource: event,
//                     conferenceDataVersion: 1,
//                 }).execute(response => {
//                     if (response.error) {
//                         console.log('Error creating Google Meet link:', response.error);
//                         setError('Failed to create Google Meet link');
//                         reject('');
//                     } else {
//                         const meetLink = response.conferenceData.entryPoints[0].uri;
//                         resolve(meetLink);
//                         console.log(meet)
//                     }
//                 });
//             });
//         });
//     };

//     const handleSignIn = () => {
//         googleAuth.signIn();
//     };

//     return (
//         <div className='MeetingData'>
//             {error && <div className="error">{error}</div>}

//             {!googleAuth?.isSignedIn.get() && (
//                 <button onClick={handleSignIn}>Sign In with Google</button>
//             )}

//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         type='text' 
//                         placeholder='Enter Your Name' 
//                         value={mname} 
//                         required 
//                         onChange={e => setMname(e.target.value)} 
//                     />
//                     <input 
//                         type='date' 
//                         value={mdate} 
//                         required 
//                         onChange={e => setMdate(e.target.value)} 
//                     />
//                     <input 
//                         type='time' 
//                         value={mstime} 
//                         required 
//                         onChange={e => setMstime(e.target.value)} 
//                     />
//                     <input 
//                         type='time' 
//                         value={metime} 
//                         required 
//                         onChange={e => setMetime(e.target.value)} 
//                     />
//                     <button type="submit">Add</button>
//                 </form>
//             </div>

//             <table className='header'>
//                 <thead>
//                     <tr>
//                         <th>Meeting Name</th>
//                         <th>Date</th>
//                         <th>Start Time</th>
//                         <th>End Time</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((meeting) => (
//                         <tr key={meeting.id}> 
//                             <td>{meeting.name}</td>
//                             <td>{moment(meeting.date).format('MMMM Do YYYY')}</td>
//                             <td>{meeting.starttime}</td>
//                             <td>{meeting.endtime}</td>
//                             <td>
//                                 {meeting.meetLink ? (
//                                     <a href={meeting.meetLink} target="_blank" rel="noopener noreferrer">
//                                         <button>Join</button>
//                                     </a>
//                                 ) : (
//                                     <button disabled>No Link</button>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default MeetingData;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import "../assets/style/MeetingData.css";

function MeetingData() {
    const [data, setData] = useState([]);
    const [mname, setMname] = useState('');
    const [mdate, setMdate] = useState('');
    const [mstime, setMstime] = useState('');
    const [metime, setMetime] = useState('');
    const [mLink, setMLink] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(res => setData(res.data))
            .catch(err => {
                setError('Failed to fetch data');
                console.log(err);
            });
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const newMeeting = {
            id: (data.length + 1).toString(),
            name: mname,
            date: moment(mdate).format('YYYY-MM-DD'),
            starttime: mstime,
            endtime: metime,
            link: mLink
        };

        try {
            const res = await axios.post('http://localhost:3000/data', newMeeting);
            setData([...data, res.data]);
            setMname('');
            setMdate('');
            setMstime('');
            setMetime('');
            setMLink('');
        } catch (err) {
            setError('Failed to add meeting');
            console.log(err);
        }
    };


    const meetingLink = link => window.open(link);



    return (
        <div className='MeetingData'>
            {error && <div className="error">{error}</div>}


            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Meeting Name' value={mname} required onChange={e => setMname(e.target.value)} />
                <input type='date' placeholder='Meeting Date' value={mdate} required onChange={e => setMdate(e.target.value)} />
                <input type='time' placeholder='Meeting Start Time' value={mstime} required onChange={e => setMstime(e.target.value)} />
                <input type='time' placeholder='Meeting End Time' value={metime} required onChange={e => setMetime(e.target.value)} />
                <input type='text' placeholder='Enter Meeting Link' value={mLink} required onChange={e => setMLink(e.target.value)} />
                <button type="submit">Add</button>
            </form>


            <table className='header'>
                <thead>
                    <tr>
                        <th>Meeting Name</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        {/* <th>Meeting Link</th> */}
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
                            {/* <td>{meeting.link}</td> */}
                            <td>
                                <button onClick={() => meetingLink(meeting.link)}>Join</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MeetingData;

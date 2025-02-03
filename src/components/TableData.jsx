import React from 'react';
import DataTable from 'react-data-table-component';

function TableData() {
  const columns = [
    {
      name: "Meeting Name",
      selector: row => row.name,
    },
    {
      name: "Date",
      selector: row => row.date,
    },
    {
      name: "Start-Time",
      selector: row => row.starttime,
    },
    {
      name: "End Time",
      selector: row => row.endtime,
    },
    {
      name: "Join",
      cell: row => (
        <button
          style={{ backgroundColor: "blue" }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Join
        </button>
      ),
    },
  ];

  const data = [
    { "id": 1, "name": "Meet Patel", "date": "10-12-2025", "starttime": "12:47", "endtime": "13:45", "join": "join" },
    { "id": 2, "name": "John Doe", "date": "11-12-2025", "starttime": "14:00", "endtime": "15:00", "join": "join" },
    { "id": 3, "name": "Alice Smith", "date": "12-12-2025", "starttime": "08:30", "endtime": "09:15", "join": "join" },
    { "id": 4, "name": "Bob Johnson", "date": "13-12-2025", "starttime": "16:00", "endtime": "17:00", "join": "join" },
    { "id": 5, "name": "Charlie Brown", "date": "14-12-2025", "starttime": "10:15", "endtime": "11:30", "join": "join" },
    { "id": 6, "name": "David White", "date": "15-12-2025", "starttime": "09:00", "endtime": "10:00", "join": "join" },
    { "id": 7, "name": "Emma Wilson", "date": "16-12-2025", "starttime": "11:45", "endtime": "12:30", "join": "join" },
    { "id": 8, "name": "Frank Miller", "date": "17-12-2025", "starttime": "13:00", "endtime": "14:00", "join": "join" },
    { "id": 9, "name": "Grace Davis", "date": "18-12-2025", "starttime": "15:30", "endtime": "16:15", "join": "join" },
    { "id": 10, "name": "Hannah Moore", "date": "19-12-2025", "starttime": "17:00", "endtime": "18:00", "join": "join" },
    { "id": 11, "name": "Ivy Taylor", "date": "20-12-2025", "starttime": "08:00", "endtime": "09:30", "join": "join" },
    { "id": 12, "name": "Jack Anderson", "date": "21-12-2025", "starttime": "14:45", "endtime": "15:30", "join": "join" },
    { "id": 13, "name": "Kara Thomas", "date": "22-12-2025", "starttime": "10:30", "endtime": "11:15", "join": "join" },
    { "id": 14, "name": "Leo Jackson", "date": "23-12-2025", "starttime": "12:00", "endtime": "13:00", "join": "join" },
    { "id": 15, "name": "Mia Lee", "date": "24-12-2025", "starttime": "13:30", "endtime": "14:15", "join": "join" },
    { "id": 16, "name": "Noah Harris", "date": "25-12-2025", "starttime": "09:15", "endtime": "10:00", "join": "join" },
    { "id": 17, "name": "Olivia Clark", "date": "26-12-2025", "starttime": "16:30", "endtime": "17:00", "join": "join" },
    { "id": 18, "name": "Paul Lewis", "date": "27-12-2025", "starttime": "10:45", "endtime": "11:30", "join": "join" },
    { "id": 19, "name": "Quinn Walker", "date": "28-12-2025", "starttime": "14:00", "endtime": "15:00", "join": "join" },
    { "id": 20, "name": "Rachel Young", "date": "29-12-2025", "starttime": "12:00", "endtime": "12:45", "join": "join" },
    { "id": 21, "name": "Samuel King", "date": "30-12-2025", "starttime": "15:15", "endtime": "16:00", "join": "join" },
    { "id": 22, "name": "Tina Scott", "date": "31-12-2025", "starttime": "17:30", "endtime": "18:00", "join": "join" },
    { "id": 23, "name": "Ursula Carter", "date": "01-01-2026", "starttime": "09:45", "endtime": "10:30", "join": "join" },
    { "id": 24, "name": "Victor Green", "date": "02-01-2026", "starttime": "14:15", "endtime": "15:00", "join": "join" },
    { "id": 25, "name": "Wendy Adams", "date": "03-01-2026", "starttime": "16:30", "endtime": "17:00", "join": "join" },
    { "id": 26, "name": "Xander Brown", "date": "04-01-2026", "starttime": "11:15", "endtime": "12:00", "join": "join" },
    { "id": 27, "name": "Yara Wright", "date": "05-01-2026", "starttime": "08:00", "endtime": "09:00", "join": "join" },
    { "id": 28, "name": "Zane Hill", "date": "06-01-2026", "starttime": "10:30", "endtime": "11:30", "join": "join" },
    { "id": 29, "name": "Aaron Nelson", "date": "07-01-2026", "starttime": "12:15", "endtime": "13:00", "join": "join" },
    { "id": 30, "name": "Beatrice Carter", "date": "08-01-2026", "starttime": "15:30", "endtime": "16:30", "join": "join" },
    { "id": 31, "name": "Catherine Mitchell", "date": "09-01-2026", "starttime": "09:45", "endtime": "10:45", "join": "join" },
    { "id": 32, "name": "Dylan Perez", "date": "10-01-2026", "starttime": "14:00", "endtime": "14:45", "join": "join" },
    { "id": 33, "name": "Eva Roberts", "date": "11-01-2026", "starttime": "13:00", "endtime": "13:45", "join": "join" },
    { "id": 34, "name": "Felix Cooper", "date": "12-01-2026", "starttime": "11:15", "endtime": "12:00", "join": "join" },
    { "id": 35, "name": "Gemma Reed", "date": "13-01-2026", "starttime": "16:30", "endtime": "17:15", "join": "join" },
    { "id": 36, "name": "Hugo Foster", "date": "14-01-2026", "starttime": "12:45", "endtime": "13:30", "join": "join" },
    { "id": 37, "name": "Iris Murphy", "date": "15-01-2026", "starttime": "08:00", "endtime": "09:00", "join": "join" },
    { "id": 38, "name": "Jackie Morgan", "date": "16-01-2026", "starttime": "14:00", "endtime": "15:00", "join": "join" },
    { "id": 39, "name": "Ken Stevens", "date": "17-01-2026", "starttime": "10:30", "endtime": "11:30", "join": "join" },
    { "id": 40, "name": "Lena Walker", "date": "18-01-2026", "starttime": "13:00", "endtime": "13:45", "join": "join" },
    { "id": 41, "name": "Mason Carter", "date": "19-01-2026", "starttime": "12:15", "endtime": "13:00", "join": "join" },
    { "id": 42, "name": "Nina Harris", "date": "20-01-2026", "starttime": "16:00", "endtime": "17:00", "join": "join" },
    { "id": 43, "name": "Oscar Bennett", "date": "21-01-2026", "starttime": "08:30", "endtime": "09:30", "join": "join" },
    { "id": 44, "name": "Penny Richards", "date": "22-01-2026", "starttime": "15:00", "endtime": "15:45", "join": "join" },
    { "id": 45, "name": "Quincy Price", "date": "23-01-2026", "starttime": "10:15", "endtime": "11:00", "join": "join" },
    { "id": 46, "name": "Rachel Hughes", "date": "24-01-2026", "starttime": "12:30", "endtime": "13:15", "join": "join" },
    { "id": 47, "name": "Steve Foster", "date": "25-01-2026", "starttime": "09:45", "endtime": "10:45", "join": "join" },
    { "id": 48, "name": "Tessa Morris", "date": "26-01-2026", "starttime": "13:30", "endtime": "14:15", "join": "join" },
    { "id": 49, "name": "Ulysses Evans", "date": "27-01-2026", "starttime": "08:15", "endtime": "09:00", "join": "join" },
    { "id": 50, "name": "Vera Griffin", "date": "28-01-2026", "starttime": "16:45", "endtime": "17:30", "join": "join" },
  ];

  const customStyles = {
    headCells: {
      style: {
        color: 'black',              
        fontWeight: 'bold', 
        padding: '10px',             
        textAlign: 'center',         
      },
    },
    rows: {
      style: {
        padding: '10px',
        textAlign: 'center',
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
}

export default TableData;
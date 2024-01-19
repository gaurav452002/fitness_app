import React from 'react';
import './styles.css';

const CalendarView = ({ data }) => {
  return (
    <div className="calendar-view">
      <h2>Calendar View</h2>
      {data.map((client, index) => (
        <div key={index} className="calendar-entry">
          <span>{client.firstName} {client.lastName}</span>
          {client.appointments.map((appointment, appIndex) => (
            <div key={appIndex}>{appointment}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;

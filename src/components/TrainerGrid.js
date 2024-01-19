import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';
import ClientModal from './ClientModal';
import './styles.css';

const TrainerGrid = ({ data, setData }) => {
  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [isClientModalOpen, setClientModalOpen] = useState(false);
  const [selectedClientIndex, setSelectedClientIndex] = useState(null);
  const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(null);

  const handleAddClient = () => {
    setClientModalOpen(true);
  };

  const handleEditClient = (clientIndex) => {
    setSelectedClientIndex(clientIndex);
    setClientModalOpen(true);
  };

  const handleSaveClient = (newClient) => {
    if (selectedClientIndex !== null) {
      const updatedData = [...data];
      newClient.appointments = updatedData[selectedClientIndex].appointments;
      updatedData[selectedClientIndex] = {
        ...updatedData[selectedClientIndex],
        ...newClient,
      };
      setData(updatedData); 
      setSelectedClientIndex(null);
      setClientModalOpen(false);
    } else {
      setData([...data, newClient]);
      setClientModalOpen(false);
    }
  };

  const handleDeleteClient = (clientIndex) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this client?');
    if (confirmDelete) {
      const updatedData = [...data];
      updatedData.splice(clientIndex, 1);
      setData(updatedData);
    }
  };

  const handleAddAppointment = (index) => {
    setSelectedClientIndex(index);
    setAppointmentModalOpen(true);
  };

  const handleSaveAppointment = (dateTime) => {
    if (selectedClientIndex !== null) {
      const updatedData = [...data];
      if (selectedAppointmentIndex !== null) {
        updatedData[selectedClientIndex].appointments[selectedAppointmentIndex] = dateTime;
      } else {
        updatedData[selectedClientIndex].appointments.push(dateTime);
      }
      setData(updatedData);
      setSelectedAppointmentIndex(null);
      setSelectedClientIndex(null);
      setAppointmentModalOpen(false);
    }
  };

  const handleEditAppointment = (clientIndex, appointmentIndex) => {
    setSelectedClientIndex(clientIndex);
    setSelectedAppointmentIndex(appointmentIndex);
    setAppointmentModalOpen(true);
  };

  const handleDeleteAppointment = (clientIndex, appointmentIndex) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Appointment?');
    if (confirmDelete) {
      const updatedData = [...data];
      updatedData[clientIndex].appointments.splice(appointmentIndex, 1);
      setData(updatedData); 
    }
  };

  return (
    <div className="trainer-grid">
      <div className="grid-header client-row">
        <span>First Name</span>
        <span>Last Name</span>
        <span>Location</span>
        <span style={{ textAlign: 'center' }}>Appointments</span>
        <span style={{ textAlign: 'center' }}>Action</span>
      </div>
      {data.map((client, clientIndex) => (
        <div key={clientIndex} className="client-row">
          <span>{client.firstName}</span>
          <span>{client.lastName}</span>
          <span>{client.location}</span>
          <span className='appointments-container client-row '>
            {client.appointments.map((appointment, appIndex) => (
              <div key={appIndex} className="calendar-entry">
                {appointment}
                <button style={{marginLeft: '15px'}} onClick={() => handleEditAppointment(clientIndex, appIndex)}>Edit</button>
                <button onClick={() => handleDeleteAppointment(clientIndex, appIndex)}>Delete</button>
              </div>
            ))}
            <button onClick={() => handleAddAppointment(clientIndex)}>Add Appointment</button>
          </span>
          <div className="action-buttons client-row">
            <button onClick={() => handleEditClient(clientIndex, client)}>Edit</button>
            <button onClick={() => handleDeleteClient(clientIndex)}>Delete</button>
          </div>
        </div>
      ))}
      <div style={{display: 'flex', marginTop:'10px', justifyContent: 'center'}}>
        <button style={{padding: '15px 40px', fontSize: '20px'}} onClick={() => handleAddClient()}>Add New Client</button>
      </div>
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        onSave={handleSaveAppointment}
      />
      <ClientModal
        isOpen={isClientModalOpen}
        onClose={() => setClientModalOpen(false)}
        onSave={handleSaveClient}
        initialClient={selectedClientIndex !== null ? data[selectedClientIndex] : null}
      />
    </div>
  );
};

export default TrainerGrid;

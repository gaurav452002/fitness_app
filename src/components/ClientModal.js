import React, { useState, useEffect } from 'react';
import './styles.css';

const ClientModal = ({ isOpen, onClose, onSave, initialClient }) => {
  const [fName, setFirstName] = useState(initialClient ? initialClient.firstName : '');
  const [lName, setLastName] = useState(initialClient ? initialClient.lastName : '');
  const [loc, setLocation] = useState(initialClient ? initialClient.location : '');

  useEffect(() => {
    if (isOpen && initialClient) {
      setFirstName(initialClient.firstName);
      setLastName(initialClient.lastName);
      setLocation(initialClient.location);
    }
  }, [isOpen, initialClient]);

  const handleSave = () => {
    if (fName && lName && loc) {
      const updatedClient = {
        firstName: fName,
        lastName:lName,
        location: loc,
        appointments: []
      };
      onSave(updatedClient);
      setFirstName('');
      setLastName('');
      setLocation('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className={`client-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <label>First Name:</label>
        <input
          type="text"
          value={fName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={loc}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ClientModal;



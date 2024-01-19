import React, { useState } from 'react';
import {formatDateTime} from './Utils';
import './styles.css';

const AppointmentModal = ({ isOpen, onClose, onSave }) => {
  const [dateTime, setDateTime] = useState('');

  const handleSave = () => {
    onSave(formatDateTime(dateTime));
    setDateTime('');
  };

  return (
    <div className={`appointment-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AppointmentModal;


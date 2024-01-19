import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TrainerGrid from './components/TrainerGrid';
import CalendarView from './components/CalendarView';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import './components/styles.css';

const App = () => {
  // Dummy data for demonstration purposes
  const [trainerData, setTrainerData] = useState([
    { firstName: 'Gaurav', lastName: 'Priy', location: 'Sri Ganganagar', appointments: ['1/5/2024, 3:30 PM'] },
    { firstName: 'Bob', lastName: 'Miller', location: 'City D', appointments: ['2/15/2024, 9:00 AM', '3/5/2024, 4:30 PM'] },
    { firstName: 'Eva', lastName: 'Garcia', location: 'City A', appointments: ['1/10/2024, 11:45 AM', '2/25/2024, 2:00 PM'] },
    { firstName: 'David', lastName: 'Taylor', location: 'City B', appointments: ['3/10/2024, 1:30 PM'] },
    { firstName: 'Sophie', lastName: 'Brown', location: 'City C', appointments: ['1/20/2024, 5:15 PM'] },
    { firstName: 'Jack', lastName: 'Wilson', location: 'City D', appointments: ['2/5/2024, 10:30 AM', '3/15/2024, 3:00 PM'] },
  ]);
  

  const [mode , setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>
    {
       setAlert({
        msg:message,
        type:type
       })
       setTimeout (()=>{setAlert(null);},1000);

       
    }
  const toggleMode = ()=>
  {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode is enabled", "success");
    }
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled", "success");
    }
    
  }

  return (
    <>
    
      <BrowserRouter>
      <Navbar title = "Gym" AboutText = "CalenderView" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={<TrainerGrid data={trainerData} setData={setTrainerData} />}
        />
        <Route
          path="/calendar"
          element={<CalendarView data={trainerData} />}
        />
      </Routes>
      </div>
    </BrowserRouter>
    
    </>
  );
};

export default App;

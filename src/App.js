import React, { useState } from 'react';
import AuthFrom from "./components/AuthForm"
import NewEvent from "./components/NewEvent"
import EventList from "./components/EventList"
import './App.css';

function App() {
  const [ date, setDate ] = useState(new Date())
  const [ events, setEvents ] = useState([])

  return (
    <div className="App">
      <h1 id="title-h1">My Important Dates</h1>
      <div id="body-container">
        <div id="sign-in-container">
          <AuthFrom title="Sign-Up" />
          <AuthFrom title="Sign-In" />
        </div>
        <NewEvent 
          date={date} 
          setDate={setDate}
          events={events}
          setEvents={setEvents}  
        />
        <EventList events={events}/>
      </div>
      
    </div>
  );
}

export default App;

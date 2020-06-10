import React, { useState, useEffect } from 'react';
import AuthFrom from "./components/AuthForm"
import NewEvent from "./components/NewEvent"
import EventList from "./components/EventList"
import './App.css';

function App() {
  const [ date, setDate ] = useState(new Date())
  const [ events, setEvents ] = useState([])
  const [ fakeToken, setFakeToken ] = useState(localStorage.getItem("fakeToken") || "")

  useEffect(() => {
    if (fakeToken) {
      localStorage.setItem("fakeToken", fakeToken)
      console.log("Stored fake token:", fakeToken)
    } else {
      localStorage.removeItem("fakeToken")
      console.log("Removed fakeToken")
    }
  })

  return (
    <div className="App">
      <h1 id="title-h1">My Important Dates</h1>
      <div id="body-container">
        <div id="sign-in-container">
          <AuthFrom title="Sign-Up" setFakeToken={setFakeToken}/>
          <AuthFrom title="Sign-In" setFakeToken={setFakeToken}/>
          <button onClick={() => setFakeToken("")}>Log-out</button>
          {fakeToken ? <h1>You are logged in!</h1> : null}
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

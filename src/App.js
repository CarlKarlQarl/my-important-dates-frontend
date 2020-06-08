import React from 'react';
import AuthFrom from "./components/AuthForm"
import Calendar from "./components/Calendar"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title-h1">My Important Dates</h1>
      <div id="body-container">
        <div id="sign-in-container">
          <AuthFrom title="Sign-Up" />
          <AuthFrom title="Sign-In" />
        </div>
        <Calendar 
          month="Undecimber"
          length={31}
        />
      </div>
      
    </div>
  );
}

export default App;

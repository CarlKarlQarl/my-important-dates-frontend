import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen"
import HomeScreen from "./screens/HomeScreen"
import './App.css';

function App() {
  const [ token, setToken ] = useState(localStorage.getItem("token") || "")

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
      console.log("Stored fake token:", token)
    } else {
      localStorage.removeItem("token")
      console.log("Removed token")
    }
  })

  return (
    <Router>
      <div className="App">
        <h1 id="title-h1">My Important Dates</h1>
        <Switch>
          <Route exact path="/">
            <SigninScreen 
              setToken={setToken}
            />
          </Route>
          <Route path="/home">
            <HomeScreen
              token={token}
              setToken={setToken}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

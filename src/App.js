import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen"
import HomeScreen from "./screens/HomeScreen"
import './App.css';

function App() {
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
    <Router>
      <div className="App">
        <h1 id="title-h1">My Important Dates</h1>
        <Switch>
          <Route exact path="/">
            <SigninScreen 
              setFakeToken={setFakeToken}
            />
          </Route>
          <Route path="/home">
            <HomeScreen
              fakeToken={fakeToken}
              setFakeToken={setFakeToken}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

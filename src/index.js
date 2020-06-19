import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducers/events.js"

const events = createStore(reducer)

render(
  <React.StrictMode>
    <Provider store={events}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
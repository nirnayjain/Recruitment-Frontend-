import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App1 />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))


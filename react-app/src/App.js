import React from 'react';
import './App.css';
import logo from './logo.svg'

function App() {
  return (
    <div className="App d-flex justify-content-center">
        <div className="d-flex align-card">
          <div className="card">
            <div className="card-header">
              <h1>Hello Guest</h1>
              <img src={logo}></img>
            </div>
            <div className="card-body">
              <p>This is rendered by React DOM</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

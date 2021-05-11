import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  fetch("http://localhost:9000/test")
    .then(res => res.text())
    .then(res => { setApiResponse(res) });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
      </header>
    </div>
  );
}

export default App;

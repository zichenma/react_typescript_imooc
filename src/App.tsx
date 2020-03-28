import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {setShow(!show)}}>Toggle Tracker</button>
        </p>
        {/* { show &&   <MouseTracker />} */}
        <LikeButton />
        <Hello message="Hello World 2"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

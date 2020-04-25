import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Timer from './components/Timer'
import Session from './components/Session';


function App() {
  return (
    <div className="App">
      <div id="overlay">
        <div id="overlay-top"></div>
        <div id="overlay-bottom"></div>
      </div>
      <div id="content">
        <Timer />
        <div id="session-container">
          <Session type="session"/>
          <Session type="break"/>
        </div>
        <Clock />
      </div>
    </div>
  );
}

export default App;

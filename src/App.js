import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Alarm from './components/Alarm';
import Clock from './components/Clock';
import Timer from './components/Timer'
import Session from './components/Session';
import Control from './components/Control';


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
        <Alarm />
        <Control />
        <Clock />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);

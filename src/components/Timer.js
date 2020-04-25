import React from 'react';

class Timer extends React.Component {

    render() {
        return (
            <div id="display">
                <p id="time-left">25:00</p>
                <p id="timer-label">IN SESSION</p>
            </div>
        );
    }
}

export default Timer;
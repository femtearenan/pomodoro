import React from 'react';
import { connect } from 'react-redux';

class Timer extends React.Component {

    timeToString() {
        let timeString = this.props.timeLeft.minutes + ":";
        if (this.props.timeLeft.seconds < 10) {
            timeString += "0";
        }
        timeString += this.props.timeLeft.seconds;
        return timeString;
    }

    render() {
        return (
            <div id="display">
                <p id="time-left">{this.timeToString()}</p>
                <p id="timer-label">{this.props.status}</p>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Timer);
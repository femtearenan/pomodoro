import React from 'react';
import { connect } from 'react-redux';

class Clock extends React.Component {

    render() {
        let seconds = this.props.timeLeft.minutes * 60 + this.props.timeLeft.seconds;
        const ONE_HOUR_IN_SECONDS = 60 * 60;
        let secondsInDeg = Math.floor(seconds / ONE_HOUR_IN_SECONDS * 360);
        let clockStyle = {
            transform: `rotate(${secondsInDeg}deg)`,
            transformOrigin: "bottom"
        }
        return (
            <div id="clock">
                <div id="hand-container" style={clockStyle}>
                    <div id="hand" className="hand"></div>
                    <div id="hand-shadow" className="hand"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Clock);
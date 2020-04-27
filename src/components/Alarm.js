import React from 'react';
import { connect } from 'react-redux';
import alarmImg from '../alarm.svg';
import alert from '../alert.wav';
import { alarm, toggleMute } from '../redux/actions';

class Alarm extends React.Component {
    constructor(props) {
        super(props);
        this.playAlarm = this.playAlarm.bind(this);
        this.alarmRef = React.createRef();
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidUpdate() {
        if (this.props.alarmOn) {
            this.playAlarm();
            this.props.alarm();
        }
    }

    playAlarm() {
        const audioElement = this.alarmRef.current;
        if (!this.props.mute) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
        
    }

    toggleMute() {
        this.props.toggleMute();
    }

    render() {

        if (this.props.mute) {
            return (
                <div id="alarm" className="muted">
                    <img src={alarmImg} alt="toggle alarm" onClick={this.toggleMute}/>
                    <audio id="beep" src={alert} ref={this.alarmRef} />
                </div>
            );
        }
        return (
            <div id="alarm">
                <img src={alarmImg} alt="toggle alarm" onClick={this.toggleMute}/>
                <audio id="beep" src={alert} ref={this.alarmRef} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    alarm: () => dispatch(alarm()),
    toggleMute: () => dispatch(toggleMute())
});
export default connect(mapStateToProps, mapDispatchToProps)(Alarm);
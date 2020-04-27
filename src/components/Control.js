import React from 'react';
import { connect } from 'react-redux';
import { alarm, pause, reset, start, tick, turn } from '../redux/actions';


import playImg from '../play.svg';
import pauseImg from '../pause.svg';
import stopImg from '../stop.svg';

class Control extends React.Component {
    constructor (props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.start = this.start.bind(this);
        this.ticker = this.ticker.bind(this);
        this.pause = this.pause.bind(this);
        this.turn = this.turn.bind(this);
    }

    reset() {
        this.props.reset();
    }

    start() {
        this.props.start();
        this.ticker(true);
    }

    ticker(initialize = false) {
        if ((this.props.countdownOn && !this.props.pauseOn) || initialize) {
            if (initialize) {
                setTimeout(this.props.tick, 250);
            } else {
                this.props.tick();
            }
            setTimeout(this.ticker, 1000);
        } else if (this.props.timeLeft.minutes === 0 && this.props.timeLeft.seconds === 0) {
            this.props.alarm();
            // setTimeout(this.turn, 1000);
            this.turn();
        }
    }

    turn() {
        this.props.turn();
        this.ticker(true);
    }

    pause() {
        this.props.pause();
    }

    render() {
        if (!this.props.countdownOn) {
            return (
                <div id="control">
                    <div id="reset" onClick={this.reset}>
                        <img id="stop" src={stopImg} alt="reset timer" />
                    </div>
                    <div id="start_stop" onClick={this.start}>
                        <img id="play" src={playImg} alt="start timer" />
                    </div>
                </div>
            );
        } else {
            return (
                <div id="control">
                    <div id="reset" onClick={this.reset}>
                        <img id="stop" src={stopImg} alt="reset timer" />
                    </div>
                    <div id="start_stop" onClick={this.pause}>
                        <img id="pause" src={pauseImg} alt="pause timer" />
                    </div>
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    alarm: () => dispatch(alarm()),
    pause: () => dispatch(pause()),
    reset: () => dispatch(reset()),
    start: () => dispatch(start()),
    tick: () => dispatch(tick()),
    turn: () => dispatch(turn()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Control);
import React from 'react';
import { connect } from 'react-redux';
import { pause, reset, start, tick, turn } from '../redux/actions';


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
        if (this.props.countdownOn || initialize) {
            this.props.tick();
            setTimeout(this.ticker, 1000);
        } else if (this.props.timeLeft.minutes === 0 && this.props.timeLeft.seconds === 0) {
            setTimeout(this.turn, 1000);
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
                    <div id="reset">
                        <img id="stop" src={stopImg} alt="reset timer" onClick={this.reset}/>
                    </div>
                    <div id="start_stop">
                        <img id="play" src={playImg} alt="start timer" onClick={this.start}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="control">
                    <div id="reset">
                        <img id="stop" src={stopImg} alt="reset timer" onClick={this.reset}/>
                    </div>
                    <div id="start_stop">
                        <img id="pause" src={pauseImg} alt="pause timer" onClick={this.pause}/>
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
    pause: () => dispatch(pause()),
    reset: () => dispatch(reset()),
    start: () => dispatch(start()),
    tick: () => dispatch(tick()),
    turn: () => dispatch(turn())
})
export default connect(mapStateToProps, mapDispatchToProps)(Control);
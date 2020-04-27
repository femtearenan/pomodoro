import React from 'react';
import { connect } from 'react-redux';
import incrementImg from '../increment.svg';
import decrementImg from '../decrement.svg';

import { increase, decrease } from '../redux/actions';

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.increaseOnClick = this.increaseOnClick.bind(this);   
        this.decreaseOnClick = this.decreaseOnClick.bind(this);   
    }

    timeToString(timeObject) {
        let timeString = timeObject.minutes;
        return timeString;
    }

    getTimeByType() {
        if (this.props.type === "session") {
            return this.timeToString(this.props.sessionTime);
        } else if (this.props.type === "break") {
            return this.timeToString(this.props.breakTime);
        }
    }

    increaseOnClick() {
        if (this.getTimeByType() < 60) {
            this.props.increase(this.props.type);
        }
    }

    decreaseOnClick() {
        if (this.getTimeByType() > 0) {
            this.props.decrease(this.props.type);
        }
    }

    render() {
        return (
            <div className="session">
                <div>
                    <p id={this.props.type + "-label"}>{this.props.type} length</p>
                    <p id={this.props.type + "-length"} className="length-indicator">{this.getTimeByType()}</p>
                </div>
                <div className="incrementers">
                    <img id={this.props.type + "-increment"} className="arrow up" src={incrementImg} alt="increase time" onClick={this.increaseOnClick}/>
                    <img id={this.props.type + "-decrement"} className="arrow down" src={decrementImg} alt="decrease time" onClick={this.decreaseOnClick} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    increase: (value) => dispatch(increase(value)),
    decrease: (value) => dispatch(decrease(value)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Session);
import React from 'react';
import incrementImg from '../increment.svg';
import decrementImg from '../decrement.svg';

class Session extends React.Component {

    render() {
        return (
            <div class="session">
                <div>
                    <p id={this.props.type + "-label"}>{this.props.type} length</p>
                    <p id={this.props.type + "-length"} className="length-indicator">25:00</p>
                </div>
                <div class="incrementers">
                    <img id={this.props.type + "-increment"} className="arrow up" src={incrementImg} alt="increase time" />
                    <img id={this.props.type + "-decrement"} className="arrow down" src={decrementImg} alt="decrease time" />
                </div>
            </div>
        );
    }
}

export default Session;
import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../redux/actions';

import play from '../play.svg';
import pause from '../pause.svg';
import stop from '../stop.svg';

class Control extends React.Component {
    constructor (props) {
        super(props);
        this.reset = this.reset.bind(this);
    }

    reset () {
        this.props.reset();
    }

    render() {
        if (true) {
            return (
                <div id="control">
                    <div id="reset">
                        <img id="stop" src={stop} alt="reset timer" onClick={this.reset}/>
                    </div>
                    <div id="start_stop">
                        <img id="play" src={play} alt="start timer" />
                    </div>
                </div>
            );
        } else {
            return (
                <div id="control">
                    <div id="start_stop">
                        <img id="pause" src={pause} alt="pause timer" />
                    </div>
                    <div id="reset">
                        <img id="stop" src={stop} alt="reset timer" />
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
    reset: () => dispatch(reset()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Control);
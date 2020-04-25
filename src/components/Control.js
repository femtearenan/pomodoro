import React from 'react';
import play from '../play.svg';
import pause from '../pause.svg';
import stop from '../stop.svg';

class Control extends React.Component {

    render() {
        if (true) {
            return (
                <div id="control">
                    <div id="reset">
                        <img id="stop" src={stop} alt="reset timer" />
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

export default Control;
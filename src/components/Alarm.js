import React from 'react';
import alarm from '../alarm.svg';

class Alarm extends React.Component {

    render() {

        return (
            <div id="alarm">
                <img src={alarm} alt="toggle alarm" />
            </div>
        );
    }
}

export default Alarm;
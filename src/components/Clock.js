import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <div id="clock">
                <div id="hand-container">
                    <div id="hand" className="hand"></div>
                    <div id="hand-shadow" className="hand"></div>
                </div>
            </div>
        );
    }
}

export default Clock;
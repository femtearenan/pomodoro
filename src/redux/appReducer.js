const initialState = {
    timeLeft: {
        minutes: 25,
        seconds: 0
    },
    sessionTime: {
        minutes: 25,
        seconds: 0
    },
    breakTime: {
        minutes: 5,
        seconds: 0
    },
    getTimeByType: function (type) {
        let timeString = "";
        if (type === 'session') {
            timeString = this.sessionTime.minutes + ":";
            if (this.sessionTime.minutes < 10) {
                timeString += "0";
            }
            timeString += this.sessionTime.seconds;
            return timeString;
        } else if (type === 'break') {
            timeString = this.breakTime.minutes + ":";
            if (this.breakTime.minutes < 10) {
                timeString += "0";
            }
            timeString += this.breakTime.seconds;
            return timeString;
        }
    },
    status: "IN SESSION",
    isTicking: false
}

function appReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default appReducer;
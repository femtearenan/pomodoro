import { INCREASE, DECREASE, RESET, START, TICK, PAUSE} from './actions';

const initialState = {
    timeLeft: {
        minutes: 25,
        seconds: 0,
    },
    sessionTime: {
        minutes: 25,
        seconds: 0
    },
    breakTime: {
        minutes: 5,
        seconds: 0
    },
    status: "IN SESSION",
    countdownOn: false
}

function appReducer(state = initialState, action) {
    console.log(action);
    let timeObject = null;
    let timeLeft = {...state.timeLeft};

    switch(action.type) {
        case INCREASE:
            if ((action.payload.value === "session" && state.status === "IN SESSION") || 
                (action.payload.value === "break" && state.status === "ON BREAK")) {
                    if (timeLeft.minutes < 60) {
                        timeLeft.minutes += 1;
                    };
            }
            if (action.payload.value === "session") {
                timeObject = {...state.sessionTime};
                if (timeObject.minutes < 60) {
                    timeObject.minutes += 1;
                }
                
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    sessionTime: timeObject
                });
            } else {
                timeObject = {...state.breakTime};
                if (timeObject.minutes < 60) {
                    timeObject.minutes += 1;
                }
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    breakTime: timeObject
                });
            }
        case DECREASE:
            if ((action.payload.value === "session" && state.status === "IN SESSION") || 
                (action.payload.value === "break" && state.status === "ON BREAK")) {
                if (timeLeft.minutes > 0) {
                    timeLeft.minutes -= 1;
                }
            }
            if (action.payload.value === "session") {
                timeObject = state.sessionTime;
                if (timeObject.minutes > 0) {
                    timeObject.minutes -= 1;
                }
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    sessionTime: timeObject
                });
            } else {
                timeObject = state.breakTime;
                if (timeObject.minutes > 0) {
                    timeObject.minutes -= 1;
                }
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    breakTime: timeObject
                });
            }
        case RESET:
            return Object.assign({}, state, {
                ...initialState
            });
        case START: 
            return Object.assign({}, state, {
                countdownOn: true
            });
        case PAUSE:
            return Object.assign({}, state, {
                countdownOn: false
            });
        case  TICK:
            let countdownOn = state.countdownOn;
            if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                countdownOn = false;
            }
            if (countdownOn) {
                if (timeLeft.seconds === 0 ) {
                    timeLeft.seconds = 59;
                    if (timeLeft.minutes > 0) {
                        timeLeft.minutes -= 1;
                    }
                } else if (timeLeft.seconds > 0 ) {
                    timeLeft.seconds -= 1;
                }
            }
            
            return Object.assign({}, state, {
                countdownOn: countdownOn,
                timeLeft: {...timeLeft}
            });
        default:
            return state;
    }
}

export default appReducer;
import { INCREASE, DECREASE, RESET, START, TICK, PAUSE, TURN, ALARM, MUTE_TOGGLE, INIT_RESET} from './actions';

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
    countdownOn: false,
    alarmOn: false,
    mute: false,
    pauseOn: false,
    resetOn: false
}

function appReducer(state = initialState, action) {
    let timeObject = null;
    let timeLeft = {...state.timeLeft};
    let status = "";

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
                if (timeLeft.minutes > 1 || (timeLeft.minutes > 0 && timeLeft.seconds > 0)) {
                    timeLeft.minutes -= 1;
                }
            }
            if (action.payload.value === "session") {
                timeObject = {...state.sessionTime};
                if (timeObject.minutes > 1 || (timeObject.minutes > 0 && timeObject.seconds > 0)) {
                    timeObject.minutes -= 1;
                }
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    sessionTime: timeObject
                });
            } else {
                timeObject = {...state.breakTime};
                if (timeObject.minutes > 1 || (timeObject.minutes > 0 && timeObject.seconds > 0)) {
                    timeObject.minutes -= 1;
                }
                return Object.assign({}, state, {
                    timeLeft: timeLeft,
                    breakTime: timeObject
                });
            }
        case RESET:
            return Object.assign({}, initialState, {
                resetOn: true
            });
        case START: 
            return Object.assign({}, state, {
                countdownOn: true,
                pauseOn: false
            });
        case PAUSE:
            return Object.assign({}, state, {
                countdownOn: false,
                pauseOn: true
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
        case TURN:
            if (state.status === "IN SESSION") {
                timeObject = {...state.breakTime};
                status = "ON BREAK";
            } else {
                timeObject = {...state.sessionTime};
                status = "IN SESSION";
            }
            return Object.assign({}, state, {
                countdownOn: true,
                timeLeft: {...timeObject},
                status: status
            });
        case ALARM:
            return Object.assign({}, state, {
                alarmOn: !state.alarmOn
            });
        case MUTE_TOGGLE:
            console.log("Toggle mute");
            return Object.assign({}, state, {
                mute: !state.mute
            });
        case INIT_RESET:
            return Object.assign({}, state, {
                resetOn: !state.resetOn
            });
        default:
            return state;
    }
}

export default appReducer;
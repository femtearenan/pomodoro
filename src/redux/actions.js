export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const START = 'START';
export const PAUSE = 'PAUSE';
export const RESET = 'RESET';
export const TICK = 'TICK';
export const TURN = 'TURN';
export const ALARM = 'ALARM';
export const MUTE_TOGGLE = 'MUTE_TOGGLE';
export const INIT_RESET = 'INIT_RESET';

export const increase = (value) => {
    return {
        type: INCREASE,
        payload: {
            value: value
        }
    }
}

export const decrease = (value) => {
    return {
        type: DECREASE,
        payload: {
            value: value
        }
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const start = () => {
    return {
        type: START
    }
}

export const pause = () => {
    return {
        type: PAUSE
    }
}

export const tick = () => {
    return {
        type: TICK
    }
}

export const turn = () => {
    return {
        type: TURN
    }
}

export const alarm = () => {
    return {
        type: ALARM
    }
}

export const toggleMute = () => {
    return {
        type: MUTE_TOGGLE
    }
}

export const initReset = () => {
    return {
        type: INIT_RESET
    }
}

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const START = 'START';
export const PAUSE = 'PAUSE';
export const RESET = 'RESET';
export const TICK = 'TICK';

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

export const ticker = () => {
    return function(dispatch) {
        

        
    }
}
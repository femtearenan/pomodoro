export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const START = 'START';
export const PAUSE = 'PAUSE';
export const RESET = 'RESET';

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
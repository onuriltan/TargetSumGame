import * as types from './actionTypes';

export function startGame(state) {
    return {
        type: types.START_BUTTON_CLICKED,
        payload: state
    };
}

export function resetGame(state) {
    return {
        type: types.RESET_BUTTON_CLICKED,
        payload: state
    };

}

export function numberClick(state) {
    return { 
        type: types.NUMBER_BUTTON_CLICKED, 
        payload: state
    };

}

export function startCountDown(state) {
    return {
        type: types.START_COUNTDOWN,
        payload: state
    }
}


import * as types from './actionTypes';

import ResetGame from '../logic/resetGame';
import NumberClick from '../logic/numberClick';


export function startGame(state) {
    return {
        type: types.START_BUTTON_CLICKED,
        payload: state
    };
}

export function resetGame(state) {
    return {
        type: types.RESET_BUTTON_CLICKED,
        payload: ResetGame(state)
    };

}

export function numberClick(state, number) {
    return { 
        type: types.NUMBER_BUTTON_CLICKED, 
        payload: NumberClick(state, number) 
    };

}

export function startCountDown(state) {
    return {
        type: types.START_COUNTDOWN,
        payload: state
    }
}


import * as types from './actionTypes';

import StartGame from '../logic/startGame';
import ResetGame from '../logic/resetGame';
import NumberClick from '../logic/numberClick';

export function startGame(state) {
    return {
        type: types.START_BUTTON_CLICKED,
        payload: StartGame(state)
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

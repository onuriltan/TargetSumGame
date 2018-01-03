import * as types from './actionTypes';

import StartGame from '../logic/startGame';
import ResetGame from '../logic/resetGame';

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

export function numberButton() {
    return { type: types.NUMBER_BUTTON_CLICKED, numberButton: "numberBUTTONCLICKED" };

}
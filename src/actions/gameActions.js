import * as types from './actionTypes';


export function startGame() {
    return {type: types.START_BUTTON_CLICKED, startGame: "startGAMECLICKED"};

}

export function resetGame() {
    return {type: types.RESET_BUTTON_CLICKED, resetGame: "resetGAMECLICKED"};

}

export function numberButton() {
    return {type: types.NUMBER_BUTTON_CLICKED, numberButton: "numberBUTTONCLICKED"};

}
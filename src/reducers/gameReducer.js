import {
    NUMBER_BUTTON_CLICKED,
    START_BUTTON_CLICKED,
    RESET_BUTTON_CLICKED,
    START_COUNTDOWN
} from '../actions/actionTypes';

let initialState = {
    challengeSize: 6,
    initialChallengeRange: [30, 50],
    initialSeconds: 60,
    numbers: [0, 0, 0, 0, 0, 0],
    targetNumber: 0,
    timesToReachTarget: 0,
    timesOfPlay: 0,
    gameState: 'NOT_STARTED',
    sumToReachTarget: 0,
    startButtonDisabled: false,
    numberButtonDisabled: true,
    resetButtonDisabled: true
}


export default function game(state = initialState, action) {
    let newState;
    switch (action.type) {
        case START_BUTTON_CLICKED:
            newState = action.payload;    
            console.log("START BUTTON CLICKED.")
            return {...state, newState};

        case RESET_BUTTON_CLICKED:
            console.log("RESET BUTTON CLICKED.")
            newState = action.payload;
            return {...state, newState};

        case NUMBER_BUTTON_CLICKED:
            console.log("NUMBER BUTTON CLICKED.")
            newState = action.payload;
            return {...state, newState};

        case START_COUNTDOWN:
            console.log("START_COUNTDOWN STARTED.")
            newState = action.payload;
            return {...state, newState};

        default:
            return state;
    }

}

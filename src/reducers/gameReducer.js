import {
    NUMBER_BUTTON_CLICKED,
    START_BUTTON_CLICKED,
    RESET_BUTTON_CLICKED,
    START_COUNTDOWN
} from '../actions/actionTypes';

let initialState = {
    challengeSize: 6,
    initialChallengeRange: [30, 50],
    initialSeconds: 120,
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
            return {...state, newState};

        case RESET_BUTTON_CLICKED:
            newState = action.payload;
            return {...state, newState};

        case NUMBER_BUTTON_CLICKED:
            newState = action.payload;
            return {...state, newState};

        case START_COUNTDOWN:
            newState = action.payload;
            return {...state, newState};

        default:
            return state;
    }

}

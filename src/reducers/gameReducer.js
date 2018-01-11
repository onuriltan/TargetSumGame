import * as TYPES from '../actions/actionTypes';


let initialState = {
    challengeSize: 6,
    initialChallengeRange: [20, 30],
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
        case TYPES.START_GAME:
            newState = action.payload;    
            return {...state, newState};

        case TYPES.RESET_GAME:
            newState = action.payload;
            return {...state, newState};

        case TYPES.NUMBER_CLICK:
            newState = action.payload;
            return {...state, newState};

        case TYPES.START_COUNTDOWN:
            newState = action.payload;
            return {...state, newState};
        
        case TYPES.GAME_OVER:
            newState = action.payload;
            return {...state, newState};

        default:
            return state;
    }

}

import initialState from './initialState';
import { NUMBER_BUTTON_CLICKED, 
         START_BUTTON_CLICKED , 
         RESET_BUTTON_CLICKED } from '../actions/actionTypes';

export default function game(state = initialState.state, action) {
    let newState;
    switch(action.type) {
        case NUMBER_BUTTON_CLICKED:
            console.log('NUMBER_BUTTON_CLICKED Action')
            return action;
        case START_BUTTON_CLICKED:
            console.log('START_BUTTON_CLICKED Action')
            return action;
        case RESET_BUTTON_CLICKED:
            console.log('RESET_BUTTON_CLICKED Action')
            return action;
        default:
            return state;
    }
}
import initialState from './initialState';
import {
    NUMBER_BUTTON_CLICKED,
    START_BUTTON_CLICKED,
    RESET_BUTTON_CLICKED
} from '../actions/actionTypes';

export default function game(state = initialState, action) {
    //let newState;
    // TODO : add fucntionality to actions!!!!!!!!! change state according to logic
    switch (action.type) {
        case START_BUTTON_CLICKED:
            return initialState;
        case RESET_BUTTON_CLICKED:
            return initialState;
        case NUMBER_BUTTON_CLICKED:
            return initialState;
        default:
            return state;
    }
}
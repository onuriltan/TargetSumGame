import { combineReducers } from 'redux';
import GameReducer from "./GameReducer";

const rootReducer = combineReducers({
    GameReducer: GameReducer
});

export default rootReducer;
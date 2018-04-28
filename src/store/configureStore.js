import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') { //https://stackoverflow.com/a/35470995

        return createStore(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(thunk)
        );
    } 
    else {
        return createStore(
            rootReducer,
            applyMiddleware(thunk)
        );
    }
}
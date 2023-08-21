import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return {...state, [action.payload.key]: action.payload.value}
    }
    if (action.type === 'CLEAR_FEEDBACK') {
        return {}
    }
    return state
}



const reduxStore = createStore(
    combineReducers({
        feedback,
        // reducers go here
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);

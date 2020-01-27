import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { movieReducer } from './store/movieReducer';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// export const rootReducer = combineReducers({
//     movieList: movieListReducer,
// }) 

// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined;

const store = createStore(movieReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

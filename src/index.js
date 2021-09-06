import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux'
import {Provider} from "react-redux";

const initialState = {
    a:0,b:0,c:0
}

const counterReducer = (state = initialState, action) => {
    // console.log(action, state)
    switch (action.type) {
        case 'INC A': {
            return {...state, a: state.a + 1}
        }
        case 'DEC A': {
            return {...state, a: state.a - 1}
        }
        case 'INC B': {
            return {...state, b: state.b + 2}
        }
        case 'DEC B': {
            return {...state, b: state.b - 2}
        }
        case 'INC C': {
            return {...state, c: state.c + 5}
        }
        case 'DEC C': {
            return {...state, c: state.c - 5}
        }
        default:
            return state
    }
}

let store = createStore(counterReducer)

// console.log('not from subscribe', store.getState());
//
// store.dispatch({
//     type: 'INC A'
// })
// store.dispatch({
//     type: 'INC A'
// })

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>
                <App />
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

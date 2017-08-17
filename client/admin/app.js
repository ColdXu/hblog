import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import '../common/asset/index.css';


const testStore = {
    test : 'nihoa'
}

const test = (state = testStore, action) => {
    state.test = action.payload
    return {...state}
}

const todoApp = combineReducers({
  test,
})

const testApplyMiddleware = store => next => action => {
    // console.log('store', store)
    // console.log('next', next)
    // console.log('action', action)
    if (typeof(action) === 'function') {
        action(store.dispach);
    }
}

const store = createStore(todoApp, applyMiddleware(
    testApplyMiddleware
))

// store.subscribe((e) => {
//     console.log(e)
// })

const app = (
    <Provider store={store}>
        {router()}
    </Provider>
);

ReactDOM.render(app, document.querySelector('#app'))
import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { createStore, combineReducers } from 'redux'
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
const store = createStore(todoApp)

// store.subscribe((e) => {
//     console.log(e)
// })

const app = (
    <Provider store={store}>
        {router()}
    </Provider>
);

ReactDOM.render(app, document.querySelector('#app'))
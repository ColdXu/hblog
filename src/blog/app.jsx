import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducer, actions } from './store';
import '../common/asset/index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(
    sagaMiddleware,
))
sagaMiddleware.run(actions)
const app = (
    <Provider store={store}>
        {router()}
    </Provider>
);

ReactDOM.render(app, document.querySelector('#app'))
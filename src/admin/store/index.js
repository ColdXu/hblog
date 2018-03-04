import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga';
const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

import user from './user/reducer';
import userAction from './user/action';

const reducer2 = keys.reduce((memo, key) => {
    memo[key.match(/([^/]+)\.js$/)[1]] = context(key).default;
    return memo;
}, {});


export const reducer = combineReducers({
    user
})

userAction.rootRun = function* () {
    for (let key in userAction.effects) {
        yield takeLatest(userAction.name + '/' + key, userAction.effects[key]);
    }
}

export const actions = [userAction.rootRun];

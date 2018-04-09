import { combineReducers } from 'redux';
import { takeLatest } from 'redux-saga/effects';
const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');


// 自动导入store action.js reduce.js文件
const memo = keys.reduce((memo, key) => {
    let keyname = key.split('/')[1]
    memo[key.match(/([^/]+)\.js$/)[1]] = {
        [keyname]: context(key).default,
        ...memo[key.match(/([^/]+)\.js$/)[1]]
    };
    return memo;
}, {});

// 运行所有action到rootRun
const rootRun = function* () {
    for (let key in memo.action) {
        for (let key2 in memo.action[key].effects) {
            yield takeLatest(memo.action[key].name + '/' + key2, memo.action[key].effects[key2]);
        }
    }
}

// 合并reduce
export const reducer = combineReducers(memo.reduce)
export const actions = rootRun;

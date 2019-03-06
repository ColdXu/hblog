/**
 * 自动处理action reducer调用
 * @author zhiyong.xu <zhiyong.xui@wenba100.com>
 * @since 2018-04-08 15:50:04
 */

import { combineReducers } from 'redux';
import * as effects from 'redux-saga/effects';


const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');


// 自动导入store action.js reduce.js文件
const memo = keys.reduce((memo, key) => {
    const keyname = key.split('/')[1];
    memo[key.match(/([^/]+)\.js$/)[1]] = {
        [keyname]: context(key).default,
        ...memo[key.match(/([^/]+)\.js$/)[1]],
    };
    return memo;
}, {});


// 运行所有action到rootRun
const rootRun = function* () {
    for (const key in memo.action) {
        for (const key2 in memo.action[key]) {
            // 监听action 把redux-saga/effects的所有的功能方法入到actions的第二个参数里方便使用
            yield effects.takeLatest(`${key}/${key2}`, function* (payload) {
                yield memo.action[key][key2](payload, effects);
            });
        }
    }
};


console.log(memo);

// 合并reduce
export const reducer = combineReducers(memo.reducer);
export const actions = rootRun;

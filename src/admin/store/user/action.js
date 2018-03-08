import * as apiUser from '../../../common/api/user';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import history from '../../../common/util/history';

export default {
    name: 'user',
    effects: {
        *getUserInfo() {
            try {
                const data = yield call(apiUser.getUserInfo);
                yield put({
                    type: 'user/getUserInfo/success',
                    payload: data.data
                })
            } catch (e) {
                history.push('/login');
                yield put({
                    type: 'user/getUserInfo/failure',
                    payload: {}
                })
            }
        },

        *login({payload}) {
            try {
                const data = yield call(apiUser.login, payload);
                yield put({
                    type: 'user/login/success',
                    payload: data.data
                })
                history.push('/')
            } catch(e) {
                yield put({
                    type: 'user/login/failure',
                    payload: e
                })
            }
        },
    }
}
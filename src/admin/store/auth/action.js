import * as apiUser from '../../../common/api/user';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

export default {
    name: 'auth',
    effects: {
        *logout() {
            console.log('logout')
        },
        *login({payload}) {
            const data = yield call(apiUser.login, payload);
            if (data.code) {
                yield put({
                    type: 'auth/login/success',
                    payload: ''
                })

                
            }
        },
    }
}
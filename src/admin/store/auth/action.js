import * as apiUser from '../../../common/api/user';
import history from '../../../common/util/history';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { browserHistory } from 'react-router';

export default {
    name: 'auth',
    effects: {
        *logout() {
            console.log('logout')
        },
        *login({payload}) {
            try{
                const data = yield call(apiUser.login, payload);
                yield put({
                    type: 'auth/login/success',
                    payload: ''
                })
                history.push('/ho')
            } catch(e) {
                console.log('no', e)
            }
        },
    }
}
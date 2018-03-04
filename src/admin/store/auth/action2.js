import * as apiUser from '../../../common/api/user';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

export default {
    name: 'user2',
    effects: {
        *logout() {
            console.log('logout')
        },
        *login() {
            console.log('nihao')
        },
    }
}
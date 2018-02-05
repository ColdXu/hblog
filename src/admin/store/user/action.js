import * as apiUser from '../../../common/api/user';
import { call, put, take } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

function* login() {
    console.log('nihao')
} 

export default function* () {
    yield* takeEvery('user/login', login)
}

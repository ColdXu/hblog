import * as apiUser from '../../../common/api/user';
import { createAsyncAction }  from 'redux-action-tools'


const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = params => ({
    type: LOGIN,
    payload: apiUser.login(params)
})
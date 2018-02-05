import { combineReducers } from 'redux';

import user from './user/reducer';
import userAction from './user/action';

export const reducer = combineReducers({
    user
})
export const actions = [userAction];

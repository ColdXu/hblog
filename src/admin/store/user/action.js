import * as apiUser from '../../../common/api/user';
import type from '../../../common/util/actionTypes'

// 登录
type.defineType('LOGIN');
export const login = params => ({
    type: type.types.LOGIN,
    payload: apiUser.login(params)
})

export const types = type.types;


import { types } from './action';
const initState = {
    auth: false,
    info: {},
}
function reducer(state = initState, { payload, type }) {
    
    switch (type) {

        // 获取用户信息
        case 'user/getUserInfo/success':
            return {...state, info: payload, auth: true}
            break;

        case 'user/getUserInfo/failure':
            return {...state, info: {}, auth: false}


        // 登录
        case 'user/login/success':
            return {...state, info: payload, auth: true}
            break;

        case 'user/login/failure':
            return {...state, info: {}, auth: false}
    }
    
    return state;
}

export default reducer;
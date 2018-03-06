import { types } from './action';
const initState = {
    auth: false,
    info: {},
}
function reducer(state = initState, { payload, type }) {
    switch (type) {
        case 'auth/login/success':
            return {...state, info: payload, auth: true}
            break;

        case 'LOGIN_FAIL':
            return {...state, info: payload, auth: false}
    }
    
    return state;
}

export default reducer;
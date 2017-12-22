import { types } from './action';
const { LOGIN_SUCCESS, LOGIN_FAIL } = types;

const initState = {
    auth: false,
    info: {},

}

function reducer(state = initState, { payload, type }) {
    switch (type) {
        case LOGIN_SUCCESS:
            return {...state, info: payload, auth: true}
            break;

        case LOGIN_FAIL:
            return {...state, info: payload, auth: false}
    }
    
    return state;
}

export default reducer;
import { types } from './action';
const { LOGIN_SUCCESS, LOGIN_FAIL } = types;

const initState = {
    auth: false,
    info: {},

}

function reducer(state = initState, { payload, type }) {
    console.log('type', type)
    switch (type) {
        case LOGIN_SUCCESS:
            console.log('ok')
            return {...state, info: payload, auth: true}
            break;

        case LOGIN_FAIL:
            console.log('nihao')
            return {...state, info: payload, auth: false}
    }
    
    return state;
}

export default reducer;
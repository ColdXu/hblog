import { types } from './action';
const { LOGIN_SUCCESS, LOGIN_FAIL } = types;

const initState = {
    auth: false
}

function reducer(state = initState, { payload, type }) {
    switch (type) {
        case LOGIN_SUCCESS:
            console.log('success', payload)
            break;

        case LOGIN_FAIL:
            console.log('fail', payload)
            break;
    }
    
    return state;
}

export default reducer;
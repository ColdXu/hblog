import { types } from './action';

const initState = {
    layout: {
        right: null,
    },
};
function reducer(state = initState, { payload = {}, type }) {
    console.log('type', type);
    switch (type) {
        case 'common/setHeader/success':
            return { ...state, layout: payload };
    }

    return state;
}

export default reducer;

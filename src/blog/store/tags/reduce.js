import { types } from './action';

const initState = {
    list: [],
};
function reducer(state = initState, { payload, type }) {
    switch (type) {
        // 获取标签列表
        case 'tags/getTags/success':
            return { ...state, list: payload.list };
    }

    return state;
}

export default reducer;

import { types } from './action';
const initState = {
    info: {},
}
function reducer(state = initState, { payload, type }) {
    
    switch (type) {
        // 获取站点用户信息
        case 'article/getSizeInfo/success':
            return {...state, info: payload.data}
    }
    
    return state;
}

export default reducer;
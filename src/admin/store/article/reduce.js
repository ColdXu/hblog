import { types } from './action';
const initState = {
    articleList: {},
}
function reducer(state = initState, { payload, type }) {
    
    switch (type) {
        // 获取文章列表
        case 'article/getAdminArticleList/success':
            return {...state, articleList: payload.data}
            break;
    }
    
    return state;
}

export default reducer;
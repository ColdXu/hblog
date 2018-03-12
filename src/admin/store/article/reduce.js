import { types } from './action';
const initState = {
    articleList: {},
    data: {},
}
function reducer(state = initState, { payload, type }) {
    
    switch (type) {
        // 获取文章列表
        case 'article/getAdminArticleList/success':
            return {...state, articleList: payload.data}
            break;

        // 获取文章详情
        case 'article/getAdminArticle/success':
            return {...state, data: payload.data}
            break;
    }
    
    return state;
}

export default reducer;
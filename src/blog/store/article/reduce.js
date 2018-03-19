import { types } from './action';
const initState = {
    articleList: {
        list: []
    },
    data: {
        title: '',
        content: '',
    },
}
function reducer(state = initState, { payload, type }) {
    
    switch (type) {
        // 获取文章列表
        case 'article/getArticleList/success':
            return {...state, articleList: payload.data}
    }
    
    return state;
}

export default reducer;
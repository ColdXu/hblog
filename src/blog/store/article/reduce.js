import { types } from './action';

const initState = {
    articleList: {
        list: [],
    },
    article: {},
};
function reducer(state = initState, { payload, type }) {
    switch (type) {
        // 获取文章列表
        case 'article/getArticleList/success':
            return { ...state, articleList: payload.data };

        // 获取文章详情
        case 'article/getArticle/success':
            return { ...state, article: payload.data };
    }

    return state;
}

export default reducer;

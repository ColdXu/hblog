import { types } from './action';
const initState = {
    articleList: {
        list: []
    },
    data: {
        id: '',
        title: '',
        content: '',
        tag: '',
        coverId: '',
    },
}
function reducer(state = initState, { payload = {}, type }) {
    switch (type) {
        // 获取文章列表
        case 'article/getAdminArticleList/success':
            return {...state, articleList: payload.data}

        // 获取文章详情
        case 'article/getAdminArticle/success':
            return {...state, data: payload.data}

        // 改变状态
        case 'article/putAdminArticleStatus/success':
            state.articleList.list.forEach((item, index) => {
                if (payload.id === item.id) {
                    state.articleList.list[index].status = item.status === 'publish' ? 'edit' : 'publish'
                }
            })
            return {...state}

        // 获取文章详情
        case 'article/setArticle':
            return {...state, data: {
                id: '',
                title: '',
                content: '',
                tag: '',
                coverId: '',
            }
        }
            
    }
    
    return state;
}

export default reducer;
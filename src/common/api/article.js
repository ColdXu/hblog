import http from '../util/http';


// 获取管理员文章列表
export function getAdminArticleList() {
    return http.get('admin/article/list')
}

// 创建文章
export function createAdminArticle({
    title,
    describe,
}) {
    return http.post('admin/article', {
        title,
        describe,
    })
}
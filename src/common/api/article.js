import http from '../util/http';

// 获取文章列表
export function getArticleList() {
    return http.get('article/list')
}

// 获取管理员文章列表
export function getAdminArticleList() {
    return http.get('admin/article/list')
}

// 获取管理员详情文章
export function getAdminArticle({id}) {
    return http.get(`admin/article/${id}`)
}

// 获取详情文章
export function getArticle({id}) {
    return http.get(`article/${id}`)
}

// 创建文章
export function createAdminArticle({
    title,
    content,
    status,
    coverId,
    tagId,
}) {
    return http.post('admin/article', {
        title,
        content,
        status,
        coverId,
        tagId,
    })
}

// 修改文章
export function putAdminArticle({
    id,
    title,
    content,
    coverId,
    tagId,
}) {
    return http.put(`admin/article/${id}`, {
        title,
        content,
        coverId,
        tagId,
    })
}

// 修改博文状态
export function putAdminArticleStatus({id, status}) {
    return http.put(`admin/article/${id}/${status}`)
} 


import http from '../util/http';

// 添加标签
export function addAdminTags() {
    return http.post('admin/tags')
}

// 修改标签
export function updateAdminTags() {
    return http.put('admin/tags')
}

// 获取标签列表
export function getTags() {
    return http.get('tags/list')
}

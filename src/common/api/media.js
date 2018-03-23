import http from '../util/http';

// 上传媒体文件
export function uploadMedia({file}) {
    return http.post(`media/file`, file, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
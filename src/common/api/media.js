import http from '../util/http';

// 上传媒体文件
export function uploadMedia(formData) {
    return http.post('media', formData, {
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

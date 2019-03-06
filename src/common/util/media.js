import config from '../config';

// 获取图片
export const getMedia = function (id) {
    return `${config.API_BASE}media/${id}`;
};

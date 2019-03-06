import http from '../util/http';


// 登录
export function login({
    username,
    password,
}) {
    return http.post('login', {
        username,
        password,
    });
}

// 获取用户信息
export function getUserInfo() {
    return http.get('user/info', {
        disabledMessage: true,
    });
}

// 获取站点信息
export function getSizeInfo({ username }) {
    return http.get(`user/sizeInfo/${username}`, {
        disabledMessage: true,
    });
}

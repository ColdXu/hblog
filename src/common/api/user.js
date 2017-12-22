import http from '../util/http';

export function login({
    username,
    password
}) {
    return http.post('login', {
        username,
        password
    })
}
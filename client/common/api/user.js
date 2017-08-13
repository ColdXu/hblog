import http from '../util/http';

export function login({
    username,
    password
}) {
    return http.post('http://127.0.0.1:8000/api/login', {
        username,
        password
    })
}
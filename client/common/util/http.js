import axios from 'axios';
import config from '../config';

var instance = axios.create({
  baseURL: config.API_BASE,
  timeout: 3000,
  headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(function(config) {
    config.data = JSON.stringify(config.data);
    return config;
}, function(error) {
    return Promise.reject(error)
});

instance.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error)
});

export default instance;
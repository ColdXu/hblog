import axios from 'axios';
import config from '../config';
import message from '../component/message'


var instance = axios.create({
  baseURL: config.API_BASE,
  timeout: 3000,
  withCredentials: true,
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

instance.interceptors.response.use(function(response, config) {
    if (response.data.code !== 0) {
        if (!response.config.disabledMessage) {
            message.error(response.data.message);
        }
        return Promise.reject(response.data)
    } else {
        return response.data;
    }
}, function(error) {
    if (!error.config.disabledMessage) {
        message.error(error.data.message);
    }
    return Promise.reject(error)
});




export default instance;
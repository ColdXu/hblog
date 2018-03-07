import axios from 'axios';
import config from '../config';
import message from '../component/message'


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
    if (response.data.code !== 0) {
        message.success();
        return Promise.reject(response.data)
    } else {
        return response.data;
    }
}, function(error) {
    
    return Promise.reject(error)
   
});




export default instance;
import axios from 'axios';
import { message } from 'antd';
import config from '../config';


const instance = axios.create({
    baseURL: config.API_BASE,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(config => config,
    error => Promise.reject(error));

instance.interceptors.response.use((response, config) => {
    if (response.data.code !== 0) {
        if (!response.config.disabledMessage) {
            message.error(response.data.message);
        }
        return Promise.reject(response.data);
    }
    return response.data;
}, (error) => {
    if (!error.config.disabledMessage) {
        message.error(error.data.message);
    }
    return Promise.reject(error);
});


export default instance;

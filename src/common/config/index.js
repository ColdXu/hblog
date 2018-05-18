
let env = __ENV__ || 'dev';
let API_BASE = '';

switch(env) {
    case 'prd':
        API_BASE = '//api.coldxu.com/api/';
        break;
    default: 
        API_BASE = 'http://localhost:8000/api/';
        break;
}

export default {
    API_BASE
}
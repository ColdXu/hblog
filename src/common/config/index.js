
let env = ENV;
let API_BASE = '';

switch(env) {
    case 'prd':
        API_BASE = 'http://182.254.231.120:8000/api/';
        break;
    default: 
        API_BASE = 'http://localhost:8000/api/';
        break;
}

export default {
    API_BASE
}
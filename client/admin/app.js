import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
const app = router();

ReactDOM.render(app, document.querySelector('#app'))
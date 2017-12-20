const path = require('path');

const DIRNAME =  path.resolve(__dirname, '../');

// 前端项目开发目录
const CLIENT_PATH = path.resolve(DIRNAME, './client');

// 打包输出目录
const OUTPUT_PATH = path.resolve(DIRNAME, './dist');

// 前端项目入口文件
const getClientEntry = function() {
    const apps = ['blog', 'admin'];
    const entry = {};
    apps.forEach((name) => {
        entry[name] = path.resolve(CLIENT_PATH, './' + name + '/app.jsx')
    })
    return entry;
}

module.exports = {
    DIRNAME: DIRNAME,
    CLIENT_PATH: CLIENT_PATH,
    OUTPUT_PATH: OUTPUT_PATH,
    CLIENT_ENTRY: getClientEntry(),
}
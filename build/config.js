const path = require('path');

const DIRNAME =  path.resolve(__dirname, '../');

// 前端项目开发目录
const SRC_PATH = path.resolve(DIRNAME, './src');

// 打包输出目录
const OUTPUT_PATH = path.resolve(DIRNAME, './dist');

// 前端项目入口文件
const getClientEntry = function(entrys = []) {
    const apps = ['blog', 'admin'];
    const entry = {};
    apps.forEach((name) => {
        entry[name] = ['babel-polyfill', path.resolve(SRC_PATH, './' + name + '/app.jsx')]
        entry[name] = entry[name].concat(entrys);
    })
    return entry;
}

module.exports = {
    DIRNAME: DIRNAME,
    SRC_PATH: SRC_PATH,
    OUTPUT_PATH: OUTPUT_PATH,
    getClientEntry: getClientEntry,
}
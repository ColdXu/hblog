const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const webpackConfigDev = require('./webpack.dev');
const webpackConfigPrd = require('./webpack.prd');

const ENV = process.env.NODE_ENV;

const options = {
    contentBase: 'dist',
    publicPath: '',
}

let server;

if (ENV === 'development') {
    server = new WebpackDevServer(webpack(webpackConfigDev), options)
} else {
    server = new WebpackDevServer(webpack(webpackConfigPrd), options)
}

server.listen(3001, function() {
    console.log('服务已启动：http://localhost:3001')
})
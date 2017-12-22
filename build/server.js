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
let config = ENV === 'development' ? webpackConfigDev : webpackConfigPrd;

server = new WebpackDevServer(webpack(config), options)

server.listen(3001, function() {
    console.log('服务已启动：http://localhost:3001')
})
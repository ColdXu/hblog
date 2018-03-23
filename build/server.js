
const middleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfigDev = require('./webpack.dev');
const webpackConfigPrd = require('./webpack.prd');
const config = require('./config');
const express = require('express');
const app = express();

const ENV = process.env.NODE_ENV;
let compiler = webpack(ENV === 'development' ? webpackConfigDev : webpackConfigPrd);

app.use(middleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.listen(3001, () => {
    console.log('服务已启动：http://localhost:3001')
})
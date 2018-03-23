const path = require('path');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./config');


// console.log(config.getClientEntry({middleware: 'webpack-hot-middleware/client'}))
module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: config.getClientEntry(['webpack-hot-middleware/client']),
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            '__ENV__': JSON.stringify('dev'),
        }),
    ]
})
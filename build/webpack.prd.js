const path = require('path');
const webpack = require('webpack');
const webpackCommon = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./config');

module.exports = merge(webpackCommon, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            '__ENV__': JSON.stringify('prd'),
        }),
        // new BundleAnalyzerPlugin()
    ]
})
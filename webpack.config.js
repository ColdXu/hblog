const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ENTRY_PATH = path.resolve(__dirname, './client');
const OUTPUT_PATH = path.resolve(__dirname, './dist');

module.exports = {
    context: ENTRY_PATH,
    devtool: 'inline-source-map',
    entry: {
        blog: './blog/app.js',
        admin: './admin/app.js',
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].bundle.js',
    },
    devServer: {
        contentBase: OUTPUT_PATH,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    // 'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
                    
            // {
            //     test: /\.css$/,
            //     exclude: [/node_modules/],
            //     loader:  ExtractTextPlugin.extract({
            //         loader: 'css-loader?importLoaders=1',
            //     })
            // }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        // new ExtractTextPlugin({
        //     filename: '[name].bundle.css',
        //     allChunks: true
        // }),

        new HtmlWebpackPlugin({
            title: '主页',
            template: ENTRY_PATH + '/blog.html',
            filename: 'blog.html',
            chunks: ['blog']
        }),

        new HtmlWebpackPlugin({
            title: '管理后台',
            template: ENTRY_PATH + '/admin.html',
            filename: 'admin.html',
            chunks: ['admin']
        }),


        new webpack.ProvidePlugin({
            React: 'react',
            _: 'lodash'
        }),

        new CleanWebpackPlugin(['dist']),

        new webpack.HotModuleReplacementPlugin()
    ]
}


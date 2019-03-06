
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config');

module.exports = {
    context: config.ENTRY_PATH,
    output: {
        path: config.OUTPUT_PATH,
        filename: '[name].[hash:6].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {
                    // 开启缓存，明显提升打包速度
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(less|css)$/,
                // exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
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
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },

    plugins: [
        // new ExtractTextPlugin({
        //     filename: '[name].bundle.css',
        //     allChunks: true
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // }),

        // new webpack.optimize.SplitChunksPlugin({
        //     chunks: 'all',
        //     minSize: 30000,
        //     minChunks: 1,
        //     maxAsyncRequests: 5,
        //     maxInitialRequests: 3,
        //     name: true,
        //     cacheGroups: {
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10
        //         }
        //     }
        // }),


        new HtmlWebpackPlugin({
            title: '主页',
            template: path.resolve(config.SRC_PATH, './tpl.html'),
            filename: 'blog.html',
            chunks: ['blog', 'common']
        }),

        new HtmlWebpackPlugin({
            title: '管理后台',
            template: path.resolve(config.SRC_PATH, './tpl.html'),
            filename: 'admin.html',
            chunks: ['admin', 'common']
        }),

        new webpack.ProvidePlugin({
            React: 'react',
            _: 'lodash',
        }),
        new CleanWebpackPlugin(
            ['dist'],
            {
                root: config.DIRNAME,
                dry: false,
            }
       ),
    ]
}


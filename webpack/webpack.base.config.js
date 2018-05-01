const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolveConfig = require('./resolve.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = merge(resolveConfig, {
    context: path.resolve(__dirname + '/../'),

    output: {
        path: path.resolve(__dirname, './public'),
        filename: "bundle.js",
        publicPath: '/'
    },

    performance: {
        hints: false
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                  {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
            }
        ]
    },

    plugins: [ 
        new ExtractTextPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
});

module.exports = baseConfig;

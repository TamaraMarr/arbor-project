const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolveConfig = require('./resolve.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

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
                use: [
                    devMode
                        ? 'style-loader?sourceMap'
                        : MiniCssExtractPlugin.loader,
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass-loader?sourceMap'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            chunkFilename: devMode ? 'style.css' : '[id].[hash].css'
        })
    ]
});

module.exports = baseConfig;

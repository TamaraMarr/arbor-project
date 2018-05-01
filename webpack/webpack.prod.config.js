const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = merge(baseConfig, {
    mode: 'production',

    entry: {
        src: [
            '../index.js'
        ]
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css',
            allChunks: true
        })
    ]
});

module.exports = config;

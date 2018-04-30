const path = require('path');

const resolveConfig = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../'),
            'node_modules'
        ],
        alias: {
            Components: path.resolve(__dirname, '../src/components/'),
            Config:  path.resolve(__dirname, '../src/config/'),
            Models: path.resolve(__dirname, '../src/data/models/'),
            Services: path.resolve(__dirname, '../src/services/')
        }
    }
};

module.exports = resolveConfig;

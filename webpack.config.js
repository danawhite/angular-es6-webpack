var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './app.js,',
    output: {
        path: __dirname + '/app',
        filename: ''
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};
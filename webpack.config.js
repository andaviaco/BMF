const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: [
        './src/js/app.js',
        './src/js/components/Main.jsx'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(pkg.config.buildDir),
        hot: true,
        noInfo: false,
        inline: true,
        stats: { colors: true }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 };

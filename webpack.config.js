const webpack = require('webpack');
const path    = require('path');
const glob    = require("glob")
const pkg     = require('./package.json');

var scripts = [];
var js =[];
var jsx =[];

js = glob.sync(`./src/js/**/*.js`).map(file => {
    return file;
});

jsx = glob.sync(`./src/js/**/*.jsx`).map(file => {
    return file;
});

scripts = js.concat(jsx);

module.exports = {
    entry: scripts,
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

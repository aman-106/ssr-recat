const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: {
        server: './src/client/App.js',
        client: './src/client/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].js',
        publicPath: '/',
    },
    node: {
        fs: 'empty',
        net: 'empty',
    },
    plugins: [
        new MinifyPlugin({}, { test: /\.js$/ })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }

}


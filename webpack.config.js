const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/index.js'], 
        edit: ['babel-polyfill', './src/edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    }, 
    module: {
        rules: [{
            test: /\.js$/, // targets just the .js files
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    devtool: 'source-map'
}
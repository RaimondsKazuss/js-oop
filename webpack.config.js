const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              exclude: /node_modules/,
              use: ["style-loader", "css-loader"],
            },
          ], 
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'js-oop',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ]
}

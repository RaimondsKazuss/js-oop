const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        clean: true,
    },
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
                use: ["style-loader", "css-loader"],
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'js-oop',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        fallback: {
          "fs": false,
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
          "url": false,
          "querystring": false 
        },
      
      },
     
  
   
  
      

}
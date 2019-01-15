const path = require('path');
const webpack = require("webpack");
const fs = require('fs');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';

module.exports = {

    mode: 'development',
    entry: './src/app.js',
    devtool: 'inline-source-map',
    watch: true,

    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'lib')
    },

    devServer: {
      watchContentBase: true,
      disableHostCheck: true,
      publicPath: '/lib/',
      host: '127.0.0.1',
      port: 8080,
      contentBase: __dirname,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      watchOptions: {
        ignored: /node_modules/
      }
    },
    
    target: 'web',
    node: {
      fs: 'empty'
    },
    
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }, {
          test: /\.(woff|woff2|eot|ttf|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [{
            loader: "url-loader?limit=50000&name=fonts/[name].[ext]"
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader'
        }
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        ko: "knockout"
      })
    ]
}

const path = require('path');
const webpack = require("webpack");
const fs = require('fs');

var config = {

  entry: './src/app.js',
  watch: true,


  output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'lib')
  },

  devtool: 'inline-source-map',

  devServer: {
    watchContentBase: true,
    disableHostCheck: true,
    clientLogLevel: 'error',
    stats: 'errors-only',
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
        exclude: /node_modules/,
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

module.exports = (env, argv) => {

  // Development
  if (argv.mode === 'development') {

    console.log("Mode: Development");
    config.devtool = 'inline-source-map';

  }

  // Prorduction
  if (argv.mode === 'production') {
    console.log("Mode: Production");

    config.devtool = '';

    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true

          },
          output: {
            comments: false
          }
        }
      })  
    )
  }

  return config;

}

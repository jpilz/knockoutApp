var webpack = require("webpack");
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'lib'),
        filename: 'app.bundle.js',
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015'
        },
        {
            test: /\.html$/,
            loader: 'html',
            query: {
                minimize: false
            }
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
        ,{
            test: /\.(woff|woff2|eot|ttf|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loaders: 'url-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    plugins: !debug ?
    [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true
                    
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            ko: "knockout"
        })
    ] 
    :
    [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            ko: "knockout"
        })
    ]
}

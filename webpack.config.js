var webpack = require("webpack");
const path = require('path');

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
            loader: "url-loader?limit=50000&name=fonts/[name].[ext]"
        },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}

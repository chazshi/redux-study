var path = require('path');
var webpack = require('webpack');

// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var htmlWebpackPlugin = require('html-webpack-plugin');
// export const port = 8080;
var base = require("./webpack.config.base.js");
var address = base.address; //'localhost';//base.address;
var port = base.port;
// import {address, port} from "./webpack.config.base.js";

var config = {
    context: __dirname,
    // devtool: 'cheap-module-eval-source-map',
    // entry: [
    // 	// 'webpack-hot-middleware/client',
    // 	'./index.js'
    // ],
    entry: {
        app: ["./index.js"]
    },
    output: {
        path: __dirname,
        // path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        // 8080不要动，否则cmd line会失效
        publicPath: 'http://' + address + ':' + port + '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        
        //nodemon重启就会执行一次webpack，所以这个还是去掉比较好，除非配置好非路由文件不监控
        // new OpenBrowserPlugin({ //打开地址
        //     url: 'http://' + address + ':' + port + '/'
        // }),

        new htmlWebpackPlugin({
            filename: 'index.html', //占位符，无法用chunkhash//[name]-[id]-[hash]-
            template: './index.html', //模版html
            inject: 'body', //放在head还是body
            title: 'Redux Todos Example',
            // date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            // <%= htmlWebpackPlugin.options.title %>
            // 过程：<% for(var key in htmlWebpackPlugin.options){ %>
            manifest: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            },
            //manifest相关链接：https://github.com/kangax/html-minifier#options-quick-reference
            // chunks: ['main', 'a'],	//指定加入的依赖js
            // excludeChunks: ['a', 'b']	//指定不加入的依赖js
        }),
        // new webpack.NoErrorsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        //uglifyjs only supports ES5 and webpack 2, so you only use babel-preset-es2015 and webpack 2
        // new webpack.optimize.UglifyJsPlugin({
        // 	compress: {
        // 		warnings: false
        // 	}
        // })
    ],
    // devServer: { inline: true },
    // devServer: {
    // 	contentBase: "./app/static",
    // 	port: 3000,

    // 	inline: true,
    // 	historyApiFallback: true,

    // 	colors: true,
    // 	stats: 'normal',
    // },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname,
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },
        // {
        //     test: /\.css$/,
        //     use: [{
        //         loader: 'style-loader'
        //     },{
        //         loader: 'css-loader',
        //         options: {
        //             importLoader: 1
        //         }
        //     },{
        //         loader: 'postcss-loader',
        //         options: {
        //             // 如果没有options这个选项将会报错 No PostCSS Config found
        //             plugins: (loader) => [
        //                 require('postcss-import')({root: loader.resourcePath}),
        //                 require('postcss-cssnext')(),
        //                 require('autoprefixer')(),
        //                 require('cssnano')
        //             ]
        //         }
        //     }]
        // },
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader',
                options: {
                    importLoader: 1
                }
            },{
                loader: 'postcss-loader',
                    options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('postcss-import')({ root: loader.resourcePath }),
                            require('postcss-cssnext')(),
                            require('autoprefixer')(), //CSS浏览器兼容
                            require('cssnano')() //压缩css
                        ]
                    }
            },{
                loader: 'sass-loader'
            }]
        }]
    }
}

module.exports = config;
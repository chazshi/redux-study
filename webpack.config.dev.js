var webpack = require("webpack");
var config = require("./webpack.config.js");

// var port = 8080;
var base = require("./webpack.config.base.js");
var address = base.address;//'localhost';//base.address;
var port = base.port;

var cfg = Object.assign(config, {
    devtool: "cheap-module-eval-source-map"
});

cfg.entry.app.unshift("webpack-hot-middleware/client?http://" + address + ":" + port + "/");
// cfg.entry.app.unshift("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000");


// //entry 
// (config.entry || {}).map(function (name) {
//     //添加webpack-dev-server客户端
//     cfg.entry = []
//     	.concat("webpack-dev-server/client?http://localhost:8080/")
//     	.concat(config.entry);
// });

module.exports = cfg;
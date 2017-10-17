var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = new (require('express'))();

var config = require('./webpack.config');
var cfg = require('./webpack.config.dev');

// var port = 8080;
var base = require("./webpack.config.base.js");
//仅仅server.js改成var address = "0.0.0.0";会发生跨域问题
var address = base.address;//'localhost';//
var port = base.port;

var compiler = webpack(cfg);	//webpack.config.dev.js

// console.log('123');

app.use(webpackDevMiddleware(compiler, { 
	noInfo:false, 
	// publicPath: 'http://localhost:8080/sockjs-node/info',
	publicPath: cfg.output.publicPath,
    inline: true,
    hot: true,
    quiet: false,
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
	// 排除favicon.ico请求
	if(req.url!=="/favicon.ico")
         console.log(req.url);

	res.sendFile(__dirname + '/index.html');
	// console.log('123');
	res.end();
});

app.get('/test',function (req,res) {
    var data = {
        title:'2',
        content:'success'
    }
    res.send(data)
});

var server = app.listen(port, address, function(error) {
	if(error) {
		console.error(error);
	} else {
		console.info("==> Listening on port %s. Open up http://%s: %s/ in your browser.", port, address, port);
	}
});

// var opn=require('opn');
// opn('http://' + address + ':' + port, {app: 'chrome'});

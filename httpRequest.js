var http = require('http');
var url = require('utl');
var util = require('util');

// url.parse 手动解析GET请求？后面的参数
http.createServer(function(req, res){
    res.writeHead(200, ('Content-Type': 'text/plain'));
    res.end(util.inspect(url.parse(req.url.true)));
}).listen(3000);


/* 获取 POST 请求内容
 * post请求的内容全部都在请求体中，node.js 默认是不会解析请求体的，原因是等待请求体传输可能是一件耗时的工作，
 * 比如上传文件，恶意的POST请求会大大消耗服务器的资源
 */
var querystring = require('querystring');

http.createServer(function(req, res){
    var post = ''; //定义了一个 post 变量, 用于暂存请求体的信息
    req.on('data', function(chunk){ // 通过req 的data 事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
    });

    req.on('end', function(){ // 在end事件触发后，通过querystring.parse将 post 解析为真正的POST请求格式，然后向客户端返回
        post = querystring.parse(post);
        res.end(util.inspect(post);
    });
}).listen(3000);

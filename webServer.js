// 使用 Node 创建 Web 服务器
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response){
    var pathname = url.parse(request.url).pathname; // 解析请求，包括文件名
    // 输出请求的文件名
    console.log('Request for ' + pathname + ' received.');
    fs.readFile(pathname.substr(1), function (err, data){
        if (err) {
            console.log(err);
            response.writeHead(404, ('Content-Type', 'text/html'));
        }else{
            response.write(data.toString());
        }
        // 发送响应数据
        response.end();
    });
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

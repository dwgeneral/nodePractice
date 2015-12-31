var express = require('express');
var app = express();

app.use(express.static('public')); // 访问：http://localhost:8180/images/bv.png
app.get('/', function (req, res){
    res.send('Hello, Node');
});
var server = app.listen(8180, function(){
    var host = server.address().address
    var port = server.address().port
    console.log('应用实例, 访问地址为 http://%s:%s', host, port);
});

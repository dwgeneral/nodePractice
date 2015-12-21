// 创建长度为 10 字节的 Buffer 实例
var buf1 = new Buffer(10);

// 通过给定的数组创建 Buffer 实例
var buf2 = new Buffer([10, 20, 30, 40, 50]);

// 通过一个字符串来创建 Buffer 实例
var buf3 = new Buffer("this is a string", "utf-8"); //默认也是 utf-8 编码方式

// 写数据入缓冲区
len = buf1.write('some string');
console.log("写入字节数：" + len); // 返回世纪写入大小，如果空间不足，则只会写入部分字符串

// 读数据
//buf3.toString([encoding][, start][, end]);
var buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++){
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 将 Buffer 转换为 JSON 对象
var buf = new Buffer('someString');
var json = buf.toJSON(buf);
console.log(json);

// 缓冲区合并
var buffer1 = new Buffer('hello');
var buffer2 = new Buffer(' node');
var buffer3 = Buffer.cancat([buffer1, buffer2]);
console.log(buffer3.toString());

// 缓冲区比较 *返回一个数字，表示在之前之后，或相同
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
     console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
     console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
     console.log(buffer1 + " 在 " + buffer2 + "之后");
}

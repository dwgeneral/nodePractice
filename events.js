/*
// 引入 events 模块
var events = require('events');

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
};

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received
eventEmitter.on('data_received', function(){
    console.log('数据接受成功');
});

//触发 connection 事件
eventEmitter.emit('connection');

console.log('程序执行完毕');
*/

/*
//************ 每个事件支持多个事件监听器
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1', 'arg2');
*/

//************ 绑定事件：addListener 和 on
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
    console.log('listener1 do');
};

var listener2 = function(){
    console.log('listener2 do');
};

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " 监听器监听连接事件 ");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);

console.log('listener1 不再受监听');

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " 监听器监听连接事件");

console.log('程序执行完毕');

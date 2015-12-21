/*
// require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象
var hello = require('./testRequire');
hello.world();
*/

// 直接获取对象
var Hello = require('./testRequire');
var hello = new Hello();
hello.setName('Ezio');
hello.sayHello();

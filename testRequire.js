// testRequire.js 通过 exports 对象把 world 作为模块的访问接口，在require.js 中加载这个模块，然后就可以直接访问 testRequire.js 中 exports
// 对象的成员函数了
exports.world = function(){
    console.log('Hello, World');
};

// 使用module.exports 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports
function Hello() {
    var name;
    this.setName = function(thyName){name = thyName};
    this.sayHello = function(){console.log('Hello ' + name)};
};

module.exports = Hello;

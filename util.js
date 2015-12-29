/* ------------------------------------------------
 * ------------------ util.inherits ---------------
 * ------------------------------------------------
 */
var util = require('util');
// Base 构造函数
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.exampleMethod = function() {
        console.log('Welcome ' + this.name);
    };
}

// 在 Base 的原型中定义函数
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
};

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.exampleMethod();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
objSub.exampleMethod();
console.log(objSub);

/* ------------------------------------------------
 *  utl.inspect(object, [showHidden], [depth], [colors])
 * ------------------------------------------------
 */
var util = require('util');
function Person() {
    this.name = 'Ezio';
    this.toString = function() {
    return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true);

/* ------------------------------------------------
 * ------------------ util.isArray ---------------
 * ------------------------------------------------
 */
var util = require('util');
util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false

/* ------------------------------------------------
 * ------------------ util.isRegExp ---------------
 * ------------------------------------------------
 */

/* ------------------------------------------------
 * ------------------ util.isDate -----------------
 * ------------------------------------------------
 */

/* ------------------------------------------------
 * ------------------ util.isError ----------------
 * ------------------------------------------------
 */

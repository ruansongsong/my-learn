/**
* @Author: ruansongsong <ruansongsong>
* @Date:   2016-08-08T11:25:37+08:00
* @Email:  ruansongsong@gmail.com
* @Last modified by:   ruansongsong
* @Last modified time: 2016-08-08T11:25:46+08:00
*/
"use strict";
/**
 * class javascript语法糖
 */
// es5 一般的写法
function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.Add = function  () {
  return this.x + this.y;
}
var p = new Point(1, 3);
console.log(p.Add());

// es6一般的写法
class Point1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
  Add(){
    return this.x + this.y;
  };
  Muti(){
    return this.x * this.y;
  }
}
var p1 = new Point1(1, 3);
console.log(p1.Add());
console.log(p1.Muti());
console.log(p1.constructor);
console.log(typeof Point1);// function 类的本质还是函数
console.log(Point1.prototype.constructor); // 类本身指向构造 函数
console.log(p1.constructor);// Point1

// /**
// * @Author: ruansongsong <ruansongsong>
// * @Date:   2016-08-08T11:25:37+08:00
// * @Email:  ruansongsong@gmail.com

// */
// "use strict";
// /**
//  * class javascript语法糖
//  */
// // es5 一般的写法
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.Add = function  () {
//   return this.x + this.y;
// }
// var p = new Point(1, 3);
// console.log(p.Add());
//
// // es6一般的写法
// class Point1 {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   };
//   Add(){
//     return this.x + this.y;
//   };
//   Muti(){
//     return this.x * this.y;
//   }
// }
// var p1 = new Point1(1, 3);
// // console.log(p1.Add());
// // console.log(p1.Muti());
// // console.log(p1.constructor);
// // console.log(typeof Point1);// function 类的本质还是函数
// // console.log(Point1.prototype.constructor); // 类本身指向构造 函数
// // console.log(p1.constructor);// Point1
// var p2 = new Point1(2, 4);
// console.log(p1.__proto__ === p2.__proto__);
// console.log(p1.__proto__);
// // console.log(p1.prototype); // undefined
// console.log(Point1.prototype.constructor);
//
// // extends
// class Point2 extends Point1 {
//   constructor(x, y, z) {
//     super(x, y);
//     this.z = z;
//   }
//   Add2(){
//     return super.Add() + this.z;
//   }
// }
// var p3 = new Point2(1, 3, 5);
// console.log(p3.Add2());
"use strict";
class log {
  constructor(x) {
    this.x = x;
    this.init();
  };
  init() {
    this.a()
  }
  a() {
    console.log(this.x);
  }
}
let a = new log(2);

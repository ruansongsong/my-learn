// var a = [];
// for(var i = 0; i < 10; i++){
// 	a[i] = function () {
// 		console.log(i);
// 	};
// };
// a[6]();

// var a = [];
// for(let i = 0; i < 10; i++){
// 	a[i] = function () {
// 		console.log(i);
// 	};
// };
// a[6]();

// var temp = 111;
// if (true) {
// 	let temp;
// 	temp = 'abc';
// 	console.log(temp);
// }
// console.log(temp);

// typeof x;
// var x;
// console.log(y);
// var y = 10;
// function f() {
// 	console.log("i am out");
// }
// (function () {
// 	if (false) {
// 		function f() {
// 			console.log("i am in");
// 		}
// 	}
// 	f();
// })()
// let a = 10;
// console.log(a);
// ;(function (){
// 	setTimeout(function () {
// 		console.log('hehe');
// 	}, 2000);
// })();
// console.log('ggg');
// var points = [1, 32, 10, 19, 45, 4];
// points.sort(function (a, b) {
// 	return b - a;
// });
// console.log(points);
// console.log(points.sort);
// var toString = Object.prototype.toString;
// var isType = function (type) {
// 	return function (obj) {
// 		return toString.call(obj) == '[object ' + type + ']';
// 	}
// }
// var isString = isType('String');
// var a = 'hhh';
// console.log(a.isString);
// function add(a, b){console.dir(this);}
// function sub(a, b){console.dir(this);}
// add(1,2);
// "window"
// sub(1,2);
// "window"
// add.call(sub, 1, 2);
// "function sub(a, b)..."
// sub.apply(add, [1, 2]);
// "function add(a, b)..."
//
// function setColor(color){
// 	this.style.color = color;
// }
// var p = document.getElementById('title');
// window.setColor.call(p, "#ddd");
//
// "use strict";
// let a = 'song';
// let b = Array.form(a);
// console.log(b);
// console.log(this);
// var name = "The Window";
// 　　var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　return function(){
// 　　　　　　　　return this.name;
// 　　　　　　};
// 　　　　}
// 　　};
// 　　console.log(object.getNameFunc()())
// var name = "The Window";
// 　　var object = {
// 　　　　name : "My Object",
// 　　　　getNameFunc : function(){
// 　　　　　　var that = this;
// 　　　　　　return function(){
// 　　　　　　　　return that.name;
// 　　　　　　};
// 　　　　}
// 　　};
// 　　console.log(object.getNameFunc()());

// function outer() {
// 	var a = 2;
// 	function inner() {
// 		console.log(a);
// 	}
// 	return inner;
// }
// var a = outer();
// a();
for (var i = 0; i <= 5; i++) {
	(function (j){
		setTimeout(function () {
			console.log(j);
		},1000);
	})(i)
}

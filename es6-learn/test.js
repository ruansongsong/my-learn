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
var toString = Object.prototype.toString;
var isType = function (type) {
	return function (obj) {
		return toString.call(obj) == '[object ' + type + ']';
	}
}
var isString = isType('String');
var a = 'hhh';
console.log(a.isString);

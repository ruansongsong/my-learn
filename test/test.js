// var a = 10;
// (function () {
// 	var a = 5;
// 	console.log(a);
// })();
// console.log(a);
function makeAdd(x) {
	function add(y) {
		return y + x;
	};
	return add;
};
var plusOne = makeAdd(1);
var plusTen = makeAdd(10);
console.log(plusOne(3));

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
function f() {
	console.log("i am out");
}
(function () {
	if (false) {
		function f() {
			console.log("i am in");
		}
	}
	f();
})()
let a = 10;
console.log(a);

// var stack = require('../data-structures/stack.js');
// var s = new stack.Stack();
// s.push('1');
// s.push('2');
// // console.log(s.pop());
// console.log(s.peek());

// 数制间的相互转换
"use strict";
const stack = require('../data-structures/stack.js');
function trans(number, base) {
	let s = new stack.Stack();
	do {
		s.push(number % base);
		number = Math.floor(number / base);
	} while (number > 0);
	console.log(s);
	let m;
	while (s.top >= 0) {
		m = s.pop();
		console.log(m);
	}
	return m;
}
console.log(trans(10, 2));

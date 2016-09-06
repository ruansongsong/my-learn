"use strict";
let a = new Buffer('hello');
console.log(a.toString('base64'));
console.log(a.kMaxLength);
const buf = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
console.log(buf);

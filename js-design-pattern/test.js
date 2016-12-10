// JavaScript的根对象是Object.prototype 对象，JavaScript的每个对象，实际上都是从 Object.prototype 克隆而来的
var obj1 = new Object();
var obj2 = {}
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.getPrototypeOf(obj2) === Object.prototype); // true

// Person：函数构造器，函数既可以作为普通函数被调用，也可作为构造器被调用
function Person(name){
	this.name = name;
};
Person.prototype.sayName = function(){
	return this.name;
};
var person = new Person('songsong');
console.log(person.sayName());
console.log(person.name);
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(person) === Object.prototype); // false
console.log(person.__proto__ === Person.prototype); // true
// __proto__指向它的构造器的原型对象

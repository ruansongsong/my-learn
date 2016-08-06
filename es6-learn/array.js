/**
* @Author: ruansongsong <ruansongsong>
* @Date:   2016-08-06T08:47:23+08:00
* @Email:  ruansongsong@gmail.com
* @Last modified by:   ruansongsong
* @Last modified time: 2016-08-06T08:49:28+08:00
*/

/**
* Array.from()         ----es6
* [].slice.call(obj)   ----es5
*/
var arrayObj = {
  '0': 0,
  '1': 1,
  '2': 2,
  length: 3 // 必须要有,类似数组的对象,必须要有length属性
}
console.log(Array.from(arrayObj));
console.log([].slice.call(arrayObj));

// NodeList集合同样也可以转换为数组,函数中的argument同样也行,然后对它们使用forEach()方法
// 只要有Iterator接口的数据结构,Array.from()都可以把他们转化为数组

// 字符串
console.log(Array.from('jiajia'));
// set
console.log(Array.from(new Set(['j', 'j', 'j']))); // set 中重复的会覆盖掉,即只有一个j

// Array.from(要转换的对象, 对对象中的每个值处理的函数)

/**
* Array.of()将一组值转换为数组
*/
console.log(Array.of(1,2,3));
// 此方法可以代替new Array()了
function ArrayOf() {
  return [].slice.call(arguments);
}
console.log(ArrayOf(2,3,4));

// 数组实例的copyWithin()方法
// Array.prototype.copyWithin(traget(要替换元素开始位置), start(该位置开始读取元素), end = array.length(结束读取元素,默认为数组的长度));
console.log([1, 2, 3, 4, 5].copyWithin(1, 3));

// 数组实例的find()和findIndex()方法
// find()返回第一个找的元素, findIndex()返回第一个找到的元素的位置
var a = [1, -5, 3].find((n) => n < 0);
console.log(a);
var b = [1, -5, 3].find((currentValue, currentIndex, arr) => currentValue < 0);
console.log(b);
// findIndex()方法和find()类似
// fill(要填充的值, 起始位置, 结束位置)方法:用指定的值填充数组,初始化一个数组特别好用,
console.log(['a', 'a', 'a'].fill(8));

// ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for(var index of ['a', 'b', 'c'].keys()){
  console.log(index);
}
// ?????
// for (var elem of ['a', 'b'].values()) {
//   console.log(elem);
// }

for (var entries of ['a', 'b', 'c'].entries()) {
  console.log(entries);
}

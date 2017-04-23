function Calc(s) {
  var sArray = s.split('');
  var array = [];
  var item;
  var c = [];
  var result;
  while (item = sArray.shift()) {
    if (item != '+' && item != '-' && item != '*') {
      array.push(parseInt(item));
    } else {
      // var result = calculate(item, array.pop(), array.pop());
     c.push(item);
    }
  }
  for(var i = 0; i < c.length; i++) {
    console.log((c.shift()));
    result = calculate(c.shift(), array.shift(), array.shift());
    console.log(result);
    array.push(result);

  }
  return result;
}
function calculate(o, a, b) {
  switch (o) {
    case '+':
      return b + a;
    case '-':
      return b - a;
    case '*':
      return b * a;
  }
}
console.log(Calc('3+5*2'));

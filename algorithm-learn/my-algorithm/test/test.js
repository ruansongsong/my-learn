function stringToLowerCase(s) {
  var sArray = s.split('');
  var result = [];
  sArray.forEach(function(item, index, array) {
    if((item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z')) {
      result.push(item.toLowerCase());
    }
  })
  return result.join('');
}

var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
rl.on('line', function(line){
   console.log(stringToLowerCase(line));
});

// var s = 'abc';
// console.log(s.split(''));

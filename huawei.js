var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var result = [];
rl.on('line', function(line){
  var sArray = line.split(' ');
  var w = sArray[0],
      x = sArray[1],
      y = sArray[2],
      z = sArray[3];
  for(var i = w; i <= x; i++)
    for(var j = y; j <= z; j++)
      result.push(i/j);
  result = new Set(result);
  console.log(result.size);
});
rl.on('close', function() {

})

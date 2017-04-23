// 分治
function partition(array, left, right) {
  var cmp = array[right - 1];
  var minEnd = left;
  var maxEnd;
  for(maxEnd = left; maxEnd < right - 1; maxEnd++){
    if(compare(array[maxEnd], cmp) < 0) {
      swap(array, maxEnd, minEnd);
      minEnd++;
    }
  }
  swap(array, minEnd, right - 1);
  // 返回分割点
  return minEnd;
}
function quickSort(array, left, right) {
  if(left < right) {
    var p = partition(array, left, right);
    quickSort(array, left, p);
    quickSort(array, p + 1, right);
  }
  return array;
}
function compare(a, b) {
  return a - b;
}
function swap(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp; 
}

var n = [1, 3, 2, 10, 6];
console.log(quickSort(n, 0, 5));

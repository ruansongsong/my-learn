function insertSort(array) {
  var j, current;
  for(var i = 1; i < array.length; i++) {
    current = array[i];
    j = i;
    while(j > 0 && (array[j - 1] > array[j])) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
}
var a = [1, 3, 2, 10, 6];
insertSort(a);
console.log(a);

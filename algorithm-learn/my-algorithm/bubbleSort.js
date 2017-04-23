function bubbleSort(array) {
  for(var i = 0; i < array.length - 1; i++) {
    for(var j = 0; j< array.length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}
var a = [1, 3, 2, 10, 6];
bubbleSort(a);
console.log(a);

// 递归版
function binarySearch(array, left, right, data) {
  var mid = Math.floor((left + right) / 2);
  if(array[mid] == data) {
    return mid;
  } else if (array[mid] > data) {
    return binarySearch(array, 0, mid, data);
  } else {
    return binarySearch(array, mid + 1, right, data);
  }
  return -1;
}
var a = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(a, 0, 6, 7));

// 非递归版
function binarySearch2(array, left, right, data) {
  var mid;
  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if(array[mid] > data) {
      right = mid;
    } else if (array[mid] < data) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(binarySearch2(a, 0, 6, 7));

function binarySearch(arr, item) {

  let low = 0;
  let top = arr.length - 1;

  while(low <= top) {
    let mid = Math.floor((low + top) / 2);
    let guess = arr[mid];
    
    if(guess === item) {
      return mid;
    }
    if(guess > item) {
      top = mid - 1;
    }
    else {
      low = mid + 1;
    }
    
  }
  return null;
}

module.exports = binarySearch;

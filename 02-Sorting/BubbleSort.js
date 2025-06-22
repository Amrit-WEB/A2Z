function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > a[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

//Time Complexity : O(n^2)
//Space Complexity : O(1)

let a = [5, 3, 9, 0, 0, 2, 4, 5, 6, 1, 7];
console.log(bubbleSort(a));

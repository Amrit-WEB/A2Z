function selectionSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    //Finding minimum value in each iteration
    for (let j = i + 1; j < a.length; j++) {
      if (a[minIndex] > a[j]) {
        minIndex = j;
      }
    }

    //Swap the Values
    let temp = a[minIndex];
    a[minIndex] = a[i];
    a[i] = temp;
  }
  return a;
}

//Time Complexity : O(n^2)
//Space Complexity : O(1)

let arr = [3, 4, 2, 1, 0];
console.log(selectionSort(arr));

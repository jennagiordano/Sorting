function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf = wholeArray.splice(0, wholeArray.length / 2);
  let secondHalf = wholeArray;

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let length = firstHalf.length + secondHalf.length;

  let mergedArray = [];
  let firstHalfPointer = 0;
  let secondHalfPointer = 0;

  for (let i = 0; i < length; i++) {
    if (
      firstHalf[firstHalfPointer] < secondHalf[secondHalfPointer] ||
      secondHalf[secondHalfPointer] === undefined
    ) {
      mergedArray.push(firstHalf[firstHalfPointer]);
      firstHalfPointer++;
    } else {
      mergedArray.push(secondHalf[secondHalfPointer]);
      secondHalfPointer++;
    }
  }

  return mergedArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let [leftArr, rightArr] = split(array);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

console.log("result of merge Sort: ", mergeSort([2, 5, 1, 3, 7, 4, 6, 8, 9]));

console.log("result of merge Sort: ", mergeSort([2, 5, 1, 3, 7, 4, 6, 8, 9]));

console.log("result of merge Sort: ", mergeSort([2, 5, 1, 3, 7, 4, 6, 8, 9]));

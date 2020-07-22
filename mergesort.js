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
  //base case array . length === 1, return arr

  //left , right = split(array)
  //let array = merge(left, right)
  //return mergeSort(array)

  if (array.length === 1) {
    return array;
  } else {
    let [left, right] = split(array);
    console.log("left: ", left);
    console.log("right: ", right);
    array = merge(left, right);
    console.log("array: ", array);
    //return mergeSort(array);
  }
  // let sortedArray = [];
  // if (sortedArray.length === array.length) {
  //   return sortedArray;
  // } else {
  //   let firstHalf = [];
  //   let secondHalf = [];

  //   while (sortedArray.length === 0) {
  //     while (firstHalf.length > 1) {
  //       firstHalf, (secondHalf = split(array));
  //     }
  //     sortedArray.push(merge(firstHalf, secondHalf));
  //   }
  // }
  // console.log(sortedArray);
}

//mergeSort([2, 6, 5, 4, 3]);

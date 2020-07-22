const sorter = {};

let counter = 0;
sorter.bubbleSort = function (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      //if array[i] is less than array[j] we want to keep it in the same spot else we have to move it back

      if (array[j] > array[j + 1]) {
        counter++;
        this.swap(array, j);
      }
    }
  }
  return array;
};
sorter.swap = function (array, index) {
  let temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
};

function bubbleSort(arr) {
  let n = arr.length;
  let flag = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!flag) break;
  }

  return arr;
}

let numbers = [5, 3, 8, 4, 2];

console.log(bubbleSort(numbers));

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j].age < arr[minIndex].age) {
        minIndex = j;
      }
    }

    // swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

const persons = [
  { name: 'A', age: 20 },
  { name: 'B', age: 10 },
  { name: 'C', age: 20 },
  { name: 'D', age: 5 },
];

console.log(selectionSort(persons));

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

module.exports = insertionSort;

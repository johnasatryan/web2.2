// 10 80 90 60 30 20
// 6 3 5 4 2 1 9
// 4 6 7 10 16 12 13 14

const arr = [10, 16, 8, 12, 15, 6, 3, 9, 5];

// pivot is 10
// i starting from pivot 
// j starting from the high

/* 
We keep two pointers:
  i → moves from left to right
  j → moves from right to left
Rules:
  Move i while arr[i] <= pivot
  Move j while arr[j] > pivot

  If i < j → swap arr[i] and arr[j]

When i >= j → stop and swap pivot with arr[j]

At the end:
  Pivot is in its correct position
  Left side ≤ pivot
*/

function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low + 1;
  let j = high;

  while (i <= j) {
    while (i <= high && arr[i] <= pivot) i++;
    while (j >= low && arr[j] > pivot) j--;

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++; 
      j--; 
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const p = partition(arr, low, high);
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
  return arr;
}

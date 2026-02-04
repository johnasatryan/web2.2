/* 

Step 1

Where are we? i = 0, j = 0

What are we comparing? compare arr[0] and arr[1] → 5 and 3

Condition result? true/false condition: 5 > 3 ✅ true

action: swap

array becomes: [3, 5, 8, 4]
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}

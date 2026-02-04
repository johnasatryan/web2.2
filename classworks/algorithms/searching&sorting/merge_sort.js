function merge(arr, left, mid, right) {
    const size1 = mid - left + 1;
    const size2 = right - mid;

    const leftArr = new Array(size1);
    const rightArr = new Array(size2);

    // copy data
    for (let i = 0; i < size1; i++) {
        leftArr[i] = arr[left + i];
    }

    for (let j = 0; j < size2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    // merge back
    while (i < size1 && j < size2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // remaining elements
    while (i < size1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < size2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

const arr = [38, 27, 43, 3, 9, 82, 10];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

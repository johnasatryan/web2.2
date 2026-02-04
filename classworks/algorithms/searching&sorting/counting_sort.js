function countingSort(arr) {
    if (arr.length === 0) return arr;

    // Step 1: find max value
    let max = Math.max(...arr);

    // Step 2: create count array
    let count = new Array(max + 1).fill(0);

    // Step 3: count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Step 4: rebuild sorted array
    let sorted = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            sorted.push(i);
            count[i]--;
        }
    }

    return sorted;
}

arr = [4, 2, 2, 8, 0, 3, 3, 1]



function countingSortMinMax(arr) {
    if (arr.length === 0) return arr;

    // Step 1: find min and max
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    // Step 2: range
    let range = max - min + 1;

    // Step 3: count array
    let count = new Array(range).fill(0);

    // Step 4: count frequencies
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Step 5: rebuild sorted array
    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index++] = i + min;
            count[i]--;
        }
    }

    return arr;
}

// cumulative count
function countingSortCumulativeMinMax(arr) {
    if (arr.length === 0) return arr;

    // Step 1: find min and max
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    // Step 2: range
    let range = max - min + 1;

    // Step 3: frequency array
    let count = new Array(range).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Step 4: cumulative count
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 5: output array
    let output = new Array(arr.length);

    // Step 6: place elements (right to left)
    for (let i = arr.length - 1; i >= 0; i--) {
        let value = arr[i];
        let idx = value - min;

        let pos = count[idx] - 1;
        output[pos] = value;

        count[idx]--;
    }

    return output;
}





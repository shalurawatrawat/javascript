function quickSort(arr) {
    // Base case: Arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the pivot (last element of the array)
    let pivot = arr[arr.length - 1];

    // Partition the array into two parts
    let left = []; // Elements smaller than the pivot
    let right = []; // Elements larger than or equal to the pivot

    for (let i = 0; i < arr.length - 1; i++) { // Exclude the pivot
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
}
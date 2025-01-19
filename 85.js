let array = [10, 7, 8, 9, 1, 5]; // Example array

// Helper to merge two sorted arrays
let left = [10, 7, 8];
let right = [9, 1, 5];
let sortedArray = [];

// Merge two sorted arrays
let i = 0, j = 0;
while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
        sortedArray.push(left[i]);
        i++;
    } else {
        sortedArray.push(right[j]);
        j++;
    }
}

// If there are remaining elements in left or right, add them
while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
}
while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
}

console.log("Merged Array:", sortedArray);
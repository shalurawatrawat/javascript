et nums1 = [1, 3];
let nums2 = [2];

let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

let len = mergedArray.length;
let median;

if (len % 2 === 0) {
    median = (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
} else {
    median = mergedArray[Math.floor(len / 2)];
}

console.log(median);
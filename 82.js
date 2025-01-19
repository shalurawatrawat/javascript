let a = [1, 3];
let b = [2,5];
let temp = [];

for (let i = 0; i < a.length; i++) {
    temp[i] = a[i];
}
for (let j = 0; j < b.length; j++) {
    temp[a.length + j] = b[j];
}

temp.sort();
let n = temp.length;
let median;
if (n % 2 == 1) {
    median = temp[Math.floor(n / 2)]; 
} else {
    median = (temp[n / 2 - 1] + temp[n / 2]) / 2;
}
console.log(median);

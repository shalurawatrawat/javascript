let n = 5;
let a = [];

for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            a[i][j] = 1; 
        } else {
            a[i][j] = a[i - 1][j - 1] + a[i - 1][j]; 
        }
    }
}
let result = a.map(row => row.join(" ")).join(", ");
console.log(result);
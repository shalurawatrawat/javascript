var a = 6, b = 8; 
var x = a, y = b;

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
console.log("GCD =", x);
var lcm = (a * b) / x;
console.log("LCM =", lcm);
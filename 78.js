function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

const num1 = 48;
const num2 = 18;
console.log(`The GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`); // Output: The GCD of 48 and 18 is 6

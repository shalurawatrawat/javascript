
let Number1 = 8, Number2 = 16;


let gcd = (Number1, Number2) => Number2 === 0 ? Number1 : gcd(Number2, Number1 % Number2);

// Simplify the ratio
let divisor = gcd(Number1, Number2);
let simplifiedNumber1 = Number1 / divisor;
let simplifiedNumber2 = Number2 / divisor;

// Display the ratio
console.log(`${simplifiedNumber1}:${simplifiedNumber2}`);

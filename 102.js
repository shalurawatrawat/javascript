let str = "The price is 120 dollars and 50 cents.";
let numbers = [];
let currentNumber = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        currentNumber += str[i];
    } else {
        if (currentNumber !== "") {
            numbers.push(currentNumber);
            currentNumber = ""; 
        }
    }
}

if (currentNumber !== "") {
    numbers.push(currentNumber);
}
console.log("Extracted numbers:", numbers);
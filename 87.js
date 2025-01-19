let number = 197; 
let digits = number.toString().split('').map(Number); // Number ke digits nikalo
let sequence = [...digits]; 
while (true) {
    let sum = 0;
    for (let i = sequence.length - digits.length; i < sequence.length; i++) {
        sum += sequence[i];
    }
    if (sum === number) {
        console.log(`${number} Keith number hai.`);
        break;
    }
    if (sum > number) {
        console.log(`${number} Keith number nahi hai.`);
        break;
    }
    sequence.push(sum);
}
function singleDigit(n) {
    while (n >= 10) { 
        let sum = 0;
        while (n > 0) {
            sum += n % 10; 
            n = parseInt(n / 10);
        }
        n = sum;
    }
    return n;
}               

const n = 9875;
console.log(singleDigit(n));
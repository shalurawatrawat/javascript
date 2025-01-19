let number = 25; 
let square = number * number;

let numberStr = number.toString();
let squareStr = square.toString();

if (squareStr.endsWith(numberStr)) {
    console.log(`is an Automorphic number.`+number);
} else {
    console.log(number+`is not an Automorphic number.`);
}
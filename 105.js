let str = "Hello, welcome to the JavaScript world!";
let substring = "the";

let index = str.indexOf(substring);

if (index !== -1) {
  console.log(`The substring  is found at index ${index}.`);
} else {
  console.log(`The substring "${substring}" is not found.`);
}
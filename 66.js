let str1 = "DINU";
let str2 = "DINU";
let l1 = str1.length;
let l2 = str2.length;

let sortedStr1 = str1.split("").sort().join("");
let sortedStr2 = str2.split("").sort().join("");

if (l1 === l2) {
    if (sortedStr1 === sortedStr2) {
        console.log("Strings are equal");
    } else {
        console.log("Strings are not equal");
    }
} 
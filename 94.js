let str = 'capitalize the first letter of each word';
let str2 = str.split(' '); 
let convertStr = '';



for (let i = 0; i < str2.length; i++) {
    convertStr += str2[i][0].toUpperCase() + str2[i].slice(1);
    if (i < str2.length - 1) {
        convertStr += ' '; 
    }
}
console.log(convertStr);
let camelcase = "RenuRawat";
let snakecase = "";

for (let i = 0; i < camelcase.length; i++) {
    if (camelcase[i] === camelcase[i].toUpperCase()) {
        if (i !== 0) {
            snakecase += '_' + camelcase[i].toLowerCase();
        } else {
            snakecase += camelcase[i].toLowerCase();
        }
    } else {
        snakecase += camelcase[i];
    }
}

console.log(snakecase);


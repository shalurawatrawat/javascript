
function fact(n){
    if(n<1){
        return 1;
    }
    return n * fact (n-1);
}
let  n=5;
let result =fact(n);
console.log(result);


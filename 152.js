let n=8;
let divadiNumber=0;
let res=div(n,divadiNumber);
console.log(res);
function div(n,divadiNumber){
    if(divadiNumber==0){
        throw new Error('divisor is zero.'); 
    }
    return n/divadiNumber;
}
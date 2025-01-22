let fact=1;
async function factoreal(n){
    if(n>0){
        fact=fact*n;
        factoreal(n-1);
    }
    return fact;
}
let n=5;
let res=await factoreal(n);
console.log(res);
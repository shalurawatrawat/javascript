function nth_Position(a,r,n){
    return a*(r**(n-1));
}
let a=2,r=3,n=4;
let result=nth_Position(a,r,n);
console.log("Nth Position is : "+result);
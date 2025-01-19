function GCD(a,b){
    if(b==0){
        return a;
    }
    return GCD(b,a%b);
}
let a=48,b=18;
let result=GCD(a,b);
console.log("GCD is : "+result);
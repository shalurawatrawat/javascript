let a=0,b=1,sum=0,n=5;
console.log(a);
console.log(b);

 fibona (n);
function fibona(n){
    if(n>0){
        sum=a+b;
        console.log(sum);
        a=b;
        b=sum;

        fibona(n-1);
    }
}
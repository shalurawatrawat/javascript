let n=10;
let a=0,b=1;
let sum=0;
 if(n>=1){

    console.log(a);
 }
 if(n>=2){
    console.log(b);
 }
 for(i=3;i<=n;i++){
     sum= a+b;
    console.log(sum);
 
       a=b;
        b=sum;
 }
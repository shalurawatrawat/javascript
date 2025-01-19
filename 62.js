let n=45,temp,sqr;
let a=0,b=0,c=1,sum=0;
sqr=n*n;
temp=n;
while(temp>0){
    c=c*10;
    temp=parseInt(temp/10);
}
a=parseInt(sqr%c);
b=parseInt(sqr/c);
sum=a+b;
if(sum==n){
    console.log("Kaprekar number");
}
else{
    console.log("not Kaprekar number");
}


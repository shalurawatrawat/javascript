let n=18;
let sumofdigit=0;
let rem;
while(n>0){
    rem=(n%10);
    sumofdigit=sumofdigit+rem;
    n=(n/10);
}
if(n%sumofdigit==0){
    console.log("Divisble");
}
else{
    console.log("not Divisble");
}
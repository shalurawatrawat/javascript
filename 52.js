let n=1234;
let sumofdigit=0;
let rem;
while(n>0){
    rem=parseInt(n%10);
    sumofdigit=sumofdigit+rem;
    n=parseInt(n/10);
}
console.log(sumofdigit);
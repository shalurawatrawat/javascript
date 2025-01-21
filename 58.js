var num=19;
var rem;
var sum;
while(true){
    sum=0;
    while(num>0){
        rem=num%10;
        sum=(rem*rem)+sum;
        num=num%10;

    }
    if(sum==1){
        console.log("happy num");
    } 
    if(sum==4){
        console.log("not happy");
    }
    num=sum;
}
var Number=153;
let sum=0;
let temp = Number;
while(temp>0){
    temp=Number%10;//3
    sum=temp*temp*temp;//27+125+1
    Number=Number/10;
}
    if(sum===Number){
        console.log("armstrong number");
    }else{
        console.log("not armstrong number");
    }



let number=145;
let fact=1,temp=number,sum=0,digit;
 while(temp>0){
     digit=temp%10;
     
     for(let i=1;i<=digit;i++){
         fact*=digit;
     }
     sum+=fact;
     temp=temp/10;
 }
 if(sum==number){
     console.log("strong number");
 }else{
    console.log(" not strong number"); 
 }

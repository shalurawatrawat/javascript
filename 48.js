
 let Number=28,sum=0;
for(let i=1;i<Number;i++){
    if(Number%i==0){
     sum=sum+i;
    }
}
if(sum==Number){
        console.log(" perfect Number="+Number);
    }else{
        console.log(" not a  perfect Number="+Number);
    }

let start=1,end=20;
for(let num=start;num<=end;num++){
    let prime=0;
    for(let j=1;j<=num;j++){
        if(num%j==0){
            prime++;
        }
    }
    if(prime==2){
        console.log(num);
    }
}
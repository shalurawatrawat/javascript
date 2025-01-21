for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        if((j+i)%2==0){
            console.log('0');
        }else{
            console.log('1');
        }
    }
    document.write('<br>');
}
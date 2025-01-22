for(let i=1;i<=4;i++){
    for(let j=1;j<=7;j++){
         if(j-i==0||i+j==8){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}
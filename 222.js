for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==1||j==5||i==2&&j>=2&&j<=2||i==3&&j>=3&&j<=3||i==2&&j>=4&&j<=4){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}
for(let i=1;i<=9;i++){
    for(let j=1;j<=6;j++){
         if(i==1&&j>=2&&j<=5||i==2&&j<=6&&j>=6||j==1&&i>=2&&i<=4||i==5&&j>=2&&j<=4
        || i==6&&j<=5&&j>=5||i==7&&j<=5&&j>=5||i==8&&j>=2&&j<=4||i==7&&j<=1&&j>=1){
            document.write('*');
        }else{
            document.write('&nbsp ');
        }
    }
    document.write('<br>');
}
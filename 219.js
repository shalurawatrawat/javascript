for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(j==5||j==1&&i>=4||i==5&&j<=3&&j>=3){
            document.write("*");
        }else{
            document.write("&nbsp ");
        }
    }
    document.write("<br>");
}
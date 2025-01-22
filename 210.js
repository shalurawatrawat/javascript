for(let i=1;i<=5;i++){
    for(let j=1;j<=7;j++){
        if(i+j==5||j-i==3||i==3&&j<=4&&j>=4){
            document.write("*");
        }else{
            document.write("&nbsp ");
        }
    }
    document.write("<br>");
}
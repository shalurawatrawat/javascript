for(let i=1;i<=9;i++){
    for(let j=1;j<=9;j++){
        if(i==1||i==j||j==10-i||i==9){
            document.write("*");
        }else{
            document.write("&nbsp ");
        }
    }
    document.write("<br>");
}
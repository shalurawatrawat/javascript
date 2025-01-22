let rows = 5;
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 6; j++) {
        if(((i==1||i==5)&&(j<=4 && j>1))||
        (i>=3 && (j==4||j==6))||
        ((i==3&&j==5)||((i>1 && i<5)&&j==1))){
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row); 
}

 let s=1;
 let st=9;
for(let i=1;i<=5;i++){
  for(let j=1;j<=s;j++){
      document.write(" &nbsp ");
  }
        s++;
  
  for(let j=1;j<=st;j++){
    document.write("*");
     
  }
  st-=2;
  document.write("<br>");
}

  s=4;
  st=3;
for(let i=1;i<=5;i++){
  for(let j=1;j<=s;j++){
 document.write(" &nbsp ");
  }
        s--;
  
  for(let j=1;j<=st;j++){
    document.write("*");
     
  }
  st+=2;
  document.write("<br>");
}

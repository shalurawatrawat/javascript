let n=10;
let binary="";
while(n>1){
    binary=parseInt(n%2)+binary;
    n=parseInt(n/2);
}
binary=1+binary;
console.log(binary);
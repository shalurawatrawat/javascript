var num=123;
var rev ,sum=0;
while(num>0){
    rev=num%10
sum=(rev*rev)+sum;
num = Math.floor(num/10);

}
console.log(sum);


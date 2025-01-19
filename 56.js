let num1=24,num2=36;
let temp;

while(num2>0){
  temp=num2;
  num2=num1%num2;
  num1=temp;

}
console.log(num1);
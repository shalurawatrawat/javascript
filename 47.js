let num=141;
let rem,sum=0;
let orignalvalue=num;

while(num>0){
    rem=parseInt(num%10);
    sum=parseInt((sum*10)+rem);
    num=parseInt(num/10);
}
if(orignalvalue==sum){
    console.log('Palindrome');
}else{
    console.log('not palindrome');
}
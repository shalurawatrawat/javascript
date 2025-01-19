let a=[1,2,3,4];
let medain;
let n=a.length;
if(n%2==1){
    medain=a[(n/2)];
}else{
    medain=a[(n/2)-1+(n/2)]/2;
}
console.log(medain);
let a=[1,2,3,4,5,6];
let temp;
for(let i=a.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}
console.log(a);
let a=[1,3,4,5,3];
let temp=0;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]<a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(a[1]);
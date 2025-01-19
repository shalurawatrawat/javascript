let a=[1,1,2,2,3];
let newArray=[];
let j=0;
for(let i=0;i<a.length-1;i++){
    if(a[i]!=a[i+1]){
        newArray[j]=a[i];
        j++;
    }
}
newArray[j]=a[a.length-1];
for(let k=0;k<j;k++){
    console.log(newArray[k]);
}


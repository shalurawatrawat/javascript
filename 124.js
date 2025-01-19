let a=[1,2,3,4,5,6,7,8,9];
let target=9;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]+a[j]==target){
            console.log(`${a[i]}+${a[j]}=${target}`);  
        }
    }
}
let a=[1,2,3,4,5];
let b=[6,7,4,1];
let c=[];
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j] && !c.includes(a[i])){
            console.log(a[i]);
            c.push(a[i]);
        }
    }
}
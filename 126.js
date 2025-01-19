let a=[1,2,3,4,5];
let b=[1,2,3];
let result=[];

for(let i=0;i<a.length;i++){
    if(!b.includes(a[i])){
        result.push(a[i]);
    }
}
console.log(result);
let a=[1,2,3,4,5,6];
let size=2;
let result=[];
for(let i=0;i<a.length;i+=size){
    result.push(a.slice(i,i+size));
}
console.log(result)
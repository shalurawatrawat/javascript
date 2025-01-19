let a=[1,2,3,4,5];
let b=[6,7,4,1];
let arr=a.concat(b);
let c=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]!=arr[j] && !c.includes(arr[i])){
            console.log(arr[i]);
            c.push(arr[i]);
        }
    }
}

let a=[5, 4, 3, 2, 1];
let s=0;
let e=a.length-1;
let temp;
while(s<e){
    temp=a[s];
    a[s]=a[e];
    a[e]=temp;
    s++;
    e--;
}
console.log(a);
function square(n){
    if(typeof n !="number"){
        throw new Error('Input must be a number');
    }
    return n*n;
}
try{
let n="5";
let res=square(n);
console.log(res);
}catch(e){
    console.log(e.message);
}
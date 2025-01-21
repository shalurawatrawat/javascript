function SquarerRoot(num){
    if(num<0){
        throw new Error('Number should not have nagitive number');
    }
    return Math.sqrt(num);
}
try{
let num=25;
let res= SquarerRoot(num);
console.log(res);
}catch(e){
    console.log(e.message);
}
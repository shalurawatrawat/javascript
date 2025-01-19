let str1='shalu';
let result=reverse(str1);
console.log(result);

function reverse(str){
    let str2='';


    for(let i=str1.length-1;i>=0;i--){

        str2=str2+str1.charAt(i);
    }
    return str2;
}
function checkInput(input){
    if(input==''){
        throw new Error('input should not be empty')
    }
    return true;
}
try{
let input='';
console.log(checkInput(input));
}catch(e){
    console.log(e.message);
}
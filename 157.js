function Converter(str){
    if(typeof str !=String){
        throw new Error('Enter only string');
    }
    return str.upperCase();
}
try{
let str='sanju';
Converter(str);
}catch(e){
    console.log(e.message);
}
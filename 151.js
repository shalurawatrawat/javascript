let json='{"name": "Sanju", "class":12 }';
cheackString(json);
function cheackString(str){
    try{
        let data=JSON.parse(str);
        console.log('yes is json:'+data);
    }catch(e){
        console.error(e);
    }
}
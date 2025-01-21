function callbackFuntion(callback){
    setTimeout(()=>{
        callback();
    },2000);
}
callbackFuntion(()=>{
    console.log('call back call');
})
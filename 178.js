function callFunction(call){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(call){
                resolve('Promise resolved')
            }
            else{
                reject('Promise rejected')
            }
        },3000);
    });
}
callFunction(true).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

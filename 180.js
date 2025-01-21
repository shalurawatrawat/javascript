function myFunction(num){
    if(num<0){
        throw new Error('number is nagitive');
    }
    return new Promise((resolve,reject)=>{
        if(num>0){
            resolve('promise is fulfild');
        }else{
            reject('promise is reject');
        }
    })
}
try{
    let n=1;
    myFunction(n).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
}catch(e){
    console.log(e.message);
}

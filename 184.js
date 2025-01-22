function fetchDataFromAPI(apiName,second){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.2){
                resolve(`facth data from this api ${apiName}`);
            }else{
                reject(`fatch faild from this api ${apiName}`);
            }
        },second);
    });
}
let p1=fetchDataFromAPI('neha',1000);
let p2=fetchDataFromAPI('neha2',2000);
let p3=fetchDataFromAPI('neha3',3000)

Promise.all([p1,p2,p3]).then(data=>{
    console.log(data)
}).catch(e=>{
    console.log(e);
})
async function order(productName){
    setTimeout(()=>{
        console.log(`order place succesfully ${productName}`);
    },2000);
}

let product='infinix gt 20 pro';
await order(product);
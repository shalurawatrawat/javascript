function counter(second){
    if(second>=0){
    console.log(`time left ${second}`);
setTimeout(()=>{ 
    counter(second-1);
},1000);
    }else{
    console.log('time is complete...');
    }
}
let second=5;
counter(second);
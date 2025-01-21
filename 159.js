function checkArray(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            throw new Error('Array is not sort');
        }
    }
    return 'Array is sorted';
}
try{
    let arr=[1,2,7,4,5];
    console.log(checkArray(arr));
}catch(e){
    console.log(e.message);
}

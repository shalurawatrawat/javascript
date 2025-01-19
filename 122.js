function compact(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  let a=[1,2,3,4,5,6,3,4];
  let re=compact(a);
  console.log(re);
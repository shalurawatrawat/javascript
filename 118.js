function isSubset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }
  
  let a=[1,2,3];
  let b=[1,2,3,4,5];
  
  let re=isSubset(a,b);
  if(re){
      console.log('isSubset');
  }else{
      console.log('not subset');
  }

  
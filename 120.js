function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
  }
  let a=[1,3,4,5,3];
  let re=flatten(a);
  console.log(re);
  